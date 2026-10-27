// Dil dışı site ayarları: adres, diller ve sayfa yolları. Kullanıcıya görünen metin içermez;
// tüm metinler locales/{lang}.json ve content/{lang}/*.html dosyalarındadır.
export const SITE = 'https://animora.appouse.com';
export const EMAIL = 'info@appouse.com';
export const DEFAULT_LANG = 'tr';
export const LANGS = ['tr', 'en'];

// Dile göre sabit URL'ler. Varsayılan dil kökte, diğer diller /{lang}/ altında.
export const ROUTES = {
  home: { tr: '/', en: '/en/' },
  privacy: { tr: '/gizlilik', en: '/en/privacy' },
  kvkk: { tr: '/kvkk', en: '/en/kvkk' },
  terms: { tr: '/kullanim-kosullari', en: '/en/terms' },
  deleteAccount: { tr: '/hesap-silme', en: '/en/delete-account' },
  support: { tr: '/destek', en: '/en/support' },
  cookies: { tr: '/cerez-politikasi', en: '/en/cookies' },
};

export const LEGAL_PAGES = ['privacy', 'kvkk', 'terms', 'deleteAccount', 'support', 'cookies'];
export const FOOTER_LEGAL = ['privacy', 'kvkk', 'terms', 'deleteAccount', 'cookies'];

// Mağaza abonelik yönetimi gibi dış bağlantılar içerik dosyalarında doğrudan yer alır.
export const NOT_FOUND_FILE = { tr: '404.html', en: 'en/404.html' };
