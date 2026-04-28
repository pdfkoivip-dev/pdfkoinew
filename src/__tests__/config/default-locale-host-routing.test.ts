import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const vercelConfigPath = path.join(projectRoot, 'vercel.json');
const netlifyConfigPath = path.join(projectRoot, 'netlify.toml');
const cloudflareRedirectsPath = path.join(projectRoot, 'public', '_redirects');

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
  it('keeps Vercel redirects for /en canonicalization but removes root-to-/en rewrites', () => {
    const config = JSON.parse(readFileSync(vercelConfigPath, 'utf8')) as {
      redirects: Array<{ source: string; destination: string; permanent?: boolean }>;
      rewrites: Array<{ source: string; destination: string }>;
    };

    expect(config.redirects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ source: '/en', destination: '/', permanent: true }),
        expect.objectContaining({ source: '/en/', destination: '/', permanent: true }),
        expect.objectContaining({ source: '/en/:path*', destination: '/:path*', permanent: true }),
      ])
    );

    for (const target of staleRootToEnglishTargets) {
      expect(config.rewrites.some((rewrite) => rewrite.destination.includes(target))).toBe(false);
    }
  });

  it('keeps Netlify redirects for /en canonicalization but removes root-to-/en 200 proxies', () => {
    const config = readFileSync(netlifyConfigPath, 'utf8');

    expect(config).toContain('from = "/en"');
    expect(config).toContain('to = "/"');
    expect(config).toContain('from = "/en/*"');
    expect(config).toContain('to = "/:splat"');

    for (const target of staleRootToEnglishTargets) {
      expect(config).not.toContain(`to = "${target}`);
    }
  });

  it('keeps Cloudflare Pages redirects for /en canonicalization but removes root-to-/en 200 proxies', () => {
    const config = readFileSync(cloudflareRedirectsPath, 'utf8');

    expect(config).toContain('/en    /     301!');
    expect(config).toContain('/en/   /     301!');
    expect(config).toContain('/en/*  /:splat 301!');

    for (const target of staleRootToEnglishTargets) {
      expect(config).not.toContain(` ${target}`);
    }
  });
});
