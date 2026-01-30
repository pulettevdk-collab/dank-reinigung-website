import sharp from 'sharp';
import { readFileSync } from 'fs';

const svg = readFileSync('public/images/logo.svg');

// Generate PNG favicons in different sizes
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

console.log('Generating favicons from logo.svg...\n');

Promise.all(
  sizes.map(async ({ size, name }) => {
    await sharp(svg)
      .resize(size, size)
      .png()
      .toFile(`public/${name}`);
    console.log(`✓ Generated ${name} (${size}x${size})`);
  })
).then(() => {
  console.log('\n✓ All favicons generated successfully!');
  console.log('\nGenerated files:');
  sizes.forEach(({ name }) => console.log(`  - public/${name}`));
}).catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
