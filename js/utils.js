// Shared utility functions for Dev Vault

// Detect base URL for GitHub Pages compatibility
export function getBaseUrl() {
    const path = window.location.pathname;
    if (path.startsWith('/dev_vault/')) {
        return '/dev_vault';
    }
    return '';
}