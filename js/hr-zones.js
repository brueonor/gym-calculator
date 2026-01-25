import { t } from './translations.js';
import { HR_ZONES } from './constants.js';

// ========== HR Zone Calculator ==========
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

export function resetHRZones() {
    document.getElementById('hr-age').value = '';
    document.getElementById('hr-resting').value = '';
    document.getElementById('hr-max').value = '';
    document.getElementById('hr-result').classList.add('hidden');
    document.getElementById('hr-error').classList.add('hidden');
}

export function initHRZones() {
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
}
