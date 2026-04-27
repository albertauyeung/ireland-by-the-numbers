// Tiny custom i18n. We avoid pulling in i18next/react-intl to keep the bundle
// small — the app only needs static-key lookups, no plurals or ICU formatting.
//
// Locale codes follow BCP-47 where reasonable:
//   en       — English (default)
//   fr       — Français
//   pl       — Polski
//   es       — Español
//   zh-Hant  — 繁體中文 (Mandarin, Traditional)
//   zh-Hans  — 简体中文 (Mandarin, Simplified)
//   yue      — 粵語 (Cantonese, Traditional script, written in HK colloquial)

import en from './messages/en';
import fr from './messages/fr';
import pl from './messages/pl';
import es from './messages/es';
import zhHant from './messages/zh-Hant';
import zhHans from './messages/zh-Hans';
import yue from './messages/yue';

export const LOCALES = [
  'en',
  'fr',
  'pl',
  'es',
  'zh-Hant',
  'zh-Hans',
  'yue',
] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  pl: 'Polski',
  es: 'Español',
  'zh-Hant': '繁體中文',
  'zh-Hans': '简体中文',
  yue: '粵語',
};

export const LOCALE_SHORT: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  pl: 'PL',
  es: 'ES',
  'zh-Hant': '繁',
  'zh-Hans': '简',
  yue: '粵',
};

// Date locales for Intl. en-IE keeps the original "Friday, 27 April 2026" feel.
export const DATE_LOCALE: Record<Locale, string> = {
  en: 'en-IE',
  fr: 'fr-FR',
  pl: 'pl-PL',
  es: 'es-ES',
  'zh-Hant': 'zh-Hant',
  'zh-Hans': 'zh-Hans',
  yue: 'zh-Hant-HK',
};

export type Messages = typeof en;

export const MESSAGES: Record<Locale, Messages> = {
  en,
  fr,
  pl,
  es,
  'zh-Hant': zhHant,
  'zh-Hans': zhHans,
  yue,
};
