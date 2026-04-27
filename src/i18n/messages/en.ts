const en = {
  brand: {
    name: 'Réalachas',
    tagline: 'Ireland · by the numbers',
  },
  nav: {
    today: 'Today',
    stories: 'Stories',
    explorer: 'Explorer',
    about: 'About',
    languageMenu: 'Language',
  },
  share: {
    save: 'Save as image',
    rendering: 'Rendering…',
    shareChart: 'Share this chart',
  },
  loading: {
    default: 'Loading data…',
    fetching: 'Fetching {code} from CSO PxStat…',
    errorTitle: 'Couldn’t load data',
    errorFallback: 'Something went wrong fetching data.',
  },
  notFound: {
    title: 'Tá brón orainn — not found.',
    body: 'That page doesn’t seem to exist.',
    back: 'Back home',
  },
  home: {
    pill: 'Open data · Census 2022 · Met Éireann · CSO',
    headline: 'Ireland, told in numbers you’ll actually remember.',
    intro:
      'Réalachas turns Ireland’s thousands of statistical tables into a daily fact, a handful of stories, and a chart explorer anyone can use. No PxStat headaches, no SQL — just the country, by the numbers.',
    cta_stories: 'Explore stories',
    cta_explorer: 'Build your own chart',
    seeData: 'See the data →',
    sectionStoriesTitle: 'Stories worth your 5 minutes',
    sectionStoriesSub: 'Curated explorations using Census 2022 and CSO open data.',
    allStories: 'All stories →',
    pitchLearnersTitle: 'Built for learners',
    pitchLearnersBody:
      'Designed for CSPE, Politics & Society, and anyone curious about modern Ireland. Every chart is sourced — show your work in class or a journalism brief.',
    pitchOpenTitle: 'Pure open data',
    pitchOpenBody:
      'Powered by the CSO PxStat JSON-stat API, Met Éireann Open Data, EPA and SEAI. Reused under CC BY 4.0 with full attribution.',
    pitchExplorerTitle: 'Make your own chart',
    pitchExplorerBody:
      'Pick a table, a category, a county. The explorer simplifies CSO PxStat queries — no JSON wrangling required.',
  },
  fact: {
    label: 'Fact of the day',
    sourceLabel: 'Source',
  },
  stories: {
    title: 'Stories from Ireland’s data',
    intro:
      'Short, chart-led explorations that put Census 2022 and CSO numbers in plain English.',
    minRead: 'min read',
    backAll: '← All stories',
    underlyingTables: 'Underlying CSO tables',
  },
  explorer: {
    title: 'Chart explorer',
    intro:
      'Pick a CSO PxStat table, slice by a category, and see the chart. Numbers are fetched live from data.cso.ie.',
    customLabel: 'Or load any CSO PxStat table by code',
    customPlaceholder: 'e.g. FP002',
    load: 'Load',
    browseAll: 'Browse all CSO tables →',
    saveChart: 'Save chart as image',
    cso: 'CSO',
    updated: 'updated',
    source: 'Source',
    noPoints: 'No data points for the selected combination.',
    noTime: 'This table has no time dimension yet — explorer support is limited.',
    tableNotes: 'Table notes',
  },
  about: {
    title: 'About Réalachas',
    lead: '“Réalachas” is Irish for {em}. The app is a small experiment in turning Irish open data into something you’d actually read on the bus.',
    leadEm: 'realism',
    whoTitle: 'Who it’s for',
    who: [
      'Anyone curious about modern Ireland — residents, diaspora, students.',
      'Secondary-school CSPE and Politics & Society teachers and pupils.',
      'Journalists, policy people, data folk who want a quick CSO entry point.',
    ],
    sourcesTitle: 'Where the numbers come from',
    sourceCso: '{name} — {site}. 5,000+ tables in the JSON-stat 2.0 format, free, no auth.',
    sourceCensus: '{name} small-area data — {site}.',
    sourceMet: '{name} — {site}. Climate normals and forecast/observation APIs.',
    sourceOther: '{seai} energy statistics, {epa} environmental indicators, {pobal} HP Deprivation Index.',
    licenceTitle: 'Licence and attribution',
    licenceBody:
      'All datasets used here are published under {ccby} or the Irish PSI Open Government Licence. Attribution is shown beside every chart and shareable card. Réalachas is an independent project and is not affiliated with the CSO or any state body.',
    accuracyTitle: 'A note on accuracy',
    accuracyBody:
      'Where possible, charts are pulled live from the CSO PxStat API so the numbers are always the latest published figures. Some headline facts on the home page are written by hand from CSO releases — they may lag by a release cycle. If you spot something wrong, please open an issue.',
  },
  footer: {
    aboutTitle: 'About this app',
    aboutBody:
      'Réalachas surfaces stories from Irish open data. All figures come from the CSO, Met Éireann, EPA, SEAI and other official sources — attribution is shown beside every chart.',
    sourcesTitle: 'Data sources',
    licenceTitle: 'Licence',
    licenceBody:
      'CSO data reused under the Creative Commons Attribution 4.0 International licence (CC BY 4.0). © Government of Ireland. This app is not affiliated with the CSO or any state body.',
    builtWith: 'Built with React + Vite. Charts: Recharts. © {year}.',
  },
  populationStory: {
    p1: 'The Republic’s population in 1926 — the first Census of the new state — was just under 3 million. A century later, in Census 2022, it sits at ~5.15 million: the highest figure since 1851 and the result of three decades of strong inward migration and rising fertility.',
    p2: 'The chart below shows the Population total from every Census from 1926 to 2022, fetched live from CSO PxStat (table {code}).',
    chartCap: 'Population at each Census',
    chartTitle: 'Republic of Ireland · 1926–2022',
    statFirst: 'First Census ({year})',
    statLatest: 'Latest Census ({year})',
    statChange: 'Change since first',
    h2Change: 'What changed?',
    p3: 'The big story is migration. The Republic had emigration in every decade from independence until the 1990s; since then, inflows have dominated. Census 2022 records ~20% of usual residents as born outside the State — up from ~17% in 2016.',
    p4: 'Population growth is also unevenly distributed. Greater Dublin (Dublin city, Fingal, South Dublin, Dún Laoghaire-Rathdown plus Meath, Kildare and Wicklow) accounts for the majority of growth, while several rural counties saw flat or declining populations until recently.',
    seriesPopulation: 'Population',
  },
  languagesStory: {
    p1: 'Ireland is officially bilingual — Irish is the first official language of the State. But everyday life happens in many more tongues. Census 2022 asked respondents about main languages spoken at home other than English and Irish, and the answers map a country far more plural than the national stereotype suggests.',
    chartCap: 'Top non-English / non-Irish home languages',
    chartTitle: 'Republic of Ireland · Census 2022',
    seriesSpeakers: 'Speakers at home',
    h3Three: 'Three things to know',
    li1Title: 'Polish is third.',
    li1Body:
      'After English and Irish, Polish is the most-spoken home language — about 124,000 speakers, slightly fewer than the ~135,000 in 2011 but still well ahead of the next language.',
    li2Title: 'Irish is widely known, narrowly used.',
    li2Body:
      '1.87 million people said they could speak Irish, but only 71,968 said they spoke it daily and just 20,261 of those did so outside the school system.',
    li3Title: 'One in five was born abroad.',
    li3Body:
      '20% of usual residents were born outside the State — up from 17% in 2016. The most common countries of birth are the UK, Poland, India and Romania.',
    h3Street: 'What this looks like on the street',
    p2: 'In Dublin 8, Polish, Brazilian Portuguese and Spanish are routinely heard alongside English. In west Galway and parts of Donegal you’ll hear daily Irish. In Limerick, Mayo, Cork and Dublin North-West there are growing communities speaking Hindi, Malayalam and Arabic at home. Census 2022 captures this snapshot — and it has shifted noticeably every five years.',
    languages: {
      Polish: 'Polish',
      Romanian: 'Romanian',
      Lithuanian: 'Lithuanian',
      Portuguese: 'Portuguese',
      Spanish: 'Spanish',
      Russian: 'Russian',
      French: 'French',
      Arabic: 'Arabic',
      Hindi: 'Hindi',
    },
  },
  countyStory: {
    p1: 'County by county, Ireland’s population doesn’t age evenly. The median age in Fingal — Dublin’s northern commuter belt — is 35.6 years. In Roscommon it is 45.6. That ten-year gap hides a lot: where young adults move for work, which counties hold their school-leavers, and which keep growing only because retirees move in.',
    chartCap: 'Median age and population change',
    chartTitle: 'Selected counties · Census 2016 → 2022',
    seriesAge: 'Median age (years)',
    seriesChange: 'Population change since 2016 (%)',
    h3Patterns: 'Three patterns',
    li1Title: 'Greater Dublin commuter belt grew fastest.',
    li1Body:
      'Meath, Kildare and Cork city all grew >11% in six years — a function of house-price overflow and continuing in-migration.',
    li2Title: 'The west is older.',
    li2Body:
      'Mayo, Leitrim and Roscommon all have median ages above 43 — well above the State median of 38.8.',
    li3Title: 'Even rural counties grew.',
    li3Body:
      'Despite the age skew, every Republic county grew between 2016 and 2022 — a marked change from the 2008–2016 decade where several declined.',
  },
  cattleStory: {
    p1: 'Ireland is famously a country of cattle: roughly 7.3 million of them on a State of 5.15 million people. But the ratio is not uniform. Dublin has fewer than 8,000 cattle; Cavan has nearly four cattle for every person.',
    chartCap: 'People vs. cattle, by selected county',
    chartTitle: 'Census 2022 + CSO June Livestock Survey (AHA01)',
    seriesPeople: 'People',
    seriesCattle: 'Cattle',
    h3Why: 'Why this matters',
    p2: 'Cattle are roughly 60% of Ireland’s agricultural emissions and a sixth of the State’s total greenhouse gas inventory. The shape of the herd — where it is, what it produces (beef vs. dairy), and how it changes — shows up directly in EPA emissions data and in EU climate commitments.',
    p3: 'The CSO publishes the herd size every year as table {code} on PxStat. Try the chart explorer to slice by county or by livestock type (dairy cows, beef, sheep, pigs).',
  },
  counties: {
    Fingal: 'Fingal',
    'Dublin City': 'Dublin City',
    'South Dublin': 'South Dublin',
    Meath: 'Meath',
    Kildare: 'Kildare',
    'Cork City': 'Cork City',
    'Galway City': 'Galway City',
    Limerick: 'Limerick',
    Waterford: 'Waterford',
    Kerry: 'Kerry',
    Donegal: 'Donegal',
    Mayo: 'Mayo',
    Leitrim: 'Leitrim',
    Roscommon: 'Roscommon',
    Cavan: 'Cavan',
    Tipperary: 'Tipperary',
    Cork: 'Cork',
    Galway: 'Galway',
    Dublin: 'Dublin',
  },
  storyMeta: {
    population: {
      title: 'How Ireland’s population shifted since 1841',
      subtitle:
        'The country lost half its people in 70 years — and only crossed pre-Famine levels recently. A look at Census numbers from 1841 to 2022.',
    },
    languages: {
      title: 'What languages does Ireland speak?',
      subtitle:
        'English dominates, Irish persists, Polish climbed to third. A snapshot of Census 2022 language data and what it tells us about modern Ireland.',
    },
    county: {
      title: 'Your county in 10 numbers',
      subtitle:
        'Median age, share of one-person households, vacancy rate, English-only households… county comparisons drawn from Census 2022.',
    },
    cattle: {
      title: 'A country of cattle',
      subtitle:
        'There are roughly 1.4 cattle for every person in Ireland — and the ratio peaks above 5:1 in some counties. Why livestock dwarfs population in rural Ireland.',
    },
  },
  storyTags: {
    demographics: 'demographics',
    census: 'census',
    language: 'language',
    identity: 'identity',
    counties: 'counties',
    agriculture: 'agriculture',
    rural: 'rural',
  },
  explorerTables: {
    FY002: {
      title: 'Population at each Census, 1926–2022',
      description:
        'Population by age group and sex at every Census from 1926. Drag through age groups and watch how the country aged.',
    },
    AHA01: {
      title: 'Livestock numbers in June, by county',
      description:
        'Annual June livestock survey — cattle, sheep, pigs, poultry. Compare the West to the East.',
    },
    HPM05: {
      title: 'Residential property price index',
      description:
        'Monthly index of dwelling prices for the State, Dublin and the rest of country.',
    },
  },
};

export default en;
