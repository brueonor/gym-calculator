import { t } from './translations.js';

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

export function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerRunning = false;
    timerSeconds = 0;
    updateTimerDisplay();
    document.getElementById('timer-start-btn').classList.remove('hidden');
    document.getElementById('timer-pause-btn').classList.add('hidden');
    document.getElementById('timer-display').classList.remove('timer-running', 'timer-warning', 'timer-done');
}

export function initRestTimer() {
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
}
