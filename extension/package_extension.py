import os
import zipfile
from pathlib import Path

def create_extension_zip():
    # Source and output paths
    extension_dir = Path('extension')
    output_file = 'pdfkoi-extension-v2.0.0.zip'

    # Files to exclude
    exclude_patterns = [
        'CHROME_STORE_PUBLISH_GUIDE.md',
        '.git',
        '.gitignore',
        'node_modules',
        '__pycache__',
        '.DS_Store',
        'generate_icons.py',
        'source.png'
    ]

    # Create ZIP file
    with zipfile.ZipFile(output_file, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(extension_dir):
            # Filter out excluded directories
            dirs[:] = [d for d in dirs if not any(pattern in d for pattern in exclude_patterns)]

            for file in files:
                # Skip excluded files
                if any(pattern in file for pattern in exclude_patterns):
                    continue

                file_path = Path(root) / file
                arcname = file_path.relative_to(extension_dir.parent)
                zipf.write(file_path, arcname)
                print(f'Added: {arcname}')

    # Get file size
    size_mb = os.path.getsize(output_file) / (1024 * 1024)
    print(f'\nPackage created: {output_file}')
    print(f'Size: {size_mb:.2f} MB')
    print(f'Location: {Path(output_file).absolute()}')

if __name__ == '__main__':
    create_extension_zip()
