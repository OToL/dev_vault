---
layout: main_section.njk
title: Bookmarks
---

# Development Boomarks

<div class="filter-section">
    <div class="filter-toggle" onclick="toggleFilters()">
        <h3>🔍 Filters</h3>
        <span class="arrow">▼</span>
    </div>
    <div class="filter-content hidden" id="filterContent">
        <div class="search-box">
            <input type="text" id="searchInput" placeholder="Search ..." oninput="itemFilter.filterItems()">
        </div>
        <div class="tag-filters" id="tagFilters">
            <!-- Tags will be populated by JavaScript -->
        </div>
    </div>
</div>

<div class="bookmarks-grid" id="bookmarksGrid">
    <!-- Bookmarks will be populated by JavaScript -->
</div>

<div class="no-results" id="noResults" style="display: none;">
    No bookmarks found matching your criteria. 
</div>

<script src="/js/item-filter.js"></script>
<script src="/js/bookmarks-config.js"></script>
