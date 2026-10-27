// Site genel ayarları ve veri sorumlusu bilgisi. Değişiklik gerekirse yalnızca burayı güncelleyin.
import tr from './pages-tr.mjs';
import en from './pages-en.mjs';

export const SITE = 'https://animora.appouse.com';

export const CONTROLLER = {
  name: 'APPOUSE TEKNOLOJİ LİMİTED ŞİRKETİ',
  short: 'Appouse Teknoloji Ltd. Şti.',
  address: 'Altıntepe Mahallesi, İstasyon Yolu Sokak No: 3 Daire: 1, Maltepe / İstanbul, Türkiye',
  addressEn: 'Altıntepe Mahallesi, İstasyon Yolu Sokak No: 3 Daire: 1, Maltepe / Istanbul, Türkiye',
  email: 'mustafa.ulukaya@appouse.com',
};

export const UPDATED = { tr: '28 Ekim 2026', en: 'October 28, 2026' };

export const pagesFor = (lang) => (lang === 'tr' ? tr : en)({ SITE, C: CONTROLLER, UPDATED: UPDATED[lang] });
