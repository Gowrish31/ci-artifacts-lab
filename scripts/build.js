const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'build');
const srcFile = path.resolve(__dirname, '..', 'src', 'app.js');
const outFile = path.join(outDir, 'app.js');

try {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.copyFileSync(srcFile, outFile);

  const manifest = {
    version: '1.0.0',
    buildTime: new Date().toISOString(),
    files: ['app.js'],
  };

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

  console.log('Build complete. Output: ./build/');
  process.exit(0);
} catch (err) {
  console.error('Build failed:', err);
  process.exit(1);
}
