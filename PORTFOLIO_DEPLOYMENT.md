# Portfolio Images Deployment Guide

## How It Works

The portfolio images are now deployed statically to Vercel. Here's how the system works:

### Local Development
- Images are served dynamically from the `attached_assets/Portfolio Images` folder via the Express server
- The API endpoint `/api/portfolio-images` scans the folder and returns the list

### Production (Vercel)
- During build, the `generate:portfolio` script scans the portfolio folders and creates a static JSON file
- The Vite build plugin copies all portfolio images to `dist/public/assets/portfolio`
- The frontend fetches from `/portfolio-data.json` instead of the API
- All images are served as static files

## Deployment Steps

1. **Add New Images**
   - Add images to `attached_assets/Portfolio Images/` (for Photography)
   - Add images to `attached_assets/Portfolio Images/Product Shoots/` (for Product Shoots)
   - Add videos to `attached_assets/Portfolio Images/Videography/` (for Videography)

2. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add new portfolio images"
   git push
   ```

3. **Vercel Auto-Deploy**
   - Vercel will automatically:
     - Run `npm run generate:portfolio` to create the JSON data
     - Run `vite build` which copies images to the output
     - Deploy the static site with all images

## Important Notes

- **Supported Image Formats**: `.jpg`, `.jpeg`, `.png`, `.gif`
- **Supported Video Formats**: `.mp4`, `.webm`, `.ogg`, `.mov`
- **File Size**: Keep images optimized (recommended < 2MB each)
- **Video Size**: Keep videos under 10MB for better performance

## Folder Structure

```
attached_assets/
└── Portfolio Images/
    ├── *.jpg, *.png          # Photography items
    ├── Product Shoots/
    │   └── *.jpg, *.png      # Product shoot items
    └── Videography/
        └── *.mp4, *.webm     # Video items
```

## Build Output

After build, the structure will be:
```
dist/public/
├── portfolio-data.json       # Generated JSON with all portfolio items
└── assets/
    └── portfolio/
        ├── *.jpg, *.png      # Photography images
        ├── Product Shoots/
        │   └── *.jpg         # Product images
        └── Videography/
            └── *.mp4         # Video files
```

## Troubleshooting

### Images not showing on Vercel
1. Check if `portfolio-data.json` exists in the deployed site
2. Verify images are in the correct folders
3. Check browser console for 404 errors
4. Ensure build command is `npm run build:client`

### Videos not playing
1. Ensure video files are in supported formats
2. Check file size (large videos may fail to load)
3. Verify video codec compatibility (H.264 recommended)
