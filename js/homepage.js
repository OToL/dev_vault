async function updateStats() {
    try {
        const [toolsResponse, bookmarkrcesResponse, runbooksResponse] = await Promise.all([
            fetch('/data/tools.json'),
            fetch('/data/bookmarkrces.json'),
            fetch('/data/runbooks.json').catch(() => null) // Handle if runbooks.json doesn't exist
        ]);
        
        const toolsData = await toolsResponse.json();
        const bookmarkrcesData = await bookmarkrcesResponse.json();
        
        const toolsStatEl = document.querySelector('.tools-stat');
        const bookmarkrcesStatEl = document.querySelector('.bookmarkrces-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        
        if (toolsStatEl) {
            toolsStatEl.textContent = `${toolsData.tools.length} tools indexed`;
        }
        
        if (bookmarkrcesStatEl) {
            bookmarkrcesStatEl.textContent = `${bookmarkrcesData.bookmarkrces.length} bookmarkrces indexed`;
        }
        
        if (runbooksStatEl) {
            // Since runbooks use 11ty collections, we need to count differently
            // For now, set a static count or fetch from a generated JSON
            runbooksStatEl.textContent = `2+ runbooks available`;
        }
    } catch (error) {
        console.error('Error loading stats:', error);
        // Fallback to static text if fetch fails
        const toolsStatEl = document.querySelector('.tools-stat');
        const bookmarkrcesStatEl = document.querySelector('.bookmarkrces-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        
        if (toolsStatEl) toolsStatEl.textContent = '2+ tools indexed';
        if (bookmarkrcesStatEl) bookmarkrcesStatEl.textContent = '2+ bookmarkrces indexed';
        if (runbooksStatEl) runbooksStatEl.textContent = '2+ runbooks available';
    }
}

document.addEventListener('DOMContentLoaded', updateStats);
