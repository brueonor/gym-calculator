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
        navHRZones: 'HR Zones',
        navRestTimer: 'Rest Timer',

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

        // HR Zone Calculator
        hrTitle: 'HR Zone Calculator',
        hrAge: 'Age',
        hrResting: 'Resting Heart Rate (bpm)',
        hrMaxOptional: 'Max Heart Rate (optional)',
        hrMaxNote: 'Leave blank to estimate as 220 - age',
        hrButton: 'Calculate Zones',
        hrMaxLabel: 'Max HR:',
        hrReserveLabel: 'HR Reserve:',
        hrFormulaNote: 'Calculated using the Karvonen Formula',
        hrZone1: 'Zone 1 (Recovery)',
        hrZone2: 'Zone 2 (Fat Burn)',
        hrZone3: 'Zone 3 (Aerobic)',
        hrZone4: 'Zone 4 (Threshold)',
        hrZone5: 'Zone 5 (Max)',

        // Rest Timer
        timerTitle: 'Rest Timer',
        timerMinutes: 'Minutes',
        timerSeconds: 'Seconds',
        timerStart: 'Start',
        timerPause: 'Pause',
        timerResume: 'Resume',
        timerReset: 'Reset',

        // Workout Timer
        cfTimerTitle: 'Workout Timer',
        navCFTimer: 'Workout Timer',
        cfModeEmom: 'EMOM',
        cfModeTimer: 'Timer',
        cfModeTabata: 'Tabata',
        cfModeIntervals: 'Intervals',
        cfInterval: 'Every',
        cfDuration: 'Duration',
        cfWorkTime: 'Work',
        cfRestTime: 'Rest',
        cfRounds: 'Rounds',
        cfRound: 'Round',
        cfWork: 'WORK',
        cfRest: 'REST',
        cfGo: 'GO',
        cfStart: 'Start',
        cfPause: 'Pause',
        cfResume: 'Resume',
        cfReset: 'Reset',
        cfMinutes: 'min',
        cfSeconds: 'sec',
        cfTabataInfo: '20s work / 10s rest / 8 rounds',
        cfComplete: 'COMPLETE',
        cfGetReady: 'GET READY',
        cfCountdown: 'Countdown',
        cfCountUp: 'Count Up',
        cfTimeCap: 'Time Cap',
        cfNoCap: 'No cap',

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
        placeholderAge: 'Enter age',
        placeholderResting: 'Enter resting HR',
        placeholderMaxHR: 'Enter max HR or leave blank',

        // Errors
        errorValidWeight: 'Please enter a valid target weight.',
        errorValidWeightRM: 'Please enter a valid weight.',
        errorValid1RM: 'Please enter a valid 1RM.',
        errorAtLeast1Rep: 'Please enter at least 1 rep.',
        errorTooManyReps: '1RM estimates are less accurate above 30 reps. Try a heavier weight with fewer reps.',
        errorSelectPlate: 'Please select at least one plate size.',
        errorMinWeight: 'Target weight must be at least {weight} {unit} (bar weight)',
        errorCannotMake: 'Cannot make exactly {weight} {unit} with available plates.',
        errorValidAge: 'Please enter a valid age (1-120).',
        errorValidResting: 'Please enter a valid resting heart rate (30-120 bpm).',
        errorValidMaxHR: 'Max heart rate must be greater than resting heart rate.',

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
        navHRZones: 'Zones FC',
        navRestTimer: 'Minuterie',

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

        // HR Zone Calculator
        hrTitle: 'Calculateur de Zones FC',
        hrAge: 'Âge',
        hrResting: 'Fréquence cardiaque au repos (bpm)',
        hrMaxOptional: 'FC maximale (optionnel)',
        hrMaxNote: 'Laisser vide pour estimer à 220 - âge',
        hrButton: 'Calculer les zones',
        hrMaxLabel: 'FC Max:',
        hrReserveLabel: 'Réserve FC:',
        hrFormulaNote: 'Calculé avec la formule de Karvonen',
        hrZone1: 'Zone 1 (Récupération)',
        hrZone2: 'Zone 2 (Brûle-graisse)',
        hrZone3: 'Zone 3 (Aérobie)',
        hrZone4: 'Zone 4 (Seuil)',
        hrZone5: 'Zone 5 (Max)',

        // Rest Timer
        timerTitle: 'Minuterie de Repos',
        timerMinutes: 'Minutes',
        timerSeconds: 'Secondes',
        timerStart: 'Démarrer',
        timerPause: 'Pause',
        timerResume: 'Reprendre',
        timerReset: 'Réinitialiser',

        // Workout Timer
        cfTimerTitle: 'Chrono Entraînement',
        navCFTimer: 'Chrono Entraînement',
        cfModeEmom: 'EMOM',
        cfModeTimer: 'Chrono',
        cfModeTabata: 'Tabata',
        cfModeIntervals: 'Intervalles',
        cfInterval: 'Chaque',
        cfDuration: 'Durée',
        cfWorkTime: 'Travail',
        cfRestTime: 'Repos',
        cfRounds: 'Rondes',
        cfRound: 'Ronde',
        cfWork: 'TRAVAIL',
        cfRest: 'REPOS',
        cfGo: 'GO',
        cfStart: 'Démarrer',
        cfPause: 'Pause',
        cfResume: 'Reprendre',
        cfReset: 'Réinitialiser',
        cfMinutes: 'min',
        cfSeconds: 'sec',
        cfTabataInfo: '20s travail / 10s repos / 8 rondes',
        cfComplete: 'TERMINÉ',
        cfGetReady: 'PRÉPAREZ-VOUS',
        cfCountdown: 'Décompte',
        cfCountUp: 'Chronomètre',
        cfTimeCap: 'Temps limite',
        cfNoCap: 'Sans limite',

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
        placeholderAge: 'Entrer l\'âge',
        placeholderResting: 'Entrer FC au repos',
        placeholderMaxHR: 'Entrer FC max ou laisser vide',

        // Errors
        errorValidWeight: 'Veuillez entrer un poids valide.',
        errorValidWeightRM: 'Veuillez entrer un poids valide.',
        errorValid1RM: 'Veuillez entrer un 1RM valide.',
        errorAtLeast1Rep: 'Veuillez entrer au moins 1 répétition.',
        errorTooManyReps: 'Les estimations 1RM sont moins précises au-delà de 30 reps. Essayez un poids plus lourd avec moins de reps.',
        errorSelectPlate: 'Veuillez sélectionner au moins un poids.',
        errorMinWeight: 'Le poids cible doit être d\'au moins {weight} {unit} (poids de la barre)',
        errorCannotMake: 'Impossible de faire exactement {weight} {unit} avec les poids disponibles.',
        errorValidAge: 'Veuillez entrer un âge valide (1-120).',
        errorValidResting: 'Veuillez entrer une FC au repos valide (30-120 bpm).',
        errorValidMaxHR: 'La FC maximale doit être supérieure à la FC au repos.',

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
    lbs: [55, 45, 35, 25, 15, 10, 5, 2.5],
    kg: [25, 20, 15, 10, 5, 2.5, 1.25]
};

const PLATE_COLORS = {
    lbs: {
        55: '#dc2626',    // red
        45: '#2563eb',    // blue
        35: '#eab308',    // yellow
        25: '#16a34a',    // green
        15: '#a855f7',    // purple
        10: '#e5e5e5',    // white
        5: '#3b82f6',     // blue
        2.5: '#22c55e'    // green
    },
    kg: {
        25: '#dc2626',    // red
        20: '#2563eb',    // blue
        15: '#eab308',    // yellow
        10: '#16a34a',    // green
        5: '#e5e5e5',     // white
        2.5: '#3b82f6',   // blue
        1.25: '#22c55e'   // green
    }
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

function renderBarbellVisual(plates, containerId, unit) {
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
    renderBarbellVisual(result.plates, 'barbell-visual', unit);
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

// Auto-recalculate when bar type changes
document.getElementById('bar-type').addEventListener('change', () => {
    const targetWeight = parseFloat(document.getElementById('target-weight').value);
    if (!isNaN(targetWeight) && targetWeight > 0) {
        handleCalculate();
    }
});

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
function showTool(toolId, pushState = true) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.nav-btn[data-tool="${toolId}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update tool sections
    document.querySelectorAll('.tool-section').forEach(s => s.classList.remove('active'));
    const toolSection = document.getElementById(toolId);
    if (toolSection) toolSection.classList.add('active');

    // Reset all inputs and results
    resetAllTools();

    // Close sidebar if open
    if (sidebar.classList.contains('open')) {
        toggleMenu();
    }

    // Update URL hash and history
    if (pushState && window.location.hash !== `#${toolId}`) {
        history.pushState({ tool: toolId }, '', `#${toolId}`);
    }
}

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        showTool(btn.dataset.tool);
    });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.tool) {
        showTool(event.state.tool, false);
    } else {
        // Check for hash in URL, fallback to default tool
        const hash = window.location.hash.slice(1);
        const toolId = hash || 'plate-calculator';
        showTool(toolId, false);
    }
});

function resetAllTools() {
    // Plate Calculator
    document.getElementById('target-weight').value = '';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('error').classList.add('hidden');

    // Plate Builder
    builderPlates = [];
    updateBuilderDisplay();

    // 1RM Estimator
    document.getElementById('rm-weight').value = '';
    document.getElementById('rm-reps').value = '';
    document.getElementById('rm-result').classList.add('hidden');
    document.getElementById('rm-error').classList.add('hidden');
    document.getElementById('rm-percentages').classList.add('hidden');
    document.getElementById('toggle-rm-percentages').textContent = t('rmViewPercentages');

    // Percentage Chart
    document.getElementById('chart-1rm').value = '';
    document.getElementById('chart-result').classList.add('hidden');
    document.getElementById('chart-error').classList.add('hidden');

    // Unit Converter
    document.getElementById('convert-lbs').value = '';
    document.getElementById('convert-kg').value = '';

    // HR Zone Calculator
    document.getElementById('hr-age').value = '';
    document.getElementById('hr-resting').value = '';
    document.getElementById('hr-max').value = '';
    document.getElementById('hr-result').classList.add('hidden');
    document.getElementById('hr-error').classList.add('hidden');

    // Rest Timer
    resetTimer();

    // CrossFit Timer
    resetCrossfitTimer();
}

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

    renderBarbellVisual(grouped, 'builder-barbell-visual', unit);
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

function generatePercentageTable(oneRM, containerId, unit, clickable = false) {
    const container = document.getElementById(containerId);

    container.innerHTML = PERCENTAGES.map(pct => {
        const weight = Math.round(oneRM * pct / 100 * 10) / 10;
        const highlight = pct === 100 ? ' highlight' : '';
        const clickableClass = clickable ? ' clickable' : '';
        return `
            <div class="percentage-row${highlight}${clickableClass}" data-weight="${weight}" data-unit="${unit}">
                <span class="percentage-label">${pct}%</span>
                <span class="percentage-weight">${weight} ${unit}</span>
            </div>
        `;
    }).join('');

    if (clickable) {
        container.querySelectorAll('.percentage-row.clickable').forEach(row => {
            row.addEventListener('click', () => {
                const weight = parseFloat(row.dataset.weight);
                const rowUnit = row.dataset.unit;
                navigateToPlateCalculator(weight, rowUnit);
            });
        });
    }
}

function navigateToPlateCalculator(weight, unit) {
    // Calculate nearest achievable weight
    // Minimum increment is 5 lbs (2×2.5) or 2.5 kg (2×1.25)
    const increment = unit === 'lbs' ? 5 : 2.5;
    const barWeight = unit === 'lbs' ? 45 : 20;

    // Round to nearest increment
    let nearestWeight = Math.round(weight / increment) * increment;

    // Ensure weight is at least bar weight
    if (nearestWeight < barWeight) {
        nearestWeight = barWeight;
    }

    // Switch unit if needed
    if (unitState.calculator !== unit) {
        unitState.calculator = unit;
        document.querySelectorAll('#plate-calculator .unit-toggle .unit-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.unit === unit);
        });
        renderCalcPlateCheckboxes();
        updateCalcBarSelect();
        updateCalcUnitLabels();
    }

    // Set the target weight
    document.getElementById('target-weight').value = nearestWeight;

    // Navigate to plate calculator
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.nav-btn[data-tool="plate-calculator"]').classList.add('active');
    document.querySelectorAll('.tool-section').forEach(s => s.classList.remove('active'));
    document.getElementById('plate-calculator').classList.add('active');

    // Update history
    if (window.location.hash !== '#plate-calculator') {
        history.pushState({ tool: 'plate-calculator' }, '', '#plate-calculator');
    }

    // Close sidebar if open
    if (sidebar.classList.contains('open')) {
        toggleMenu();
    }

    // Trigger calculation
    handleCalculate();
}

// Toggle percentages in 1RM Estimator
document.getElementById('toggle-rm-percentages').addEventListener('click', () => {
    const container = document.getElementById('rm-percentages');
    const btn = document.getElementById('toggle-rm-percentages');

    if (container.classList.contains('hidden')) {
        generatePercentageTable(currentRMValue, 'rm-percentages', unitState.rm, true);
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

    generatePercentageTable(oneRM, 'chart-percentages', unit, true);
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

// ========== HR Zone Calculator ==========
const HR_ZONES = [
    { key: 'hrZone1', minPct: 50, maxPct: 60 },
    { key: 'hrZone2', minPct: 60, maxPct: 70 },
    { key: 'hrZone3', minPct: 70, maxPct: 80 },
    { key: 'hrZone4', minPct: 80, maxPct: 90 },
    { key: 'hrZone5', minPct: 90, maxPct: 100 }
];

function calculateKarvonen(maxHR, restingHR, intensityPct) {
    // Karvonen Formula: Target HR = ((Max HR - Resting HR) × Intensity%) + Resting HR
    const hrReserve = maxHR - restingHR;
    return Math.round(hrReserve * (intensityPct / 100) + restingHR);
}

function calculateHRZones() {
    const age = parseInt(document.getElementById('hr-age').value);
    const restingHR = parseInt(document.getElementById('hr-resting').value);
    const maxHRInput = document.getElementById('hr-max').value;

    const resultDiv = document.getElementById('hr-result');
    const errorDiv = document.getElementById('hr-error');

    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    // Validation
    if (isNaN(age) || age < 1 || age > 120) {
        errorDiv.textContent = t('errorValidAge');
        errorDiv.classList.remove('hidden');
        return;
    }

    if (isNaN(restingHR) || restingHR < 30 || restingHR > 120) {
        errorDiv.textContent = t('errorValidResting');
        errorDiv.classList.remove('hidden');
        return;
    }

    // Calculate or use provided max HR
    let maxHR;
    if (maxHRInput && maxHRInput.trim() !== '') {
        maxHR = parseInt(maxHRInput);
        if (maxHR <= restingHR) {
            errorDiv.textContent = t('errorValidMaxHR');
            errorDiv.classList.remove('hidden');
            return;
        }
    } else {
        maxHR = 220 - age;
    }

    const hrReserve = maxHR - restingHR;

    // Display info
    document.getElementById('hr-max-display').textContent = `${maxHR} bpm`;
    document.getElementById('hr-reserve-display').textContent = `${hrReserve} bpm`;

    // Generate zones table
    const zonesContainer = document.getElementById('hr-zones-table');
    zonesContainer.innerHTML = HR_ZONES.map(zone => {
        const minHR = calculateKarvonen(maxHR, restingHR, zone.minPct);
        const maxHRZone = calculateKarvonen(maxHR, restingHR, zone.maxPct);
        return `
            <div class="hr-zone-row">
                <span class="zone-name">${t(zone.key)}</span>
                <span class="zone-range">${minHR} - ${maxHRZone} bpm</span>
                <span class="zone-pct">${zone.minPct}-${zone.maxPct}%</span>
            </div>
        `;
    }).join('');

    resultDiv.classList.remove('hidden');
}

document.getElementById('calculate-hr-btn').addEventListener('click', calculateHRZones);

document.getElementById('hr-age').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateHRZones();
});

document.getElementById('hr-resting').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateHRZones();
});

document.getElementById('hr-max').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateHRZones();
});

// ========== Rest Timer ==========
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timer-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('timer-seconds').textContent = String(seconds).padStart(2, '0');

    // Update input fields to match
    document.getElementById('timer-min-input').value = minutes;
    document.getElementById('timer-sec-input').value = seconds;

    // Visual feedback when timer is done
    const display = document.getElementById('timer-display');
    if (timerSeconds === 0 && !timerRunning) {
        display.classList.remove('timer-running');
        display.classList.remove('timer-warning');
    }
}

function syncInputsToTimer() {
    const minutes = parseInt(document.getElementById('timer-min-input').value) || 0;
    const seconds = parseInt(document.getElementById('timer-sec-input').value) || 0;
    timerSeconds = Math.max(0, minutes * 60 + seconds);
    updateTimerDisplay();
}

function addTime(seconds) {
    timerSeconds += seconds;
    updateTimerDisplay();
}

function startTimer() {
    if (timerSeconds <= 0) {
        syncInputsToTimer();
        if (timerSeconds <= 0) return;
    }

    timerRunning = true;
    document.getElementById('timer-start-btn').classList.add('hidden');
    document.getElementById('timer-pause-btn').classList.remove('hidden');
    document.getElementById('timer-pause-btn').textContent = t('timerPause');
    document.getElementById('timer-display').classList.add('timer-running');

    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();

        // Warning when 10 seconds or less
        const display = document.getElementById('timer-display');
        if (timerSeconds <= 10 && timerSeconds > 0) {
            display.classList.add('timer-warning');
        }

        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            timerRunning = false;
            display.classList.remove('timer-running');
            display.classList.remove('timer-warning');
            display.classList.add('timer-done');

            // Play alert sound
            playTimerAlert();

            // Reset button states
            document.getElementById('timer-start-btn').classList.remove('hidden');
            document.getElementById('timer-pause-btn').classList.add('hidden');

            // Remove done class after animation
            setTimeout(() => {
                display.classList.remove('timer-done');
            }, 2000);
        }
    }, 1000);
}

function pauseTimer() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerRunning = false;
        document.getElementById('timer-pause-btn').textContent = t('timerResume');
        document.getElementById('timer-display').classList.remove('timer-running');
    } else if (timerSeconds > 0) {
        startTimer();
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerRunning = false;
    timerSeconds = 0;
    updateTimerDisplay();
    document.getElementById('timer-start-btn').classList.remove('hidden');
    document.getElementById('timer-pause-btn').classList.add('hidden');
    document.getElementById('timer-display').classList.remove('timer-running', 'timer-warning', 'timer-done');
}

function playTimerAlert() {
    // Create audio context for beep sound
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const beep = (freq, duration, time) => {
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, time);
            gainNode.gain.exponentialRampToValueAtTime(0.01, time + duration);
            oscillator.start(time);
            oscillator.stop(time + duration);
        };
        // Three beeps
        beep(880, 0.2, audioCtx.currentTime);
        beep(880, 0.2, audioCtx.currentTime + 0.3);
        beep(1320, 0.4, audioCtx.currentTime + 0.6);
    } catch (e) {
        // Audio not supported, fail silently
    }
}

// Timer event listeners
document.getElementById('timer-start-btn').addEventListener('click', startTimer);
document.getElementById('timer-pause-btn').addEventListener('click', pauseTimer);
document.getElementById('timer-reset-btn').addEventListener('click', resetTimer);

document.getElementById('timer-min-input').addEventListener('change', syncInputsToTimer);
document.getElementById('timer-sec-input').addEventListener('change', syncInputsToTimer);

// Quick time buttons
document.querySelectorAll('.quick-time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const seconds = parseInt(btn.dataset.seconds);
        addTime(seconds);
    });
});

// ========== Workout Timer ==========
let cfMode = 'emom';
let cfInterval = null;
let cfRunning = false;
let cfPaused = false;
let cfTotalSeconds = 0;
let cfCurrentSeconds = 0;
let cfIntervalMinutes = 1;
let cfWorkSeconds = 20;
let cfRestSeconds = 10;
let cfTotalRounds = 8;
let cfCurrentRound = 1;
let cfPhase = 'work'; // 'work', 'rest', 'complete'
let cfPhaseSeconds = 0;
let cfCapSeconds = 0;
let cfTimerDirection = 'down'; // 'down' for countdown, 'up' for count up

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function setCrossfitMode(mode) {
    if (cfRunning) {
        resetCrossfitTimer();
    }

    cfMode = mode;

    // Update mode buttons
    document.querySelectorAll('.cf-mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Hide all settings and presets
    document.querySelectorAll('.cf-settings').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.cf-presets').forEach(el => el.classList.add('hidden'));

    // Show relevant settings and presets
    const settingsEl = document.getElementById(`cf-settings-${mode}`);
    if (settingsEl) settingsEl.classList.remove('hidden');

    const presetsEl = document.getElementById(`cf-presets-${mode}`);
    if (presetsEl) presetsEl.classList.remove('hidden');

    // Reset display
    updateCrossfitDisplay();
}

function updateCrossfitDisplay() {
    const timeEl = document.getElementById('cf-time');
    const phaseEl = document.getElementById('cf-phase');
    const roundEl = document.getElementById('cf-round');
    const displayEl = document.getElementById('cf-display');

    // Clear all state classes
    displayEl.classList.remove('running', 'rest-phase', 'warning', 'complete');
    phaseEl.classList.remove('work', 'rest', 'complete', 'ready');

    if (!cfRunning && !cfPaused) {
        // Initial state - show configured time
        phaseEl.textContent = '';
        roundEl.textContent = '';

        switch (cfMode) {
            case 'emom':
                const emomDuration = parseInt(document.getElementById('cf-emom-duration').value) || 10;
                timeEl.textContent = formatTime(emomDuration * 60);
                break;
            case 'timer':
                if (cfTimerDirection === 'down') {
                    const timerDuration = parseInt(document.getElementById('cf-timer-duration').value) || 12;
                    timeEl.textContent = formatTime(timerDuration * 60);
                } else {
                    timeEl.textContent = '00:00';
                }
                break;
            case 'tabata':
                timeEl.textContent = formatTime(20); // First work period
                break;
            case 'intervals':
                const workTime = parseInt(document.getElementById('cf-intervals-work').value) || 40;
                timeEl.textContent = formatTime(workTime);
                break;
        }
        return;
    }

    // Running or paused state
    if (cfRunning) {
        displayEl.classList.add('running');
    }

    switch (cfMode) {
        case 'emom':
            timeEl.textContent = formatTime(cfPhaseSeconds);
            phaseEl.textContent = t('cfGo');
            phaseEl.classList.add('work');
            roundEl.textContent = `${t('cfRound')} ${cfCurrentRound}`;
            if (cfPhaseSeconds <= 3 && cfPhaseSeconds > 0) {
                displayEl.classList.add('warning');
            }
            break;

        case 'timer':
            timeEl.textContent = formatTime(cfCurrentSeconds);
            phaseEl.textContent = '';
            roundEl.textContent = '';
            if (cfTimerDirection === 'down') {
                // Countdown warning at 10 seconds
                if (cfCurrentSeconds <= 10 && cfCurrentSeconds > 0) {
                    displayEl.classList.add('warning');
                }
            } else {
                // Count up - warning if approaching cap
                if (cfCapSeconds > 0 && cfCurrentSeconds >= cfCapSeconds - 10) {
                    displayEl.classList.add('warning');
                }
            }
            break;

        case 'tabata':
        case 'intervals':
            timeEl.textContent = formatTime(cfPhaseSeconds);
            if (cfPhase === 'work') {
                phaseEl.textContent = t('cfWork');
                phaseEl.classList.add('work');
            } else if (cfPhase === 'rest') {
                phaseEl.textContent = t('cfRest');
                phaseEl.classList.add('rest');
                displayEl.classList.add('rest-phase');
            }
            roundEl.textContent = `${t('cfRound')} ${cfCurrentRound}/${cfTotalRounds}`;
            if (cfPhaseSeconds <= 3 && cfPhaseSeconds > 0) {
                displayEl.classList.add('warning');
            }
            break;
    }
}

function showComplete() {
    const timeEl = document.getElementById('cf-time');
    const phaseEl = document.getElementById('cf-phase');
    const displayEl = document.getElementById('cf-display');

    displayEl.classList.remove('running', 'rest-phase', 'warning');
    displayEl.classList.add('complete');
    phaseEl.textContent = t('cfComplete');
    phaseEl.classList.add('complete');

    playCrossfitBeep('done');

    // Remove complete class after animation
    setTimeout(() => {
        displayEl.classList.remove('complete');
    }, 2000);
}

function playCrossfitBeep(type) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const beep = (freq, duration, time, gain = 0.3) => {
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(gain, time);
            gainNode.gain.exponentialRampToValueAtTime(0.01, time + duration);
            oscillator.start(time);
            oscillator.stop(time + duration);
        };

        switch (type) {
            case 'work':
                // Single high beep
                beep(880, 0.3, audioCtx.currentTime);
                break;
            case 'rest':
                // Two lower beeps
                beep(660, 0.2, audioCtx.currentTime);
                beep(660, 0.2, audioCtx.currentTime + 0.25);
                break;
            case 'countdown':
                // Quick beep
                beep(440, 0.1, audioCtx.currentTime, 0.2);
                break;
            case 'done':
                // Three beeps (same as rest timer)
                beep(880, 0.2, audioCtx.currentTime);
                beep(880, 0.2, audioCtx.currentTime + 0.3);
                beep(1320, 0.4, audioCtx.currentTime + 0.6);
                break;
        }
    } catch (e) {
        // Audio not supported
    }
}

function startCrossfitTimer() {
    if (cfRunning) return;

    if (!cfPaused) {
        // Fresh start - initialize based on mode
        cfCurrentRound = 1;
        cfPhase = 'work';

        switch (cfMode) {
            case 'emom':
                cfIntervalMinutes = parseInt(document.getElementById('cf-emom-interval').value) || 1;
                cfTotalSeconds = (parseInt(document.getElementById('cf-emom-duration').value) || 10) * 60;
                cfTotalRounds = Math.floor(cfTotalSeconds / (cfIntervalMinutes * 60));
                cfPhaseSeconds = cfIntervalMinutes * 60;
                cfCurrentSeconds = cfTotalSeconds;
                break;

            case 'timer':
                if (cfTimerDirection === 'down') {
                    cfTotalSeconds = (parseInt(document.getElementById('cf-timer-duration').value) || 12) * 60;
                    cfCurrentSeconds = cfTotalSeconds;
                } else {
                    cfCapSeconds = (parseInt(document.getElementById('cf-timer-cap').value) || 0) * 60;
                    cfCurrentSeconds = 0;
                }
                break;

            case 'tabata':
                cfWorkSeconds = 20;
                cfRestSeconds = 10;
                cfTotalRounds = 8;
                cfPhaseSeconds = cfWorkSeconds;
                break;

            case 'intervals':
                cfWorkSeconds = parseInt(document.getElementById('cf-intervals-work').value) || 40;
                cfRestSeconds = parseInt(document.getElementById('cf-intervals-rest').value) || 20;
                cfTotalRounds = parseInt(document.getElementById('cf-intervals-rounds').value) || 8;
                cfPhaseSeconds = cfWorkSeconds;
                break;
        }

        // Play start beep
        playCrossfitBeep('work');
    }

    cfRunning = true;
    cfPaused = false;

    // Update button states
    document.getElementById('cf-start-btn').classList.add('hidden');
    document.getElementById('cf-pause-btn').classList.remove('hidden');
    document.getElementById('cf-pause-btn').textContent = t('cfPause');

    cfInterval = setInterval(() => {
        switch (cfMode) {
            case 'emom':
                cfPhaseSeconds--;
                cfCurrentSeconds--;

                // Countdown beeps at 3, 2, 1
                if (cfPhaseSeconds <= 3 && cfPhaseSeconds > 0) {
                    playCrossfitBeep('countdown');
                }

                if (cfCurrentSeconds <= 0) {
                    // Workout complete
                    clearInterval(cfInterval);
                    cfInterval = null;
                    cfRunning = false;
                    showComplete();
                    document.getElementById('cf-start-btn').classList.remove('hidden');
                    document.getElementById('cf-pause-btn').classList.add('hidden');
                } else if (cfPhaseSeconds <= 0) {
                    // Next round
                    cfCurrentRound++;
                    cfPhaseSeconds = cfIntervalMinutes * 60;
                    playCrossfitBeep('work');
                }
                break;

            case 'timer':
                if (cfTimerDirection === 'down') {
                    cfCurrentSeconds--;

                    if (cfCurrentSeconds <= 3 && cfCurrentSeconds > 0) {
                        playCrossfitBeep('countdown');
                    }

                    if (cfCurrentSeconds <= 0) {
                        clearInterval(cfInterval);
                        cfInterval = null;
                        cfRunning = false;
                        showComplete();
                        document.getElementById('cf-start-btn').classList.remove('hidden');
                        document.getElementById('cf-pause-btn').classList.add('hidden');
                    }
                } else {
                    cfCurrentSeconds++;

                    // Check cap
                    if (cfCapSeconds > 0 && cfCurrentSeconds >= cfCapSeconds) {
                        clearInterval(cfInterval);
                        cfInterval = null;
                        cfRunning = false;
                        showComplete();
                        document.getElementById('cf-start-btn').classList.remove('hidden');
                        document.getElementById('cf-pause-btn').classList.add('hidden');
                    }
                }
                break;

            case 'tabata':
            case 'intervals':
                cfPhaseSeconds--;

                if (cfPhaseSeconds <= 3 && cfPhaseSeconds > 0) {
                    playCrossfitBeep('countdown');
                }

                if (cfPhaseSeconds <= 0) {
                    if (cfPhase === 'work') {
                        // Switch to rest
                        cfPhase = 'rest';
                        cfPhaseSeconds = cfRestSeconds;
                        playCrossfitBeep('rest');
                    } else {
                        // Rest finished
                        if (cfCurrentRound >= cfTotalRounds) {
                            // Workout complete
                            clearInterval(cfInterval);
                            cfInterval = null;
                            cfRunning = false;
                            showComplete();
                            document.getElementById('cf-start-btn').classList.remove('hidden');
                            document.getElementById('cf-pause-btn').classList.add('hidden');
                        } else {
                            // Next round
                            cfCurrentRound++;
                            cfPhase = 'work';
                            cfPhaseSeconds = cfWorkSeconds;
                            playCrossfitBeep('work');
                        }
                    }
                }
                break;
        }

        updateCrossfitDisplay();
    }, 1000);

    updateCrossfitDisplay();
}

function pauseCrossfitTimer() {
    if (cfRunning) {
        clearInterval(cfInterval);
        cfInterval = null;
        cfRunning = false;
        cfPaused = true;
        document.getElementById('cf-pause-btn').textContent = t('cfResume');
        document.getElementById('cf-display').classList.remove('running');
    } else if (cfPaused) {
        startCrossfitTimer();
    }
}

function resetCrossfitTimer() {
    clearInterval(cfInterval);
    cfInterval = null;
    cfRunning = false;
    cfPaused = false;
    cfCurrentRound = 1;
    cfPhase = 'work';
    cfPhaseSeconds = 0;
    cfCurrentSeconds = 0;

    document.getElementById('cf-start-btn').classList.remove('hidden');
    document.getElementById('cf-pause-btn').classList.add('hidden');
    document.getElementById('cf-display').classList.remove('running', 'rest-phase', 'warning', 'complete');
    document.getElementById('cf-phase').classList.remove('work', 'rest', 'complete', 'ready');

    updateCrossfitDisplay();
}

// CrossFit Timer event listeners
document.querySelectorAll('.cf-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setCrossfitMode(btn.dataset.mode);
    });
});

document.getElementById('cf-start-btn').addEventListener('click', startCrossfitTimer);
document.getElementById('cf-pause-btn').addEventListener('click', pauseCrossfitTimer);
document.getElementById('cf-reset-btn').addEventListener('click', resetCrossfitTimer);

// EMOM presets
document.querySelectorAll('#cf-presets-emom .cf-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('cf-emom-duration').value = btn.dataset.duration;
        updateCrossfitDisplay();
    });
});

// Timer presets
document.querySelectorAll('#cf-presets-timer .cf-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('cf-timer-duration').value = btn.dataset.duration;
        updateCrossfitDisplay();
    });
});

// Timer direction toggle
document.querySelectorAll('.cf-direction-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const direction = btn.dataset.direction;
        if (direction === cfTimerDirection) return;

        cfTimerDirection = direction;

        // Update toggle buttons
        document.querySelectorAll('.cf-direction-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide duration vs cap inputs
        const durationGroup = document.getElementById('cf-timer-duration-group');
        const capGroup = document.getElementById('cf-timer-cap-group');

        if (direction === 'down') {
            durationGroup.classList.remove('hidden');
            capGroup.classList.add('hidden');
        } else {
            durationGroup.classList.add('hidden');
            capGroup.classList.remove('hidden');
        }

        updateCrossfitDisplay();
    });
});

// Update display when inputs change
document.getElementById('cf-emom-duration').addEventListener('change', updateCrossfitDisplay);
document.getElementById('cf-emom-interval').addEventListener('change', updateCrossfitDisplay);
document.getElementById('cf-timer-duration').addEventListener('change', updateCrossfitDisplay);
document.getElementById('cf-timer-cap').addEventListener('change', updateCrossfitDisplay);
document.getElementById('cf-intervals-work').addEventListener('change', updateCrossfitDisplay);
document.getElementById('cf-intervals-rest').addEventListener('change', updateCrossfitDisplay);
document.getElementById('cf-intervals-rounds').addEventListener('change', updateCrossfitDisplay);

// Initialize display
updateCrossfitDisplay();

// ========== Initialize Language ==========
setLanguage(detectBrowserLanguage());

// ========== Initialize Navigation from URL Hash ==========
(function initNavFromHash() {
    const hash = window.location.hash.slice(1);
    const defaultTool = 'plate-calculator';
    const toolId = hash || defaultTool;

    // Check if the tool exists
    const toolSection = document.getElementById(toolId);
    if (toolSection && toolSection.classList.contains('tool-section')) {
        showTool(toolId, false);
    }

    // Set initial history state (replaceState to not add extra entry)
    const currentTool = hash || defaultTool;
    history.replaceState({ tool: currentTool }, '', `#${currentTool}`);
})();
