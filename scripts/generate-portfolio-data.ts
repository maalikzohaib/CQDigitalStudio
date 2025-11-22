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

const portfolioPath = path.join(process.cwd(), 'client', 'public', 'assets', 'portfolio');

const readFiles = (dirPath: string, category: string, type: string, urlPrefix: string, isVideo: boolean = false): PortfolioItem[] => {
    try {
        const files = readdirSync(dirPath, { withFileTypes: true });

        const validFiles = files.filter(file => {
            if (!file.isFile()) return false;
            if (isVideo) {
                return /\.(mp4|webm|ogg|mov)$/i.test(file.name);
            }
            return /\.(jpg|jpeg|png|gif|JPG|PNG)$/i.test(file.name);
        });

        // Sort files naturally (1, 2, 3... instead of 1, 10, 11...)
        const sortedFiles = validFiles.sort((a, b) => {
            const aNum = parseInt(a.name.match(/\d+/)?.[0] || '0');
            const bNum = parseInt(b.name.match(/\d+/)?.[0] || '0');
            return aNum - bNum;
        });

        return sortedFiles.map((file, index) => ({
            image: `${urlPrefix}/${file.name}`,
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

const portraitsPath = path.join(portfolioPath, 'portraits');
const productPath = path.join(portfolioPath, 'products');
const videographyPath = path.join(portfolioPath, 'videography');

const photographyImages = readFiles(portraitsPath, 'Photography', 'Portrait', '/assets/portfolio/portraits');
const productImages = readFiles(productPath, 'Product Shoots', 'Product', '/assets/portfolio/products');
const videographyVideos = readFiles(videographyPath, 'Videography', 'Videography', '/assets/portfolio/videography', true);

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
