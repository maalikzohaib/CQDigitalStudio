
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'client', 'public', 'assets');

async function processDirectory(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                await optimizeImage(fullPath);
            }
        }
    }
}

async function optimizeImage(filePath) {
    try {
        const metadata = await sharp(filePath).metadata();
        const originalSize = fs.statSync(filePath).size;

        // Skip if small enough (e.g. < 500KB) and dimensions are reasonable
        if (originalSize < 500 * 1024 && (metadata.width || 0) <= 1920) {
            console.log(`Skipping (already optimized): ${path.basename(filePath)}`);
            return;
        }

        console.log(`Optimizing: ${path.basename(filePath)} (${(originalSize / 1024 / 1024).toFixed(2)} MB)`);

        const buffer = await sharp(filePath)
            .resize({ width: 1920, withoutEnlargement: true })
            .jpeg({ quality: 80, mozjpeg: true, force: false }) // Only for JPEGs
            .png({ quality: 80, compressionLevel: 8, force: false }) // Only for PNGs
            .webp({ quality: 80, force: false }) // Only for WebPs
            .toBuffer();

        fs.writeFileSync(filePath, buffer);

        const newSize = fs.statSync(filePath).size;
        console.log(`  -> ${(newSize / 1024 / 1024).toFixed(2)} MB (${Math.round((1 - newSize / originalSize) * 100)}% saved)`);

    } catch (error) {
        console.error(`Error optimizing ${filePath}:`, error);
    }
}

console.log('Starting image optimization...');
processDirectory(assetsDir).then(() => {
    console.log('Image optimization complete!');
});
