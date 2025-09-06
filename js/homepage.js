async function updateStats() {
    try {
        const [toolsResponse, resourcesResponse] = await Promise.all([
            fetch('/data/tools.json'),
            fetch('/data/resources.json')
        ]);
        
        const toolsData = await toolsResponse.json();
        const resourcesData = await resourcesResponse.json();
        
        const toolsStatEl = document.querySelector('.tools-stat');
        const resourcesStatEl = document.querySelector('.resources-stat');
        
        if (toolsStatEl) {
            toolsStatEl.textContent = `${toolsData.tools.length} tools indexed`;
        }
        
        if (resourcesStatEl) {
            resourcesStatEl.textContent = `${resourcesData.resources.length} resources indexed`;
        }
    } catch (error) {
        console.error('Error loading stats:', error);
        // Fallback to static text if fetch fails
        const toolsStatEl = document.querySelector('.tools-stat');
        const resourcesStatEl = document.querySelector('.resources-stat');
        
        if (toolsStatEl) toolsStatEl.textContent = '5+ tools indexed';
        if (resourcesStatEl) resourcesStatEl.textContent = '2+ resources indexed';
    }
}

document.addEventListener('DOMContentLoaded', updateStats);
