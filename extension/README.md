# PDFkoi Browser Extension

A powerful browser extension providing instant access to PDFkoi's 72+ free PDF tools. Process PDFs directly from your browser with privacy-first, client-side processing.

## ✨ Features

### 🚀 Quick Access Popup
- **Smart Search**: Type `/` to instantly search through all 72+ tools
- **Recently Used**: Quick access to your most-used tools
- **Organized Categories**: Popular, Convert, Security sections
- **One-Click Access**: Open any tool with a single click

### 🎨 Modern UI
- **Dark/Light Theme**: Toggle between themes with one click
- **Beautiful Design**: Modern gradient effects and smooth animations
- **Responsive Layout**: Optimized grid layout for all tools
- **Accessible**: Keyboard shortcuts and screen reader support

### 📋 Right-Click Context Menu
- **Hierarchical Menu**: Access tools organized by category
- **PDF Link Detection**: Special "Open PDF with PDFkoi" for .pdf links
- **Popular Tools**: Quick access to most-used features
- **All Categories**: Convert, Security, and Popular sections

### 🔒 Privacy First
- ✅ **No Data Collection**: Zero tracking or analytics
- ✅ **No Uploads**: All processing happens in your browser
- ✅ **Local Storage Only**: Preferences saved locally
- ✅ **Open Source**: Transparent code you can review

### ⚡ Smart Features
- **Tool Tracking**: Automatically remembers your frequently used tools
- **Keyboard Shortcuts**: Press `/` to search, `Esc` to close
- **Intelligent Search**: Search by name or keywords (e.g., "black out" finds "Redact")
- **Theme Persistence**: Your theme choice is saved

## 📦 Installation

### From Chrome Web Store
*(Coming soon)*

### From Source (Developer Mode)

1. **Clone or Download** this repository
   ```bash
   git clone https://github.com/pdfkoi/pdfkoi.git
   cd pdfkoi/extension
   ```

2. **Open Chrome Extensions Page**
   - Navigate to `chrome://extensions/`
   - Or: Menu → Extensions → Manage Extensions

3. **Enable Developer Mode**
   - Toggle the switch in the top-right corner

4. **Load the Extension**
   - Click **Load unpacked**
   - Select the `extension` folder

5. **Pin the Extension** (recommended)
   - Click the puzzle icon in Chrome toolbar
   - Pin PDFkoi for easy access

## 🎯 Usage

### Popup Interface
1. **Click** the PDFkoi icon in your toolbar
2. **Search** for tools using the search bar (or press `/`)
3. **Browse** categories: Popular, Convert, Security
4. **Click** any tool to open it instantly
5. **Toggle theme** using the moon/sun icon

### Context Menu
1. **Right-click** on any webpage
2. **Select** "PDFkoi Tools"
3. **Choose** from organized submenus:
   - ⭐ Popular Tools
   - 🔄 Convert
   - 🔐 Security
   - 🌟 All 72+ Tools

### Special Features
- **On PDF links**: Right-click → "📄 Open PDF with PDFkoi"
- **Recently Used**: Your 6 most recent tools appear at the top
- **Quick Access**: Popular tools always visible

## 🛠️ Tools Included

### Popular Tools (⭐)
- 📎 Merge PDF - Combine multiple PDFs
- ✂️ Split PDF - Extract pages or split into multiple files
- 📦 Compress PDF - Reduce file size
- ✏️ Edit PDF - Add text, images, annotations

### Convert Tools (🔄)
**To PDF:**
- 🖼️ JPG to PDF, PNG to PDF
- 📝 Word to PDF (DOCX, DOC)
- 📊 Excel to PDF (XLSX, XLS)
- 📽️ PowerPoint to PDF (PPTX, PPT)
- And more...

**From PDF:**
- 📷 PDF to JPG, PDF to PNG
- 📄 PDF to Word
- 📈 PDF to Excel
- 🎬 PDF to PowerPoint
- And more...

### Security Tools (🔐)
- ✍️ Sign PDF - Add digital signatures
- 🔒 Encrypt PDF - Password protect
- 🔓 Unlock PDF - Remove passwords
- 🖍️ Redact PDF - Black out sensitive info

### And 50+ More Tools!
Including: Rotate, Crop, OCR, Watermark, Page Numbers, Extract Pages, Grayscale, Flatten, Repair, Validate, and many more.

## ⌨️ Keyboard Shortcuts

- `/` - Focus search bar
- `Esc` - Close popup
- `Enter` - Select highlighted search result

## 🔧 Technical Details

### Manifest V3
Built with the latest Chrome Extension Manifest V3 for better security and performance.

### Permissions
- `contextMenus` - Right-click menu integration
- `storage` - Save preferences and recent tools
- `host_permissions` - Only for pdfkoi.com domain

### Storage
All data is stored locally using `chrome.storage.local`:
- Theme preference (dark/light)
- Recently used tools (last 6)

### No Network Requests
The extension only opens pdfkoi.com when you click. No background requests, no tracking.

## 🌍 Internationalization

The extension supports multiple languages based on your browser locale:
- 🇺🇸 English
- 🇨🇳 简体中文
- 🇹🇼 繁體中文
- 🇩🇪 Deutsch
- 🇪🇸 Español
- 🇫🇷 Français
- 🇰🇷 한국어
- 🇵🇹 Português

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Extension version
- Chrome version
- Steps to reproduce
- Expected vs actual behavior

## 📝 Changelog

### Version 2.0.0 (2024)
- ✨ Enhanced UI with theme switching
- 🔍 Intelligent tool search with keyword matching
- ⚡ Recently used tools tracking
- 📋 Improved context menu with categories
- 🎨 Modern design with gradients
- ⌨️ Keyboard shortcuts support
- 🌐 Multi-language support
- 🔒 Enhanced privacy (no external requests)

### Version 1.0.0 (2024)
- 🚀 Initial release
- Basic popup with 8 popular tools
- Simple context menu
- Dark theme only

## 📄 License

MIT License - see the main project for details.

## 🔗 Links

- **Website**: [pdfkoi.com](https://pdfkoi.com)
- **GitHub**: [github.com/pdfkoi/pdfkoi](https://github.com/pdfkoi/pdfkoi)
- **Issues**: [github.com/pdfkoi/pdfkoi/issues](https://github.com/pdfkoi/pdfkoi/issues)

## 💡 Tips

1. **Pin the extension** to your toolbar for quickest access
2. **Use search** with keywords like "image", "compress", "secure"
3. **Right-click PDF links** on any website to process them directly
4. **Check "Recently Used"** section for your favorite tools
5. **Toggle theme** to match your browser appearance

---

Made with ❤️ by the PDFkoi Team | 100% Free & Private | No Registration Required
