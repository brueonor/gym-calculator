import { t } from './translations.js';
import { RM_FORMULAS, unitState } from './constants.js';

// ========== 1RM Estimator ==========
let currentRMValue = 0;

export function getCurrentRMValue() {
    return currentRMValue;
}

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

export function resetOneRM() {
    document.getElementById('rm-weight').value = '';
    document.getElementById('rm-reps').value = '';
    document.getElementById('rm-result').classList.add('hidden');
    document.getElementById('rm-error').classList.add('hidden');
    document.getElementById('rm-percentages').classList.add('hidden');
    document.getElementById('toggle-rm-percentages').textContent = t('rmViewPercentages');
}

export function initOneRM(generatePercentageTable) {
    // Unit toggle
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
}
