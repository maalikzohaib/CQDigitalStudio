import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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
