import { getBaseUrl } from './utils.js';

// Escape text before inserting it in the page
function escapeHtml(text) {
    return String(text ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Sortable & filterable table built from a JSON data file
class DataTable {
    constructor(config) {
        this.config = config;
        this.items = [];
        this.sort = { key: config.columns[0].key, ascending: true };
        this.filters = {};

        this.init();
    }

    async init() {
        try {
            const response = await fetch(this.config.dataUrl);
            const data = await response.json();
            this.items = data[this.config.dataKey] || [];
            this.setupFilters();
            this.render();
        } catch (error) {
            console.error(`Error loading ${this.config.dataUrl}:`, error);
        }
    }

    setupFilters() {
        this.config.columns.filter(column => column.filterId).forEach(column => {
            const select = document.getElementById(column.filterId);
            if (!select) return;

            let options;
            if (column.type === 'bool') {
                options = [['', 'All'], ['yes', 'Owned'], ['no', 'Wanted']];
            } else {
                const values = [...new Set(this.items.map(item => item[column.key]).filter(Boolean))]
                    .sort((a, b) => a.localeCompare(b));
                options = [['', 'All'], ...values.map(value => [value, value])];
            }

            select.innerHTML = options
                .map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`)
                .join('');

            select.addEventListener('change', () => {
                this.filters[column.key] = select.value;
                this.render();
            });
        });
    }

    matchesFilters(item) {
        return this.config.columns.every(column => {
            const filter = this.filters[column.key];
            if (!filter) return true;
            if (column.type === 'bool') return Boolean(item[column.key]) === (filter === 'yes');
            return item[column.key] === filter;
        });
    }

    sortItems(items) {
        const { key, ascending } = this.sort;
        return [...items].sort((a, b) => {
            const result = String(a[key] ?? '').localeCompare(String(b[key] ?? ''), undefined, { sensitivity: 'base' });
            return ascending ? result : -result;
        });
    }

    toggleSort(key) {
        if (this.sort.key === key) {
            this.sort.ascending = !this.sort.ascending;
        } else {
            this.sort = { key, ascending: true };
        }
        this.render();
    }

    renderHeader() {
        // Column widths come from the "width" setting of each column (Comments takes the remaining space)
        // width 'fit' = just a bit larger than the longest value of the column
        const colgroup = '<colgroup>' + this.config.columns
            .map(column => column.width ? `<col style="width: ${column.width === 'fit' ? '1%' : column.width}">` : '<col>')
            .join('') + '</colgroup>';

        return colgroup + '<thead><tr>' + this.config.columns.map(column => {
            if (!column.sortable) {
                return `<th>${column.label}</th>`;
            }
            const arrow = this.sort.key === column.key ? (this.sort.ascending ? ' ▲' : ' ▼') : '';
            return `<th class="sortable" data-key="${column.key}">${column.label}${arrow}</th>`;
        }).join('') + '</tr></thead>';
    }

    renderCell(column, item) {
        if (column.type === 'bool') {
            return item[column.key]
                ? '<td class="cell-bool"><span class="status-pill owned">Owned</span></td>'
                : '<td class="cell-bool"><span class="status-pill wanted">Wanted</span></td>';
        }
        const cellClass = column.width === 'fit' ? ' class="cell-fit"' : '';
        return `<td${cellClass}>${escapeHtml(item[column.key])}</td>`;
    }

    render() {
        const table = document.getElementById(this.config.tableId);
        const noResults = document.getElementById(this.config.noResultsId);
        const items = this.sortItems(this.items.filter(item => this.matchesFilters(item)));

        const rows = items
            .map(item => '<tr>' + this.config.columns.map(column => this.renderCell(column, item)).join('') + '</tr>')
            .join('');

        table.innerHTML = this.renderHeader() + `<tbody>${rows}</tbody>`;
        table.querySelectorAll('th.sortable').forEach(th => {
            th.addEventListener('click', () => this.toggleSort(th.dataset.key));
        });

        if (noResults) noResults.style.display = items.length === 0 ? 'block' : 'none';
    }
}

// Tabs: the active tab is kept in the URL hash (#consoles or #games)
function showActiveTab() {
    const tabs = ['consoles', 'games'];
    const hash = window.location.hash.replace('#', '');
    const active = tabs.includes(hash) ? hash : tabs[0];

    document.querySelectorAll('.retro-tab').forEach(button => {
        button.classList.toggle('active', button.dataset.tab === active);
    });
    tabs.forEach(tab => {
        document.getElementById(`${tab}-panel`).style.display = tab === active ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = getBaseUrl();

    document.querySelectorAll('.retro-tab').forEach(button => {
        button.addEventListener('click', () => {
            window.location.hash = button.dataset.tab;
        });
    });
    window.addEventListener('hashchange', showActiveTab);
    showActiveTab();

    new DataTable({
        dataUrl: `${baseUrl}/data/retrogaming/consoles.json`,
        dataKey: 'consoles',
        tableId: 'consolesTable',
        noResultsId: 'consolesNoResults',
        columns: [
            { key: 'name', label: 'Console', sortable: true, width: 'fit' },
            { key: 'owned', label: 'Status', type: 'bool', filterId: 'consolesOwnedFilter', width: '120px' },
            { key: 'comments', label: 'Comments' }
        ]
    });

    new DataTable({
        dataUrl: `${baseUrl}/data/retrogaming/games.json`,
        dataKey: 'games',
        tableId: 'gamesTable',
        noResultsId: 'gamesNoResults',
        columns: [
            { key: 'name', label: 'Game', sortable: true, width: 'fit' },
            { key: 'platform', label: 'Platform', sortable: true, filterId: 'gamesPlatformFilter', width: '20%' },
            { key: 'owned', label: 'Status', type: 'bool', filterId: 'gamesOwnedFilter', width: '120px' },
            { key: 'comments', label: 'Comments' }
        ]
    });
});
