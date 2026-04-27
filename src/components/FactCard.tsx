import { forwardRef } from 'react';
import type { Fact } from '../data/facts';
import { useLocale } from '../i18n/LocaleContext';

type Props = {
  fact: Fact;
  date?: Date;
};

const FactCard = forwardRef<HTMLDivElement, Props>(function FactCard(
  { fact, date = new Date() },
  ref,
) {
  const { t, dateLocale } = useLocale();
  const dateStr = date.toLocaleDateString(dateLocale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div
      ref={ref}
      className="card overflow-hidden relative isolate"
      style={{
        background:
          'linear-gradient(140deg, #FBF7EE 0%, #FDFBF6 35%, #EAF3EE 100%)',
      }}
    >
      <div className="p-8 sm:p-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald_ie-800/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald_ie-700" />
          {t('fact.label')} · {dateStr}
        </div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl leading-tight text-ink-900">
          {fact.headline}
        </h2>
        <p className="mt-4 max-w-2xl text-ink-700/90 leading-relaxed">
          {fact.context}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="pill">{t('fact.sourceLabel')}</span>
          <a
            href={fact.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="text-ink-700"
          >
            {fact.source}
          </a>
        </div>
      </div>
      <div className="absolute -right-12 -bottom-16 h-64 w-64 rounded-full bg-emerald_ie-100 opacity-60 blur-2xl -z-10" />
      <div className="absolute right-6 bottom-4 font-mono text-[10px] tracking-wider text-emerald_ie-800/60">
        réalachas.ie
      </div>
    </div>
  );
});

export default FactCard;
