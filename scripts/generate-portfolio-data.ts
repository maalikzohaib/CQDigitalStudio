import { readdirSync } from 'fs';
import { writeFileSync } from 'fs';
import path from 'path';

interface PortfolioItem {
    image: string;
    title: string;
    category: string;
    type: string;
    isVideo?: boolean;
}

const portfolioPath = path.join(process.cwd(), 'attached_assets', 'Portfolio Images');

const readFiles = (dirPath: string, category: string, type: string, urlPrefix: string, isVideo: boolean = false): PortfolioItem[] => {
    try {
        const files = readdirSync(dirPath, { withFileTypes: true });

        const validFiles = files.filter(file => {
            if (!file.isFile()) return false;
            if (isVideo) {
                return /\.(mp4|webm|ogg|mov)$/i.test(file.name);
            }
            return /\.(jpg|jpeg|png|gif)$/i.test(file.name);
        });

        return validFiles.map((file, index) => ({
            image: `${urlPrefix}/${encodeURIComponent(file.name)}`,
            title: `${category} ${isVideo ? 'Video' : 'Shoot'} ${index + 1}`,
            category,
            type,
            isVideo
        }));
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
        return [];
    }
};

const photographyPath = portfolioPath;
const productPath = path.join(portfolioPath, 'Product Shoots');
const videographyPath = path.join(portfolioPath, 'Videography');

const photographyImages = readFiles(photographyPath, 'Photography', 'Portrait', '/assets/portfolio');
const productImages = readFiles(productPath, 'Product Shoots', 'Product', '/assets/portfolio/Product Shoots');
const videographyVideos = readFiles(videographyPath, 'Videography', 'Wedding', '/assets/portfolio/Videography', true);

const portfolioData = {
    success: true,
    data: [...photographyImages, ...productImages, ...videographyVideos]
};

// Write to public directory
const outputPath = path.join(process.cwd(), 'client', 'public', 'portfolio-data.json');
writeFileSync(outputPath, JSON.stringify(portfolioData, null, 2));

console.log('✓ Portfolio data generated successfully');
console.log(`  - ${photographyImages.length} photography items`);
console.log(`  - ${productImages.length} product shoot items`);
console.log(`  - ${videographyVideos.length} videography items`);
