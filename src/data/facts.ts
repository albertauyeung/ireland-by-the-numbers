// Curated 'Ireland fact of the day' set. Each fact is paired with a credible
// open-data source so readers can verify the figure. Numbers are approximate
// where the underlying release uses ranges or where small revisions between
// releases would otherwise make the fact go stale.

export type Fact = {
  id: string;
  headline: string;
  context: string;
  source: string;
  sourceUrl: string;
  // Optional CSO PxStat code to deep-link into the chart explorer.
  table?: string;
};

export const facts: Fact[] = [
  // ──────────────────────────────────────────────────────────────────────
  // Original 12
  // ──────────────────────────────────────────────────────────────────────
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
    sourceUrl: 'https://www.met.ie/climate/30-year-averages',
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

  // ──────────────────────────────────────────────────────────────────────
  // Population, demographics, migration (additional)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'pre-famine-peak',
    headline: "In 1841, Ireland’s population was about 8.18 million.",
    context:
      'On the eve of the Great Famine the island held ~8.18m people. Today the all-island figure is ~7m — Ireland is the only country in Europe with fewer people now than 200 years ago.',
    source: 'CSO historical census',
    sourceUrl:
      'https://www.cso.ie/en/statistics/population/historicalreports/',
  },
  {
    id: 'lowest-pop-1961',
    headline: 'The Republic hit its modern low at 2.82m people in 1961.',
    context:
      'After a century of emigration the Republic’s population bottomed out in 1961. From there it grew steadily, surpassing 5m for the first time in Census 2022.',
    source: 'CSO Census 1926–2022 (FY002)',
    sourceUrl: 'https://data.cso.ie/table/FY002',
    table: 'FY002',
  },
  {
    id: 'island-7m',
    headline: 'The whole island now has about 7 million people.',
    context:
      'Republic (Census 2022) ~5.15m + Northern Ireland (Census 2021) ~1.91m = ~7.06m. Still well below the 1841 peak of ~8.18m.',
    source: 'CSO + NISRA censuses',
    sourceUrl: 'https://www.nisra.gov.uk/statistics/census/2021-census',
  },
  {
    id: 'leitrim-smallest',
    headline: 'Leitrim is the smallest county by population — about 35,000.',
    context:
      'Leitrim recorded 35,199 people in Census 2022. The county has the smallest population in the Republic and one of the lowest densities in the EU.',
    source: 'CSO Census 2022 (F1001)',
    sourceUrl: 'https://data.cso.ie/table/F1001',
  },
  {
    id: 'cork-biggest-area',
    headline: 'County Cork is the biggest county — 7,500 km² and counting.',
    context:
      'At about 7,500 km² Cork covers roughly 11% of the State’s land area, making it both the largest county by area and the second largest by population.',
    source: 'OSi / CSO',
    sourceUrl: 'https://www.osi.ie/',
  },
  {
    id: 'dublin-density',
    headline: 'Dublin is 20× more densely populated than the national average.',
    context:
      'The four Dublin local-authority areas average around 1,600 people per km². The State average is ~73/km² — making Dublin twenty times denser than the country at large.',
    source: 'CSO Census 2022 — F1001',
    sourceUrl: 'https://data.cso.ie/table/F1001',
  },
  {
    id: 'urban-rural',
    headline: '63% of people in Ireland live in urban areas.',
    context:
      'Census 2022 classifies ~63% of usual residents as urban (towns of 1,500+) and ~37% as rural — a slow shift towards urban living since the 1990s.',
    source: 'CSO Census 2022 — Profile 2',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp1/census2022profile1-populationdistributionandmovements/',
  },
  {
    id: 'natural-increase',
    headline: 'Ireland still records more births than deaths each year.',
    context:
      'About 54,000 births and 33,000 deaths in 2024 — a natural increase of ~21,000. One of the few EU countries still in positive natural growth.',
    source: 'CSO Vital Statistics (VSQ31)',
    sourceUrl: 'https://data.cso.ie/table/VSQ31',
  },
  {
    id: 'birthrate-falling',
    headline: 'Ireland’s fertility rate has fallen below replacement.',
    context:
      'The total fertility rate is now ~1.55 children per woman — below the 2.1 needed for natural replacement, but still the third-highest in the EU.',
    source: 'CSO Vital Statistics',
    sourceUrl:
      'https://www.cso.ie/en/statistics/birthsdeathsandmarriages/',
  },
  {
    id: 'life-expectancy',
    headline: 'Life expectancy in Ireland is 82.6 years.',
    context:
      'CSO life-tables put life expectancy at birth at 82.6 years — the fourth highest in the EU, behind only Spain, Italy and Sweden.',
    source: 'CSO Life Tables',
    sourceUrl:
      'https://www.cso.ie/en/statistics/birthsdeathsandmarriages/lifeexpectancy/',
  },
  {
    id: 'household-size',
    headline: 'The average Irish household has 2.74 people.',
    context:
      'One of the largest in Western Europe. Children stay at home longer, multi-generational households are common, and one-person households make up ~22% of total.',
    source: 'CSO Census 2022 — Profile 2',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp2/census2022profile2-housinginireland/',
  },
  {
    id: 'one-person-households',
    headline: '1 in 4 Irish households is a single person living alone.',
    context:
      'Census 2022 counted ~432,000 one-person households — about 22% of all private households, and the fastest-growing household type for two decades.',
    source: 'CSO Census 2022',
    sourceUrl: 'https://data.cso.ie/table/F2001',
  },
  {
    id: 'children-share',
    headline: '20% of people in Ireland are aged 0–14.',
    context:
      'About 1 in 5 residents are children under 15 — the highest share in the EU and well above the bloc average of ~15%.',
    source: 'CSO Census 2022',
    sourceUrl: 'https://www.cso.ie/en/statistics/population/',
  },
  {
    id: 'over-65',
    headline: 'There are now more over-65s than under-15s in Ireland… almost.',
    context:
      'Over-65s: ~15% of the population (and rising fast). Under-15s: ~20% (and falling). They will likely cross over by the early 2030s.',
    source: 'CSO Population & Migration Estimates',
    sourceUrl: 'https://www.cso.ie/en/statistics/population/',
  },
  {
    id: 'irish-abroad',
    headline: 'About 70 million people worldwide claim Irish ancestry.',
    context:
      'The Irish abroad: ~32m in the US, ~7m in the UK, ~5m in Canada, ~7m in Australia, with significant diaspora in Argentina, NZ and Brazil.',
    source: 'Department of Foreign Affairs',
    sourceUrl: 'https://www.dfa.ie/global-irish/',
  },
  {
    id: 'ukrainian-arrivals',
    headline: 'Over 100,000 people arrived from Ukraine since 2022.',
    context:
      'Ireland granted Temporary Protection to ~108,000 people fleeing the war in Ukraine — the largest single-source migration to the State in modern times.',
    source: 'CSO Arrivals from Ukraine',
    sourceUrl:
      'https://www.cso.ie/en/statistics/population/arrivalsfromukraine/',
  },
  {
    id: 'travellers',
    headline: 'About 33,000 people identify as Irish Travellers.',
    context:
      'Census 2022 counted 32,949 Irish Travellers — a long-recognised ethnic minority in Ireland with a distinct culture, dialect (Gammon/Cant) and social history.',
    source: 'CSO Census 2022 — Profile 5',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp5/census2022profile5-diversitymigrationethnicitybackgroundirishtravellersandreligion/',
  },
  {
    id: 'foreign-born-mix',
    headline: 'Polish, UK and Indian-born are the three biggest groups.',
    context:
      'Of the ~1.04m residents born outside Ireland, the largest groups in Census 2022 were UK (~277k), Polish (~93k) and Indian (~46k).',
    source: 'CSO Census 2022 — country of birth',
    sourceUrl: 'https://data.cso.ie/table/F4055',
  },

  // ──────────────────────────────────────────────────────────────────────
  // Language & identity
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'irish-1.87m',
    headline: '1.87 million people in Ireland say they can speak Irish.',
    context:
      'About 40% of the population says they can speak some Irish. The figure dropped slightly in Census 2022 — the first decline since 1996.',
    source: 'CSO Census 2022 — Profile 4',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp4/census2022profile4-thelivinglanguage/',
  },
  {
    id: 'gaeltacht-pop',
    headline: 'About 96,000 people live in the seven Gaeltacht areas.',
    context:
      'The official Gaeltacht spans parts of Donegal, Mayo, Galway, Kerry, Cork, Waterford and Meath. Around ~21,500 people there speak Irish daily.',
    source: 'CSO Census 2022',
    sourceUrl: 'https://data.cso.ie/table/F4053',
  },
  {
    id: 'romanian-speakers',
    headline: 'Romanian is now Ireland’s fourth most-spoken home language.',
    context:
      'Around 50,000 people in Ireland speak Romanian at home — overtaking Lithuanian since 2016. Driven by EU free-movement and a growing Romanian community.',
    source: 'CSO Census 2022 — Profile 4',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp4/census2022profile4-thelivinglanguage/',
  },
  {
    id: 'religion-catholic',
    headline: 'Catholic share fell from 78% to 69% in just six years.',
    context:
      'Census 2022 recorded 69% Catholic, down from 78.3% in 2016. The biggest drop since the State began counting religion. "No religion" rose to 14%.',
    source: 'CSO Census 2022 — Profile 5',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp5/census2022profile5-diversitymigrationethnicitybackgroundirishtravellersandreligion/',
  },
  {
    id: 'no-religion',
    headline: '14% of people in Ireland say they have no religion.',
    context:
      'Around 736,000 residents — up from 10% in 2016 and just 6% in 2011. The fastest-growing belief category in every Census this century.',
    source: 'CSO Census 2022',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp5/census2022profile5-diversitymigrationethnicitybackgroundirishtravellersandreligion/',
  },
  {
    id: 'muslim-population',
    headline: 'Around 80,000 Muslims live in Ireland.',
    context:
      'Census 2022 counted ~81,000 Muslims — about 1.6% of the population. The community is concentrated in Dublin, Galway and Limerick.',
    source: 'CSO Census 2022',
    sourceUrl: 'https://data.cso.ie/table/F4032',
  },
  {
    id: 'hindu-fastest',
    headline: 'Hinduism is one of the fastest-growing religions in Ireland.',
    context:
      'The Hindu population grew from ~14k in 2016 to ~33k in 2022 — a ~135% increase, driven mainly by migration from India.',
    source: 'CSO Census 2022',
    sourceUrl: 'https://data.cso.ie/table/F4032',
  },
  {
    id: 'irish-as-l2',
    headline: 'Most Irish-speakers learned the language in school.',
    context:
      'Of the ~1.87m people who say they can speak Irish, around 51,000 use it daily within the education system. Outside school the daily figure is just ~20,000.',
    source: 'CSO Census 2022',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp4/census2022profile4-thelivinglanguage/',
  },

  // ──────────────────────────────────────────────────────────────────────
  // Geography & landscape
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'carrauntoohil',
    headline: 'Ireland’s highest peak is Carrauntoohil at 1,038 m.',
    context:
      'Part of the MacGillycuddy’s Reeks in County Kerry. By Alpine standards modest — but it’s climbed from sea level, often through Atlantic weather, which makes it tougher than it sounds.',
    source: 'OSi',
    sourceUrl: 'https://www.osi.ie/',
  },
  {
    id: 'shannon',
    headline: 'The Shannon is 360 km long — the longest river on these islands.',
    context:
      'It rises in the Shannon Pot in Cavan and meets the Atlantic at Loop Head. Its catchment covers a fifth of the island.',
    source: 'EPA / OPW',
    sourceUrl: 'https://www.opw.ie/',
  },
  {
    id: 'lough-neagh',
    headline: 'Lough Neagh is the largest lake on these islands — 392 km².',
    context:
      'The lake covers more area than all of County Louth. It supplies ~40% of Northern Ireland’s drinking water and produces most of Europe’s wild eels.',
    source: 'NISRA / DAERA',
    sourceUrl: 'https://www.daera-ni.gov.uk/',
  },
  {
    id: 'coastline',
    headline: 'Ireland’s coastline is over 3,000 km long.',
    context:
      'Around 3,170 km of coastline (the all-island figure is closer to 7,500 km when you include every inlet). The Wild Atlantic Way alone covers 2,500 km.',
    source: 'OSi / Failte Ireland',
    sourceUrl: 'https://www.wildatlanticway.com/',
  },
  {
    id: 'islands',
    headline: 'Ireland has more than 80 inhabited offshore islands.',
    context:
      'About 80–100 islands have permanent residents, from Tory in Donegal to the Saltees off Wexford. The Aran Islands (Inis Mór, Inis Meáin, Inis Oírr) are the best known.',
    source: 'Comhdháil Oileáin na hÉireann',
    sourceUrl: 'https://www.oileain.ie/',
  },
  {
    id: 'tory-northernmost',
    headline: 'Tory Island is the most northerly inhabited island in Ireland.',
    context:
      'A windswept Gaeltacht island ~12 km off the Donegal coast with ~140 residents — and its own elected (unofficial) king, a tradition unique to Tory.',
    source: 'Údarás na Gaeltachta',
    sourceUrl: 'https://www.udaras.ie/',
  },
  {
    id: 'mizen-southernmost',
    headline: 'Mizen Head is the southernmost point of the Irish mainland.',
    context:
      'A dramatic Atlantic headland in West Cork, with cliffs ~210 m high. The famous "Malin to Mizen" cycle covers the longest end-to-end on the island.',
    source: 'Mizen Head Visitor Centre',
    sourceUrl: 'https://www.mizenhead.ie/',
  },
  {
    id: 'newgrange-older',
    headline: 'Newgrange is older than the pyramids of Giza.',
    context:
      'Brú na Bóinne in Co. Meath dates to about 3,200 BCE — making the passage tomb roughly 600 years older than Egypt’s Great Pyramid.',
    source: 'OPW Heritage Ireland',
    sourceUrl: 'https://heritageireland.ie/places-to-visit/bru-na-boinne/',
  },
  {
    id: 'unesco-sites',
    headline: 'Ireland has two UNESCO World Heritage Sites.',
    context:
      'Brú na Bóinne (Newgrange and Knowth) and Sceilg Mhichíl. Both inscribed in 1996 — and Sceilg Mhichíl gained extra fame as Star Wars filmed there in 2014–15.',
    source: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/statesparties/ie',
  },
  {
    id: 'forest-cover',
    headline: 'Just 11% of Ireland is covered in forest.',
    context:
      'Ireland has one of the lowest forest covers in Europe — the EU average is around 38%. State afforestation since the 1950s lifted it from less than 1%.',
    source: 'Department of Agriculture / Coillte',
    sourceUrl:
      'https://www.gov.ie/en/publication/ireland-s-national-forest-inventory/',
  },
  {
    id: 'peatlands',
    headline: 'About 17% of Ireland is peatland.',
    context:
      'Raised bog and blanket bog cover ~1.3 million hectares. Ireland holds ~8% of the world’s blanket bog — a globally rare ecosystem.',
    source: 'EPA / NPWS',
    sourceUrl: 'https://www.epa.ie/',
  },
  {
    id: 'red-deer',
    headline: 'Red deer in Killarney are Ireland’s only native deer herd.',
    context:
      'Killarney National Park holds the only continuous native red deer population in Ireland, descended from animals here for ~5,000 years.',
    source: 'NPWS',
    sourceUrl: 'https://www.npws.ie/',
  },

  // ──────────────────────────────────────────────────────────────────────
  // Climate & weather
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'avg-rainfall',
    headline: 'Ireland averages about 1,230 mm of rain a year.',
    context:
      'Met Éireann’s 1991–2020 normals put the State average at ~1,230 mm — but the West gets over 1,500 mm and the East coast under 800 mm.',
    source: 'Met Éireann climate normals',
    sourceUrl: 'https://www.met.ie/climate/30-year-averages',
  },
  {
    id: 'wettest-place',
    headline: 'The wettest place in Ireland sees over 3,000 mm of rain a year.',
    context:
      'Parts of the Connemara and Kerry mountains exceed 3,000 mm — three times the rainfall of Dublin and one of the wettest spots in Western Europe.',
    source: 'Met Éireann',
    sourceUrl: 'https://www.met.ie/climate',
  },
  {
    id: 'driest-place',
    headline: 'The driest spot in Ireland gets about 750 mm of rain a year.',
    context:
      'East-coast stations from north Dublin to north Wexford get the least rainfall — about half the national average.',
    source: 'Met Éireann',
    sourceUrl: 'https://www.met.ie/climate/30-year-averages',
  },
  {
    id: 'highest-temp',
    headline: 'Ireland’s highest temperature on record is around 33 °C.',
    context:
      'The accepted record is 33.3 °C, recorded at Kilkenny Castle on 26 June 1887 and matched at Phoenix Park in July 2022 (still under verification).',
    source: 'Met Éireann',
    sourceUrl: 'https://www.met.ie/climate/major-weather-events',
  },
  {
    id: 'lowest-temp',
    headline: 'The lowest temperature recorded in Ireland was −19.1 °C.',
    context:
      'Recorded at Markree Castle, Co. Sligo, in January 1881 — a cold snap remembered in folklore as one of the bitterest winters of the 19th century.',
    source: 'Met Éireann',
    sourceUrl: 'https://www.met.ie/climate/major-weather-events',
  },
  {
    id: 'sunshine-hours',
    headline: 'The sunny southeast averages around 1,600 hours of sunshine a year.',
    context:
      'Wexford and east Waterford get the most. By contrast the north-west averages closer to 1,100 hours — a third less.',
    source: 'Met Éireann climate normals',
    sourceUrl: 'https://www.met.ie/climate/30-year-averages',
  },
  {
    id: 'malin-gust',
    headline: 'The strongest gust ever recorded in Ireland topped 180 km/h.',
    context:
      'Malin Head and Foynes have both recorded gusts above 180 km/h. Storm naming has been a joint UK–Ireland–Netherlands operation since 2015.',
    source: 'Met Éireann',
    sourceUrl: 'https://www.met.ie/storm-centre',
  },
  {
    id: 'snow-rare',
    headline: 'Most of Ireland sees fewer than 10 days of snow a year.',
    context:
      'Snow is rare at sea level. Even the upland averages are 15–25 days. The 2018 "Beast from the East" was the heaviest fall in 35 years.',
    source: 'Met Éireann',
    sourceUrl: 'https://www.met.ie/climate',
  },
  {
    id: 'gulf-stream',
    headline: 'The North Atlantic Drift keeps Ireland mild year-round.',
    context:
      'Ireland is at the latitude of Newfoundland but ~10 °C warmer in winter, thanks to the warm North Atlantic Drift (a continuation of the Gulf Stream).',
    source: 'Met Éireann',
    sourceUrl: 'https://www.met.ie/about-us/what-is-climate',
  },
  {
    id: 'soft-day',
    headline: 'A "soft day" is officially a meteorological category — sort of.',
    context:
      'Met Éireann’s glossary acknowledges the local term: light, persistent drizzle with little or no wind. Often warmer than it looks.',
    source: 'Met Éireann glossary',
    sourceUrl: 'https://www.met.ie/forecasts/forecast-glossary',
  },
  {
    id: 'storm-naming',
    headline: 'Ireland names its storms with the UK and Netherlands.',
    context:
      'Since 2015 (Netherlands joined 2019), the three meteorological services share a single annual storm-name list — alphabetical, alternating boy/girl, no Q/U/X/Y/Z.',
    source: 'Met Éireann storm centre',
    sourceUrl: 'https://www.met.ie/storm-centre',
  },
  {
    id: 'met-eireann-1936',
    headline: 'Met Éireann was founded in 1936.',
    context:
      'The Irish Meteorological Service was set up in 1936, splitting from the British Met Office. Today it runs 25 synoptic stations and a network of climate stations.',
    source: 'Met Éireann',
    sourceUrl: 'https://www.met.ie/about-us/our-history',
  },

  // ──────────────────────────────────────────────────────────────────────
  // Economy, work, prices
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'employment-2.78m',
    headline: 'About 2.78 million people are at work in Ireland.',
    context:
      'CSO Labour Force Survey shows the highest employment level on record. Female labour-force participation has grown from ~28% in the 1970s to over 60% today.',
    source: 'CSO Labour Force Survey (QLF18)',
    sourceUrl: 'https://data.cso.ie/table/QLF18',
  },
  {
    id: 'unemployment',
    headline: 'Unemployment in Ireland is around 4%.',
    context:
      'After peaking above 15% in 2012, unemployment has been close to 4–5% for several years — full-employment territory by most economic definitions.',
    source: 'CSO Monthly Unemployment',
    sourceUrl:
      'https://www.cso.ie/en/statistics/labourmarket/monthlyunemployment/',
  },
  {
    id: 'minimum-wage',
    headline: 'Ireland has the second-highest minimum wage in the EU.',
    context:
      'The national minimum wage is €13.50/hr (2025). Only Luxembourg pays more in the EU. The Living Wage Technical Group estimates a "living wage" closer to €15.10.',
    source: 'WRC / Department of Enterprise',
    sourceUrl:
      'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-rights/national-minimum-wage/',
  },
  {
    id: 'median-earnings',
    headline: 'The median full-time worker earns about €44,000 a year.',
    context:
      'CSO Earnings & Labour Costs put median annual earnings of full-time employees at ~€44k — though Dublin medians sit ~25% above this and rural counties below.',
    source: 'CSO Earnings & Labour Costs (EHQ04)',
    sourceUrl: 'https://data.cso.ie/table/EHQ04',
  },
  {
    id: 'gdp-distorted',
    headline: 'Ireland’s GDP per capita is one of the highest in the world.',
    context:
      '~$110k/person GDP, distorted by multinational accounting. The CSO publishes Modified GNI (GNI*) — closer to ~€60k — as a more realistic measure.',
    source: 'CSO Modified GNI* (NSA02)',
    sourceUrl: 'https://data.cso.ie/table/NSA02',
  },
  {
    id: 'corp-tax',
    headline: 'Ireland’s corporate tax rate is 12.5% — or 15% for big firms.',
    context:
      'The headline 12.5% rate has been a foundation of FDI policy since 2003. Since 2024 a 15% top-up applies to multinationals with global turnover above €750m.',
    source: 'Revenue Commissioners',
    sourceUrl: 'https://www.revenue.ie/en/companies-and-charities/',
  },
  {
    id: 'fdi-jobs',
    headline: 'Foreign multinationals employ ~300,000 people in Ireland.',
    context:
      'IDA Ireland reports ~302,000 people employed in IDA-supported foreign multinationals — about 11% of total employment.',
    source: 'IDA Ireland Annual Report',
    sourceUrl: 'https://www.idaireland.com/',
  },
  {
    id: 'pharma-exports',
    headline: 'Ireland is the EU’s biggest exporter of pharmaceuticals.',
    context:
      'Pharma and chemicals account for over half of all Irish goods exports — more than €100bn a year — concentrated in Cork, Limerick and Dublin.',
    source: 'CSO External Trade (TSA01)',
    sourceUrl: 'https://data.cso.ie/table/TSA01',
  },
  {
    id: 'tech-hq',
    headline: 'Most of the world’s big tech firms have their EMEA HQ in Dublin.',
    context:
      'Apple, Google, Meta, Microsoft, LinkedIn, X, TikTok, Stripe, Salesforce and Airbnb all run European HQs in Dublin — drawn by talent, English-speaking workforce and 12.5% corporate tax.',
    source: 'IDA Ireland',
    sourceUrl: 'https://www.idaireland.com/explore-your-sector/business-sectors',
  },
  {
    id: 'house-prices-rise',
    headline: 'House prices in Ireland have nearly doubled in a decade.',
    context:
      'CSO Residential Property Price Index has roughly doubled from its 2013 trough. Dublin median price is now over €450,000.',
    source: 'CSO HPM05',
    sourceUrl: 'https://data.cso.ie/table/HPM05',
    table: 'HPM05',
  },
  {
    id: 'rent-1800',
    headline: 'Average new-tenancy rent in Ireland is ~€1,800/month.',
    context:
      'RTB rent index puts the national average for new tenancies near €1,800 — over €2,200 in Dublin. Rent has risen ~80% since 2013.',
    source: 'Residential Tenancies Board',
    sourceUrl: 'https://www.rtb.ie/research/the-rtb-rent-index',
  },
  {
    id: 'mortgage-approvals',
    headline: 'Around 50,000 mortgages are approved in Ireland each year.',
    context:
      'BPFI data show first-time-buyer approvals running ~30,000/yr — the highest level since the financial crisis, even as new-home supply struggles to keep pace.',
    source: 'Banking & Payments Federation Ireland',
    sourceUrl: 'https://bpfi.ie/publications/',
  },
  {
    id: 'inflation-mod',
    headline: 'Irish inflation has cooled to ~2% from above 9% in 2022.',
    context:
      'The CSO HICP measure peaked at 9.6% in mid-2022; energy and food drove much of the spike. By 2025 it had returned to the ECB target band.',
    source: 'CSO Consumer Price Index (CPM01)',
    sourceUrl: 'https://data.cso.ie/table/CPM01',
  },
  {
    id: 'pension-age',
    headline: 'The State pension age in Ireland is 66.',
    context:
      'Plans to raise the qualifying age to 67 and 68 were paused after the Pensions Commission. Optional deferral up to age 70 introduced in 2024.',
    source: 'Department of Social Protection',
    sourceUrl: 'https://www.gov.ie/en/service/state-pension-contributory/',
  },

  // ──────────────────────────────────────────────────────────────────────
  // Energy, environment, agriculture
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'no-nuclear',
    headline: 'Ireland is one of a handful of EU members with no nuclear power.',
    context:
      'Nuclear generation is banned by statute since 1999. Ireland relies on natural gas, wind and a small but growing share of solar.',
    source: 'Department of Climate / SEAI',
    sourceUrl: 'https://www.seai.ie/',
  },
  {
    id: 'last-peat-plant',
    headline: 'Ireland’s last peat-fired power plant closed in 2020.',
    context:
      'Lough Ree and West Offaly stations closed in late 2020. Bord na Móna ended commercial peat extraction at the same time after 80+ years.',
    source: 'Bord na Móna',
    sourceUrl: 'https://www.bordnamona.ie/',
  },
  {
    id: 'evs-150k',
    headline: 'Over 150,000 EVs are now on Irish roads.',
    context:
      'Total electric vehicles (BEV + PHEV) on the licensed fleet exceeded 150,000 in 2024. ZEV target: 945,000 by 2030.',
    source: 'CSO TEM06 / SIMI',
    sourceUrl: 'https://data.cso.ie/table/TEM06',
  },
  {
    id: 'renewable-share',
    headline: 'Renewables provide more than a third of Ireland’s electricity.',
    context:
      'EirGrid reports renewables (mostly wind) supplied ~37% of all-island electricity in recent years. Ireland targets 80% renewable electricity by 2030.',
    source: 'EirGrid / SEAI',
    sourceUrl: 'https://www.eirgrid.ie/grid/data-and-publications',
  },
  {
    id: 'wind-capacity',
    headline: 'Ireland has over 5 GW of installed wind capacity.',
    context:
      'Onshore wind grew from ~250 MW in 2000 to over 5 GW today. Offshore is forecast to add 5+ GW by 2030.',
    source: 'IWEA / SEAI',
    sourceUrl: 'https://windenergyireland.com/',
  },
  {
    id: 'solar-fastest',
    headline: 'Solar is Ireland’s fastest-growing power source.',
    context:
      'Connected solar PV passed 1 GW in 2024 — five times the level in 2022. Microgeneration alone (rooftop) makes up ~25% of that.',
    source: 'SEAI / ESB Networks',
    sourceUrl: 'https://www.seai.ie/business-and-public-sector/business-grants-and-supports/microgeneration-support-scheme/',
  },
  {
    id: 'cattle-7.3m',
    headline: 'Ireland has about 7.3 million cattle.',
    context:
      'CSO June Livestock Survey (AHA01): about 7.3m cattle in the Republic, including ~1.6m dairy cows and ~870k beef-suckler cows.',
    source: 'CSO AHA01',
    sourceUrl: 'https://data.cso.ie/table/AHA01',
    table: 'AHA01',
  },
  {
    id: 'sheep-5m',
    headline: 'Ireland has roughly 5 million sheep.',
    context:
      'About 5m sheep, mainly in the western and upland counties. The largest sheep counties are Donegal, Mayo, Galway and Kerry.',
    source: 'CSO AHA01',
    sourceUrl: 'https://data.cso.ie/table/AHA01',
    table: 'AHA01',
  },
  {
    id: 'pigs-1.6m',
    headline: 'Ireland has about 1.6 million pigs.',
    context:
      'The pig herd is concentrated in a small number of large units. Ireland exports more pigmeat than it consumes — ~60% of production goes abroad.',
    source: 'CSO AHA01',
    sourceUrl: 'https://data.cso.ie/table/AHA01',
    table: 'AHA01',
  },
  {
    id: 'farms-135k',
    headline: 'Ireland has about 135,000 farms.',
    context:
      'CSO Farm Structure Survey: ~135,000 active farms. The average size is ~33 hectares — small by EU standards. Most are family-owned.',
    source: 'CSO Farm Structure Survey',
    sourceUrl:
      'https://www.cso.ie/en/statistics/agriculture/farmstructuresurvey/',
  },
  {
    id: 'agriculture-emissions',
    headline: 'Agriculture is responsible for ~38% of Irish emissions.',
    context:
      'EPA inventories: agriculture is the single biggest source of greenhouse-gas emissions in Ireland — well above the EU average. Cattle (methane) drive most of it.',
    source: 'EPA Greenhouse Gas Inventory',
    sourceUrl:
      'https://www.epa.ie/our-services/monitoring--assessment/climate-change/ghg/',
  },
  {
    id: 'ghg-total',
    headline: 'Ireland emits about 60 million tonnes of CO₂-equivalent a year.',
    context:
      'EPA reports ~60 Mt CO₂e annually — agriculture, transport and energy are the three biggest sources. Per-capita emissions are still above the EU average.',
    source: 'EPA Greenhouse Gas Inventory',
    sourceUrl:
      'https://www.epa.ie/our-services/monitoring--assessment/climate-change/ghg/',
  },
  {
    id: 'bathing-water',
    headline: 'Over 95% of Ireland’s bathing waters meet the highest standard.',
    context:
      'EPA Bathing Water reports show 95–98% of designated beaches meet "sufficient" or better quality each year. About 80% reach "excellent".',
    source: 'EPA Bathing Water',
    sourceUrl: 'https://www.beaches.ie/',
  },
  {
    id: 'water-bodies',
    headline: 'Around half of Ireland’s rivers fail "good" ecological status.',
    context:
      'EPA Water Framework reporting: ~54% of river water bodies meet good or high status — well below the EU 2027 target. Diffuse agricultural pollution is the main driver.',
    source: 'EPA Water Quality',
    sourceUrl:
      'https://www.epa.ie/our-services/monitoring--assessment/freshwater--marine/',
  },
  {
    id: 'air-pm25',
    headline: 'Ireland’s air quality meets EU limits, not WHO guidelines.',
    context:
      'EPA monitoring: PM2.5 across most of the country is below the EU limit, but above the tighter WHO guideline. Solid-fuel home heating is the main domestic source.',
    source: 'EPA Air Quality',
    sourceUrl: 'https://airquality.ie/',
  },
  {
    id: 'rivers-protected',
    headline: 'Over 50 rivers in Ireland have Special Area of Conservation status.',
    context:
      'NPWS designates ~440 SACs in total, including ~50 rivers and lakes important for freshwater pearl mussel, Atlantic salmon and other listed species.',
    source: 'NPWS',
    sourceUrl: 'https://www.npws.ie/',
  },

  // ──────────────────────────────────────────────────────────────────────
  // Health, education, society
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'health-spending',
    headline: 'Ireland spends ~€25 billion a year on public health.',
    context:
      'HSE budget for 2024 was around €25bn — among the highest per-capita health budgets in the EU. The HSE employs over 130,000 people.',
    source: 'HSE Annual Report',
    sourceUrl: 'https://www.hse.ie/eng/services/publications/annual-report/',
  },
  {
    id: 'gp-cards',
    headline: 'Almost half the population has a Medical or GP-visit Card.',
    context:
      '~1.6m people hold a Medical Card and ~660,000 a GP-visit Card — together ~45% of the population get free GP care.',
    source: 'HSE Primary Care Reimbursement Service',
    sourceUrl: 'https://www2.hse.ie/services/medical-cards-and-gp-visit-cards/',
  },
  {
    id: 'third-level-rate',
    headline: 'Ireland has the EU’s highest rate of third-level education.',
    context:
      'Almost 60% of 25–34-year-olds in Ireland hold a third-level qualification — the highest share in the EU and one of the highest in the OECD.',
    source: 'CSO / Eurostat',
    sourceUrl:
      'https://www.cso.ie/en/statistics/education/educationalattainment/',
  },
  {
    id: 'students-3rd',
    headline: 'Around 250,000 students are enrolled in higher education.',
    context:
      'HEA data show ~250k students across universities, technological universities and institutes of further education. International students are ~12% of the total.',
    source: 'Higher Education Authority',
    sourceUrl: 'https://hea.ie/statistics/',
  },
  {
    id: 'trinity-1592',
    headline: 'Trinity College Dublin was founded in 1592.',
    context:
      'Founded by royal charter under Queen Elizabeth I, Trinity is the oldest university in Ireland and one of the oldest in the British Isles. ~21,000 students today.',
    source: 'Trinity College Dublin',
    sourceUrl: 'https://www.tcd.ie/about/history/',
  },
  {
    id: 'primary-schools',
    headline: 'There are about 3,100 primary schools in Ireland.',
    context:
      'Department of Education statistics show ~3,100 primary schools and ~720 post-primary schools. Most primary schools are still under religious patronage.',
    source: 'Department of Education',
    sourceUrl:
      'https://www.gov.ie/en/collection/statistics-on-irish-education/',
  },
  {
    id: 'leaving-cert',
    headline: 'About 60,000 students sit the Leaving Cert each June.',
    context:
      'The Leaving Certificate exam is the gateway to third-level education. ~60,000 students sit it annually, most aged 17–19.',
    source: 'State Examinations Commission',
    sourceUrl: 'https://www.examinations.ie/',
  },
  {
    id: 'gardai-14k',
    headline: 'There are around 14,000 sworn members of An Garda Síochána.',
    context:
      '~14,000 Gardaí supported by ~3,000 staff and ~500 reserve members. The force is unarmed for routine duties — one of only a handful of unarmed police forces in the world.',
    source: 'An Garda Síochána',
    sourceUrl: 'https://www.garda.ie/',
  },
  {
    id: 'defence-forces',
    headline: 'The Irish Defence Forces have about 7,500 personnel.',
    context:
      '~7,500 Permanent Defence Forces personnel across Army, Naval Service and Air Corps — supplemented by the Reserve Defence Force.',
    source: 'Defence Forces',
    sourceUrl: 'https://www.military.ie/',
  },
  {
    id: 'dáil-174',
    headline: 'The Dáil has 174 TDs, up from 160.',
    context:
      'Following Constituency Commission changes the Dáil expanded to 174 seats from the 2024 election — the largest Dáil since the foundation of the State.',
    source: 'Houses of the Oireachtas',
    sourceUrl: 'https://www.oireachtas.ie/',
  },
  {
    id: 'voting-pr-stv',
    headline: 'Ireland uses a unique voting system: PR-STV.',
    context:
      'Ireland and Malta are the only countries in Europe to use Proportional Representation by Single Transferable Vote in national elections.',
    source: 'Citizens Information',
    sourceUrl:
      'https://www.citizensinformation.ie/en/government-in-ireland/elections-and-referenda/voting/voting-system/',
  },
  {
    id: 'first-dail',
    headline: 'The first Dáil Éireann met on 21 January 1919.',
    context:
      'Convened in the Mansion House by Sinn Féin TDs elected in 1918 — including the first woman elected to a parliament in Britain or Ireland, Constance Markievicz.',
    source: 'Houses of the Oireachtas',
    sourceUrl: 'https://www.oireachtas.ie/en/visit-and-learn/history/',
  },
  {
    id: 'eu-1973',
    headline: 'Ireland joined the European Communities in 1973.',
    context:
      'Joined alongside the UK and Denmark in the first EU enlargement. Has held the rotating Council presidency seven times.',
    source: 'European Commission Ireland',
    sourceUrl: 'https://ireland.representation.ec.europa.eu/',
  },
  {
    id: 'euro-1999',
    headline: 'Ireland adopted the euro in 1999.',
    context:
      'The euro became Ireland’s accounting currency in 1999 and replaced the punt as cash on 1 January 2002. The conversion rate was IR£1 = €1.27.',
    source: 'Central Bank of Ireland',
    sourceUrl: 'https://www.centralbank.ie/',
  },

  // ──────────────────────────────────────────────────────────────────────
  // Transport, infrastructure, tourism
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'dublin-airport',
    headline: 'Dublin Airport handles over 30 million passengers a year.',
    context:
      'Pre-pandemic record was 32.9m (2019). Recent years are back near and above pre-pandemic levels — the airport’s 32m cap is now under review.',
    source: 'daa Annual Report',
    sourceUrl: 'https://www.dublinairport.com/about-us/about-daa/about-us',
  },
  {
    id: 'ports-busy',
    headline: 'Dublin Port is the largest port on the island of Ireland.',
    context:
      'Handles around 35–40 million tonnes of cargo a year — about 50% of all Republic of Ireland trade by tonnage.',
    source: 'Dublin Port Annual Report',
    sourceUrl: 'https://www.dublinport.ie/',
  },
  {
    id: 'roads-100k',
    headline: 'Ireland has about 100,000 km of public roads.',
    context:
      'Around 5,300 km of national roads (including ~1,200 km of motorway) and ~94,000 km of regional and local roads. One of the densest local-road networks in Europe.',
    source: 'Transport Infrastructure Ireland',
    sourceUrl: 'https://www.tii.ie/',
  },
  {
    id: 'rail-1800km',
    headline: 'Iarnród Éireann’s network covers about 1,800 km.',
    context:
      'About 1,800 km of operational rail, down from a peak of ~5,500 km in the 1920s. The DART carries ~20m passengers a year.',
    source: 'Iarnród Éireann',
    sourceUrl: 'https://www.irishrail.ie/',
  },
  {
    id: 'luas-2004',
    headline: 'The Luas opened in 2004.',
    context:
      'Dublin’s tram network (Red and Green lines) carries ~50m passengers a year. The Cross-City extension opened 2017; further extensions are in planning.',
    source: 'TII',
    sourceUrl: 'https://www.luas.ie/',
  },
  {
    id: 'cars-on-road',
    headline: 'There are about 2.3 million private cars on Irish roads.',
    context:
      'CSO TEM07 reports ~2.3m taxed private cars in Ireland. The fleet has grown ~40% since 2000 even as urban transit improved.',
    source: 'CSO TEM07',
    sourceUrl: 'https://data.cso.ie/table/TEM07',
  },
  {
    id: 'cycle-share',
    headline: 'About 6% of Dubliners cycle to work.',
    context:
      'Census 2022 commuting data: ~6% of Dublin city workers commute by bicycle — well above the national average of 2–3%.',
    source: 'CSO Census 2022 — Profile 6',
    sourceUrl:
      'https://www.cso.ie/en/releasesandpublications/ep/p-cpp6/census2022profile6-commutingincome/',
  },
  {
    id: 'tourism-revenue',
    headline: 'Tourism is worth about €8 billion a year to Ireland.',
    context:
      'Failte Ireland estimates tourism contributes ~€8bn to the economy and supports over 240,000 jobs — about 9% of all employment.',
    source: 'Failte Ireland',
    sourceUrl: 'https://www.failteireland.ie/Research/Tourism-Statistics.aspx',
  },
  {
    id: 'overseas-visitors',
    headline: 'Around 11 million overseas visitors come to Ireland each year.',
    context:
      'CSO Tourism & Travel show ~11m overseas trips to Ireland in 2024. Top source markets: Britain, USA, France, Germany.',
    source: 'CSO Tourism & Travel',
    sourceUrl: 'https://data.cso.ie/table/TMA01',
  },
  {
    id: 'guinness-storehouse',
    headline: 'The Guinness Storehouse is Ireland’s most-visited paid attraction.',
    context:
      '1.7m+ visitors a year — comfortably the most-visited paid attraction in the country. Cliffs of Moher comes second among paid sites.',
    source: 'Failte Ireland visitor attractions list',
    sourceUrl:
      'https://www.failteireland.ie/Research/Tourism-Statistics/Visitors-to-Ireland.aspx',
  },
  {
    id: 'cliffs-of-moher',
    headline: 'The Cliffs of Moher get over 1.5 million visitors a year.',
    context:
      'Ireland’s most-visited natural attraction, on the Wild Atlantic Way in Co. Clare. Cliff height tops out at 214 m at Knockardakin.',
    source: 'Failte Ireland',
    sourceUrl: 'https://www.cliffsofmoher.ie/',
  },
  {
    id: 'pubs-7000',
    headline: 'Ireland has about 7,000 pubs.',
    context:
      'Drinks Industry Group reports ~7,000 licensed premises — down from over 10,000 in the early 2000s. Pubs per capita are still among the highest in Europe.',
    source: 'DIGI Ireland',
    sourceUrl: 'https://www.digi.ie/',
  },
  {
    id: 'gaa-clubs',
    headline: 'There are around 2,200 GAA clubs in Ireland.',
    context:
      'The Gaelic Athletic Association has ~2,200 clubs in the Republic and ~400 more across the rest of the island and abroad. ~600,000 registered members worldwide.',
    source: 'GAA Annual Report',
    sourceUrl: 'https://www.gaa.ie/',
  },
  {
    id: 'croke-park',
    headline: 'Croke Park is the fifth-largest stadium in Europe.',
    context:
      'Capacity 82,300 — bigger than Old Trafford or the Bernabéu. Used principally for GAA, occasional concerts, and the international rules series.',
    source: 'GAA',
    sourceUrl: 'https://crokepark.ie/',
  },
  {
    id: 'opw-sites',
    headline: 'The OPW manages over 70 heritage sites — most are free.',
    context:
      'Office of Public Works runs ~70 state heritage properties from castles to abbeys. Many — including Glendalough, the Rock of Cashel grounds, and most ruins — are free to visit.',
    source: 'OPW Heritage Ireland',
    sourceUrl: 'https://heritageireland.ie/',
  },
  {
    id: 'culture-night',
    headline: 'Over 1,500 free events take place on Culture Night.',
    context:
      'A single night each September when 1,500+ cultural events open free across all 32 counties. ~400,000 attendees in recent years.',
    source: 'Culture Night Ireland',
    sourceUrl: 'https://culturenight.ie/',
  },
  {
    id: 'national-museum-free',
    headline: 'All National Museum of Ireland branches are free to visit.',
    context:
      'Four sites: Archaeology (Kildare St.), Decorative Arts (Collins Barracks), Natural History (Merrion St.) and Country Life (Castlebar). All free to enter.',
    source: 'National Museum of Ireland',
    sourceUrl: 'https://www.museum.ie/',
  },

  // ──────────────────────────────────────────────────────────────────────
  // Society, culture, miscellany
  // ──────────────────────────────────────────────────────────────────────
  {
    id: 'st-patrick-day',
    headline: 'Around 100 cities worldwide go green for St Patrick’s Day.',
    context:
      'Tourism Ireland’s "Global Greening" campaign turns ~100 landmarks green every March 17 — from Sydney Opera House to the Pyramids of Giza and the Great Wall of China.',
    source: 'Tourism Ireland',
    sourceUrl: 'https://www.tourismireland.com/global-greening',
  },
  {
    id: 'irish-passports',
    headline: 'Ireland issues over 1 million passports a year.',
    context:
      'Demand surged after Brexit: ~1.08m Irish passports issued in 2024. About 1 in 5 issued to applicants in Britain or Northern Ireland.',
    source: 'Department of Foreign Affairs',
    sourceUrl: 'https://www.dfa.ie/passports/',
  },
  {
    id: 'eurovision-most-wins',
    headline: 'Ireland has won Eurovision a record seven times.',
    context:
      'Joint-most wins of any country in the Eurovision Song Contest, including a famous three in a row (1992–1994). Best known winner: Johnny Logan, twice as performer.',
    source: 'EBU',
    sourceUrl: 'https://eurovision.tv/country/ireland',
  },
  {
    id: 'literature-nobel',
    headline: 'Ireland has produced four Nobel laureates in Literature.',
    context:
      'W.B. Yeats (1923), George Bernard Shaw (1925), Samuel Beckett (1969) and Seamus Heaney (1995) — four winners from a country of ~3–5 million people.',
    source: 'Nobel Prize',
    sourceUrl: 'https://www.nobelprize.org/prizes/lists/all-nobel-prizes-in-literature/',
  },
  {
    id: 'ulysses-1922',
    headline: 'James Joyce’s Ulysses was first published in 1922.',
    context:
      'Set in Dublin on 16 June 1904 — Bloomsday — and published in Paris by Sylvia Beach. It was banned in the United States until 1933 and de-facto in Ireland until the 1960s.',
    source: 'James Joyce Centre',
    sourceUrl: 'https://jamesjoyce.ie/',
  },
  {
    id: 'oldest-pub',
    headline: 'Ireland has one of the oldest pubs in the world.',
    context:
      'Sean’s Bar in Athlone claims continuous operation since the year 900. Supported by archaeological finds during 1970s renovation.',
    source: 'Guinness World Records',
    sourceUrl: 'https://www.guinnessworldrecords.com/',
  },
  {
    id: 'titanic-belfast',
    headline: 'The Titanic was built in Belfast.',
    context:
      'Harland & Wolff built RMS Titanic at the Queen’s Island shipyard, completed in 1912. Today the Titanic Belfast museum draws ~800,000 visitors a year.',
    source: 'Titanic Belfast',
    sourceUrl: 'https://titanicbelfast.com/',
  },
  {
    id: 'rté-1926',
    headline: 'Irish radio broadcasting began on 1 January 1926.',
    context:
      '2RN — the predecessor of RTÉ Radio — began broadcasting from Henry Street, Dublin. Television followed on Yule Eve, 31 December 1961.',
    source: 'RTÉ Archives',
    sourceUrl: 'https://www.rte.ie/archives/',
  },
  {
    id: 'irish-time-zone',
    headline: 'Ireland uses Irish Standard Time — UTC+1 in summer.',
    context:
      'Ireland is on UTC year-round in winter and UTC+1 (Irish Standard Time) in summer. Until 1916 Dublin Mean Time ran 25 minutes behind Greenwich.',
    source: 'Government of Ireland',
    sourceUrl: 'https://www.gov.ie/en/publication/standard-time-in-ireland/',
  },
  {
    id: 'currency-history',
    headline: 'Ireland used a punt for 23 years.',
    context:
      'The Irish punt diverged from the pound sterling in 1979 (1:1) and was replaced by the euro in 2002 at IR£1 = €1.269738. Notes still show on the National Museum.',
    source: 'Central Bank of Ireland',
    sourceUrl: 'https://www.centralbank.ie/',
  },
  {
    id: 'three-presidents-women',
    headline: 'Two of Ireland’s presidents have been women — back-to-back.',
    context:
      'Mary Robinson (1990–1997) and Mary McAleese (1997–2011) served consecutively for 21 years. Robinson later led the UN Office of the High Commissioner for Human Rights.',
    source: 'Áras an Uachtaráin',
    sourceUrl: 'https://president.ie/en/the-president/former-presidents',
  },
  {
    id: 'first-women-mp',
    headline: 'Ireland elected the first woman to a UK Parliament — in 1918.',
    context:
      'Constance Markievicz won Dublin St. Patrick’s for Sinn Féin in December 1918. As an abstentionist she sat instead in the First Dáil in 1919, becoming Minister for Labour.',
    source: 'Houses of the Oireachtas',
    sourceUrl: 'https://www.oireachtas.ie/',
  },
  {
    id: 'same-sex-marriage',
    headline: 'Ireland was the first country to legalise same-sex marriage by popular vote.',
    context:
      'On 22 May 2015, 62% voted Yes in the marriage-equality referendum. The first ceremonies took place in November 2015.',
    source: 'Department of Justice',
    sourceUrl: 'https://www.gov.ie/en/publication/same-sex-marriage/',
  },
  {
    id: 'divorce-1996',
    headline: 'Divorce only became legal in Ireland in 1996.',
    context:
      'A 1995 referendum passed by 50.3% to 49.7% — by 9,114 votes — and divorce was constitutionally permitted from 1996. Time-limit was reduced from 4 to 2 years in 2019.',
    source: 'Citizens Information',
    sourceUrl:
      'https://www.citizensinformation.ie/en/birth-family-relationships/divorce/',
  },
  {
    id: 'population-projections',
    headline: 'CSO projects Ireland’s population could pass 6 million by 2040.',
    context:
      'Central CSO population projections suggest the State’s population will reach 5.6–6.1m by 2040, depending on migration assumptions.',
    source: 'CSO Population & Labour Force Projections',
    sourceUrl:
      'https://www.cso.ie/en/statistics/population/populationprojections/',
  },
];

// Pick the fact for "today" deterministically so it is the same for every
// visitor on the same calendar day, and rotates through the list.
export function todaysFact(date = new Date()): Fact {
  const epoch = Math.floor(date.getTime() / 86_400_000);
  return facts[epoch % facts.length];
}
