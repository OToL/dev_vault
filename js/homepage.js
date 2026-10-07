import { getBaseUrl } from './utils.js';

function pluralize(count, singular, plural = null) {
    if (plural === null) {
        plural = singular + 's';
    }
    return count === 1 ? `${count} ${singular}` : `${count} ${plural}`;
}

async function updateStats() {
    const baseUrl = getBaseUrl();
    try {
        const [toolsResponse, runbooksResponse, bookmarksResponse, consolesResponse, gamesResponse] = await Promise.all([
            fetch(`${baseUrl}/data/tools.json`),
            fetch(`${baseUrl}/data/runbooks-count.json`),
            fetch(`${baseUrl}/data/bookmarks-count.json`).catch(() => null),
            fetch(`${baseUrl}/data/retrogaming/consoles.json`),
            fetch(`${baseUrl}/data/retrogaming/games.json`)
        ]);
        
        const toolsData = await toolsResponse.json();
        const bookmarksData = await bookmarksResponse.json();
        const runbooksData = await runbooksResponse.json();
        const consolesData = await consolesResponse.json();
        const gamesData = await gamesResponse.json();
        
        const toolsStatEl = document.querySelector('.tools-stat');
        const bookmarksStatEl = document.querySelector('.bookmarks-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        const retrogamingStatEl = document.querySelector('.retrogaming-stat');
        
        if (toolsStatEl) {
            toolsStatEl.textContent = `${pluralize(toolsData.tools.length, 'tool')} indexed`;
        }
        
        if (bookmarksStatEl) {
            bookmarksStatEl.textContent = `${pluralize(bookmarksData.count, 'bookmark')} indexed`;
        }
        
        if (runbooksStatEl) {
            runbooksStatEl.textContent = `${pluralize(runbooksData.count, 'run book')} available`;
        }

        if (retrogamingStatEl) {
            retrogamingStatEl.textContent = `${pluralize(consolesData.consoles.length, 'console')} · ${pluralize(gamesData.games.length, 'game')}`;
        }
    } catch (error) {
        console.error('Error loading stats:', error);

        // Fallback to static text if fetch fails
        const toolsStatEl = document.querySelector('.tools-stat');
        const bookmarksStatEl = document.querySelector('.bookmarks-stat');
        const runbooksStatEl = document.querySelector('.runbooks-stat');
        const retrogamingStatEl = document.querySelector('.retrogaming-stat');
        
        if (toolsStatEl) toolsStatEl.textContent = 'n/a';
        if (bookmarksStatEl) bookmarksStatEl.textContent = 'n/a';
        if (runbooksStatEl) runbooksStatEl.textContent = 'n/a';
        if (retrogamingStatEl) retrogamingStatEl.textContent = 'n/a';
    }
}

document.addEventListener('DOMContentLoaded', updateStats);
