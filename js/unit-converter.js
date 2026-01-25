import { LBS_TO_KG, KG_TO_LBS } from './constants.js';

// ========== Unit Converter ==========
export function resetUnitConverter() {
    document.getElementById('convert-lbs').value = '';
    document.getElementById('convert-kg').value = '';
}

export function initUnitConverter() {
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
}
