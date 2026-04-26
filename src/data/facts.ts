// Curated 'Ireland fact of the day' set. Each fact is paired with a CSO table
// the reader can dive into via the chart explorer. Some facts are static
// (sourced & cited) and some are computed live from CSO data.

export type Fact = {
  id: string;
  headline: string;
  context: string;
  source: string;
  sourceUrl: string;
  // Optional CSO PxStat code to deep-link into the chart explorer.
  table?: string;
  // Optional 'compute' hook: given fetched dataset, returns a one-line stat.
  compute?: (rows: unknown) => string;
};

export const facts: Fact[] = [
  {
    id: 'pop-doubled',
    headline: "Ireland's population almost doubled since 1961.",
    context:
      'In 1961 the Republic counted 2.82 million people. In Census 2022 that figure was 5.15 million — the highest since 1851 and a near-doubling in 60 years.',
    source: 'CSO Census 1926–2022 (FY002)',
    sourceUrl: 'https://data.cso.ie/table/FY002',
    table: 'FY002',
  },
  {
    id: 'polish-third',
    headline: 'Polish is the third most-spoken language in Ireland.',
    context:
      'After English and Irish, Polish is the most commonly spoken home language: ~124,000 daily speakers in Census 2022, ahead of Romanian, French and Spanish.',
    source: 'CSO Census 2022 — language use',
    sourceUrl: 'https://www.cso.ie/en/statistics/population/census2022/',
  },
  {
    id: 'median-age-gap',
    headline: 'Roscommon is 10 years older than Fingal.',
    context:
      'Median age in Fingal (Dublin) is 35.6; in Roscommon it is 45.6 — the widest gap of any two counties in Census 2022.',
    source: 'CSO Census 2022 — F1001',
    sourceUrl: 'https://data.cso.ie/table/F1001',
  },
  {
    id: 'gaeltacht-speakers',
    headline:
      '20,000 people speak Irish daily outside the education system.',
    context:
      'Census 2022 found 1.87m people can speak Irish, but only 71,968 do so daily — and just 20,261 outside the school setting.',
    source: 'CSO Census 2022 — Irish language',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp4/census2022profile4-thelivinglanguage/',
  },
  {
    id: 'house-prices',
    headline:
      'The average new home in Dublin costs ~7× the average annual wage.',
    context:
      'CSO Residential Property Price Index combined with Earnings & Labour Costs shows the Dublin price-to-earnings ratio sits well above 6× — among the highest in the EU.',
    source: 'CSO HPM05 / EHQ02',
    sourceUrl: 'https://data.cso.ie/table/HPM05',
    table: 'HPM05',
  },
  {
    id: 'wind-share',
    headline: 'Wind generated more than a third of Ireland’s electricity.',
    context:
      'In recent years onshore wind supplied 33–37% of all electricity dispatched on the Irish grid — one of the highest shares in the EU.',
    source: 'SEAI Energy in Ireland / EPA inventories',
    sourceUrl:
      'https://www.seai.ie/data-and-insights/seai-statistics/key-statistics/',
  },
  {
    id: 'two-irelands',
    headline: 'Half the country lives within an hour of Dublin.',
    context:
      'Greater Dublin (Dublin + Meath + Kildare + Wicklow) holds ~2.1m people of Ireland’s 5.15m — over 40% of the Republic’s population on ~10% of the land.',
    source: 'CSO Census 2022 small-area data',
    sourceUrl: 'https://data.cso.ie/table/F1001',
  },
  {
    id: 'born-abroad',
    headline: 'One in five Irish residents was born outside Ireland.',
    context:
      'Census 2022 records 20% of usual residents as born outside the State — up from 17% in 2016. Most common countries of birth: UK, Poland, India, Romania.',
    source: 'CSO Census 2022 — country of birth',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp5/census2022profile5-diversitymigrationethnicitybackgroundirishtravellersandreligion/',
  },
  {
    id: 'cattle-vs-people',
    headline: 'There are nearly 1.4× more cattle than people in Ireland.',
    context:
      'Census 2022 counted ~5.15m people. The CSO June Livestock Survey counted ~7.3m cattle in the Republic — about 1.4 cattle per person.',
    source: 'CSO Livestock Survey (AHA01)',
    sourceUrl: 'https://data.cso.ie/table/AHA01',
  },
  {
    id: 'commute-times',
    headline: '1 in 5 Dublin commuters spend over an hour getting to work.',
    context:
      'Census 2022 commuting data: in Fingal, Wicklow and Meath, more than 20% of workers report commutes over 60 minutes each way — the highest in the country.',
    source: 'CSO Census 2022 — Place of Work',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp6/census2022profile6-commutingincome/',
  },
  {
    id: 'rainy-days',
    headline:
      'Valentia Observatory averages 247 rainy days a year — almost two thirds of the year.',
    context:
      'Met Éireann long-term climate normals (1991–2020) show >0.2mm rainfall on 247 days at Valentia, vs. ~150 days at Dublin Airport.',
    source: 'Met Éireann climate normals',
    sourceUrl:
      'https://www.met.ie/climate/30-year-averages',
  },
  {
    id: 'second-home',
    headline: 'There are ~166,000 vacant dwellings in Ireland.',
    context:
      'Census 2022 found 166,752 vacant dwellings (excluding holiday homes) — 7.8% of the housing stock — alongside an ongoing housing crisis.',
    source: 'CSO Census 2022 — Housing',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp2/census2022profile2-housinginireland/',
  },
];

// Pick the fact for "today" deterministically so it is the same for every
// visitor on the same calendar day, and rotates through the list.
export function todaysFact(date = new Date()): Fact {
  const epoch = Math.floor(date.getTime() / 86_400_000);
  return facts[epoch % facts.length];
}
