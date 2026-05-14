/**
 * Deployment Verification Script
 *
 * Verifies that sitemap files are correctly deployed to production.
 * Run this after deployment to catch sitemap truncation issues.
 *
 * Usage:
 *   node scripts/verify-deployment.mjs
 *   node scripts/verify-deployment.mjs --url https://pdfkoi.com
 */

import https from 'https';

const locales = ['en', 'ja', 'ko', 'es', 'fr', 'de', 'zh', 'zh-tw', 'pt'];

// 从命令行参数获取 URL,默认为 pdfkoi.com
const args = process.argv.slice(2);
const urlIndex = args.indexOf('--url');
const baseUrl = urlIndex !== -1 && args[urlIndex + 1]
  ? args[urlIndex + 1]
  : 'https://pdfkoi.com';

/**
 * 获取 sitemap 并统计 URL 数量
 */
async function verifySitemap(locale) {
  const url = `${baseUrl}/sitemap/${locale}.xml`;

  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode !== 200) {
          resolve({
            locale,
            urlCount: 0,
            ok: false,
            error: `HTTP ${res.statusCode}`,
          });
          return;
        }

        const urlCount = (data.match(/<url>/g) || []).length;

        // 阈值判断:
        // - 英语至少 100 个 URL
        // - 其他语言至少 10 个 URL
        const minExpected = locale === 'en' ? 100 : 10;
        const ok = urlCount >= minExpected;

        resolve({
          locale,
          urlCount,
          ok,
          expected: minExpected,
        });
      });
    }).on('error', (err) => {
      resolve({
        locale,
        urlCount: 0,
        ok: false,
        error: err.message,
      });
    });
  });
}

/**
 * 验证主 sitemap 索引文件
 */
async function verifyMainSitemap() {
  const url = `${baseUrl}/sitemap.xml`;

  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode !== 200) {
          resolve({
            ok: false,
            error: `HTTP ${res.statusCode}`,
          });
          return;
        }

        // 检查是否包含所有语言的 sitemap
        const missingLocales = locales.filter(
          (locale) => !data.includes(`/sitemap/${locale}.xml`)
        );

        resolve({
          ok: missingLocales.length === 0,
          missingLocales,
        });
      });
    }).on('error', (err) => {
      resolve({
        ok: false,
        error: err.message,
      });
    });
  });
}

async function main() {
  console.log(`\n🔍 Verifying sitemap deployment for ${baseUrl}\n`);

  // 验证主 sitemap
  console.log('Checking main sitemap index...');
  const mainResult = await verifyMainSitemap();

  if (!mainResult.ok) {
    console.log(`❌ Main sitemap: ${mainResult.error || 'Missing locales: ' + mainResult.missingLocales.join(', ')}`);
  } else {
    console.log('✅ Main sitemap: OK\n');
  }

  // 验证各语言 sitemap
  console.log('Checking locale-specific sitemaps...\n');

  const results = await Promise.all(locales.map(verifySitemap));

  let hasErrors = false;

  for (const result of results) {
    const { locale, urlCount, ok, expected, error } = result;

    if (error) {
      console.log(`❌ ${locale.padEnd(6)}: ERROR - ${error}`);
      hasErrors = true;
    } else if (!ok) {
      console.log(`❌ ${locale.padEnd(6)}: ${urlCount} URLs (expected at least ${expected})`);
      hasErrors = true;
    } else {
      console.log(`✅ ${locale.padEnd(6)}: ${urlCount} URLs`);
    }
  }

  console.log('\n' + '='.repeat(50));

  if (!mainResult.ok || hasErrors) {
    console.log('\n❌ Deployment verification FAILED');
    console.log('\nPossible causes:');
    console.log('  1. Cloudflare cache not cleared');
    console.log('  2. Build script execution order issue');
    console.log('  3. Sitemap files not uploaded correctly');
    console.log('\nRecommended actions:');
    console.log('  1. Clear Cloudflare cache (Purge Everything)');
    console.log('  2. Trigger a new deployment');
    console.log('  3. Check build logs for errors');
    process.exit(1);
  } else {
    console.log('\n✅ Deployment verification PASSED');
    console.log('\nAll sitemaps are correctly deployed.');
    process.exit(0);
  }
}

main();
