import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { copyFileSync, mkdirSync, readdirSync, statSync } from "fs";

// Plugin to copy portfolio images to build output
function copyPortfolioImages() {
  return {
    name: 'copy-portfolio-images',
    closeBundle() {
      const sourceDir = path.resolve(import.meta.dirname, 'attached_assets', 'Portfolio Images');
      const targetDir = path.resolve(import.meta.dirname, 'dist/public/assets/portfolio');

      const copyRecursive = (src: string, dest: string) => {
        try {
          mkdirSync(dest, { recursive: true });
          const entries = readdirSync(src, { withFileTypes: true });

          for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);

            if (entry.isDirectory()) {
              copyRecursive(srcPath, destPath);
            } else if (entry.isFile()) {
              copyFileSync(srcPath, destPath);
            }
          }
        } catch (err) {
          console.error(`Error copying portfolio images: ${err}`);
        }
      };

      copyRecursive(sourceDir, targetDir);
      console.log('✓ Portfolio images copied to build output');
    }
  };
}

export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.PNG', '**/*.mp4', '**/*.webm', '**/*.ogg', '**/*.mov'],
  plugins: [
    react(),
    runtimeErrorOverlay(),
    copyPortfolioImages(),
    ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
      ? [
        await import("@replit/vite-plugin-cartographer").then((m) =>
          m.cartographer(),
        ),
        await import("@replit/vite-plugin-dev-banner").then((m) =>
          m.devBanner(),
        ),
      ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'wouter'],
          'motion': ['framer-motion', 'motion'],
          'ui': ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext ?? '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 8000,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
