class ItemFilter {
    constructor(config) {
        this.config = {
            dataUrl: config.dataUrl,
            dataKey: config.dataKey || 'items',
            containerId: config.containerId || 'itemsGrid',
            noResultsId: config.noResultsId || 'noResults',
            searchInputId: config.searchInputId || 'searchInput',
            tagFiltersId: config.tagFiltersId || 'tagFilters',
            itemTemplate: config.itemTemplate,
            cardClass: config.cardClass || 'item-card'
        };
        
        this.items = [];
        this.activeFilters = {
            search: '',
            tags: new Set()
        };
        
        this.init();
    }
    
    async init() {
        try {
            await this.loadData();
            this.populateTagFilters();
            this.renderItems();
            this.setupEventListeners();
        } catch (error) {
            console.error('Error initializing ItemFilter:', error);
        }
    }
    
    async loadData() {
        const response = await fetch(this.config.dataUrl);
        const data = await response.json();
        this.items = data[this.config.dataKey] || data;
    }
    
    setupEventListeners() {
        const searchInput = document.getElementById(this.config.searchInputId);
        if (searchInput) {
            searchInput.addEventListener('input', () => this.filterItems());
        }
    }
    
    populateTagFilters() {
        const allTags = [...new Set(this.items.flatMap(item => item.tags || []))].sort();
        const tagFiltersEl = document.getElementById(this.config.tagFiltersId);
        
        if (tagFiltersEl) {
            tagFiltersEl.innerHTML = allTags.map(tag => 
                `<div class="tag-filter" onclick="itemFilter.toggleTagFilter('${tag}')">${tag}</div>`
            ).join('');
        }
    }
    
    toggleTagFilter(tag) {
        if (this.activeFilters.tags.has(tag)) {
            this.activeFilters.tags.delete(tag);
        } else {
            this.activeFilters.tags.add(tag);
        }
        
        this.updateTagFilterUI();
        this.filterItems();
    }
    
    updateTagFilterUI() {
        document.querySelectorAll('.tag-filter').forEach(el => {
            const tag = el.textContent;
            el.classList.toggle('active', this.activeFilters.tags.has(tag));
        });
    }
    
    filterItems() {
        const searchInput = document.getElementById(this.config.searchInputId);
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        this.activeFilters.search = searchTerm;
        
        const filteredItems = this.items.filter(item => {
            // Text search (searches in title and description)
            const matchesSearch = !searchTerm || 
                (item.title && item.title.toLowerCase().includes(searchTerm)) ||
                (item.description && item.description.toLowerCase().includes(searchTerm));
            
            // Tag filter
            const matchesTags = this.activeFilters.tags.size === 0 || 
                [...this.activeFilters.tags].every(tag => (item.tags || []).includes(tag));
            
            return matchesSearch && matchesTags;
        });
        
        this.renderItems(filteredItems);
    }
    
    renderItems(itemsToRender = this.items) {
        const container = document.getElementById(this.config.containerId);
        const noResults = document.getElementById(this.config.noResultsId);
        
        if (itemsToRender.length === 0) {
            if (container) container.style.display = 'none';
            if (noResults) noResults.style.display = 'block';
            return;
        }
        
        if (container) container.style.display = 'grid';
        if (noResults) noResults.style.display = 'none';
        
        if (container) {
            container.innerHTML = itemsToRender.map(item => 
                this.config.itemTemplate(item)
            ).join('');
        }
    }
    
    toggleFilters() {
        const content = document.getElementById('filterContent');
        const arrow = document.querySelector('.filter-toggle .arrow');
        
        if (content) content.classList.toggle('hidden');
        if (arrow) arrow.classList.toggle('rotated');
    }
}

// Global function for onclick handlers
function toggleFilters() {
    if (window.itemFilter) {
        window.itemFilter.toggleFilters();
    }
}
