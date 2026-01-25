// ========== Navigation ==========
let resetAllToolsCallback = null;

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

export function toggleMenu() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

export function showTool(toolId, pushState = true) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.nav-btn[data-tool="${toolId}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update tool sections
    document.querySelectorAll('.tool-section').forEach(s => s.classList.remove('active'));
    const toolSection = document.getElementById(toolId);
    if (toolSection) toolSection.classList.add('active');

    // Reset all inputs and results
    if (resetAllToolsCallback) {
        resetAllToolsCallback();
    }

    // Close sidebar if open
    if (sidebar.classList.contains('open')) {
        toggleMenu();
    }

    // Update URL hash and history
    if (pushState && window.location.hash !== `#${toolId}`) {
        history.pushState({ tool: toolId }, '', `#${toolId}`);
    }
}

export function setResetAllToolsCallback(callback) {
    resetAllToolsCallback = callback;
}

export function getSidebar() {
    return sidebar;
}

export function initNavigation() {
    // Menu toggle
    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Nav button clicks
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
}

export function initNavigationFromHash() {
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
}
