const ALL_PLATES = [45, 35, 25, 15, 10, 5, 2.5];

function getSelectedPlates() {
    const checkboxes = document.querySelectorAll('.plate-checkbox input:checked');
    return Array.from(checkboxes)
        .map(cb => parseFloat(cb.value))
        .sort((a, b) => b - a);
}

function calculatePlates(targetWeight, barWeight, availablePlates) {
    const weightToLoad = targetWeight - barWeight;

    if (weightToLoad < 0) {
        return { error: `Target weight must be at least ${barWeight} lbs (bar weight)` };
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
        return { error: `Cannot make exactly ${targetWeight} lbs with available plates.` };
    }

    return { plates, perSide };
}

function renderPlatesList(plates) {
    const container = document.getElementById('plates-list');

    if (plates.length === 0) {
        container.innerHTML = '<p>No plates needed - just the bar!</p>';
        return;
    }

    container.innerHTML = plates.map(p => `
        <div class="plate-tag">
            ${p.weight} lbs
            <span class="count">×${p.count}</span>
        </div>
    `).join('');
}

function renderBarbellVisual(plates, containerId) {
    const container = document.getElementById(containerId);

    // Create plates HTML for left side (reversed order - smallest closest to center)
    const leftPlates = [...plates].reverse().flatMap(p =>
        Array(p.count).fill(`<div class="plate plate-${p.weight}">${p.weight}</div>`)
    ).join('');

    // Create plates HTML for right side (largest on outside)
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

    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    // Hide both initially
    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    if (isNaN(targetWeight) || targetWeight <= 0) {
        errorDiv.textContent = 'Please enter a valid target weight.';
        errorDiv.classList.remove('hidden');
        return;
    }

    const result = calculatePlates(targetWeight, barWeight, availablePlates);

    if (result.error) {
        errorDiv.textContent = result.error;
        errorDiv.classList.remove('hidden');
        return;
    }

    renderPlatesList(result.plates);
    renderBarbellVisual(result.plates, 'barbell-visual');
    resultDiv.classList.remove('hidden');
}

// Event listeners
document.getElementById('calculate-btn').addEventListener('click', handleCalculate);

document.getElementById('target-weight').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleCalculate();
    }
});

// Hamburger menu
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

        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update tool sections
        document.querySelectorAll('.tool-section').forEach(s => s.classList.remove('active'));
        document.getElementById(toolId).classList.add('active');

        // Close menu
        if (sidebar.classList.contains('open')) {
            toggleMenu();
        }
    });
});

// ========== Plate Builder ==========
let builderPlates = []; // Array of plate weights added (in order)

function getBuilderBarWeight() {
    return parseInt(document.getElementById('builder-bar-type').value);
}

function calculateBuilderTotal() {
    const barWeight = getBuilderBarWeight();
    const platesWeight = builderPlates.reduce((sum, w) => sum + w, 0) * 2;
    return barWeight + platesWeight;
}

function groupPlatesForDisplay(plates) {
    const grouped = [];
    const counts = {};

    // Count each plate type
    plates.forEach(w => {
        counts[w] = (counts[w] || 0) + 1;
    });

    // Convert to array sorted by weight descending
    ALL_PLATES.forEach(w => {
        if (counts[w]) {
            grouped.push({ weight: w, count: counts[w] });
        }
    });

    return grouped;
}

function updateBuilderDisplay() {
    // Update total weight
    const total = calculateBuilderTotal();
    document.getElementById('builder-total').textContent = `${total} lbs`;

    // Update plates list
    const listContainer = document.getElementById('builder-plates-list');
    const grouped = groupPlatesForDisplay(builderPlates);

    if (grouped.length === 0) {
        listContainer.innerHTML = '<span style="color: #666;">No plates added</span>';
    } else {
        listContainer.innerHTML = grouped.map(p => `
            <div class="plate-tag clickable" data-weight="${p.weight}">
                ${p.weight} lbs
                <span class="count">×${p.count}</span>
            </div>
        `).join('');

        // Add click handlers to remove plates
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

    // Update barbell visual
    renderBarbellVisual(grouped, 'builder-barbell-visual');
}

// Plate buttons
document.querySelectorAll('.plate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const weight = parseFloat(btn.dataset.weight);
        builderPlates.push(weight);
        // Sort plates so largest are on outside (first in array)
        builderPlates.sort((a, b) => b - a);
        updateBuilderDisplay();
    });
});

// Clear button
document.getElementById('clear-plates-btn').addEventListener('click', () => {
    builderPlates = [];
    updateBuilderDisplay();
});

// Update total when bar type changes
document.getElementById('builder-bar-type').addEventListener('change', updateBuilderDisplay);

// Initialize builder display
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

function calculateOneRM() {
    const weight = parseFloat(document.getElementById('rm-weight').value);
    const reps = parseInt(document.getElementById('rm-reps').value);
    const formulaKey = document.getElementById('rm-formula').value;

    const resultDiv = document.getElementById('rm-result');
    const errorDiv = document.getElementById('rm-error');

    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    // Reset percentages toggle
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
        document.getElementById('rm-value').textContent = `${weight} lbs`;
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

    document.getElementById('rm-value').textContent = `${oneRM} lbs`;
    document.getElementById('rm-note').textContent = formula.note;
    resultDiv.classList.remove('hidden');
}

document.getElementById('calculate-rm-btn').addEventListener('click', calculateOneRM);

document.getElementById('rm-weight').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateOneRM();
});

document.getElementById('rm-reps').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateOneRM();
});

// ========== Percentage Chart ==========
const PERCENTAGES = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30];

function generatePercentageTable(oneRM, containerId) {
    const container = document.getElementById(containerId);

    container.innerHTML = PERCENTAGES.map(pct => {
        const weight = Math.round(oneRM * pct / 100 * 10) / 10;
        const highlight = pct === 100 ? ' highlight' : '';
        return `
            <div class="percentage-row${highlight}">
                <span class="percentage-label">${pct}%</span>
                <span class="percentage-weight">${weight} lbs</span>
            </div>
        `;
    }).join('');
}

// Toggle percentages in 1RM Estimator
document.getElementById('toggle-rm-percentages').addEventListener('click', () => {
    const container = document.getElementById('rm-percentages');
    const btn = document.getElementById('toggle-rm-percentages');

    if (container.classList.contains('hidden')) {
        const oneRM = parseFloat(document.getElementById('rm-value').textContent);
        generatePercentageTable(oneRM, 'rm-percentages');
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
    const resultDiv = document.getElementById('chart-result');
    const errorDiv = document.getElementById('chart-error');

    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    if (isNaN(oneRM) || oneRM <= 0) {
        errorDiv.textContent = 'Please enter a valid 1RM.';
        errorDiv.classList.remove('hidden');
        return;
    }

    generatePercentageTable(oneRM, 'chart-percentages');
    resultDiv.classList.remove('hidden');
}

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
