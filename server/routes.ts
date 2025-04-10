import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }
      
      // In a real implementation, you would:
      // 1. Save to database
      // 2. Send an email notification
      // 3. Set up a response for the user
      
      // For now, we'll just return a success response
      return res.status(200).json({ 
        success: true, 
        message: 'Message received! I will get back to you soon.' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Server error, please try again later.' 
      });
    }
  });

  // Route to serve the resume file
  app.get('/Ankit-Resume.pdf', (req, res) => {
    const resumePath = path.resolve(process.cwd(), 'attached_assets', 'Ankit kumar-resume.pdf');
    
    // Check if file exists
    if (fs.existsSync(resumePath)) {
      return res.sendFile(resumePath);
    } else {
      return res.status(404).json({ message: 'Resume file not found' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
