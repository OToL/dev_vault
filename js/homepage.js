// Detect base URL for GitHub Pages compatibility
function getBaseUrl() {
    const path = window.location.pathname;
    if (path.startsWith('/dev_vault/')) {
        return '/dev_vault';
    }
    return '';
}

function pluralize(count, singular, plural = null) {
    if (plural === null) {
        plural = singular + 's';
    }
    return count === 1 ? `${count} ${singular}` : `${count} ${plural}`;
}

async function updateStats() {
    const baseUrl = getBaseUrl();
    try {
        const [toolsResponse, runbooksResponse, bookmarksResponse] = await Promise.all([
            fetch(`${baseUrl}/data/tools.json`),
            fetch(`${baseUrl}/data/runbooks-count.json`),
            fetch(`${baseUrl}/data/bookmarks-count.json`).catch(() => null)
        ]);
        
        const toolsData = await toolsResponse.json();
        const bookmarksData = await bookmarksResponse.json();
        const runbooksData = await runbooksResponse.json();
        
        const toolsStatEl = document.querySelector('.tools-stat');
        const bookmarksStatEl = document.querySelector('.bookmarks-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        
        if (toolsStatEl) {
            toolsStatEl.textContent = `${pluralize(toolsData.tools.length, 'tool')} indexed`;
        }
        
        if (bookmarksStatEl) {
            bookmarksStatEl.textContent = `${pluralize(bookmarksData.count, 'bookmark')} indexed`;
        }
        
        if (runbooksStatEl) {
            runbooksStatEl.textContent = `${pluralize(runbooksData.count, 'run book')} available`;
        }
    } catch (error) {
        console.error('Error loading stats:', error);

        // Fallback to static text if fetch fails
        const toolsStatEl = document.querySelector('.tools-stat');
        const bookmarksStatEl = document.querySelector('.bookmarks-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        
        if (toolsStatEl) toolsStatEl.textContent = 'n/a';
        if (bookmarksStatEl) bookmarksStatEl.textContent = 'n/a';
        if (runbooksStatEl) runbooksStatEl.textContent = 'n/a';
    }
}

document.addEventListener('DOMContentLoaded', updateStats);
