# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static gym calculator web app hosted on GitHub Pages. Pure HTML/CSS/JavaScript with no build tools or dependencies.

## Development

Open `index.html` directly in a browser to test. No build step or server required.

## Deployment

When deploying changes to GitHub Pages, bump the version query string in `index.html` to bust browser cache:
- `styles.css?v=1.0.0` → `styles.css?v=1.0.1`
- `script.js?v=1.0.0` → `script.js?v=1.0.1`

## Architecture

- **index.html**: Single-page app with navigation tabs for different tools
- **styles.css**: Dark theme with responsive breakpoints for mobile/tablet/desktop
- **script.js**: Tool logic with modular functions per calculator

### Adding New Tools

1. Add a nav button in `.nav-list` inside the sidebar with `data-tool="tool-id"`
2. Add a `<section id="tool-id" class="tool-section">` inside `.container`
3. Add tool logic in `script.js` - navigation and menu close are already wired up
4. Add translations for the tool name and any UI text in `TRANSLATIONS` object

### Current Tools

**Plate Calculator**: Input target weight, calculates plates needed per side using greedy algorithm. Users can select which plates are available at their gym via colored checkboxes.

**Plate Builder**: Click plate buttons to add weight to the bar. Shows running total and visual representation. Click plate tags to remove plates.

**1RM Estimator**: Estimates one-rep max from weight and reps. Supports Epley (default), Brzycki, O'Connor, and Mayhew/Wathen formulas. Includes toggle to view percentage breakdown.

**Percentage Chart**: Shows weights at different percentages of 1RM (100% down to 30% in 5% increments).

**Unit Converter**: Real-time conversion between lbs and kg.

**HR Zone Calculator**: Calculates heart rate training zones using the Karvonen Formula. Takes age and resting heart rate as inputs, with optional max heart rate override (defaults to 220 - age). Displays 5 zones from recovery (50-60%) to max effort (90-100%).

**Rest Timer**: Countdown timer for rest periods between sets. Manual input for minutes/seconds plus quick-add buttons (+30s, +1min, +90s, +3min, +5min). Features start/pause/reset controls, visual feedback (green when running, orange warning at 10s, red flash when done), and audio alert beeps on completion.

**Workout Timer**: Multi-mode timer for various workout styles with 4 modes:
- **EMOM**: Every Minute On the Minute. Configurable interval (1-5 min) and total duration. Beeps at each interval start.
- **Timer**: Simple countdown or count-up timer. Toggle between countdown (with duration) and count-up (stopwatch with optional time cap). Presets for common durations.
- **Tabata**: Classic 20s work / 10s rest for 8 rounds.
- **Intervals**: Custom work/rest timer with configurable work time, rest time, and number of rounds.

Features distinct audio cues (high beep for work, double beep for rest, countdown beeps at 3-2-1), phase indicators (green for work, orange for rest), and round tracking.

## Unit Support

All tools (except Unit Converter) have a lbs/kg toggle. Plate tools use standard plate sets:
- **lbs**: 55, 45, 35, 25, 15, 10, 5, 2.5
- **kg**: 25, 20, 15, 10, 5, 2.5, 1.25

Plate colors (competition standard): 55/25kg=red, 45/20kg=blue, 35/15kg=yellow, 25/10kg=green, 10/5kg=white, 5/2.5kg=blue, 2.5/1.25kg=green

Bar weights: 45/35 lbs or 20/15 kg (Olympic/Women's)

## Color Palette

Modern neutral dark theme using pure grayscale colors:
- `#0a0a0a` - Main background (near black)
- `#161616` - Tool sections/cards
- `#141414` - Header, sidebar
- `#1e1e1e` - Plate tags, hover states
- `#2a2a2a` - Borders, active button states
- `#111111` - Input fields, toggles, result areas
- `#444444` - Focus/hover border states
- `#e8e8e8` - Primary text
- `#888888` - Secondary text/labels
- `#555555` - Placeholder text, muted text

## Responsive Design

Fully responsive with breakpoints:
- **Large Desktop (1200px+)**: Wider container (600px), more padding
- **Desktop (1024px - 1199px)**: Standard layout (550px container)
- **Tablet (768px - 1023px)**: Adjusted sidebar width (300px)
- **Small Tablet (481px - 767px)**: Compact header, smaller spacing
- **Mobile (480px and below)**: Full-width sidebar, stacked converter inputs, scaled barbell visual
- **Extra small mobile (320px and below)**: Ultra-compact layout

Additional responsive features:
- Touch device optimizations (active states instead of hover)
- Landscape mobile support (compact header)

## Internationalization (i18n)

Supports English and French. Language toggle in header. Default language detected from browser (`navigator.language`).

- Translations in `TRANSLATIONS` object at top of script.js
- Use `data-i18n="key"` attribute for text content
- Use `data-i18n-placeholder="key"` for input placeholders
- Call `t('key')` in JavaScript for translated strings
- Dynamic elements (bar selects, error messages) use `t()` function

## Key Functions in script.js

- `setLanguage(lang)` - Switch language and update all UI text
- `resetAllTools()` - Clear all inputs when switching tools
- `calculatePlates(weight, plates)` - Greedy algorithm for plate calculation
- `renderBarbellVisual(plates, containerId, unit)` - Draw barbell with colored plates
- `calculate1RM(weight, reps, formula)` - 1RM estimation with multiple formulas
- `calculateKarvonen(maxHR, restingHR, intensityPct)` - Karvonen formula for target HR

## Constraints

- No npm, no bundlers, no frameworks - must work as static files on GitHub Pages
- All styles in single CSS file, all logic in single JS file
- Plate CSS classes use unit prefix to avoid conflicts (e.g., `.plate-lbs-45`, `.plate-kg-20`)
