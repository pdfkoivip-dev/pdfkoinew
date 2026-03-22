// PDFkoi Chrome Extension - Background Service Worker

const PDFkoi_URL = 'https://PDFkoi.gitu.net/en';

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    // Create main context menu item
    chrome.contextMenus.create({
        id: 'PDFkoi-open',
        title: 'Open with PDFkoi',
        contexts: ['link', 'page']
    });

    // Create submenu for specific tools
    chrome.contextMenus.create({
        id: 'PDFkoi-merge',
        parentId: 'PDFkoi-open',
        title: 'Merge PDFs',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'PDFkoi-compress',
        parentId: 'PDFkoi-open',
        title: 'Compress PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'PDFkoi-convert',
        parentId: 'PDFkoi-open',
        title: 'Convert to PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'PDFkoi-all-tools',
        parentId: 'PDFkoi-open',
        title: 'All Tools →',
        contexts: ['link', 'page']
    });

    console.log('PDFkoi context menus created');
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let url = PDFkoi_URL;

    switch (info.menuItemId) {
        case 'PDFkoi-merge':
            url = `${PDFkoi_URL}/tools/merge-pdf`;
            break;
        case 'PDFkoi-compress':
            url = `${PDFkoi_URL}/tools/compress-pdf`;
            break;
        case 'PDFkoi-convert':
            url = `${PDFkoi_URL}/tools/jpg-to-pdf`;
            break;
        case 'PDFkoi-all-tools':
        case 'PDFkoi-open':
            url = PDFkoi_URL;
            break;
        default:
            url = PDFkoi_URL;
    }

    // Open PDFkoi in a new tab
    chrome.tabs.create({ url: url });
});

// Log when service worker starts
console.log('PDFkoi background service worker started');

