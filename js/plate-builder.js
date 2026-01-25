import { t } from './translations.js';
import { PLATES, getBarOptions, unitState } from './constants.js';
import { renderBarbellVisual } from './plate-calculator.js';

// ========== Plate Builder ==========
let builderPlates = [];

function renderBuilderPlateButtons() {
    const container = document.getElementById('builder-plate-buttons');
    const plates = PLATES[unitState.builder];

    container.innerHTML = plates.map(p =>
        `<button class="plate-btn" data-weight="${p}">+${p}</button>`
    ).join('');

    // Add click handlers
    container.querySelectorAll('.plate-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const weight = parseFloat(btn.dataset.weight);
            builderPlates.push(weight);
            builderPlates.sort((a, b) => b - a);
            updateBuilderDisplay();
        });
    });
}

export function updateBuilderBarSelect() {
    const select = document.getElementById('builder-bar-type');
    const bars = getBarOptions(unitState.builder);

    select.innerHTML = bars.map(b =>
        `<option value="${b.value}">${b.label}</option>`
    ).join('');
}

function getBuilderBarWeight() {
    return parseInt(document.getElementById('builder-bar-type').value);
}

function calculateBuilderTotal() {
    const barWeight = getBuilderBarWeight();
    const platesWeight = builderPlates.reduce((sum, w) => sum + w, 0) * 2;
    return barWeight + platesWeight;
}

function groupPlatesForDisplay(plates, unit) {
    const grouped = [];
    const counts = {};
    const allPlates = PLATES[unit];

    plates.forEach(w => {
        counts[w] = (counts[w] || 0) + 1;
    });

    allPlates.forEach(w => {
        if (counts[w]) {
            grouped.push({ weight: w, count: counts[w] });
        }
    });

    return grouped;
}

function updateBuilderDisplay() {
    const unit = unitState.builder;
    const total = calculateBuilderTotal();
    document.getElementById('builder-total').textContent = `${total} ${unit}`;

    const listContainer = document.getElementById('builder-plates-list');
    const grouped = groupPlatesForDisplay(builderPlates, unit);

    if (grouped.length === 0) {
        listContainer.innerHTML = `<span style="color: #666;">${t('builderNoPlates')}</span>`;
    } else {
        listContainer.innerHTML = grouped.map(p => `
            <div class="plate-tag clickable" data-weight="${p.weight}">
                ${p.weight} ${unit}
                <span class="count">×${p.count}</span>
            </div>
        `).join('');

        listContainer.querySelectorAll('.plate-tag.clickable').forEach(tag => {
            tag.addEventListener('click', () => {
                const weight = parseFloat(tag.dataset.weight);
                const index = builderPlates.indexOf(weight);
                if (index !== -1) {
                    builderPlates.splice(index, 1);
                    updateBuilderDisplay();
                }
            });
        });
    }

    renderBarbellVisual(grouped, 'builder-barbell-visual', unit);
}

export function resetPlateBuilder() {
    builderPlates = [];
    updateBuilderDisplay();
}

export function initPlateBuilder() {
    // Unit toggle
    document.querySelectorAll('#builder-unit-toggle .unit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const unit = btn.dataset.unit;
            if (unit === unitState.builder) return;

            unitState.builder = unit;

            document.querySelectorAll('#builder-unit-toggle .unit-btn').forEach(b =>
                b.classList.remove('active'));
            btn.classList.add('active');

            renderBuilderPlateButtons();
            updateBuilderBarSelect();
            builderPlates = [];
            updateBuilderDisplay();
        });
    });

    document.getElementById('clear-plates-btn').addEventListener('click', () => {
        builderPlates = [];
        updateBuilderDisplay();
    });

    document.getElementById('builder-bar-type').addEventListener('change', updateBuilderDisplay);

    // Initialize
    renderBuilderPlateButtons();
    updateBuilderBarSelect();
    updateBuilderDisplay();
}
