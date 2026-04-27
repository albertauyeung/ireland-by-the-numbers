import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  DATE_LOCALE,
  LOCALES,
  MESSAGES,
  type Locale,
  type Messages,
} from './index';

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (path: MessagePath) => string;
  m: Messages; // raw access for nested objects (lists, etc.)
  dateLocale: string;
};

const LocaleContext = createContext<Ctx | null>(null);
const STORAGE_KEY = 'realachas.locale';

function isLocale(v: string | null | undefined): v is Locale {
  return !!v && (LOCALES as readonly string[]).includes(v);
}

function detectInitial(): Locale {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(saved)) return saved;
  // Try navigator language: pick the most specific match we have.
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of langs) {
    const l = raw.toLowerCase();
    if (l.startsWith('yue') || l.includes('-hk') || l.includes('hant-hk')) return 'yue';
    if (l.startsWith('zh-hant') || l.includes('zh-tw') || l.includes('hant')) return 'zh-Hant';
    if (l.startsWith('zh')) return 'zh-Hans';
    if (l.startsWith('fr')) return 'fr';
    if (l.startsWith('pl')) return 'pl';
    if (l.startsWith('es')) return 'es';
  }
  return 'en';
}

// Path lookup helper: 'nav.home' -> messages.nav.home
type Primitive = string | number;
type DeepKeys<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends Primitive
    ? `${P}${K}`
    : T[K] extends object
      ? DeepKeys<T[K], `${P}${K}.`>
      : never;
}[keyof T & string];

export type MessagePath = DeepKeys<Messages>;

function lookup(obj: unknown, path: string): string {
  const parts = path.split('.');
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return path;
    }
  }
  return typeof cur === 'string' ? cur : path;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitial());

  useEffect(() => {
    document.documentElement.lang = locale === 'yue' ? 'zh-yue' : locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore storage errors (private browsing, etc.)
    }
  }, []);

  const value = useMemo<Ctx>(() => {
    const m = MESSAGES[locale];
    const en = MESSAGES.en;
    return {
      locale,
      setLocale,
      m,
      dateLocale: DATE_LOCALE[locale],
      t: (path: MessagePath) => {
        const v = lookup(m, path);
        if (v === path) return lookup(en, path); // fall back to English
        return v;
      },
    };
  }, [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside LocaleProvider');
  return ctx;
}
