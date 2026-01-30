# Image Placement Guide

## Images to Provide

### 1. Hero Background Image
**Location:** `public/images/hero-bg.jpg`
- **Purpose:** Main background for the hero section (first screen)
- **Recommended size:** 1920x1080px or larger
- **Format:** JPG or PNG
- **Tips:** Choose an image that looks good with a dark overlay (70-80% opacity)

### 2. Service Images
Create 5 images for the services, place them in: `public/images/services/`

- **Hausreinigung:** `public/images/services/hausreinigung.jpg`
- **Treppenhausreinigung:** `public/images/services/treppenhausreinigung.jpg`
- **Büroreinigung:** `public/images/services/bueroreinigung.jpg`
- **Fensterreinigung:** `public/images/services/fensterreinigung.jpg`
- **Solarreinigung:** `public/images/services/solarreinigung.jpg`

**Recommended size for each:** 800x600px (4:3 ratio)
**Format:** JPG or PNG

## How to Add Images

1. **For Hero Background:**
   ```
   Save your image as: public/images/hero-bg.jpg
   ```

2. **For Service Images:**
   ```
   Save your images in: public/images/services/
   With the exact names listed above
   ```

## Image Requirements

- **File formats:** JPG, PNG, or WebP
- **Optimization:** Compress images before uploading (use tools like TinyPNG or Squoosh)
- **Quality:** High resolution for crisp display on all devices
- **Consistency:** Keep similar style/lighting across all service images

## Fallback

If images are not provided, the site will show:
- A gradient background for the hero section
- Icon-based service cards (current state)

The design is fully responsive and will adapt the images for mobile, tablet, and desktop viewports.
