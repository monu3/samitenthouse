// server.js (ESM compatible)

import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port or default

// Enable CORS
app.use(cors());

// Cloudinary config - Using environment variables (recommended)
// Make sure these are set in your .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // e.g., VITE_CLOUDINARY_CLOUD_NAME
  api_key: process.env.CLOUDINARY_API_KEY,       // e.g., VITE_CLOUDINARY_API_KEY
  api_secret: process.env.CLOUDINARY_API_SECRET, // e.g., VITE_CLOUDINARY_API_SECRET
});

// Gallery route
app.get("/api/gallery", async (req, res) => {
  const { folder } = req.query;

  if (!folder) {
    return res.status(400).json({ error: "Folder name is required" });
  }

  // Validate that Cloudinary config is loaded
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('Cloudinary environment variables are not set.');
    return res.status(500).json({ error: 'Server configuration error for Cloudinary.' });
  }

  try {
    const result = await cloudinary.search
      .expression(`folder=${folder}`) // Be careful with user input directly in expressions if folder name can be malicious
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    const images = result.resources.map((img) => ({
      src: img.secure_url,
      // A more robust way to get a "clean" alt text from public_id
      alt: img.public_id.substring(img.public_id.lastIndexOf('/') + 1).replace(/[-_]/g, ' '),
      category: folder,
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error("Cloudinary error:", error);
    res.status(500).json({ error: "Failed to fetch images from Cloudinary" });
  }
});

app.use(cors({
  origin: '*',  // or specify your frontend domain later
}));


// For serving static files from a 'dist' folder (e.g., your Vite build output)
// uncomment and adjust if needed:

/*
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));


// Handle any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
*/

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});