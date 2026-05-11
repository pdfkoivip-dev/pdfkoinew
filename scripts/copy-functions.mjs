import { cpSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const functionsSource = path.join(projectRoot, 'functions');
const functionsDestination = path.join(projectRoot, 'out', 'functions');

if (!existsSync(functionsSource)) {
  console.log('No functions directory found, skipping copy');
  process.exit(0);
}

if (!existsSync(path.dirname(functionsDestination))) {
  console.log('Output directory does not exist, skipping copy');
  process.exit(0);
}

console.log('Copying Cloudflare Pages Functions to output directory...');

cpSync(functionsSource, functionsDestination, {
  recursive: true,
  force: true,
});

console.log('✓ Functions copied successfully');
