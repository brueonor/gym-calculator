// ========== Unit Configuration ==========
const PLATES = {
    lbs: [45, 35, 25, 15, 10, 5, 2.5],
    kg: [25, 20, 15, 10, 5, 2.5, 1.25]
};

const BARS = {
    lbs: [
        { value: 45, label: 'Olympic Bar (45 lbs)' },
        { value: 35, label: "Women's Bar (35 lbs)" }
    ],
    kg: [
        { value: 20, label: 'Olympic Bar (20 kg)' },
        { value: 15, label: "Women's Bar (15 kg)" }
    ]
};

// Current unit state for each tool
const unitState = {
    calculator: 'lbs',
    builder: 'lbs',
    rm: 'lbs',
    chart: 'lbs'
};

// ========== Plate Calculator ==========
function renderCalcPlateCheckboxes() {
    const container = document.getElementById('calc-plate-checkboxes');
    const plates = PLATES[unitState.calculator];

    container.innerHTML = plates.map(p => `
        <label class="plate-checkbox">
            <input type="checkbox" value="${p}" checked>
            <span>${p}</span>
        </label>
    `).join('');
}

function updateCalcBarSelect() {
    const select = document.getElementById('bar-type');
    const bars = BARS[unitState.calculator];

    select.innerHTML = bars.map(b =>
        `<option value="${b.value}">${b.label}</option>`
    ).join('');
}

function updateCalcUnitLabels() {
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

function calculatePlates(targetWeight, barWeight, availablePlates, unit) {
    const weightToLoad = targetWeight - barWeight;

    if (weightToLoad < 0) {
        return { error: `Target weight must be at least ${barWeight} ${unit} (bar weight)` };
    }

    if (weightToLoad === 0) {
        return { plates: [], perSide: 0 };
    }

    const perSide = weightToLoad / 2;

    if (availablePlates.length === 0) {
        return { error: 'Please select at least one plate size.' };
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
        return { error: `Cannot make exactly ${targetWeight} ${unit} with available plates.` };
    }

    return { plates, perSide };
}

function renderPlatesList(plates, unit) {
    const container = document.getElementById('plates-list');

    if (plates.length === 0) {
        container.innerHTML = '<p>No plates needed - just the bar!</p>';
        return;
    }

    container.innerHTML = plates.map(p => `
        <div class="plate-tag">
            ${p.weight} ${unit}
            <span class="count">×${p.count}</span>
        </div>
    `).join('');
}

function renderBarbellVisual(plates, containerId) {
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
        Array(p.count).fill(`<div class="plate plate-${p.weight}">${p.weight}</div>`)
    ).join('');

    const rightPlates = plates.flatMap(p =>
        Array(p.count).fill(`<div class="plate plate-${p.weight}">${p.weight}</div>`)
    ).join('');

    container.innerHTML = `
        <div class="bar"></div>
        ${leftPlates}
        <div class="bar bar-center"></div>
        ${rightPlates}
        <div class="bar"></div>
    `;
}

function handleCalculate() {
    const targetWeight = parseFloat(document.getElementById('target-weight').value);
    const barWeight = parseInt(document.getElementById('bar-type').value);
    const availablePlates = getSelectedPlates();
    const unit = unitState.calculator;

    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    if (isNaN(targetWeight) || targetWeight <= 0) {
        errorDiv.textContent = 'Please enter a valid target weight.';
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
    renderBarbellVisual(result.plates, 'barbell-visual');
    resultDiv.classList.remove('hidden');
}

// Plate Calculator unit toggle
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

// Initialize Plate Calculator
renderCalcPlateCheckboxes();
updateCalcBarSelect();

// ========== Hamburger Menu ==========
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const toolId = btn.dataset.tool;

        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.tool-section').forEach(s => s.classList.remove('active'));
        document.getElementById(toolId).classList.add('active');

        if (sidebar.classList.contains('open')) {
            toggleMenu();
        }
    });
});

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

function updateBuilderBarSelect() {
    const select = document.getElementById('builder-bar-type');
    const bars = BARS[unitState.builder];

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
        listContainer.innerHTML = '<span style="color: #666;">No plates added</span>';
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

    renderBarbellVisual(grouped, 'builder-barbell-visual');
}

// Builder unit toggle
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

// Initialize Plate Builder
renderBuilderPlateButtons();
updateBuilderBarSelect();
updateBuilderDisplay();

// ========== 1RM Estimator ==========
const RM_FORMULAS = {
    epley: {
        name: 'Epley',
        calculate: (weight, reps) => weight * (1 + reps / 30),
        note: 'Most commonly used formula, good for moderate rep ranges.'
    },
    brzycki: {
        name: 'Brzycki',
        calculate: (weight, reps) => weight * (36 / (37 - reps)),
        note: 'Popular alternative, tends to give slightly lower estimates at higher reps.'
    },
    oconnor: {
        name: "O'Connor",
        calculate: (weight, reps) => weight * (1 + reps / 40),
        note: 'More conservative estimate, useful for higher rep ranges.'
    },
    mayhew: {
        name: 'Mayhew/Wathen',
        calculate: (weight, reps) => 100 * weight / (52.2 + 41.9 * Math.exp(-0.055 * reps)),
        note: 'Research-based formula using exponential decay model.'
    }
};

let currentRMValue = 0;

function calculateOneRM() {
    const weight = parseFloat(document.getElementById('rm-weight').value);
    const reps = parseInt(document.getElementById('rm-reps').value);
    const formulaKey = document.getElementById('rm-formula').value;
    const unit = unitState.rm;

    const resultDiv = document.getElementById('rm-result');
    const errorDiv = document.getElementById('rm-error');

    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    document.getElementById('rm-percentages').classList.add('hidden');
    document.getElementById('toggle-rm-percentages').textContent = 'View Percentages';

    if (isNaN(weight) || weight <= 0) {
        errorDiv.textContent = 'Please enter a valid weight.';
        errorDiv.classList.remove('hidden');
        return;
    }

    if (isNaN(reps) || reps < 1) {
        errorDiv.textContent = 'Please enter at least 1 rep.';
        errorDiv.classList.remove('hidden');
        return;
    }

    if (reps === 1) {
        currentRMValue = weight;
        document.getElementById('rm-value').textContent = `${weight} ${unit}`;
        document.getElementById('rm-note').textContent = 'You already lifted your 1RM!';
        resultDiv.classList.remove('hidden');
        return;
    }

    if (reps > 30) {
        errorDiv.textContent = '1RM estimates are less accurate above 30 reps. Try a heavier weight with fewer reps.';
        errorDiv.classList.remove('hidden');
        return;
    }

    const formula = RM_FORMULAS[formulaKey];
    const oneRM = Math.round(formula.calculate(weight, reps) * 10) / 10;
    currentRMValue = oneRM;

    document.getElementById('rm-value').textContent = `${oneRM} ${unit}`;
    document.getElementById('rm-note').textContent = formula.note;
    resultDiv.classList.remove('hidden');
}

// RM unit toggle
document.querySelectorAll('#rm-unit-toggle .unit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const unit = btn.dataset.unit;
        if (unit === unitState.rm) return;

        unitState.rm = unit;

        document.querySelectorAll('#rm-unit-toggle .unit-btn').forEach(b =>
            b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.rm-unit-label').forEach(el => {
            el.textContent = unit;
        });

        // Clear results
        document.getElementById('rm-result').classList.add('hidden');
        document.getElementById('rm-error').classList.add('hidden');
        document.getElementById('rm-weight').value = '';
    });
});

document.getElementById('calculate-rm-btn').addEventListener('click', calculateOneRM);

document.getElementById('rm-weight').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateOneRM();
});

document.getElementById('rm-reps').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateOneRM();
});

// ========== Percentage Chart ==========
const PERCENTAGES = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30];

function generatePercentageTable(oneRM, containerId, unit) {
    const container = document.getElementById(containerId);

    container.innerHTML = PERCENTAGES.map(pct => {
        const weight = Math.round(oneRM * pct / 100 * 10) / 10;
        const highlight = pct === 100 ? ' highlight' : '';
        return `
            <div class="percentage-row${highlight}">
                <span class="percentage-label">${pct}%</span>
                <span class="percentage-weight">${weight} ${unit}</span>
            </div>
        `;
    }).join('');
}

// Toggle percentages in 1RM Estimator
document.getElementById('toggle-rm-percentages').addEventListener('click', () => {
    const container = document.getElementById('rm-percentages');
    const btn = document.getElementById('toggle-rm-percentages');

    if (container.classList.contains('hidden')) {
        generatePercentageTable(currentRMValue, 'rm-percentages', unitState.rm);
        container.classList.remove('hidden');
        btn.textContent = 'Hide Percentages';
    } else {
        container.classList.add('hidden');
        btn.textContent = 'View Percentages';
    }
});

// Standalone Percentage Chart
function generateChart() {
    const oneRM = parseFloat(document.getElementById('chart-1rm').value);
    const unit = unitState.chart;
    const resultDiv = document.getElementById('chart-result');
    const errorDiv = document.getElementById('chart-error');

    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    if (isNaN(oneRM) || oneRM <= 0) {
        errorDiv.textContent = 'Please enter a valid 1RM.';
        errorDiv.classList.remove('hidden');
        return;
    }

    generatePercentageTable(oneRM, 'chart-percentages', unit);
    resultDiv.classList.remove('hidden');
}

// Chart unit toggle
document.querySelectorAll('#chart-unit-toggle .unit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const unit = btn.dataset.unit;
        if (unit === unitState.chart) return;

        unitState.chart = unit;

        document.querySelectorAll('#chart-unit-toggle .unit-btn').forEach(b =>
            b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.chart-unit-label').forEach(el => {
            el.textContent = unit;
        });

        // Clear results
        document.getElementById('chart-result').classList.add('hidden');
        document.getElementById('chart-error').classList.add('hidden');
        document.getElementById('chart-1rm').value = '';
    });
});

document.getElementById('generate-chart-btn').addEventListener('click', generateChart);

document.getElementById('chart-1rm').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateChart();
});

// ========== Unit Converter ==========
const LBS_TO_KG = 0.453592;
const KG_TO_LBS = 2.20462;

const lbsInput = document.getElementById('convert-lbs');
const kgInput = document.getElementById('convert-kg');

lbsInput.addEventListener('input', () => {
    const lbs = parseFloat(lbsInput.value);
    if (!isNaN(lbs) && lbs >= 0) {
        kgInput.value = Math.round(lbs * LBS_TO_KG * 100) / 100;
    } else if (lbsInput.value === '') {
        kgInput.value = '';
    }
});

kgInput.addEventListener('input', () => {
    const kg = parseFloat(kgInput.value);
    if (!isNaN(kg) && kg >= 0) {
        lbsInput.value = Math.round(kg * KG_TO_LBS * 100) / 100;
    } else if (kgInput.value === '') {
        lbsInput.value = '';
    }
});
