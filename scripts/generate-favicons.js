import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const publicDir = join(projectRoot, 'public');

// Source image path - update this to point to your source image
const sourceImagePath = process.argv[2] || join(publicDir, 'singari-logo.jpg');

async function generateFavicons() {
  try {
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    console.log(`Reading source image: ${sourceImagePath}`);
    
    // Read the source image
    const image = sharp(sourceImagePath);
    const metadata = await image.metadata();
    console.log(`Source image: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);

    // Generate favicon.png (512x512)
    console.log('Generating favicon.png (512x512)...');
    await image
      .resize(512, 512, { 
        fit: 'contain', 
        background: { r: 255, g: 255, b: 255, alpha: 0 } 
      })
      .png()
      .toFile(join(publicDir, 'favicon.png'));

    // Generate apple-touch-icon.png (180x180)
    console.log('Generating apple-touch-icon.png (180x180)...');
    await sharp(sourceImagePath)
      .resize(180, 180, { 
        fit: 'contain', 
        background: { r: 255, g: 255, b: 255, alpha: 1 } 
      })
      .png()
      .toFile(join(publicDir, 'apple-touch-icon.png'));

    // Generate favicon-32x32.png
    console.log('Generating favicon-32x32.png...');
    await sharp(sourceImagePath)
      .resize(32, 32, { 
        fit: 'contain', 
        background: { r: 255, g: 255, b: 255, alpha: 0 } 
      })
      .png()
      .toFile(join(publicDir, 'favicon-32x32.png'));

    // Generate favicon-16x16.png
    console.log('Generating favicon-16x16.png...');
    await sharp(sourceImagePath)
      .resize(16, 16, { 
        fit: 'contain', 
        background: { r: 255, g: 255, b: 255, alpha: 0 } 
      })
      .png()
      .toFile(join(publicDir, 'favicon-16x16.png'));

    // For ICO generation, we'll create multiple sizes and note that 
    // browsers widely support PNG favicons now
    console.log('\n✅ Favicon generation complete!');
    console.log('\nGenerated files:');
    console.log('  - public/favicon.png (512x512)');
    console.log('  - public/favicon-32x32.png');
    console.log('  - public/favicon-16x16.png');
    console.log('  - public/apple-touch-icon.png (180x180)');
    console.log('\nNote: Modern browsers support PNG favicons.');
    console.log('If you need a .ico file, you can use an online converter');
    console.log('or install png-to-ico package.');

  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();
