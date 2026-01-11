# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static gym calculator web app hosted on GitHub Pages. Pure HTML/CSS/JavaScript with no build tools or dependencies.

## Development

Open `index.html` directly in a browser to test. No build step or server required.

## Architecture

- **index.html**: Single-page app with navigation tabs for different tools
- **styles.css**: Dark theme with CSS variables, mobile-responsive
- **script.js**: Tool logic with modular functions per calculator

### Adding New Tools

1. Add a nav button in `.nav-list` inside the sidebar with `data-tool="tool-id"`
2. Add a `<section id="tool-id" class="tool-section">` inside `.container`
3. Add tool logic in `script.js` - navigation and menu close are already wired up

### Current Tools

**Plate Calculator**: Input target weight, calculates plates needed per side using greedy algorithm. Users can select which plates are available at their gym.

**Plate Builder**: Click plate buttons to add weight to the bar. Shows running total and visual representation. Click plate tags to remove plates.

**1RM Estimator**: Estimates one-rep max from weight and reps. Supports Epley (default), Brzycki, O'Connor, and Mayhew/Wathen formulas. Includes toggle to view percentage breakdown.

**Percentage Chart**: Shows weights at different percentages of 1RM (100% down to 30% in 5% increments).

**Unit Converter**: Real-time conversion between lbs and kg.

## Unit Support

All tools (except Unit Converter) have a lbs/kg toggle. Plate tools use standard plate sets:
- **lbs**: 45, 35, 25, 15, 10, 5, 2.5
- **kg**: 25, 20, 15, 10, 5, 2.5, 1.25

Bar weights: 45/35 lbs or 20/15 kg (Olympic/Women's)

## Internationalization (i18n)

Supports English and French. Language toggle in header. Default language detected from browser (`navigator.language`).

- Translations in `TRANSLATIONS` object at top of script.js
- Use `data-i18n="key"` attribute for text content
- Use `data-i18n-placeholder="key"` for input placeholders
- Call `t('key')` in JavaScript for translated strings
- Dynamic elements (bar selects, error messages) use `t()` function

## Constraints

- No npm, no bundlers, no frameworks - must work as static files on GitHub Pages
