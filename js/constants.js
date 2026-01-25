import { t } from './translations.js';

// ========== Unit Configuration ==========
export const PLATES = {
    lbs: [55, 45, 35, 25, 15, 10, 5, 2.5],
    kg: [25, 20, 15, 10, 5, 2.5, 1.25]
};

export const PLATE_COLORS = {
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

export function getBarOptions(unit) {
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
export const unitState = {
    calculator: 'lbs',
    builder: 'lbs',
    rm: 'lbs',
    chart: 'lbs'
};

// Conversion constants
export const LBS_TO_KG = 0.453592;
export const KG_TO_LBS = 2.20462;

// Percentage chart values
export const PERCENTAGES = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30];

// HR Zones configuration
export const HR_ZONES = [
    { key: 'hrZone1', minPct: 50, maxPct: 60 },
    { key: 'hrZone2', minPct: 60, maxPct: 70 },
    { key: 'hrZone3', minPct: 70, maxPct: 80 },
    { key: 'hrZone4', minPct: 80, maxPct: 90 },
    { key: 'hrZone5', minPct: 90, maxPct: 100 }
];

// 1RM Formulas
export const RM_FORMULAS = {
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
