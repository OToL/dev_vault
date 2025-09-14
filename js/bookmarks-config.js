import { getBaseUrl } from './utils.js';

// bookmarks-specific template
function bookmarkTemplate(bookmark) {
    const isFavorite = bookmark.tags && bookmark.tags.includes('favorite');
    
    return `
        <div class="bookmark-card">
            <div class="bookmark-header">
                <div class="bookmark-title-container">
                    <a href="${bookmark.url || '#'}" class="bookmark-title" ${bookmark.url ? 'target="_blank" rel="noopener"' : ''}>${bookmark.title}</a>
                    ${isFavorite ? '<span class="favorite-star">⭐</span>' : ''}
                </div>
            </div>
            <div class="bookmark-description">${bookmark.description || ''}</div>
            <div class="bookmark-tags">
                ${(bookmark.tags || []).filter(tag => tag !== 'favorite').sort().map(tag => `<span class="bookmark-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// Initialize bookmarks filter when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = getBaseUrl();
    window.itemFilter = new ItemFilter({
        dataUrl: `${baseUrl}/data/bookmarks.json`,
        dataKey: 'bookmarks',
        containerId: 'bookmarksGrid',
        noResultsId: 'noResults',
        searchInputId: 'searchInput',
        tagFiltersId: 'tagFilters',
        itemTemplate: bookmarkTemplate,
        cardClass: 'bookmark-card'
    });
});
