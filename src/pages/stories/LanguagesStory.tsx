import { useRef } from 'react';
import StatChart from '../../components/StatChart';
import ShareButton from '../../components/ShareButton';
import { useLocale } from '../../i18n/LocaleContext';

const baseData = [
  { language: 'Polish', speakers: 124000 },
  { language: 'Romanian', speakers: 50000 },
  { language: 'Lithuanian', speakers: 35000 },
  { language: 'Portuguese', speakers: 33000 },
  { language: 'Spanish', speakers: 32000 },
  { language: 'Russian', speakers: 31000 },
  { language: 'French', speakers: 28000 },
  { language: 'Arabic', speakers: 23000 },
  { language: 'Hindi', speakers: 21000 },
] as const;

export default function LanguagesStory() {
  const chartRef = useRef<HTMLDivElement>(null);
  const { t, m } = useLocale();
  const langLabels = m.languagesStory.languages as Record<string, string>;
  const data = baseData.map((d) => ({
    language: langLabels[d.language] ?? d.language,
    speakers: d.speakers,
  }));
  return (
    <article className="space-y-5 text-ink-700/90 leading-relaxed">
      <p>{t('languagesStory.p1')}</p>

      <div ref={chartRef} className="card p-5 space-y-3">
        <div>
          <div className="text-sm uppercase tracking-wider text-emerald_ie-800/80">
            {t('languagesStory.chartCap')}
          </div>
          <div className="font-display text-xl text-ink-900">
            {t('languagesStory.chartTitle')}
          </div>
        </div>
        <StatChart
          data={data}
          xKey="language"
          series={[
            { key: 'speakers', label: t('languagesStory.seriesSpeakers') },
          ]}
          type="bar"
          height={320}
        />
        <div className="text-[11px] text-ink-700/60 font-mono">
          {t('explorer.source')}: CSO · Census 2022 Profile 4 · CC BY 4.0
        </div>
      </div>

      <div className="flex justify-end">
        <ShareButton
          targetRef={chartRef}
          filename="realachas-languages.png"
          label={t('share.shareChart')}
        />
      </div>

      <h3 className="font-display text-2xl text-ink-900 pt-2">
        {t('languagesStory.h3Three')}
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>{t('languagesStory.li1Title')}</strong> {t('languagesStory.li1Body')}
        </li>
        <li>
          <strong>{t('languagesStory.li2Title')}</strong> {t('languagesStory.li2Body')}
        </li>
        <li>
          <strong>{t('languagesStory.li3Title')}</strong> {t('languagesStory.li3Body')}
        </li>
      </ul>

      <h3 className="font-display text-2xl text-ink-900 pt-2">
        {t('languagesStory.h3Street')}
      </h3>
      <p>{t('languagesStory.p2')}</p>
    </article>
  );
}
