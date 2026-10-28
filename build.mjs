// Animora tanıtım sitesi için bağımlılıksız statik site üreticisi.
// Kullanım: node build.mjs  ->  dist/ klasörüne HTML çıktısı yazar.
// Şablonlar metin içermez: arayüz metinleri locales/{lang}.json, yasal içerik content/{lang}/*.html.
import { mkdirSync, writeFileSync, copyFileSync, cpSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, EMAIL, LANGS, DEFAULT_LANG, ROUTES, LEGAL_PAGES, FOOTER_LEGAL, NOT_FOUND_FILE } from './src/config.mjs';
import { icon } from './src/ui.mjs';
import { homeBody } from './src/home.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');
const locales = Object.fromEntries(LANGS.map((l) => [l, JSON.parse(readFileSync(join(root, 'locales', `${l}.json`), 'utf8'))]));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const year = new Date().getFullYear();

// İçerik dosyası biçimi: "## bolum-id | Bölüm başlığı" satırı ve altında HTML gövdesi.
function parseContent(lang, key) {
  const raw = readFileSync(join(root, 'content', lang, `${key}.html`), 'utf8');
  return raw.split(/^## /m).filter((s) => s.trim()).map((block) => {
    const nl = block.indexOf('\n');
    const [id, title] = block.slice(0, nl).split('|').map((s) => s.trim());
    return { id, title, html: block.slice(nl + 1).trim() };
  });
}

function fill(html, lang) {
  const t = locales[lang];
  const controller = `<div class="box"><p><strong>${t.controller.name}</strong><br>${t.controller.address}<br>${t.controller.emailLabel} <a href="mailto:${EMAIL}">${EMAIL}</a></p></div>`;
  return html
    .replaceAll('{{controller}}', controller)
    .replaceAll('{{email}}', `<a href="mailto:${EMAIL}">${EMAIL}</a>`)
    .replaceAll('{{emailAddr}}', EMAIL)
    .replace(/\{\{url:([a-zA-Z]+)\}\}/g, (_, k) => ROUTES[k][lang]);
}

function legalBody(lang, key) {
  const t = locales[lang];
  const p = t.pages[key];
  const sections = parseContent(lang, key);
  return `
<section class="legal-hero"><div class="wrap">
  <span class="eyebrow">${p.eyebrow}</span>
  <h1>${p.h1}</h1>
  <p>${p.intro}</p>
  <p><small>${t.site.updated.replace('{date}', t.meta.updated)}</small></p>
</div></section>
<div class="wrap legal">
  <nav class="toc" aria-label="${t.site.toc}"><strong>${t.site.toc}</strong><ol>${sections.map((s) => `<li><a href="#${s.id}">${s.title}</a></li>`).join('')}</ol></nav>
  <article class="prose">${sections.map((s) => `<h2 id="${s.id}">${s.title}</h2>\n${fill(s.html, lang)}`).join('\n')}</article>
</div>`;
}

function notFoundBody(lang) {
  const t = locales[lang];
  const p = t.pages.notFound;
  return `<section class="notfound"><div class="wrap"><h1>${p.h1}</h1><p class="lead center">${p.text}</p><p><a class="btn btn-primary" href="${ROUTES.home[lang]}">${p.home}</a></p></div></section>`;
}

function layout({ lang, key, body }) {
  const t = locales[lang];
  const page = t.pages[key];
  const route = ROUTES[key];
  const url = (k) => ROUTES[k][lang];
  const canonical = route ? SITE + route[lang] : null;
  const others = LANGS.filter((l) => l !== lang);
  const hreflang = route
    ? [...LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE + route[l]}">`), `<link rel="alternate" hreflang="x-default" href="${SITE + route[DEFAULT_LANG]}">`].join('\n')
    : '';
  const home = url('home');
  const anchor = (id) => `${home}#${t.anchors[id]}`;
  const navLinks = [[anchor('features'), t.nav.features], [anchor('plans'), t.nav.plans], [anchor('faq'), t.nav.faq], [url('support'), t.nav.support]];
  const productLinks = [[anchor('features'), t.nav.features], [anchor('plans'), t.nav.plans], [anchor('faq'), t.nav.faqLong], [url('support'), t.nav.supportLong]];
  const legalLinks = FOOTER_LEGAL.map((k) => [url(k), t.pages[k].label]);
  const switcher = others
    .map((l) => `<a class="lang" href="${route ? route[l] : ROUTES.home[l]}" hreflang="${l}" lang="${l}">${locales[l].meta.langName}</a>`)
    .join('');
  const jsonLd = key === 'home'
    ? `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: t.site.brand,
      applicationCategory: 'BusinessApplication',
      operatingSystem: t.jsonLd.os,
      description: t.jsonLd.description,
      url: canonical,
      inLanguage: LANGS,
      publisher: { '@type': 'Organization', name: t.controller.name, email: EMAIL },
    })}</script>`
    : '';
  const brand = `${icon('logo')}<span>${t.site.brand}</span>`;

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${canonical ? `<link rel="canonical" href="${canonical}">` : '<meta name="robots" content="noindex">'}
${hreflang}
<meta name="theme-color" content="#4e8a3e">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(t.site.brand)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
${canonical ? `<meta property="og:url" content="${canonical}">` : ''}
<meta property="og:image" content="${SITE}/assets/og-${lang}.png">
<meta property="og:locale" content="${t.meta.ogLocale}">
${others.map((l) => `<meta property="og:locale:alternate" content="${locales[l].meta.ogLocale}">`).join('\n')}
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/favicon-48.png" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" sizes="180x180">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/Poppins-Regular.ttf" as="font" type="font/ttf" crossorigin>
${key === 'home' ? `<link rel="preload" as="image" type="image/webp" href="/assets/screens/${lang}/${t.home.hero.shot.img}-360.webp" imagesrcset="/assets/screens/${lang}/${t.home.hero.shot.img}-360.webp 360w, /assets/screens/${lang}/${t.home.hero.shot.img}-720.webp 720w" imagesizes="(max-width: 520px) 256px, 300px" fetchpriority="high">` : ''}
<link rel="stylesheet" href="/assets/site.css">
${jsonLd}
</head>
<body>
<a class="skip" href="#main">${t.site.skip}</a>
<header class="site-header">
  <div class="wrap nav">
    <a class="brand" href="${home}" aria-label="${esc(t.site.brand)}">${brand}</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">${t.site.menu}</button>
    <nav class="nav-links" id="site-nav">${navLinks.map(([h, l]) => `<a href="${h}"${route && h === route[lang] ? ' aria-current="page"' : ''}>${l}</a>`).join('')}<span class="lang-switch" aria-label="${esc(t.site.language)}">${switcher}</span></nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <a class="brand" href="${home}">${brand}</a>
        <p class="foot-tagline">${t.site.footTagline}</p>
      </div>
      <div><h4>${t.site.footProduct}</h4><ul>${productLinks.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
      <div><h4>${t.site.footLegal}</h4><ul>${legalLinks.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
    </div>
    <div class="foot-bottom"><span>${t.site.copyright.replace('{year}', year)}</span><span>${t.site.by}</span></div>
  </div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>
`;
}

function writePage(path, html) {
  // "/gizlilik" -> dist/gizlilik/index.html, "/en/" -> dist/en/index.html
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  const file = clean ? join(out, clean, 'index.html') : join(out, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

mkdirSync(out, { recursive: true });
for (const f of readdirSync(out)) rmSync(join(out, f), { recursive: true, force: true });
mkdirSync(join(out, 'assets', 'fonts'), { recursive: true });

let count = 0;
for (const lang of LANGS) {
  const t = locales[lang];
  writePage(ROUTES.home[lang], layout({ lang, key: 'home', body: homeBody({ t, url: (k) => ROUTES[k][lang], email: EMAIL }) }));
  count++;
  for (const key of LEGAL_PAGES) {
    writePage(ROUTES[key][lang], layout({ lang, key, body: legalBody(lang, key) }));
    count++;
  }
  const nf = join(out, NOT_FOUND_FILE[lang]);
  mkdirSync(dirname(nf), { recursive: true });
  writeFileSync(nf, layout({ lang, key: 'notFound', body: notFoundBody(lang) }));
  count++;
}

for (const f of readdirSync(join(root, 'src', 'fonts'))) copyFileSync(join(root, 'src', 'fonts', f), join(out, 'assets', 'fonts', f));
for (const f of ['site.css', 'site.js', ...LANGS.map((l) => `og-${l}.png`)]) copyFileSync(join(root, 'src', f), join(out, 'assets', f));
// Uygulama ekran görüntüleri (dil başına): src/screens/{lang}/*.webp -> /assets/screens/{lang}/
cpSync(join(root, 'src', 'screens'), join(out, 'assets', 'screens'), { recursive: true });
// İkonlar hem /assets/ altında (HTML ve manifest bağlantıları) hem kökte (tarayıcıların varsayılan arama yolu) sunulur.
const ICONS = ['favicon-48.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];
for (const f of ICONS) {
  copyFileSync(join(root, 'src', f), join(out, 'assets', f));
  copyFileSync(join(root, 'src', f), join(out, f));
}
copyFileSync(join(root, 'src', 'favicon.svg'), join(out, 'favicon.svg'));
const t0 = locales[DEFAULT_LANG];
writeFileSync(join(out, 'site.webmanifest'), JSON.stringify({
  name: t0.site.brand,
  short_name: t0.site.brand,
  description: t0.jsonLd.description,
  lang: DEFAULT_LANG,
  start_url: '/',
  display: 'browser',
  background_color: '#f7f4ec',
  theme_color: '#4e8a3e',
  icons: [
    { src: '/assets/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
}, null, 2));

const sitemapEntries = Object.values(ROUTES).map((r) =>
  LANGS.map((l) => `  <url><loc>${SITE + r[l]}</loc>${LANGS.map((x) => `<xhtml:link rel="alternate" hreflang="${x}" href="${SITE + r[x]}"/>`).join('')}</url>`).join('\n')).join('\n');
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries}
</urlset>
`);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`${count} pages -> dist/`);
