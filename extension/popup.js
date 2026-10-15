// PDFkoi Enhanced Popup Script

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', async () => {
    await initializeTheme();
    await loadRecentTools();
    initializeSearch();
    initializeToolTracking();
    initializeThemeToggle();
});

// Theme Management
async function initializeTheme() {
    try {
        const result = await chrome.storage.local.get(['theme']);
        const theme = result.theme || 'dark';
        applyTheme(theme);
    } catch (error) {
        console.error('Error loading theme:', error);
    }
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon('☀️');
    } else {
        document.body.classList.remove('light-theme');
        updateThemeIcon('🌙');
    }
}

function updateThemeIcon(icon) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = icon;
    }
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', async () => {
            const isLight = document.body.classList.contains('light-theme');
            const newTheme = isLight ? 'dark' : 'light';

            applyTheme(newTheme);

            try {
                await chrome.storage.local.set({ theme: newTheme });
            } catch (error) {
                console.error('Error saving theme:', error);
            }
        });
    }
}

// Recent Tools
async function loadRecentTools() {
    try {
        const result = await chrome.storage.local.get(['recentTools']);
        const recentTools = result.recentTools || [];

        if (recentTools.length === 0) {
            return;
        }

        const recentSection = document.getElementById('recentSection');
        const recentToolsContainer = document.getElementById('recentTools');

        if (!recentSection || !recentToolsContainer) return;

        // Clear existing
        recentToolsContainer.innerHTML = '';

        // Add recent tools
        recentTools.forEach(toolId => {
            const tool = ALL_TOOLS.find(t => t.id === toolId);
            if (tool) {
                const toolCard = createToolCard(tool);
                recentToolsContainer.appendChild(toolCard);
            }
        });

        // Show section
        recentSection.classList.remove('hidden');
    } catch (error) {
        console.error('Error loading recent tools:', error);
    }
}

function createToolCard(tool) {
    const card = document.createElement('a');
    card.href = `https://pdfkoi.com/en/tools/${tool.id}`;
    card.className = 'tool-card';
    card.setAttribute('data-tool', tool.id);

    card.innerHTML = `
        <span class="icon">${tool.icon}</span>
        <span class="label">${tool.name}</span>
    `;

    return card;
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) return;

    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.classList.add('hidden');
            searchResults.innerHTML = '';
            return;
        }

        searchTimeout = setTimeout(() => {
            performSearch(query, searchResults);
        }, 200);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });
}

function performSearch(query, resultsContainer) {
    const results = ALL_TOOLS.filter(tool => {
        const nameMatch = tool.name.toLowerCase().includes(query);
        const keywordMatch = tool.keywords && tool.keywords.some(kw => kw.includes(query));
        return nameMatch || keywordMatch;
    }).slice(0, 10); // Limit to 10 results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div style="padding: 12px; text-align: center; color: var(--text-tertiary);">No tools found</div>';
        resultsContainer.classList.remove('hidden');
        return;
    }

    resultsContainer.innerHTML = results.map(tool => `
        <a href="https://pdfkoi.com/en/tools/${tool.id}"
           class="search-result-item"
           data-tool="${tool.id}">
            <span class="icon">${tool.icon}</span>
            <span class="label">${tool.name}</span>
        </a>
    `).join('');

    resultsContainer.classList.remove('hidden');
}

// Tool Click Tracking
function initializeToolTracking() {
    document.addEventListener('click', async (e) => {
        const toolCard = e.target.closest('[data-tool]');
        if (toolCard) {
            e.preventDefault();
            const toolId = toolCard.getAttribute('data-tool');
            const url = toolCard.href;

            // Track the tool
            try {
                await chrome.runtime.sendMessage({
                    action: 'trackTool',
                    toolId: toolId
                });
            } catch (error) {
                console.error('Error tracking tool:', error);
            }

            // Open in new tab
            chrome.tabs.create({ url: url });

            // Close popup
            window.close();
        }
    });

    // Handle "View All Tools" button
    const openSiteBtn = document.getElementById('openSite');
    if (openSiteBtn) {
        openSiteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            chrome.tabs.create({ url: openSiteBtn.href });
            window.close();
        });
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Focus search on '/' key
    if (e.key === '/' && document.activeElement !== document.getElementById('searchInput')) {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }

    // Close popup on Escape
    if (e.key === 'Escape') {
        window.close();
    }
});
