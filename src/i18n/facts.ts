// Per-locale translations for individual facts (headline + context).
// Source labels and URLs stay in English (they reference English-language
// official organisations). When a locale lacks a translation for a given
// fact id, we fall back to the English text in `data/facts.ts`.
//
// This keeps the system honest: UI chrome and the most-used facts are
// localised, and longer-tail facts gracefully default to English rather
// than render placeholder text.

import type { Fact } from '../data/facts';
import type { Locale } from './index';

import en from './facts/en';
import fr from './facts/fr';
import pl from './facts/pl';
import es from './facts/es';
import zhHant from './facts/zh-Hant';
import zhHans from './facts/zh-Hans';
import yue from './facts/yue';

export type FactTranslation = { headline: string; context: string };

const TRANSLATIONS: Record<Locale, Record<string, FactTranslation>> = {
  en,
  fr,
  pl,
  es,
  'zh-Hant': zhHant,
  'zh-Hans': zhHans,
  yue,
};

export function localizeFact(fact: Fact, locale: Locale): Fact {
  if (locale === 'en') return fact;
  const tr = TRANSLATIONS[locale]?.[fact.id];
  if (!tr) return fact;
  return { ...fact, headline: tr.headline, context: tr.context };
}
