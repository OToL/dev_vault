// Detect base URL for GitHub Pages compatibility
function getBaseUrl() {
    const path = window.location.pathname;
    if (path.startsWith('/dev_vault/')) {
        return '/dev_vault';
    }
    return '';
}

// Tools-specific template
function toolTemplate(tool) {
    const baseUrl = getBaseUrl();
    const imageUrl = tool.image || `${baseUrl}/images/tools_default.png`;
    const isFavorite = tool.tags && tool.tags.includes('favorite');

    return `
        <div class="tool-card">
            <div class="tool-header">
                <img src="${imageUrl}" alt="${tool.title}" class="tool-image" onerror="this.src='${baseUrl}/images/tools_default.png'">
                <div class="tool-title-container">
                    <a href="${tool.url || '#'}" class="tool-title" ${tool.url ? 'target="_blank" rel="noopener"' : ''}>${tool.title}</a>
                    ${isFavorite ? '<span class="favorite-star">⭐</span>' : ''}
                </div>
            </div>
            <div class="tool-description">${tool.description || ''}</div>
            <div class="tool-tags">
                ${(tool.tags || []).filter(tag => tag !== 'favorite').sort().map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// Initialize tools filter when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = getBaseUrl();
    window.itemFilter = new ItemFilter({
        dataUrl: `${baseUrl}/data/tools.json`,
        dataKey: 'tools',
        containerId: 'toolsGrid',
        noResultsId: 'noResults',
        searchInputId: 'searchInput',
        tagFiltersId: 'tagFilters',
        itemTemplate: toolTemplate,
        cardClass: 'tool-card'
    });
});
