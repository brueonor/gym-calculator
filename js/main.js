// ========== Main Entry Point ==========
import { t, setLanguage, detectBrowserLanguage, initLanguageToggle } from './translations.js';
import { initNavigation, initNavigationFromHash, setResetAllToolsCallback } from './navigation.js';
import { initPlateCalculator, resetPlateCalculator, updateCalcBarSelect } from './plate-calculator.js';
import { initPlateBuilder, resetPlateBuilder, updateBuilderBarSelect } from './plate-builder.js';
import { initOneRM, resetOneRM } from './one-rm.js';
import { initPercentageChart, resetPercentageChart, generatePercentageTable } from './percentage-chart.js';
import { initUnitConverter, resetUnitConverter } from './unit-converter.js';
import { initHRZones, resetHRZones } from './hr-zones.js';
import { initRestTimer, resetTimer } from './rest-timer.js';
import { initWorkoutTimer, resetCrossfitTimer } from './workout-timer.js';

// Reset all tools function
function resetAllTools() {
    resetPlateCalculator();
    resetPlateBuilder();
    resetOneRM();
    resetPercentageChart();
    resetUnitConverter();
    resetHRZones();
    resetTimer();
    resetCrossfitTimer();
}

// Initialize all modules
function init() {
    // Set up reset callback for navigation
    setResetAllToolsCallback(resetAllTools);

    // Initialize language
    initLanguageToggle(updateCalcBarSelect, updateBuilderBarSelect);
    setLanguage(detectBrowserLanguage(), updateCalcBarSelect, updateBuilderBarSelect);

    // Initialize navigation
    initNavigation();

    // Initialize all tools
    initPlateCalculator();
    initPlateBuilder();
    initOneRM(generatePercentageTable);
    initPercentageChart();
    initUnitConverter();
    initHRZones();
    initRestTimer();
    initWorkoutTimer();

    // Initialize navigation from URL hash (must be last)
    initNavigationFromHash();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
