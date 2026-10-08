---
layout: main_section.njk
title: Retrogaming
---

# Retrogaming

<div class="retro-tabs">
    <button class="retro-tab" data-tab="consoles">🕹️ Consoles</button>
    <button class="retro-tab" data-tab="games">👾 Games</button>
</div>

<div class="retro-panel" id="consoles-panel">
    <div class="retro-filters">
        <label>Status
            <select id="consolesOwnedFilter"></select>
        </label>
    </div>
    <div class="retro-table-wrapper">
        <table class="retro-table" id="consolesTable"></table>
    </div>
    <div class="no-results" id="consolesNoResults" style="display: none;">
        No consoles match the selected filters.
    </div>
</div>

<div class="retro-panel" id="games-panel">
    <div class="retro-filters">
        <label>Search
            <input type="search" id="gamesSearch" placeholder="e.g. zelda oot">
        </label>
        <label>Platform
            <select id="gamesPlatformFilter"></select>
        </label>
        <label>Status
            <select id="gamesOwnedFilter"></select>
        </label>
    </div>
    <div class="retro-table-wrapper">
        <table class="retro-table" id="gamesTable"></table>
    </div>
    <div class="no-results" id="gamesNoResults" style="display: none;">
        No games match the selected filters.
    </div>
</div>

<script type="module" src="{{ baseUrl }}/js/retrogaming.js"></script>
