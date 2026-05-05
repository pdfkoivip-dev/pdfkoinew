import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const cloudflareRedirectsPath = path.join(projectRoot, 'public', '_redirects');
const cloudflareHeadersPath = path.join(projectRoot, 'public', '_headers');

const staleRootToEnglishTargets = [
  '/en/tools',
  '/en/workflow',
  '/en/about',
  '/en/faq',
  '/en/privacy',
  '/en/cookies',
  '/en/contact',
  '/en/terms',
  '/en/compress-pdf-for-email',
  '/en/compress-pdf-without-upload',
  '/en/merge-pdf-no-signup',
] as const;

describe('default locale host routing config', () => {
  it('keeps Cloudflare Pages redirects for /en canonicalization but removes root-to-/en 200 proxies', () => {
    const config = readFileSync(cloudflareRedirectsPath, 'utf8');

    expect(config).toContain('http://www.pdfkoi.com/*   https://pdfkoi.com/:splat   301!');
    expect(config).toContain('https://www.pdfkoi.com/*  https://pdfkoi.com/:splat   301!');
    expect(config).toContain('http://pdfkoi.com/*       https://pdfkoi.com/:splat   301!');
    expect(config).toContain('/en    /     301!');
    expect(config).toContain('/en/   /     301!');
    expect(config).toContain('/en/*  /:splat 301!');
    expect(config).toContain('/tools/pdf-to-docx /tools/pdf-to-docx/ 301!');
    expect(config).not.toContain('/tools    /en/tools');
    expect(config).not.toContain('/tools/*  /en/tools/:splat');

    for (const target of staleRootToEnglishTargets) {
      expect(config).not.toContain(` ${target}`);
    }
  });

  it('marks the web app manifest as a non-indexable asset without affecting HTML pages', () => {
    const config = readFileSync(cloudflareHeadersPath, 'utf8');

    expect(config).toContain('/manifest.webmanifest');
    expect(config).toContain('X-Robots-Tag: noindex');
    expect(config).not.toContain('/*.xml\n  X-Robots-Tag: noindex');
    expect(config).not.toContain('/*.html\n  X-Robots-Tag: noindex');
  });
});
