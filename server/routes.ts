import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { insertContactInquirySchema } from "@shared/schema";
import express from "express";
import fs from "fs/promises";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve portfolio images statically
  const portfolioPath = path.join(process.cwd(), "attached_assets", "Portfolio Images");
  app.use("/assets/portfolio", express.static(portfolioPath));
  app.use("/assets/portfolio/Videography", express.static(path.join(portfolioPath, "Videography")));

  // API to get portfolio images
  app.get("/api/portfolio-images", async (_req, res) => {
    try {
      const photographyPath = portfolioPath;
      const productPath = path.join(portfolioPath, "Product Shoots");
      const videographyPath = path.join(portfolioPath, "Videography");

      // Helper to read files from a directory
      const readFiles = async (dirPath: string, category: string, type: string, urlPrefix: string, isVideo: boolean = false) => {
        try {
          // Check if directory exists
          try {
            await fs.access(dirPath);
          } catch (e) {
            // Directory doesn't exist, return empty
            return [];
          }

          const files = await fs.readdir(dirPath, { withFileTypes: true });

          const validFiles = files
            .filter(file => {
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

      const photographyImages = await readFiles(photographyPath, "Photography", "Portrait", "/assets/portfolio");
      const productImages = await readFiles(productPath, "Product Shoots", "Product", "/assets/portfolio/Product Shoots");
      const videographyVideos = await readFiles(videographyPath, "Videography", "Wedding", "/assets/portfolio/Videography", true);

      res.json({
        success: true,
        data: [...photographyImages, ...productImages, ...videographyVideos]
      });
    } catch (error) {
      console.error("Error scanning portfolio images:", error);
      res.status(500).json({ success: false, error: "Failed to load portfolio images" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json({ success: true, data: inquiry });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error instanceof Error && error.name === 'ZodError') {
        res.status(422).json({
          success: false,
          error: error.message
        });
      } else {
        res.status(500).json({
          success: false,
          error: "Failed to submit form"
        });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact/inquiries", async (_req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json({ success: true, data: inquiries });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch inquiries"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
