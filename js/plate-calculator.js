import { t } from './translations.js';
import { PLATES, PLATE_COLORS, getBarOptions, unitState } from './constants.js';

// ========== Plate Calculator ==========
export function renderCalcPlateCheckboxes() {
    const container = document.getElementById('calc-plate-checkboxes');
    const unit = unitState.calculator;
    const plates = PLATES[unit];
    const colors = PLATE_COLORS[unit];

    container.innerHTML = plates.map(p => `
        <label class="plate-checkbox">
            <input type="checkbox" value="${p}" checked>
            <span class="plate-color-indicator" style="background: ${colors[p]};"></span>
            <span>${p}</span>
        </label>
    `).join('');

    // Add change listeners for auto-recalculation
    container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const targetWeight = parseFloat(document.getElementById('target-weight').value);
            // Only recalculate if there's a valid weight and result is visible
            if (!isNaN(targetWeight) && targetWeight > 0) {
                handleCalculate();
            }
        });
    });
}

export function updateCalcBarSelect() {
    const select = document.getElementById('bar-type');
    const bars = getBarOptions(unitState.calculator);

    select.innerHTML = bars.map(b =>
        `<option value="${b.value}">${b.label}</option>`
    ).join('');
}

export function updateCalcUnitLabels() {
    const unit = unitState.calculator;
    document.querySelectorAll('#plate-calculator .calc-unit').forEach(el => {
        el.textContent = unit;
    });
}

function getSelectedPlates() {
    const checkboxes = document.querySelectorAll('#calc-plate-checkboxes input:checked');
    return Array.from(checkboxes)
        .map(cb => parseFloat(cb.value))
        .sort((a, b) => b - a);
}

export function calculatePlates(targetWeight, barWeight, availablePlates, unit) {
    const weightToLoad = targetWeight - barWeight;

    if (weightToLoad < 0) {
        return { error: t('errorMinWeight').replace('{weight}', barWeight).replace('{unit}', unit) };
    }

    if (weightToLoad === 0) {
        return { plates: [], perSide: 0 };
    }

    const perSide = weightToLoad / 2;

    if (availablePlates.length === 0) {
        return { error: t('errorSelectPlate') };
    }

    const plates = [];
    let remaining = perSide;

    for (const plate of availablePlates) {
        const count = Math.floor(remaining / plate);
        if (count > 0) {
            plates.push({ weight: plate, count });
            remaining = Math.round((remaining - (plate * count)) * 100) / 100;
        }
    }

    if (remaining > 0) {
        return { error: t('errorCannotMake').replace('{weight}', targetWeight).replace('{unit}', unit) };
    }

    return { plates, perSide };
}

function renderPlatesList(plates, unit) {
    const container = document.getElementById('plates-list');

    if (plates.length === 0) {
        container.innerHTML = `<p>${t('calcNoPlates')}</p>`;
        return;
    }

    container.innerHTML = plates.map(p => `
        <div class="plate-tag">
            ${p.weight} ${unit}
            <span class="count">×${p.count}</span>
        </div>
    `).join('');
}

export function renderBarbellVisual(plates, containerId, unit) {
    const container = document.getElementById(containerId);

    if (!plates || plates.length === 0) {
        container.innerHTML = `
            <div class="bar"></div>
            <div class="bar bar-center"></div>
            <div class="bar"></div>
        `;
        return;
    }

    const leftPlates = [...plates].reverse().flatMap(p =>
        Array(p.count).fill(`<div class="plate plate-${unit}-${p.weight}">${p.weight}</div>`)
    ).join('');

    const rightPlates = plates.flatMap(p =>
        Array(p.count).fill(`<div class="plate plate-${unit}-${p.weight}">${p.weight}</div>`)
    ).join('');

    container.innerHTML = `
        <div class="bar"></div>
        ${leftPlates}
        <div class="bar bar-center"></div>
        ${rightPlates}
        <div class="bar"></div>
    `;
}

export function handleCalculate() {
    const targetWeight = parseFloat(document.getElementById('target-weight').value);
    const barWeight = parseInt(document.getElementById('bar-type').value);
    const availablePlates = getSelectedPlates();
    const unit = unitState.calculator;

    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    if (isNaN(targetWeight) || targetWeight <= 0) {
        errorDiv.textContent = t('errorValidWeight');
        errorDiv.classList.remove('hidden');
        return;
    }

    const result = calculatePlates(targetWeight, barWeight, availablePlates, unit);

    if (result.error) {
        errorDiv.textContent = result.error;
        errorDiv.classList.remove('hidden');
        return;
    }

    renderPlatesList(result.plates, unit);
    renderBarbellVisual(result.plates, 'barbell-visual', unit);
    resultDiv.classList.remove('hidden');
}

export function resetPlateCalculator() {
    document.getElementById('target-weight').value = '';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('error').classList.add('hidden');
}

export function initPlateCalculator() {
    // Unit toggle
    document.querySelectorAll('#plate-calculator .unit-toggle .unit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const unit = btn.dataset.unit;
            if (unit === unitState.calculator) return;

            unitState.calculator = unit;

            // Update toggle buttons
            document.querySelectorAll('#plate-calculator .unit-toggle .unit-btn').forEach(b =>
                b.classList.remove('active'));
            btn.classList.add('active');

            // Update UI
            renderCalcPlateCheckboxes();
            updateCalcBarSelect();
            updateCalcUnitLabels();

            // Clear results
            document.getElementById('result').classList.add('hidden');
            document.getElementById('error').classList.add('hidden');
            document.getElementById('target-weight').value = '';
        });
    });

    document.getElementById('calculate-btn').addEventListener('click', handleCalculate);

    document.getElementById('target-weight').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleCalculate();
    });

    // Initialize
    renderCalcPlateCheckboxes();
    updateCalcBarSelect();

    // Auto-recalculate when bar type changes
    document.getElementById('bar-type').addEventListener('change', () => {
        const targetWeight = parseFloat(document.getElementById('target-weight').value);
        if (!isNaN(targetWeight) && targetWeight > 0) {
            handleCalculate();
        }
    });
}
