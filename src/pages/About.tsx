import { useLocale } from '../i18n/LocaleContext';

export default function About() {
  const { t, m } = useLocale();
  const leadParts = t('about.lead').split('{em}');
  return (
    <div className="container-app py-10 sm:py-14 max-w-3xl space-y-6">
      <header>
        <h1 className="font-display text-3xl sm:text-4xl text-ink-900">
          {t('about.title')}
        </h1>
        <p className="mt-2 text-ink-700/80">
          {leadParts[0]}
          <em>{t('about.leadEm')}</em>
          {leadParts[1]}
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">{t('about.whoTitle')}</h2>
        <ul className="list-disc pl-5 space-y-1 text-ink-700/90">
          {m.about.who.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">{t('about.sourcesTitle')}</h2>
        <ul className="space-y-2 text-ink-700/90">
          <li>
            {fillTokens(t('about.sourceCso'), {
              name: <strong>CSO PxStat</strong>,
              site: (
                <a href="https://data.cso.ie" target="_blank" rel="noreferrer">
                  data.cso.ie
                </a>
              ),
            })}
          </li>
          <li>
            {fillTokens(t('about.sourceCensus'), {
              name: <strong>Census 2022</strong>,
              site: (
                <a
                  href="https://www.cso.ie/en/statistics/population/census2022/"
                  target="_blank"
                  rel="noreferrer"
                >
                  cso.ie
                </a>
              ),
            })}
          </li>
          <li>
            {fillTokens(t('about.sourceMet'), {
              name: <strong>Met Éireann Open Data</strong>,
              site: (
                <a
                  href="https://www.met.ie/about-us/specialised-services/open-data"
                  target="_blank"
                  rel="noreferrer"
                >
                  met.ie
                </a>
              ),
            })}
          </li>
          <li>
            {fillTokens(t('about.sourceOther'), {
              seai: <strong>SEAI</strong>,
              epa: <strong>EPA</strong>,
              pobal: <strong>Pobal</strong>,
            })}
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">{t('about.licenceTitle')}</h2>
        <p className="text-ink-700/90">
          {fillTokens(t('about.licenceBody'), {
            ccby: (
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noreferrer"
              >
                CC BY 4.0
              </a>
            ),
          })}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">{t('about.accuracyTitle')}</h2>
        <p className="text-ink-700/90">{t('about.accuracyBody')}</p>
      </section>
    </div>
  );
}

// Splits a template like "Foo {bar} baz" into [text, node, text, ...] so we
// can interleave React elements with localised prose.
function fillTokens(template: string, tokens: Record<string, React.ReactNode>) {
  const parts: React.ReactNode[] = [];
  const re = /\{(\w+)\}/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(template)) !== null) {
    if (match.index > last) parts.push(template.slice(last, match.index));
    parts.push(tokens[match[1]] ?? `{${match[1]}}`);
    last = match.index + match[0].length;
  }
  if (last < template.length) parts.push(template.slice(last));
  return parts.map((part, i) => <span key={i}>{part}</span>);
}
