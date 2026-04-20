import { cpSync, existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const outDir = path.join(projectRoot, 'out');
const defaultLocaleDir = path.join(outDir, 'en');

if (!existsSync(defaultLocaleDir)) {
  process.exit(0);
}

for (const entry of readdirSync(defaultLocaleDir, { withFileTypes: true })) {
  const source = path.join(defaultLocaleDir, entry.name);
  const destination = path.join(outDir, entry.name);

  if (entry.name === 'index.html' || entry.name === '404.html') {
    continue;
  }

  cpSync(source, destination, {
    recursive: true,
    force: true,
  });
}
