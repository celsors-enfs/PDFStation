#!/usr/bin/env python3
"""Generate favicon files for PDFStation"""

try:
    from PIL import Image, ImageDraw, ImageFont
    HAS_PIL = True
except ImportError:
    HAS_PIL = False
    print("PIL/Pillow not available. Creating simple PNG files...")

def create_favicon_png(size, filename):
    """Create a PNG favicon with the PDFStation icon design"""
    if HAS_PIL:
        # Create image with red background
        img = Image.new('RGB', (size, size), color='#DC2626')
        draw = ImageDraw.Draw(img)
        
        # Draw white document
        doc_width = int(size * 0.5)
        doc_height = int(size * 0.65)
        doc_x = (size - doc_width) // 2
        doc_y = int(size * 0.2)
        
        # Main document rectangle
        draw.rectangle([doc_x, doc_y, doc_x + doc_width, doc_y + doc_height], fill='#FFFFFF')
        
        # Fold corner (triangle)
        fold_size = int(size * 0.15)
        fold_points = [
            (doc_x + doc_width - fold_size, doc_y),
            (doc_x + doc_width, doc_y),
            (doc_x + doc_width, doc_y + fold_size)
        ]
        draw.polygon(fold_points, fill='#F3F4F6')
        
        # Add "PDF" text for larger sizes
        if size >= 32:
            try:
                # Try to use a system font
                font_size = max(12, int(size * 0.22))
                font = None
                # Try different font paths
                font_paths = [
                    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
                    "/System/Library/Fonts/Helvetica.ttc",
                    "/System/Library/Fonts/Arial.ttf",
                    "/Library/Fonts/Arial.ttf"
                ]
                for font_path in font_paths:
                    try:
                        font = ImageFont.truetype(font_path, font_size)
                        break
                    except:
                        continue
                if font is None:
                    font = ImageFont.load_default()
            except:
                font = ImageFont.load_default()
            
            # Draw PDF text
            text = "PDF"
            try:
                bbox = draw.textbbox((0, 0), text, font=font)
                text_width = bbox[2] - bbox[0] if len(bbox) == 4 else size // 2
                text_height = bbox[3] - bbox[1] if len(bbox) == 4 else font_size
            except:
                # Fallback if textbbox fails
                text_width = size // 2
                text_height = font_size
            
            text_x = (size - text_width) // 2
            text_y = doc_y + (doc_height - text_height) // 2
            draw.text((text_x, text_y), text, fill='#DC2626', font=font)
        
        img.save(filename, 'PNG')
        print(f"Created {filename}")
    else:
        # Fallback: create a minimal valid PNG
        # This is a 1x1 red pixel PNG as base64
        import base64
        # Minimal 1x1 red PNG
        png_data = base64.b64decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==')
        with open(filename, 'wb') as f:
            f.write(png_data)
        print(f"Created minimal {filename} (PIL not available)")

if __name__ == '__main__':
    create_favicon_png(16, 'favicon-16x16.png')
    create_favicon_png(32, 'favicon-32x32.png')
    create_favicon_png(180, 'apple-touch-icon.png')
    create_favicon_png(192, 'android-chrome-192x192.png')
    create_favicon_png(512, 'android-chrome-512x512.png')
    print("Favicon generation complete!")

