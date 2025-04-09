import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.post('/api/contact', handleContactSubmission);
  
  // Serve the resume file
  app.get('/Resume-Ankit-Kumar.pdf', serveResume);

  const httpServer = createServer(app);
  return httpServer;
}

// Handle contact form submissions
async function handleContactSubmission(req: Request, res: Response) {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }
    
    // In a real implementation, you would send this data to an email service
    // or store it in a database. For this example, we'll just respond with success.
    
    // Log the submission for development purposes
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });
    
    return res.status(200).json({ 
      message: 'Message received! Thank you for reaching out.' 
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Serve the resume PDF file
function serveResume(req: Request, res: Response) {
  const resumePath = path.resolve(process.cwd(), 'client/public/Resume-Ankit-Kumar.pdf');
  
  // Check if file exists
  if (fs.existsSync(resumePath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Resume-Ankit-Kumar.pdf"');
    return res.sendFile(resumePath);
  } else {
    // If file doesn't exist, send a fallback message
    return res.status(404).json({ message: 'Resume file not found' });
  }
}
