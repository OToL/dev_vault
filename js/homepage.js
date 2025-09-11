async function updateRunbooksCount() {
    try {
        const response = await fetch('/data/runbooks-count.json');
        const data = await response.json();
        document.getElementById('runbooks-count').textContent = data.count;
    } catch (error) {
        console.error('Error loading runbooks count:', error);
    }
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
            runbooksStatEl.textContent = `${bookmarksData.bookmarks.length} runbooks available`;
        }
    } catch (error) {
        console.error('Error loading stats:', error);
        // Fallback to static text if fetch fails
        const toolsStatEl = document.querySelector('.tools-stat');
        const bookmarksStatEl = document.querySelector('.bookmarks-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        
        if (toolsStatEl) toolsStatEl.textContent = '2+ tools indexed';
        if (bookmarksStatEl) bookmarksStatEl.textContent = '2+ bookmarks indexed';
        if (runbooksStatEl) runbooksStatEl.textContent = '2+ runbooks available';
    }
}

document.addEventListener('DOMContentLoaded', updateStats);
