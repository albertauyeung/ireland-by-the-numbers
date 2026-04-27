import { NavLink, Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import LocaleSwitcher from './LocaleSwitcher';

export default function Nav() {
  const { t } = useLocale();
  const items = [
    { to: '/', label: t('nav.today') },
    { to: '/stories', label: t('nav.stories') },
    { to: '/explorer', label: t('nav.explorer') },
    { to: '/about', label: t('nav.about') },
  ];

  return (
    <header className="border-b border-parchment-200 bg-parchment-50/80 backdrop-blur sticky top-0 z-30">
      <div className="container-app flex items-center justify-between h-16 gap-3">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-emerald_ie-700 text-parchment-100 font-display font-semibold">
            É
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-ink-900">
              {t('brand.name')}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-ink-700/70">
              {t('brand.tagline')}
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-1">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm no-underline transition ${
                  isActive
                    ? 'bg-emerald_ie-700 text-white'
                    : 'text-ink-700 hover:bg-parchment-200'
                }`
              }
            >
              {it.label}
            </NavLink>
          ))}
          <div className="ml-2">
            <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
