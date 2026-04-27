import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { LOCALES, LOCALE_LABELS, LOCALE_SHORT } from '../i18n';

export default function LocaleSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.languageMenu')}
        className="rounded-full border border-parchment-300 bg-white/70 px-2.5 py-1 text-xs font-medium text-ink-700 hover:bg-parchment-200 transition flex items-center gap-1.5"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{LOCALE_SHORT[locale]}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-44 rounded-md border border-parchment-200 bg-white shadow-lg overflow-hidden z-40"
        >
          {LOCALES.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm transition ${
                  l === locale
                    ? 'bg-emerald_ie-700 text-white'
                    : 'text-ink-700 hover:bg-parchment-100'
                }`}
              >
                {LOCALE_LABELS[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
