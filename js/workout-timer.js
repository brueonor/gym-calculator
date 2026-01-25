import { t } from './translations.js';

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
let cfStartCountdown = 5; // seconds before workout starts (0, 3, 5, or 10)
let cfInStartCountdown = false; // true during the initial countdown phase

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

    // Handle start countdown phase
    if (cfInStartCountdown) {
        timeEl.textContent = cfCurrentSeconds.toString();
        phaseEl.textContent = t('cfGetReady');
        phaseEl.classList.add('ready');
        roundEl.textContent = '';
        return;
    }

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

function initWorkoutSettings() {
    // Initialize based on mode
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
            const restVal = parseInt(document.getElementById('cf-intervals-rest').value);
            cfRestSeconds = isNaN(restVal) ? 20 : restVal;
            cfTotalRounds = parseInt(document.getElementById('cf-intervals-rounds').value) || 8;
            cfPhaseSeconds = cfWorkSeconds;
            break;
    }
}

function startCrossfitTimer() {
    if (cfRunning || cfInStartCountdown) return;

    // Update button states
    document.getElementById('cf-start-btn').classList.add('hidden');
    document.getElementById('cf-pause-btn').classList.remove('hidden');
    document.getElementById('cf-pause-btn').textContent = t('cfPause');

    if (!cfPaused) {
        // Fresh start - check if we need initial countdown
        if (cfStartCountdown > 0) {
            // Start with countdown
            cfInStartCountdown = true;
            cfCurrentSeconds = cfStartCountdown;
            updateCrossfitDisplay();
            playCrossfitBeep('countdown');

            cfInterval = setInterval(() => {
                cfCurrentSeconds--;

                if (cfCurrentSeconds > 0) {
                    playCrossfitBeep('countdown');
                    updateCrossfitDisplay();
                } else {
                    // Countdown finished, start actual workout
                    clearInterval(cfInterval);
                    cfInStartCountdown = false;
                    initWorkoutSettings();
                    playCrossfitBeep('work');
                    cfRunning = true;
                    startWorkoutInterval();
                    updateCrossfitDisplay();
                }
            }, 1000);
            return;
        }

        // No countdown, start directly
        initWorkoutSettings();
        playCrossfitBeep('work');
    }

    cfRunning = true;
    cfPaused = false;
    startWorkoutInterval();
    updateCrossfitDisplay();
}

function startWorkoutInterval() {
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
                        // Work finished - check if we have rest or go to next round
                        if (cfRestSeconds > 0) {
                            // Switch to rest
                            cfPhase = 'rest';
                            cfPhaseSeconds = cfRestSeconds;
                            playCrossfitBeep('rest');
                        } else {
                            // No rest - go directly to next round or complete
                            if (cfCurrentRound >= cfTotalRounds) {
                                clearInterval(cfInterval);
                                cfInterval = null;
                                cfRunning = false;
                                showComplete();
                                document.getElementById('cf-start-btn').classList.remove('hidden');
                                document.getElementById('cf-pause-btn').classList.add('hidden');
                            } else {
                                cfCurrentRound++;
                                cfPhaseSeconds = cfWorkSeconds;
                                playCrossfitBeep('work');
                            }
                        }
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
    if (cfInStartCountdown) {
        // Cancel start countdown
        clearInterval(cfInterval);
        cfInterval = null;
        cfInStartCountdown = false;
        document.getElementById('cf-start-btn').classList.remove('hidden');
        document.getElementById('cf-pause-btn').classList.add('hidden');
        updateCrossfitDisplay();
    } else if (cfRunning) {
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

export function resetCrossfitTimer() {
    clearInterval(cfInterval);
    cfInterval = null;
    cfRunning = false;
    cfPaused = false;
    cfInStartCountdown = false;
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

export function initWorkoutTimer() {
    // Mode buttons
    document.querySelectorAll('.cf-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setCrossfitMode(btn.dataset.mode);
        });
    });

    // Start countdown selector
    document.querySelectorAll('.cf-countdown-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const countdown = parseInt(btn.dataset.countdown);
            cfStartCountdown = countdown;

            // Update toggle buttons
            document.querySelectorAll('.cf-countdown-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
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
}
