// Tools-specific template
function toolTemplate(tool) {
    const imageUrl = tool.image || '/images/tools_default.png';
    const isFavorite = tool.tags && tool.tags.includes('favorite');
    
    return `
        <div class="tool-card">
            <div class="tool-header">
                <img src="${imageUrl}" alt="${tool.title}" class="tool-image" onerror="this.src='/images/tools_default.png'">
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
    window.itemFilter = new ItemFilter({
        dataUrl: '/data/tools.json',
        dataKey: 'tools',
        containerId: 'toolsGrid',
        noResultsId: 'noResults',
        searchInputId: 'searchInput',
        tagFiltersId: 'tagFilters',
        itemTemplate: toolTemplate,
        cardClass: 'tool-card'
    });
});
