// ========== Translations ==========
const TRANSLATIONS = {
    en: {
        appTitle: 'Gym Calculator',
        navTools: 'Tools',
        navPlateCalc: 'Plate Calculator',
        navPlateBuilder: 'Plate Builder',
        nav1RM: '1RM Estimator',
        navPercentage: 'Percentage Chart',
        navConverter: 'Unit Converter',

        // Plate Calculator
        calcTitle: 'Plate Calculator',
        calcTargetWeight: 'Target Weight',
        calcAvailablePlates: 'Available Plates',
        calcButton: 'Calculate Plates',
        calcResultTitle: 'Plates Per Side',
        calcNoPlates: 'No plates needed - just the bar!',

        // Plate Builder
        builderTitle: 'Plate Builder',
        builderAddPlates: 'Add Plates (per side)',
        builderTotalWeight: 'Total Weight',
        builderClear: 'Clear All',
        builderNoPlates: 'No plates added',

        // 1RM Estimator
        rmTitle: '1RM Estimator',
        rmWeightLifted: 'Weight Lifted',
        rmReps: 'Reps Performed',
        rmFormula: 'Formula',
        rmButton: 'Estimate 1RM',
        rmEstimated: 'Estimated 1RM',
        rmViewPercentages: 'View Percentages',
        rmHidePercentages: 'Hide Percentages',
        rmAlready1RM: 'You already lifted your 1RM!',

        // Percentage Chart
        chartTitle: 'Percentage Chart',
        chartYour1RM: 'Your 1RM',
        chartButton: 'Generate Chart',

        // Unit Converter
        converterTitle: 'Unit Converter',
        converterLbs: 'Pounds (lbs)',
        converterKg: 'Kilograms (kg)',
        converterNote: 'Type in either field to convert',

        // Common
        labelBarType: 'Bar Type',
        barOlympic: 'Olympic Bar',
        barWomens: "Women's Bar",

        // Placeholders
        placeholderWeight: 'Enter weight',
        placeholderReps: 'Enter reps',
        placeholderYour1RM: 'Enter your 1RM',
        placeholderLbs: 'Enter lbs',
        placeholderKg: 'Enter kg',

        // Errors
        errorValidWeight: 'Please enter a valid target weight.',
        errorValidWeightRM: 'Please enter a valid weight.',
        errorValid1RM: 'Please enter a valid 1RM.',
        errorAtLeast1Rep: 'Please enter at least 1 rep.',
        errorTooManyReps: '1RM estimates are less accurate above 30 reps. Try a heavier weight with fewer reps.',
        errorSelectPlate: 'Please select at least one plate size.',
        errorMinWeight: 'Target weight must be at least {weight} {unit} (bar weight)',
        errorCannotMake: 'Cannot make exactly {weight} {unit} with available plates.',

        // Formula notes
        noteEpley: 'Most commonly used formula, good for moderate rep ranges.',
        noteBrzycki: 'Popular alternative, tends to give slightly lower estimates at higher reps.',
        noteOConnor: 'More conservative estimate, useful for higher rep ranges.',
        noteMayhew: 'Research-based formula using exponential decay model.'
    },
    fr: {
        appTitle: 'Calculateur Gym',
        navTools: 'Outils',
        navPlateCalc: 'Calculateur de Poids',
        navPlateBuilder: 'Constructeur de Barre',
        nav1RM: 'Estimateur 1RM',
        navPercentage: 'Tableau des %',
        navConverter: 'Convertisseur',

        // Plate Calculator
        calcTitle: 'Calculateur de Poids',
        calcTargetWeight: 'Poids cible',
        calcAvailablePlates: 'Poids disponibles',
        calcButton: 'Calculer les poids',
        calcResultTitle: 'Poids par côté',
        calcNoPlates: 'Aucun poids nécessaire - juste la barre!',

        // Plate Builder
        builderTitle: 'Constructeur de Barre',
        builderAddPlates: 'Ajouter des poids (par côté)',
        builderTotalWeight: 'Poids total',
        builderClear: 'Tout effacer',
        builderNoPlates: 'Aucun poids ajouté',

        // 1RM Estimator
        rmTitle: 'Estimateur 1RM',
        rmWeightLifted: 'Poids soulevé',
        rmReps: 'Répétitions effectuées',
        rmFormula: 'Formule',
        rmButton: 'Estimer le 1RM',
        rmEstimated: '1RM estimé',
        rmViewPercentages: 'Voir les pourcentages',
        rmHidePercentages: 'Masquer les pourcentages',
        rmAlready1RM: 'Vous avez déjà soulevé votre 1RM!',

        // Percentage Chart
        chartTitle: 'Tableau des Pourcentages',
        chartYour1RM: 'Votre 1RM',
        chartButton: 'Générer le tableau',

        // Unit Converter
        converterTitle: 'Convertisseur d\'unités',
        converterLbs: 'Livres (lbs)',
        converterKg: 'Kilogrammes (kg)',
        converterNote: 'Tapez dans un champ pour convertir',

        // Common
        labelBarType: 'Type de barre',
        barOlympic: 'Barre olympique',
        barWomens: 'Barre femme',

        // Placeholders
        placeholderWeight: 'Entrer le poids',
        placeholderReps: 'Entrer les reps',
        placeholderYour1RM: 'Entrer votre 1RM',
        placeholderLbs: 'Entrer lbs',
        placeholderKg: 'Entrer kg',

        // Errors
        errorValidWeight: 'Veuillez entrer un poids valide.',
        errorValidWeightRM: 'Veuillez entrer un poids valide.',
        errorValid1RM: 'Veuillez entrer un 1RM valide.',
        errorAtLeast1Rep: 'Veuillez entrer au moins 1 répétition.',
        errorTooManyReps: 'Les estimations 1RM sont moins précises au-delà de 30 reps. Essayez un poids plus lourd avec moins de reps.',
        errorSelectPlate: 'Veuillez sélectionner au moins un poids.',
        errorMinWeight: 'Le poids cible doit être d\'au moins {weight} {unit} (poids de la barre)',
        errorCannotMake: 'Impossible de faire exactement {weight} {unit} avec les poids disponibles.',

        // Formula notes
        noteEpley: 'Formule la plus utilisée, bonne pour les séries modérées.',
        noteBrzycki: 'Alternative populaire, donne des estimations légèrement plus basses pour les hautes répétitions.',
        noteOConnor: 'Estimation plus conservatrice, utile pour les hautes répétitions.',
        noteMayhew: 'Formule basée sur la recherche utilisant un modèle de décroissance exponentielle.'
    }
};

let currentLang = 'en';

function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function applyTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Update all placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update page title
    document.title = t('appTitle');

    // Re-render dynamic elements
    updateCalcBarSelect();
    updateBuilderBarSelect();
}

function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith('fr')) {
        return 'fr';
    }
    return 'en';
}

function setLanguage(lang) {
    currentLang = lang;

    // Update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    applyTranslations();
}

// Language toggle event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// ========== Unit Configuration ==========
const PLATES = {
    lbs: [45, 35, 25, 15, 10, 5, 2.5],
    kg: [25, 20, 15, 10, 5, 2.5, 1.25]
};

function getBarOptions(unit) {
    if (unit === 'lbs') {
        return [
            { value: 45, label: `${t('barOlympic')} (45 lbs)` },
            { value: 35, label: `${t('barWomens')} (35 lbs)` }
        ];
    } else {
        return [
            { value: 20, label: `${t('barOlympic')} (20 kg)` },
            { value: 15, label: `${t('barWomens')} (15 kg)` }
        ];
    }
}

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
    const bars = getBarOptions(unitState.calculator);

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
        noteKey: 'noteEpley'
    },
    brzycki: {
        name: 'Brzycki',
        calculate: (weight, reps) => weight * (36 / (37 - reps)),
        noteKey: 'noteBrzycki'
    },
    oconnor: {
        name: "O'Connor",
        calculate: (weight, reps) => weight * (1 + reps / 40),
        noteKey: 'noteOConnor'
    },
    mayhew: {
        name: 'Mayhew/Wathen',
        calculate: (weight, reps) => 100 * weight / (52.2 + 41.9 * Math.exp(-0.055 * reps)),
        noteKey: 'noteMayhew'
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
    document.getElementById('toggle-rm-percentages').textContent = t('rmViewPercentages');

    if (isNaN(weight) || weight <= 0) {
        errorDiv.textContent = t('errorValidWeightRM');
        errorDiv.classList.remove('hidden');
        return;
    }

    if (isNaN(reps) || reps < 1) {
        errorDiv.textContent = t('errorAtLeast1Rep');
        errorDiv.classList.remove('hidden');
        return;
    }

    if (reps === 1) {
        currentRMValue = weight;
        document.getElementById('rm-value').textContent = `${weight} ${unit}`;
        document.getElementById('rm-note').textContent = t('rmAlready1RM');
        resultDiv.classList.remove('hidden');
        return;
    }

    if (reps > 30) {
        errorDiv.textContent = t('errorTooManyReps');
        errorDiv.classList.remove('hidden');
        return;
    }

    const formula = RM_FORMULAS[formulaKey];
    const oneRM = Math.round(formula.calculate(weight, reps) * 10) / 10;
    currentRMValue = oneRM;

    document.getElementById('rm-value').textContent = `${oneRM} ${unit}`;
    document.getElementById('rm-note').textContent = t(formula.noteKey);
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
        btn.textContent = t('rmHidePercentages');
    } else {
        container.classList.add('hidden');
        btn.textContent = t('rmViewPercentages');
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
        errorDiv.textContent = t('errorValid1RM');
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

// ========== Initialize Language ==========
setLanguage(detectBrowserLanguage());
