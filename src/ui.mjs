// Ortak SVG ikonları ve uygulama ekran görüntüsü (telefon çerçevesi) yardımcıları.
import { asset } from './assets.mjs';

const stroke = (d) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

const icons = {
  logo: `<svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="11" fill="#4E8A3E"/><path d="M8.5 11.5c2.2 3.2 5 4.5 8.5 4.5h6c3.5 0 6.3-1.3 8.5-4.5" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M14 17.5v5.5c0 5.2 2.8 9 6 9s6-3.8 6-9v-5.5" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17.6" cy="26.6" r="1.4" fill="#F6E7C8"/><circle cx="22.4" cy="26.6" r="1.4" fill="#F6E7C8"/></svg>`,
  tag: stroke('<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>'),
  syringe: stroke('<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3a2.4 2.4 0 0 1-3.4 0l-.6-.6a2.4 2.4 0 0 1 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>'),
  drop: stroke('<path d="M12 2.7s-6.5 7-6.5 11.8a6.5 6.5 0 0 0 13 0C18.5 9.7 12 2.7 12 2.7z"/>'),
  heart: stroke('<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>'),
  calendar: stroke('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>'),
  wallet: stroke('<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>'),
  wheat: stroke('<path d="M2 22 16 8"/><path d="M3.5 12.5 5 11l1.5 1.5a3.5 3.5 0 0 1 0 5L5 19l-1.5-1.5a3.5 3.5 0 0 1 0-5z"/><path d="M7.5 8.5 9 7l1.5 1.5a3.5 3.5 0 0 1 0 5L9 15l-1.5-1.5a3.5 3.5 0 0 1 0-5z"/><path d="M11.5 4.5 13 3l1.5 1.5a3.5 3.5 0 0 1 0 5L13 11l-1.5-1.5a3.5 3.5 0 0 1 0-5z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4z"/>'),
  box: stroke('<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>'),
  file: stroke('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>'),
  users: stroke('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>'),
  steth: stroke('<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>'),
  grid: stroke('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17.5h7M17.5 14v7"/>'),
  bell: stroke('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>'),
  shield: stroke('<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'),
  phone: stroke('<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>'),
  radio: stroke('<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.1 19.1 19"/><circle cx="12" cy="12" r="2"/>'),
  mail: stroke('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
  help: stroke('<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>'),
  chevL: stroke('<path d="m15 18-6-6 6-6"/>'),
  chevR: stroke('<path d="m9 18 6-6-6-6"/>'),
  trash: stroke('<path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>'),
  apple: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.96-.74 1.39 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.65zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28z"/></svg>`,
  play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.2 2.4 13.6 12l-9.4 9.6c-.3-.2-.5-.6-.5-1V3.4c0-.4.2-.8.5-1z" fill="#34A853"/><path d="m16.8 8.8-3.2 3.2-9.4-9.6c.3-.2.8-.2 1.2 0z" fill="#FBBC04"/><path d="M16.8 15.2 5.4 21.6c-.4.2-.9.2-1.2 0l9.4-9.6z" fill="#EA4335"/><path d="m20.6 13-3.8 2.2-3.2-3.2 3.2-3.2 3.8 2.2c.9.5.9 1.5 0 2z" fill="#4285F4"/></svg>`,
};

export const icon = (name) => icons[name];

// Uygulama ekran görüntüsü: telefon çerçevesi içinde 360w/720w WebP (scripts/make-screens.py üretir).
// Görüntüler 360x758 oranındadır; alt metin locales/{lang}.json içinden gelir. Adresler içerik özetlidir (src/assets.mjs).
export const SHOT = { w: 360, h: 758 };
export const shotSrc = (lang, img, w) => asset(`screens/${lang}/${img}-${w}.webp`);
export const shotSrcset = (lang, img) => `${shotSrc(lang, img, 360)} 360w, ${shotSrc(lang, img, 720)} 720w`;
export function phoneShot(lang, img, alt, sizes = '(max-width: 520px) 236px, 280px', eager = false) {
  const load = eager ? 'fetchpriority="high"' : 'loading="lazy"';
  return `<div class="device"><img src="${shotSrc(lang, img, 360)}" srcset="${shotSrcset(lang, img)}" sizes="${sizes}" width="${SHOT.w}" height="${SHOT.h}" alt="${alt}" ${load} decoding="async"></div>`;
}
