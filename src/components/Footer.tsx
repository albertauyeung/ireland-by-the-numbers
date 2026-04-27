import { useLocale } from '../i18n/LocaleContext';

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-parchment-200 bg-parchment-100">
      <div className="container-app py-8 grid gap-6 md:grid-cols-3 text-sm text-ink-700/80">
        <div>
          <div className="font-display text-base text-ink-900 mb-2">
            {t('footer.aboutTitle')}
          </div>
          <p>{t('footer.aboutBody')}</p>
        </div>
        <div>
          <div className="font-display text-base text-ink-900 mb-2">
            {t('footer.sourcesTitle')}
          </div>
          <ul className="space-y-1">
            <li>
              <a href="https://data.cso.ie" target="_blank" rel="noreferrer">
                CSO PxStat (data.cso.ie)
              </a>
            </li>
            <li>
              <a
                href="https://www.met.ie/about-us/specialised-services/open-data"
                target="_blank"
                rel="noreferrer"
              >
                Met Éireann Open Data
              </a>
            </li>
            <li>
              <a
                href="https://www.seai.ie/data-and-insights/seai-statistics/"
                target="_blank"
                rel="noreferrer"
              >
                SEAI Statistics
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-display text-base text-ink-900 mb-2">
            {t('footer.licenceTitle')}
          </div>
          <p>{t('footer.licenceBody')}</p>
        </div>
      </div>
      <div className="container-app pb-6 text-xs text-ink-700/60">
        {t('footer.builtWith').replace('{year}', String(new Date().getFullYear()))}
      </div>
    </footer>
  );
}
