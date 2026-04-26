import { useRef } from 'react';
import StatChart from '../../components/StatChart';
import ShareButton from '../../components/ShareButton';

// Census 2022 — top home languages other than English & Irish.
// Source: CSO Census 2022 Profile 4 (The Living Language) and Profile 5
// (Diversity, Migration, Ethnicity, Travellers and Religion).
const data = [
  { language: 'Polish', speakers: 124000 },
  { language: 'Romanian', speakers: 50000 },
  { language: 'Lithuanian', speakers: 35000 },
  { language: 'Portuguese', speakers: 33000 },
  { language: 'Spanish', speakers: 32000 },
  { language: 'Russian', speakers: 31000 },
  { language: 'French', speakers: 28000 },
  { language: 'Arabic', speakers: 23000 },
  { language: 'Hindi', speakers: 21000 },
];

export default function LanguagesStory() {
  const chartRef = useRef<HTMLDivElement>(null);
  return (
    <article className="space-y-5 text-ink-700/90 leading-relaxed">
      <p>
        Ireland is officially bilingual — Irish is the first official language
        of the State. But everyday life happens in many more tongues. Census
        2022 asked respondents about <em>main languages spoken at home</em>{' '}
        other than English and Irish, and the answers map a country far more
        plural than the national stereotype suggests.
      </p>

      <div ref={chartRef} className="card p-5 space-y-3">
        <div>
          <div className="text-sm uppercase tracking-wider text-emerald_ie-800/80">
            Top non-English / non-Irish home languages
          </div>
          <div className="font-display text-xl text-ink-900">
            Republic of Ireland · Census 2022
          </div>
        </div>
        <StatChart
          data={data}
          xKey="language"
          series={[{ key: 'speakers', label: 'Speakers at home' }]}
          type="bar"
          height={320}
        />
        <div className="text-[11px] text-ink-700/60 font-mono">
          Source: CSO · Census 2022 Profile 4 · CC BY 4.0
        </div>
      </div>

      <div className="flex justify-end">
        <ShareButton
          targetRef={chartRef}
          filename="realachas-languages.png"
          label="Share this chart"
        />
      </div>

      <h3 className="font-display text-2xl text-ink-900 pt-2">
        Three things to know
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Polish is third.</strong> After English and Irish, Polish is
          the most-spoken home language — about 124,000 speakers, slightly
          fewer than the ~135,000 in 2011 but still well ahead of the next
          language.
        </li>
        <li>
          <strong>Irish is widely known, narrowly used.</strong> 1.87 million
          people said they could speak Irish, but only 71,968 said they spoke
          it daily and just 20,261 of those did so outside the school system.
        </li>
        <li>
          <strong>One in five was born abroad.</strong> 20% of usual residents
          were born outside the State — up from 17% in 2016. The most common
          countries of birth are the UK, Poland, India and Romania.
        </li>
      </ul>

      <h3 className="font-display text-2xl text-ink-900 pt-2">
        What this looks like on the street
      </h3>
      <p>
        In Dublin 8, Polish, Brazilian Portuguese and Spanish are routinely
        heard alongside English. In west Galway and parts of Donegal you’ll
        hear daily Irish. In Limerick, Mayo, Cork and Dublin North-West there
        are growing communities speaking Hindi, Malayalam and Arabic at home.
        Census 2022 captures this snapshot — and it has shifted noticeably
        every five years.
      </p>
    </article>
  );
}
