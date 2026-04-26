import { useRef } from 'react';
import StatChart from '../../components/StatChart';
import ShareButton from '../../components/ShareButton';

// Cattle vs population by selected county. Sources: CSO Census 2022 (population)
// and CSO June Livestock Survey (AHA01) — most recent published year.
const data = [
  { county: 'Cavan', people: 81704, cattle: 322000 },
  { county: 'Tipperary', people: 167895, cattle: 670000 },
  { county: 'Cork', people: 584156, cattle: 1280000 },
  { county: 'Limerick', people: 209536, cattle: 410000 },
  { county: 'Kerry', people: 156458, cattle: 340000 },
  { county: 'Galway', people: 277737, cattle: 470000 },
  { county: 'Mayo', people: 137231, cattle: 305000 },
  { county: 'Roscommon', people: 70259, cattle: 235000 },
  { county: 'Dublin', people: 1458154, cattle: 7500 },
];

export default function CattleStory() {
  const chartRef = useRef<HTMLDivElement>(null);
  return (
    <article className="space-y-5 text-ink-700/90 leading-relaxed">
      <p>
        Ireland is famously a country of cattle: roughly 7.3 million of them
        on a State of 5.15 million people. But the ratio is not uniform.
        Dublin has fewer than 8,000 cattle; Cavan has nearly four cattle for
        every person.
      </p>

      <div ref={chartRef} className="card p-5 space-y-3">
        <div>
          <div className="text-sm uppercase tracking-wider text-emerald_ie-800/80">
            People vs. cattle, by selected county
          </div>
          <div className="font-display text-xl text-ink-900">
            Census 2022 + CSO June Livestock Survey (AHA01)
          </div>
        </div>
        <StatChart
          data={data}
          xKey="county"
          series={[
            { key: 'people', label: 'People' },
            { key: 'cattle', label: 'Cattle' },
          ]}
          type="bar"
          height={340}
        />
        <div className="text-[11px] text-ink-700/60 font-mono">
          Source: CSO · F1001 + AHA01 · CC BY 4.0
        </div>
      </div>

      <div className="flex justify-end">
        <ShareButton
          targetRef={chartRef}
          filename="realachas-cattle.png"
          label="Share this chart"
        />
      </div>

      <h3 className="font-display text-2xl text-ink-900 pt-2">
        Why this matters
      </h3>
      <p>
        Cattle are roughly 60% of Ireland’s agricultural emissions and a sixth
        of the State’s total greenhouse gas inventory. The shape of the herd —
        where it is, what it produces (beef vs. dairy), and how it changes —
        shows up directly in EPA emissions data and in EU climate
        commitments.
      </p>
      <p>
        The CSO publishes the herd size every year as table{' '}
        <code className="font-mono text-xs">AHA01</code> on PxStat. Try the
        chart explorer to slice by county or by livestock type (dairy cows,
        beef, sheep, pigs).
      </p>
    </article>
  );
}
