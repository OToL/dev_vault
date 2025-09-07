async function updateStats() {
    try {
        const [toolsResponse, resourcesResponse, runbooksResponse] = await Promise.all([
            fetch('/data/tools.json'),
            fetch('/data/resources.json'),
            fetch('/data/runbooks.json').catch(() => null) // Handle if runbooks.json doesn't exist
        ]);
        
        const toolsData = await toolsResponse.json();
        const resourcesData = await resourcesResponse.json();
        
        const toolsStatEl = document.querySelector('.tools-stat');
        const resourcesStatEl = document.querySelector('.resources-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        
        if (toolsStatEl) {
            toolsStatEl.textContent = `${toolsData.tools.length} tools indexed`;
        }
        
        if (resourcesStatEl) {
            resourcesStatEl.textContent = `${resourcesData.resources.length} resources indexed`;
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
        const resourcesStatEl = document.querySelector('.resources-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        
        if (toolsStatEl) toolsStatEl.textContent = '2+ tools indexed';
        if (resourcesStatEl) resourcesStatEl.textContent = '2+ resources indexed';
        if (runbooksStatEl) runbooksStatEl.textContent = '2+ runbooks available';
    }
}

document.addEventListener('DOMContentLoaded', updateStats);
