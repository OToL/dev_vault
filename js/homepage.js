function pluralize(count, singular, plural = null) {
    if (plural === null) {
        plural = singular + 's';
    }
    return count === 1 ? `${count} ${singular}` : `${count} ${plural}`;
}

async function updateStats() {
    try {
        const [toolsResponse, bookmarksResponse, runbooksResponse] = await Promise.all([
            fetch('/data/tools.json'),
            fetch('/data/bookmarks.json'),
            fetch('/data/runbooks-count.json').catch(() => null) 
        ]);
        
        const toolsData = await toolsResponse.json();
        const bookmarksData = await bookmarksResponse.json();
        const runbooksData = await runbooksResponse.json();
        
        const toolsStatEl = document.querySelector('.tools-stat');
        const bookmarksStatEl = document.querySelector('.bookmarks-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        
        if (toolsStatEl) {
            toolsStatEl.textContent = `${toolsData.tools.length} tools indexed`;
        }
        
        if (bookmarksStatEl) {
            bookmarksStatEl.textContent = `${bookmarksData.bookmarks.length} bookmarks indexed`;
        }
        
        if (runbooksStatEl) {
            runbooksStatEl.textContent = `${pluralize(runbooksData.count, 'runbook')} available`;
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
