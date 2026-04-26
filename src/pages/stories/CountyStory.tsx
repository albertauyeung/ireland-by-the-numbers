import { useRef } from 'react';
import StatChart from '../../components/StatChart';
import ShareButton from '../../components/ShareButton';

// Census 2022 county-level snapshots. Source: CSO Census 2022 Summary Results.
// Median age (years) and population change 2016→2022 (%).
const counties = [
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
];

export default function CountyStory() {
  const chartRef = useRef<HTMLDivElement>(null);
  return (
    <article className="space-y-5 text-ink-700/90 leading-relaxed">
      <p>
        County by county, Ireland’s population doesn’t age evenly. The median
        age in Fingal — Dublin’s northern commuter belt — is 35.6 years.
        In Roscommon it is 45.6. That ten-year gap hides a lot: where young
        adults move for work, which counties hold their school-leavers, and
        which keep growing only because retirees move in.
      </p>

      <div ref={chartRef} className="card p-5 space-y-3">
        <div>
          <div className="text-sm uppercase tracking-wider text-emerald_ie-800/80">
            Median age and population change
          </div>
          <div className="font-display text-xl text-ink-900">
            Selected counties · Census 2016 → 2022
          </div>
        </div>
        <StatChart
          data={counties}
          xKey="county"
          series={[
            { key: 'medianAge', label: 'Median age (years)' },
            { key: 'change', label: 'Population change since 2016 (%)' },
          ]}
          type="bar"
          height={360}
        />
        <div className="text-[11px] text-ink-700/60 font-mono">
          Source: CSO · Census 2022 county summary · CC BY 4.0
        </div>
      </div>

      <div className="flex justify-end">
        <ShareButton
          targetRef={chartRef}
          filename="realachas-counties.png"
          label="Share this chart"
        />
      </div>

      <h3 className="font-display text-2xl text-ink-900 pt-2">
        Three patterns
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Greater Dublin commuter belt grew fastest.</strong> Meath,
          Kildare and Cork city all grew &gt;11% in six years — a function of
          house-price overflow and continuing in-migration.
        </li>
        <li>
          <strong>The west is older.</strong> Mayo, Leitrim and Roscommon all
          have median ages above 43 — well above the State median of 38.8.
        </li>
        <li>
          <strong>Even rural counties grew.</strong> Despite the age skew,
          every Republic county grew between 2016 and 2022 — a marked change
          from the 2008–2016 decade where several declined.
        </li>
      </ul>
    </article>
  );
}
