from PIL import Image, ImageDraw
import os

def make_round_favicon(input_path, output_path):
    try:
        if not os.path.exists(input_path):
            print(f"Error: {input_path} not found")
            return

        # Open image and convert to RGBA
        img = Image.open(input_path).convert("RGBA")
        
        # Upsample for better antialiasing (4x)
        factor = 4
        new_size = (img.size[0] * factor, img.size[1] * factor)
        img_large = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Create a circular mask
        mask = Image.new('L', new_size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + new_size, fill=255)
        
        # Apply mask
        img_large.putalpha(mask)
        
        # Resize back to original size
        img_round = img_large.resize(img.size, Image.Resampling.LANCZOS)
        
        # Save
        img_round.save(output_path)
        print(f"Successfully saved round icon: {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Paths
base_dir = r"c:\Users\NIKHIL\Desktop\coreway-new"
public_dir = os.path.join(base_dir, "public")
favicon_path = os.path.join(public_dir, "favicon.png")

# Update favicon.png
make_round_favicon(favicon_path, favicon_path)

# Create/Update other icons
make_round_favicon(favicon_path, os.path.join(public_dir, "favicon-16x16.png"))
make_round_favicon(favicon_path, os.path.join(public_dir, "apple-touch-icon.png"))
