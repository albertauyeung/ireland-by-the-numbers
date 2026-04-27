import { useMemo, useRef } from 'react';
import StatChart from '../../components/StatChart';
import ShareButton from '../../components/ShareButton';
import { Loading, ErrorBox } from '../../components/Loading';
import { useTable } from '../../lib/useTable';
import { dimCodes, dimLabel, fmtNumber, slice } from '../../lib/pxstat';
import { useLocale } from '../../i18n/LocaleContext';

export default function PopulationStory() {
  const state = useTable('FY002');
  const chartRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  const { rows, peak1841ish, latest } = useMemo(() => {
    if (state.status !== 'ready')
      return { rows: [], peak1841ish: null, latest: null };
    const ds = state.data;
    const ages = dimCodes(ds, 'C02076V03371');
    const sexes = dimCodes(ds, 'C02199V02655');
    const ageTotal = ages[0];
    const sexTotal = sexes[0];
    const cells = slice(ds, {
      STATISTIC: 'FY002C01',
      C02076V03371: ageTotal,
      C02199V02655: sexTotal,
    });
    const rows = cells
      .map((c) => ({
        year: c.labels['TLIST(A1)'],
        Population: c.value,
      }))
      .sort((a, b) => Number(a.year) - Number(b.year));
    return {
      rows,
      peak1841ish: rows[0],
      latest: rows.at(-1),
      ageTotalLabel: dimLabel(ds, 'C02076V03371', ageTotal),
      sexTotalLabel: dimLabel(ds, 'C02199V02655', sexTotal),
    };
  }, [state]);

  return (
    <article className="prose-like space-y-5 text-ink-700/90 leading-relaxed">
      <p>{t('populationStory.p1')}</p>
      <p>
        {t('populationStory.p2')
          .split('{code}')
          .map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <code className="font-mono text-xs">FY002</code>
              )}
            </span>
          ))}
      </p>

      <div ref={chartRef} className="card p-5 space-y-3">
        <div>
          <div className="text-sm uppercase tracking-wider text-emerald_ie-800/80">
            {t('populationStory.chartCap')}
          </div>
          <div className="font-display text-xl text-ink-900">
            {t('populationStory.chartTitle')}
          </div>
        </div>
        {state.status === 'loading' && (
          <Loading label={t('loading.fetching').replace('{code}', 'FY002')} />
        )}
        {state.status === 'error' && <ErrorBox error={state.error} />}
        {state.status === 'ready' && (
          <StatChart
            data={rows}
            xKey="year"
            series={[
              { key: 'Population', label: t('populationStory.seriesPopulation') },
            ]}
            type="line"
            height={320}
          />
        )}
        <div className="text-[11px] text-ink-700/60 font-mono">
          {t('explorer.source')}: CSO · FY002 · CC BY 4.0
        </div>
      </div>

      <div className="flex justify-end">
        <ShareButton
          targetRef={chartRef}
          filename="realachas-population.png"
          label={t('share.shareChart')}
        />
      </div>

      {peak1841ish && latest && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Stat
            label={t('populationStory.statFirst').replace(
              '{year}',
              String(peak1841ish.year),
            )}
            value={fmtNumber(peak1841ish.Population)}
          />
          <Stat
            label={t('populationStory.statLatest').replace(
              '{year}',
              String(latest.year),
            )}
            value={fmtNumber(latest.Population)}
          />
          <Stat
            label={t('populationStory.statChange')}
            value={
              latest.Population && peak1841ish.Population
                ? `${(((latest.Population - peak1841ish.Population) / peak1841ish.Population) * 100).toFixed(0)}%`
                : '—'
            }
            tone="emerald"
          />
        </div>
      )}

      <h3 className="font-display text-2xl text-ink-900 pt-4">
        {t('populationStory.h2Change')}
      </h3>
      <p>{t('populationStory.p3')}</p>
      <p>{t('populationStory.p4')}</p>
    </article>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: 'emerald';
}) {
  return (
    <div
      className={`card p-4 ${
        tone === 'emerald' ? 'bg-emerald_ie-50 border-emerald_ie-100' : ''
      }`}
    >
      <div className="text-xs uppercase tracking-wider text-ink-700/60">
        {label}
      </div>
      <div className="font-display text-2xl text-ink-900 mt-1">{value}</div>
    </div>
  );
}
