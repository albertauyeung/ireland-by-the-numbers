import { useMemo, useRef } from 'react';
import StatChart from '../../components/StatChart';
import ShareButton from '../../components/ShareButton';
import { Loading, ErrorBox } from '../../components/Loading';
import { useTable } from '../../lib/useTable';
import { dimCodes, dimLabel, fmtNumber, slice } from '../../lib/pxstat';

export default function PopulationStory() {
  const state = useTable('FY002');
  const chartRef = useRef<HTMLDivElement>(null);

  const { rows, peak1841ish, latest } = useMemo(() => {
    if (state.status !== 'ready')
      return { rows: [], peak1841ish: null, latest: null };
    const ds = state.data;
    // Filter: STATISTIC = "FY002C01" (Population at each Census)
    //         age group = ALL ages, sex = Both sexes
    const ages = dimCodes(ds, 'C02076V03371');
    const sexes = dimCodes(ds, 'C02199V02655');
    // The 'both sexes' / 'all ages' codes are the totals; pick whichever has the largest values.
    const ageTotal = ages[0]; // first index is typically 'all ages' total in CSO age dims
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
      <p>
        The Republic’s population in 1926 — the first Census of the new state —
        was just under 3 million. A century later, in Census 2022, it sits at
        ~5.15 million: the highest figure since 1851 and the result of three
        decades of strong inward migration and rising fertility.
      </p>
      <p>
        The chart below shows the Population total from every Census from 1926
        to 2022, fetched live from CSO PxStat (table{' '}
        <code className="font-mono text-xs">FY002</code>).
      </p>

      <div ref={chartRef} className="card p-5 space-y-3">
        <div>
          <div className="text-sm uppercase tracking-wider text-emerald_ie-800/80">
            Population at each Census
          </div>
          <div className="font-display text-xl text-ink-900">
            Republic of Ireland · 1926–2022
          </div>
        </div>
        {state.status === 'loading' && <Loading label="Fetching FY002 from CSO…" />}
        {state.status === 'error' && <ErrorBox error={state.error} />}
        {state.status === 'ready' && (
          <StatChart
            data={rows}
            xKey="year"
            series={[{ key: 'Population', label: 'Population' }]}
            type="line"
            height={320}
          />
        )}
        <div className="text-[11px] text-ink-700/60 font-mono">
          Source: CSO · FY002 · CC BY 4.0
        </div>
      </div>

      <div className="flex justify-end">
        <ShareButton
          targetRef={chartRef}
          filename="realachas-population.png"
          label="Share this chart"
        />
      </div>

      {peak1841ish && latest && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Stat
            label={`First Census (${peak1841ish.year})`}
            value={fmtNumber(peak1841ish.Population)}
          />
          <Stat
            label={`Latest Census (${latest.year})`}
            value={fmtNumber(latest.Population)}
          />
          <Stat
            label="Change since first"
            value={
              latest.Population && peak1841ish.Population
                ? `${(((latest.Population - peak1841ish.Population) / peak1841ish.Population) * 100).toFixed(0)}%`
                : '—'
            }
            tone="emerald"
          />
        </div>
      )}

      <h3 className="font-display text-2xl text-ink-900 pt-4">What changed?</h3>
      <p>
        The big story is migration. The Republic had emigration in every decade
        from independence until the 1990s; since then, inflows have dominated.
        Census 2022 records ~20% of usual residents as born outside the
        State — up from ~17% in 2016.
      </p>
      <p>
        Population growth is also unevenly distributed. Greater Dublin (Dublin
        city, Fingal, South Dublin, Dún Laoghaire-Rathdown plus Meath, Kildare
        and Wicklow) accounts for the majority of growth, while several rural
        counties saw flat or declining populations until recently.
      </p>
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
