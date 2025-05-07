import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dgauvdk6a',
  api_key: '999441443759723',
  api_secret: 'Rh863jPaej_iPexJ90owWIXzbEc',
});

export default async function handler(req, res) {
  const { folder } = req.query;

  try {
    const result = await cloudinary.search
      .expression(`folder=${folder}`)
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    const images = result.resources.map((img) => ({
      src: img.secure_url,
      alt: img.public_id.split('/').pop().replace(/[-_]/g, ' '),
      category: folder,
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
