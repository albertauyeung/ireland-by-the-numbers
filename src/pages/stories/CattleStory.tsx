import { useRef } from 'react';
import StatChart from '../../components/StatChart';
import ShareButton from '../../components/ShareButton';
import { useLocale } from '../../i18n/LocaleContext';

const baseData = [
  { county: 'Cavan', people: 81704, cattle: 322000 },
  { county: 'Tipperary', people: 167895, cattle: 670000 },
  { county: 'Cork', people: 584156, cattle: 1280000 },
  { county: 'Limerick', people: 209536, cattle: 410000 },
  { county: 'Kerry', people: 156458, cattle: 340000 },
  { county: 'Galway', people: 277737, cattle: 470000 },
  { county: 'Mayo', people: 137231, cattle: 305000 },
  { county: 'Roscommon', people: 70259, cattle: 235000 },
  { county: 'Dublin', people: 1458154, cattle: 7500 },
] as const;

export default function CattleStory() {
  const chartRef = useRef<HTMLDivElement>(null);
  const { t, m } = useLocale();
  const labels = m.counties as Record<string, string>;
  const data = baseData.map((d) => ({
    ...d,
    county: labels[d.county] ?? d.county,
  }));
  return (
    <article className="space-y-5 text-ink-700/90 leading-relaxed">
      <p>{t('cattleStory.p1')}</p>

      <div ref={chartRef} className="card p-5 space-y-3">
        <div>
          <div className="text-sm uppercase tracking-wider text-emerald_ie-800/80">
            {t('cattleStory.chartCap')}
          </div>
          <div className="font-display text-xl text-ink-900">
            {t('cattleStory.chartTitle')}
          </div>
        </div>
        <StatChart
          data={data}
          xKey="county"
          series={[
            { key: 'people', label: t('cattleStory.seriesPeople') },
            { key: 'cattle', label: t('cattleStory.seriesCattle') },
          ]}
          type="bar"
          height={340}
        />
        <div className="text-[11px] text-ink-700/60 font-mono">
          {t('explorer.source')}: CSO · F1001 + AHA01 · CC BY 4.0
        </div>
      </div>

      <div className="flex justify-end">
        <ShareButton
          targetRef={chartRef}
          filename="realachas-cattle.png"
          label={t('share.shareChart')}
        />
      </div>

      <h3 className="font-display text-2xl text-ink-900 pt-2">
        {t('cattleStory.h3Why')}
      </h3>
      <p>{t('cattleStory.p2')}</p>
      <p>
        {t('cattleStory.p3')
          .split('{code}')
          .map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <code className="font-mono text-xs">AHA01</code>
              )}
            </span>
          ))}
      </p>
    </article>
  );
}
