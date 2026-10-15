// PDFkoi Chrome Extension - Enhanced Background Service Worker
const PDFKOI_URL = 'https://pdfkoi.com';

// Tool definitions with categories
const TOOLS = {
    popular: [
        { id: 'merge-pdf', name: 'Merge PDF', icon: '📎' },
        { id: 'split-pdf', name: 'Split PDF', icon: '✂️' },
        { id: 'compress-pdf', name: 'Compress PDF', icon: '📦' },
        { id: 'edit-pdf', name: 'Edit PDF', icon: '✏️' }
    ],
    convert: [
        { id: 'jpg-to-pdf', name: 'JPG to PDF', icon: '🖼️' },
        { id: 'pdf-to-jpg', name: 'PDF to JPG', icon: '📷' },
        { id: 'word-to-pdf', name: 'Word to PDF', icon: '📝' },
        { id: 'pdf-to-word', name: 'PDF to Word', icon: '📄' },
        { id: 'excel-to-pdf', name: 'Excel to PDF', icon: '📊' },
        { id: 'pdf-to-excel', name: 'PDF to Excel', icon: '📈' },
        { id: 'ppt-to-pdf', name: 'PPT to PDF', icon: '📽️' },
        { id: 'pdf-to-ppt', name: 'PDF to PPT', icon: '🎬' }
    ],
    security: [
        { id: 'encrypt-pdf', name: 'Encrypt PDF', icon: '🔒' },
        { id: 'decrypt-pdf', name: 'Decrypt PDF', icon: '🔓' },
        { id: 'sign-pdf', name: 'Sign PDF', icon: '✍️' },
        { id: 'redact-pdf', name: 'Redact PDF', icon: '🖍️' }
    ]
};

// Create context menus when extension is installed
chrome.runtime.onInstalled.addListener(async () => {
    // Remove all existing menus first
    await chrome.contextMenus.removeAll();

    // Create main context menu item
    chrome.contextMenus.create({
        id: 'pdfkoi-main',
        title: 'PDFkoi Tools',
        contexts: ['link', 'page', 'selection']
    });

    // Popular tools submenu
    chrome.contextMenus.create({
        id: 'pdfkoi-popular',
        parentId: 'pdfkoi-main',
        title: '⭐ Popular Tools',
        contexts: ['link', 'page', 'selection']
    });

    TOOLS.popular.forEach(tool => {
        chrome.contextMenus.create({
            id: `tool-${tool.id}`,
            parentId: 'pdfkoi-popular',
            title: `${tool.icon} ${tool.name}`,
            contexts: ['link', 'page', 'selection']
        });
    });

    // Convert submenu
    chrome.contextMenus.create({
        id: 'pdfkoi-convert',
        parentId: 'pdfkoi-main',
        title: '🔄 Convert',
        contexts: ['link', 'page', 'selection']
    });

    TOOLS.convert.forEach(tool => {
        chrome.contextMenus.create({
            id: `tool-${tool.id}`,
            parentId: 'pdfkoi-convert',
            title: `${tool.icon} ${tool.name}`,
            contexts: ['link', 'page', 'selection']
        });
    });

    // Security submenu
    chrome.contextMenus.create({
        id: 'pdfkoi-security',
        parentId: 'pdfkoi-main',
        title: '🔐 Security',
        contexts: ['link', 'page', 'selection']
    });

    TOOLS.security.forEach(tool => {
        chrome.contextMenus.create({
            id: `tool-${tool.id}`,
            parentId: 'pdfkoi-security',
            title: `${tool.icon} ${tool.name}`,
            contexts: ['link', 'page', 'selection']
        });
    });

    // Separator
    chrome.contextMenus.create({
        id: 'separator-1',
        parentId: 'pdfkoi-main',
        type: 'separator',
        contexts: ['link', 'page', 'selection']
    });

    // All tools
    chrome.contextMenus.create({
        id: 'pdfkoi-all-tools',
        parentId: 'pdfkoi-main',
        title: '🌟 All 72+ Tools →',
        contexts: ['link', 'page', 'selection']
    });

    // Special: Open PDF link with PDFkoi (only show on PDF links)
    chrome.contextMenus.create({
        id: 'pdfkoi-open-pdf-link',
        title: '📄 Open PDF with PDFkoi',
        contexts: ['link'],
        targetUrlPatterns: ['*://*/*.pdf', '*://*/*.PDF']
    });

    console.log('PDFkoi context menus created');
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    let url = PDFKOI_URL;

    if (info.menuItemId === 'pdfkoi-all-tools') {
        url = `${PDFKOI_URL}/en`;
    } else if (info.menuItemId === 'pdfkoi-open-pdf-link' && info.linkUrl) {
        // Open PDF link in PDFkoi viewer
        url = `${PDFKOI_URL}/en/tools/edit-pdf?url=${encodeURIComponent(info.linkUrl)}`;
    } else if (info.menuItemId.startsWith('tool-')) {
        const toolId = info.menuItemId.replace('tool-', '');
        url = `${PDFKOI_URL}/en/tools/${toolId}`;

        // Track recently used tool
        await trackRecentTool(toolId);
    } else {
        url = `${PDFKOI_URL}/en`;
    }

    // Open PDFkoi in a new tab
    chrome.tabs.create({ url: url });
});

// Track recently used tools
async function trackRecentTool(toolId) {
    try {
        const result = await chrome.storage.local.get(['recentTools']);
        let recentTools = result.recentTools || [];

        // Remove if already exists
        recentTools = recentTools.filter(id => id !== toolId);

        // Add to beginning
        recentTools.unshift(toolId);

        // Keep only last 6
        recentTools = recentTools.slice(0, 6);

        await chrome.storage.local.set({ recentTools });
    } catch (error) {
        console.error('Error tracking recent tool:', error);
    }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getRecentTools') {
        chrome.storage.local.get(['recentTools'], (result) => {
            sendResponse({ recentTools: result.recentTools || [] });
        });
        return true; // Keep channel open for async response
    }

    if (request.action === 'trackTool') {
        trackRecentTool(request.toolId).then(() => {
            sendResponse({ success: true });
        });
        return true;
    }
});

// Log when service worker starts
console.log('PDFkoi background service worker started (v2.0)');
