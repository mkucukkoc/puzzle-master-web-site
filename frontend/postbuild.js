const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');
const compiledIndexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(compiledIndexHtmlPath)) {
  console.error('build/index.html not found!');
  process.exit(1);
}

const compiledHtml = fs.readFileSync(compiledIndexHtmlPath, 'utf8');

const gameFolders = [
  'arrows-puzzle-master',
  'block-boom',
  'car-puzzle',
  'cars-puzzle-escape',
  'blocks-puzzle-escape',
  'nonogram',
  'minesweeper',
  'word-search',
  'sudoku',
  'sudoku-quest',
  'flow-connects',
  'tile-match',
  'triple-grove'
];

for (const slug of gameFolders) {
  const baseDir = path.join(buildDir, slug);

  fs.mkdirSync(baseDir, { recursive: true });
  fs.mkdirSync(path.join(baseDir, 'privacy'), { recursive: true });
  fs.mkdirSync(path.join(baseDir, 'terms'), { recursive: true });
  fs.mkdirSync(path.join(baseDir, 'data-deletion'), { recursive: true });

  // Create physical html files with compiled JS/CSS script tags!
  fs.writeFileSync(path.join(baseDir, 'index.html'), compiledHtml);

  fs.writeFileSync(path.join(baseDir, 'privacy.html'), compiledHtml);
  fs.writeFileSync(path.join(baseDir, 'privacy', 'index.html'), compiledHtml);

  fs.writeFileSync(path.join(baseDir, 'terms.html'), compiledHtml);
  fs.writeFileSync(path.join(baseDir, 'terms', 'index.html'), compiledHtml);

  fs.writeFileSync(path.join(baseDir, 'data-deletion.html'), compiledHtml);
  fs.writeFileSync(path.join(baseDir, 'data-deletion', 'index.html'), compiledHtml);
}

// Top-level legal files
fs.writeFileSync(path.join(buildDir, 'privacy.html'), compiledHtml);
fs.writeFileSync(path.join(buildDir, 'terms.html'), compiledHtml);
fs.writeFileSync(path.join(buildDir, 'data-deletion.html'), compiledHtml);
fs.mkdirSync(path.join(buildDir, 'privacy'), { recursive: true });
fs.mkdirSync(path.join(buildDir, 'terms'), { recursive: true });
fs.mkdirSync(path.join(buildDir, 'data-deletion'), { recursive: true });
fs.writeFileSync(path.join(buildDir, 'privacy', 'index.html'), compiledHtml);
fs.writeFileSync(path.join(buildDir, 'terms', 'index.html'), compiledHtml);
fs.writeFileSync(path.join(buildDir, 'data-deletion', 'index.html'), compiledHtml);

console.log('Postbuild: Successfully created physical HTML files for all game routes with compiled bundle scripts!');
