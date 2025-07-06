const https = require('https');
const fs = require('fs');
const path = require('path');

const thumbnails = [
  {
    name: 'featured-1.jpg',
    url: 'https://source.unsplash.com/1280x720/?movie'
  },
  {
    name: 'featured-2.jpg',
    url: 'https://source.unsplash.com/1280x720/?cinema'
  },
  {
    name: 'video-1.jpg',
    url: 'https://source.unsplash.com/640x360/?film'
  },
  {
    name: 'video-2.jpg',
    url: 'https://source.unsplash.com/640x360/?theater'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filename);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}`));
      }
    }).on('error', reject);
  });
};

const downloadAllThumbnails = async () => {
  const thumbnailsDir = path.join(__dirname, '../public/thumbnails');
  
  if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir, { recursive: true });
  }

  for (const thumbnail of thumbnails) {
    const filename = path.join(thumbnailsDir, thumbnail.name);
    try {
      await downloadImage(thumbnail.url, filename);
      console.log(`Downloaded ${thumbnail.name}`);
    } catch (error) {
      console.error(`Error downloading ${thumbnail.name}:`, error);
    }
  }
};

downloadAllThumbnails(); 