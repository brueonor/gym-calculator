// ========== Translations ==========
export const TRANSLATIONS = {
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
        cfStartIn: 'Start in',

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
        cfStartIn: 'Départ dans',

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

export function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

export function applyTranslations(updateCalcBarSelect, updateBuilderBarSelect) {
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
    if (updateCalcBarSelect) updateCalcBarSelect();
    if (updateBuilderBarSelect) updateBuilderBarSelect();
}

export function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith('fr')) {
        return 'fr';
    }
    return 'en';
}

export function setLanguage(lang, updateCalcBarSelect, updateBuilderBarSelect) {
    currentLang = lang;

    // Update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    applyTranslations(updateCalcBarSelect, updateBuilderBarSelect);
}

export function getCurrentLang() {
    return currentLang;
}

export function initLanguageToggle(updateCalcBarSelect, updateBuilderBarSelect) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang, updateCalcBarSelect, updateBuilderBarSelect);
        });
    });
}
