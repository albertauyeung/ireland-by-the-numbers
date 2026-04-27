import { useRef } from 'react';
import StatChart from '../../components/StatChart';
import ShareButton from '../../components/ShareButton';
import { useLocale } from '../../i18n/LocaleContext';

const baseCounties = [
  { county: 'Fingal', medianAge: 35.6, change: 9.4 },
  { county: 'Dublin City', medianAge: 36.8, change: 5.0 },
  { county: 'South Dublin', medianAge: 37.0, change: 6.1 },
  { county: 'Meath', medianAge: 37.2, change: 13.0 },
  { county: 'Kildare', medianAge: 37.8, change: 11.2 },
  { county: 'Cork City', medianAge: 38.0, change: 19.0 },
  { county: 'Galway City', medianAge: 38.2, change: 5.6 },
  { county: 'Limerick', medianAge: 39.7, change: 6.0 },
  { county: 'Waterford', medianAge: 40.2, change: 7.4 },
  { county: 'Kerry', medianAge: 43.7, change: 5.5 },
  { county: 'Donegal', medianAge: 41.4, change: 5.0 },
  { county: 'Mayo', medianAge: 43.5, change: 6.4 },
  { county: 'Leitrim', medianAge: 43.9, change: 9.2 },
  { county: 'Roscommon', medianAge: 45.6, change: 6.7 },
] as const;

export default function CountyStory() {
  const chartRef = useRef<HTMLDivElement>(null);
  const { t, m } = useLocale();
  const labels = m.counties as Record<string, string>;
  const counties = baseCounties.map((c) => ({
    ...c,
    county: labels[c.county] ?? c.county,
  }));
  return (
    <article className="space-y-5 text-ink-700/90 leading-relaxed">
      <p>{t('countyStory.p1')}</p>

      <div ref={chartRef} className="card p-5 space-y-3">
        <div>
          <div className="text-sm uppercase tracking-wider text-emerald_ie-800/80">
            {t('countyStory.chartCap')}
          </div>
          <div className="font-display text-xl text-ink-900">
            {t('countyStory.chartTitle')}
          </div>
        </div>
        <StatChart
          data={counties}
          xKey="county"
          series={[
            { key: 'medianAge', label: t('countyStory.seriesAge') },
            { key: 'change', label: t('countyStory.seriesChange') },
          ]}
          type="bar"
          height={360}
        />
        <div className="text-[11px] text-ink-700/60 font-mono">
          {t('explorer.source')}: CSO · Census 2022 county summary · CC BY 4.0
        </div>
      </div>

      <div className="flex justify-end">
        <ShareButton
          targetRef={chartRef}
          filename="realachas-counties.png"
          label={t('share.shareChart')}
        />
      </div>

      <h3 className="font-display text-2xl text-ink-900 pt-2">
        {t('countyStory.h3Patterns')}
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>{t('countyStory.li1Title')}</strong> {t('countyStory.li1Body')}
        </li>
        <li>
          <strong>{t('countyStory.li2Title')}</strong> {t('countyStory.li2Body')}
        </li>
        <li>
          <strong>{t('countyStory.li3Title')}</strong> {t('countyStory.li3Body')}
        </li>
      </ul>
    </article>
  );
}
