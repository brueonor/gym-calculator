import { t } from './translations.js';
import { PERCENTAGES, unitState } from './constants.js';
import { renderCalcPlateCheckboxes, updateCalcBarSelect, updateCalcUnitLabels, handleCalculate } from './plate-calculator.js';
import { toggleMenu, getSidebar } from './navigation.js';

// ========== Percentage Chart ==========
export function generatePercentageTable(oneRM, containerId, unit, clickable = false) {
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
    const sidebar = getSidebar();

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

export function resetPercentageChart() {
    document.getElementById('chart-1rm').value = '';
    document.getElementById('chart-result').classList.add('hidden');
    document.getElementById('chart-error').classList.add('hidden');
}

export function initPercentageChart() {
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
}
