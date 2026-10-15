from PIL import Image, ImageDraw, ImageFont
import os

def create_small_tile():
    """Create small promotional tile (440x280px)"""
    # Create image with gradient background
    img = Image.new('RGB', (440, 280), color='#1a1a2e')
    draw = ImageDraw.Draw(img)

    # Draw gradient effect (simulate with rectangles)
    for i in range(280):
        r = int(26 + (22 - 26) * i / 280)
        g = int(26 + (33 - 26) * i / 280)
        b = int(46 + (62 - 46) * i / 280)
        draw.rectangle([(0, i), (440, i+1)], fill=(r, g, b))

    # Load logo
    try:
        logo = Image.open('extension/icons/icon128.png')
        logo = logo.resize((100, 100), Image.Resampling.LANCZOS)
        # Paste logo in center-left
        img.paste(logo, (50, 90), logo if logo.mode == 'RGBA' else None)
    except:
        print("Warning: Could not load logo")

    # Add text
    try:
        # Try to use a nice font, fallback to default
        font_large = ImageFont.truetype("arial.ttf", 48)
        font_medium = ImageFont.truetype("arial.ttf", 24)
        font_small = ImageFont.truetype("arial.ttf", 18)
    except:
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Draw text
    draw.text((180, 80), "PDFkoi", fill='#ff6b6b', font=font_large)
    draw.text((180, 135), "72+ Free PDF Tools", fill='#ffffff', font=font_medium)
    draw.text((180, 180), "100% Private • No Uploads", fill='#aaaaaa', font=font_small)

    img.save('extension/promo-small-tile-440x280.png', 'PNG', optimize=True)
    print("Created: promo-small-tile-440x280.png")

def create_large_tile():
    """Create large promotional tile (920x680px)"""
    img = Image.new('RGB', (920, 680), color='#1a1a2e')
    draw = ImageDraw.Draw(img)

    # Draw gradient
    for i in range(680):
        r = int(26 + (22 - 26) * i / 680)
        g = int(26 + (33 - 26) * i / 680)
        b = int(46 + (62 - 46) * i / 680)
        draw.rectangle([(0, i), (920, i+1)], fill=(r, g, b))

    # Load and paste logo
    try:
        logo = Image.open('extension/icons/icon128.png')
        logo = logo.resize((150, 150), Image.Resampling.LANCZOS)
        img.paste(logo, (385, 50), logo if logo.mode == 'RGBA' else None)
    except:
        print("Warning: Could not load logo")

    # Add text
    try:
        font_huge = ImageFont.truetype("arial.ttf", 72)
        font_large = ImageFont.truetype("arial.ttf", 36)
        font_medium = ImageFont.truetype("arial.ttf", 24)
    except:
        font_huge = ImageFont.load_default()
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()

    draw.text((460 - 150, 220), "PDFkoi", fill='#ff6b6b', font=font_huge, anchor="mm")
    draw.text((460, 290), "72+ Free PDF Tools", fill='#ffffff', font=font_large, anchor="mm")
    draw.text((460, 340), "Merge • Split • Compress • Convert • Sign • Encrypt", fill='#cccccc', font=font_medium, anchor="mm")
    draw.text((460, 400), "100% Private • Client-Side Processing", fill='#aaaaaa', font=font_medium, anchor="mm")
    draw.text((460, 450), "No Uploads • No Registration • No Hidden Costs", fill='#aaaaaa', font=font_medium, anchor="mm")

    img.save('extension/promo-large-tile-920x680.png', 'PNG', optimize=True)
    print("Created: promo-large-tile-920x680.png")

def create_marquee():
    """Create marquee promotional image (1400x560px)"""
    img = Image.new('RGB', (1400, 560), color='#1a1a2e')
    draw = ImageDraw.Draw(img)

    # Draw gradient
    for i in range(560):
        r = int(26 + (22 - 26) * i / 560)
        g = int(26 + (33 - 26) * i / 560)
        b = int(46 + (62 - 46) * i / 560)
        draw.rectangle([(0, i), (1400, i+1)], fill=(r, g, b))

    # Load and paste logo
    try:
        logo = Image.open('extension/icons/icon128.png')
        logo = logo.resize((180, 180), Image.Resampling.LANCZOS)
        img.paste(logo, (150, 190), logo if logo.mode == 'RGBA' else None)
    except:
        print("Warning: Could not load logo")

    # Add text
    try:
        font_huge = ImageFont.truetype("arial.ttf", 90)
        font_large = ImageFont.truetype("arial.ttf", 42)
        font_medium = ImageFont.truetype("arial.ttf", 28)
    except:
        font_huge = ImageFont.load_default()
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()

    draw.text((400, 150), "PDFkoi", fill='#ff6b6b', font=font_huge)
    draw.text((400, 250), "Your Complete PDF Toolkit", fill='#ffffff', font=font_large)
    draw.text((400, 310), "72+ Professional Tools | 100% Free & Private", fill='#cccccc', font=font_medium)
    draw.text((400, 360), "Merge • Split • Compress • Convert • Sign • Encrypt", fill='#aaaaaa', font=font_medium)

    img.save('extension/promo-marquee-1400x560.png', 'PNG', optimize=True)
    print("Created: promo-marquee-1400x560.png")

if __name__ == '__main__':
    print("Generating promotional images for Chrome Web Store...\n")
    create_small_tile()
    create_large_tile()
    create_marquee()
    print("\nAll promotional images created successfully!")
    print("Location: D:/claude/pdfkoi/extension/")
