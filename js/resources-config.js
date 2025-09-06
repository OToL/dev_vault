// Resources-specific template
function resourceTemplate(resource) {
    const isFavorite = resource.tags && resource.tags.includes('favorite');
    
    return `
        <div class="resource-card">
            <div class="resource-header">
                <div class="resource-title-container">
                    <a href="${resource.url || '#'}" class="resource-title" ${resource.url ? 'target="_blank" rel="noopener"' : ''}>${resource.title}</a>
                    ${isFavorite ? '<span class="favorite-star">⭐</span>' : ''}
                </div>
            </div>
            <div class="resource-description">${resource.description || ''}</div>
            <div class="resource-tags">
                ${(resource.tags || []).filter(tag => tag !== 'favorite').sort().map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// Initialize resources filter when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.itemFilter = new ItemFilter({
        dataUrl: '/data/resources.json',
        dataKey: 'resources',
        containerId: 'resourcesGrid',
        noResultsId: 'noResults',
        searchInputId: 'searchInput',
        tagFiltersId: 'tagFilters',
        itemTemplate: resourceTemplate,
        cardClass: 'resource-card'
    });
});
