import type en from './en';

const zhHant: typeof en = {
  brand: {
    name: 'Réalachas',
    tagline: '愛爾蘭 · 數據裡的國度',
  },
  nav: {
    today: '今日',
    stories: '專題',
    explorer: '圖表探索',
    about: '關於',
    languageMenu: '語言',
  },
  share: {
    save: '儲存為圖片',
    rendering: '產生中…',
    shareChart: '分享此圖表',
  },
  loading: {
    default: '正在載入資料…',
    fetching: '正從 CSO PxStat 取得 {code}…',
    errorTitle: '無法載入資料',
    errorFallback: '取得資料時發生錯誤。',
  },
  notFound: {
    title: 'Tá brón orainn — 找不到頁面。',
    body: '此頁面似乎不存在。',
    back: '返回首頁',
  },
  home: {
    pill: '開放資料 · 2022 年人口普查 · Met Éireann · CSO',
    headline: '用真正讓人記得住的數字，講述愛爾蘭。',
    intro:
      'Réalachas 把愛爾蘭數以千計的統計表，化為每日一則小知識、幾篇深度故事，以及人人都能上手的圖表探索器。不必煩惱 PxStat、不必寫 SQL — 只要看著數字認識這個國家。',
    cta_stories: '探索專題',
    cta_explorer: '建立你的圖表',
    seeData: '查看資料 →',
    sectionStoriesTitle: '值得花五分鐘的專題',
    sectionStoriesSub: '精選自 2022 年人口普查與 CSO 開放資料的分析。',
    allStories: '所有專題 →',
    pitchLearnersTitle: '為學習而設',
    pitchLearnersBody:
      '為 CSPE、Politics & Society 課程及任何對當代愛爾蘭好奇的人而設。每張圖表都標註出處 — 在課堂或新聞報導裡都派得上用場。',
    pitchOpenTitle: '完全開放的資料',
    pitchOpenBody:
      '由 CSO PxStat JSON-stat API、Met Éireann Open Data、EPA 與 SEAI 提供資料。依據 CC BY 4.0 授權重用，並完整標註出處。',
    pitchExplorerTitle: '打造自己的圖表',
    pitchExplorerBody:
      '挑一張表、一個分類、一個郡。圖表探索器簡化了 CSO PxStat 查詢 — 完全不用碰 JSON。',
  },
  fact: {
    label: '今日小知識',
    sourceLabel: '資料來源',
  },
  stories: {
    title: '來自愛爾蘭資料的專題',
    intro: '簡短、以圖表帶路的分析，把 2022 年人口普查與 CSO 數字寫成人話。',
    minRead: '分鐘閱讀',
    backAll: '← 所有專題',
    underlyingTables: '底層 CSO 資料表',
  },
  explorer: {
    title: '圖表探索',
    intro:
      '挑一張 CSO PxStat 表、選擇分類，立即看到圖表。資料即時來自 data.cso.ie。',
    customLabel: '或者用代碼載入任何一張 CSO PxStat 表',
    customPlaceholder: '例如 FP002',
    load: '載入',
    browseAll: '瀏覽所有 CSO 表 →',
    saveChart: '將圖表儲存為圖片',
    cso: 'CSO',
    updated: '更新於',
    source: '來源',
    noPoints: '所選組合沒有資料點。',
    noTime: '此表尚無時間維度 — 探索器支援有限。',
    tableNotes: '表格附註',
  },
  about: {
    title: '關於 Réalachas',
    lead:
      '「Réalachas」在愛爾蘭語中意為{em}。這個應用是個小實驗，把愛爾蘭的開放資料變成你願意在公車上閱讀的內容。',
    leadEm: '寫實',
    whoTitle: '為誰而做',
    who: [
      '所有對當代愛爾蘭好奇的人 — 居民、僑民、學生。',
      '中學 CSPE 與 Politics & Society 的師生。',
      '想快速進入 CSO 的記者、政策工作者與資料人。',
    ],
    sourcesTitle: '數字從哪裡來',
    sourceCso: '{name} — {site}。逾 5,000 張 JSON-stat 2.0 格式的表，免費且不需登入。',
    sourceCensus: '{name} 的小區資料 — {site}。',
    sourceMet: '{name} — {site}。氣候常態值與預報／觀測 API。',
    sourceOther: '{seai} 能源統計、{epa} 環境指標、{pobal} HP 弱勢指數。',
    licenceTitle: '授權與標註',
    licenceBody:
      '此處使用的所有資料集，皆依 {ccby} 或愛爾蘭 PSI Open Government Licence 發布。每張圖表與分享卡旁皆顯示出處標註。Réalachas 為獨立專案，與 CSO 或任何政府機構無關。',
    accuracyTitle: '關於準確度',
    accuracyBody:
      '只要可能，圖表都從 CSO PxStat API 即時取得，數字始終為最新發布。首頁的若干頭條小知識為手動撰寫自 CSO 發佈 — 可能落後一個發佈週期。如有錯誤，歡迎回報。',
  },
  footer: {
    aboutTitle: '關於本應用',
    aboutBody:
      'Réalachas 從愛爾蘭開放資料中挖掘故事。所有數字皆來自 CSO、Met Éireann、EPA、SEAI 等官方來源 — 每張圖表旁皆顯示出處。',
    sourcesTitle: '資料來源',
    licenceTitle: '授權',
    licenceBody:
      'CSO 資料依 Creative Commons Attribution 4.0 International（CC BY 4.0）授權重用。© 愛爾蘭政府。本應用與 CSO 或任何政府機構無關。',
    builtWith: '以 React + Vite 建置。圖表：Recharts。© {year}。',
  },
  populationStory: {
    p1: '1926 年（新國家首次普查）愛爾蘭共和國人口僅約 300 萬。一個世紀後的 2022 年普查約為 515 萬人 — 自 1851 年以來最高，也是三十年來大量移入與生育率回升的成果。',
    p2: '下圖顯示 1926 年到 2022 年每次普查的總人口，資料即時取自 CSO PxStat（表 {code}）。',
    chartCap: '歷次普查人口',
    chartTitle: '愛爾蘭共和國 · 1926–2022',
    statFirst: '首次普查（{year}）',
    statLatest: '最近普查（{year}）',
    statChange: '與首次相比的變化',
    h2Change: '到底改變了什麼？',
    p3: '最大的故事是移民。共和國自獨立到 1990 年代每十年都是淨移出；自此以後則由移入主導。2022 年普查顯示常住人口中約 20% 出生於海外 — 高於 2016 年的約 17%。',
    p4: '人口成長也分布不均。大都柏林（Dublin city、Fingal、South Dublin、Dún Laoghaire-Rathdown 加上 Meath、Kildare 與 Wicklow）佔了大部分成長，多個鄉村郡直到近期人口都呈持平或下滑。',
    seriesPopulation: '人口',
  },
  languagesStory: {
    p1: '愛爾蘭官方為雙語制 — 愛爾蘭語為國家的第一官方語言。但日常生活中的語言遠不止這兩種。2022 年普查詢問了受訪者英語與愛爾蘭語以外在家中常說的主要語言，答案勾勒出一個比刻板印象更多元的國家。',
    chartCap: '英語／愛爾蘭語以外的主要家用語言',
    chartTitle: '愛爾蘭共和國 · 2022 年普查',
    seriesSpeakers: '家中使用人數',
    h3Three: '三件值得知道的事',
    li1Title: '波蘭語位列第三。',
    li1Body:
      '英語與愛爾蘭語之後，波蘭語是最常見的家用語言 — 約 124,000 人，比 2011 年的約 135,000 人略少，但仍遠超過下一個語言。',
    li2Title: '愛爾蘭語：人人懂，少人用。',
    li2Body:
      '187 萬人表示能說愛爾蘭語，但僅 71,968 人每天使用，其中只有 20,261 人是在校園以外。',
    li3Title: '每五人就有一人在海外出生。',
    li3Body:
      '常住人口中 20% 出生於海外 — 高於 2016 年的 17%。最常見的出生國為英國、波蘭、印度與羅馬尼亞。',
    h3Street: '在街頭看起來是怎樣',
    p2: '在 Dublin 8，波蘭語、巴西葡萄牙語與西班牙語常與英語並存；在西 Galway 與 Donegal 部分地區，每天都聽得到愛爾蘭語；在 Limerick、Mayo、Cork 與都柏林西北部，使用印地語、馬拉雅拉姆語與阿拉伯語的家庭社群正在增加。2022 年普查捕捉了當下的一刻 — 而這幅景象每五年都明顯變動。',
    languages: {
      Polish: '波蘭語',
      Romanian: '羅馬尼亞語',
      Lithuanian: '立陶宛語',
      Portuguese: '葡萄牙語',
      Spanish: '西班牙語',
      Russian: '俄語',
      French: '法語',
      Arabic: '阿拉伯語',
      Hindi: '印地語',
    },
  },
  countyStory: {
    p1: '從郡到郡，愛爾蘭人口的老化速度並不一致。Fingal — 都柏林北側通勤帶 — 的中位年齡為 35.6 歲；Roscommon 則為 45.6 歲。這十年的差距藏著很多事：年輕人移往何處工作、哪些郡留得住應屆畢業生、又有哪些郡只是因為退休族遷入而成長。',
    chartCap: '中位年齡與人口變化',
    chartTitle: '選定郡 · 2016 → 2022 年普查',
    seriesAge: '中位年齡（歲）',
    seriesChange: '自 2016 年以來人口變化（%）',
    h3Patterns: '三大模式',
    li1Title: '大都柏林通勤帶成長最快。',
    li1Body:
      'Meath、Kildare 與 Cork city 在六年間皆成長超過 11% — 是房價外溢與持續移入的結果。',
    li2Title: '西部年齡較長。',
    li2Body:
      'Mayo、Leitrim 與 Roscommon 的中位年齡皆超過 43 — 遠高於全國的 38.8。',
    li3Title: '連鄉村郡也在成長。',
    li3Body:
      '即使年齡結構偏老，2016 至 2022 年間共和國的每個郡都成長了 — 與 2008–2016 那個有多個郡縮減的十年相比，這是明顯的轉變。',
  },
  cattleStory: {
    p1: '愛爾蘭以牛聞名：515 萬人口的國家裡有約 730 萬頭牛。但比例並不均勻。都柏林牛數不到 8,000 頭，Cavan 則接近每人四頭。',
    chartCap: '人口對比牛隻數量（按選定郡）',
    chartTitle: '2022 年普查 + CSO 六月家畜調查（AHA01）',
    seriesPeople: '人口',
    seriesCattle: '牛隻',
    h3Why: '為什麼重要',
    p2: '牛隻約佔愛爾蘭農業排放的 60%、整體溫室氣體清冊的六分之一。牛群的分布、產出（牛肉或乳製品）以及變化趨勢，會直接反映在 EPA 排放資料與歐盟氣候承諾上。',
    p3: 'CSO 每年於 PxStat 的 {code} 表發布牛群規模。可在圖表探索器中按郡或家畜類型（乳牛、肉牛、羊、豬）切片。',
  },
  counties: {
    Fingal: 'Fingal',
    'Dublin City': '都柏林市',
    'South Dublin': '南都柏林',
    Meath: 'Meath',
    Kildare: 'Kildare',
    'Cork City': 'Cork 市',
    'Galway City': 'Galway 市',
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
    Dublin: '都柏林',
  },
  storyMeta: {
    population: {
      title: '愛爾蘭人口自 1841 年以來的變遷',
      subtitle:
        '70 年內失去一半人口 — 直到近年才重回大饑荒前的水準。從 1841 到 2022 年的人口普查數字。',
    },
    languages: {
      title: '愛爾蘭講哪些語言？',
      subtitle:
        '英語為主、愛爾蘭語仍存、波蘭語登上第三。透過 2022 年普查語言資料，看當代愛爾蘭。',
    },
    county: {
      title: '你的郡，10 個數字',
      subtitle:
        '中位年齡、單人住戶比例、空屋率、僅說英語的住戶… 來自 2022 年普查的郡際比較。',
    },
    cattle: {
      title: '牛的國度',
      subtitle:
        '愛爾蘭平均每人約有 1.4 頭牛 — 部分郡的比例甚至超過 5:1。為何在鄉村，家畜的數量遠超人口。',
    },
  },
  storyTags: {
    demographics: '人口',
    census: '人口普查',
    language: '語言',
    identity: '身份',
    counties: '各郡',
    agriculture: '農業',
    rural: '鄉村',
  },
  explorerTables: {
    FY002: {
      title: '歷次人口普查的人口，1926–2022',
      description:
        '1926 年起每次普查依年齡組與性別的人口。拖動年齡組，看著國家如何老化。',
    },
    AHA01: {
      title: '六月家畜數量，按郡',
      description:
        '每年六月家畜調查 — 牛、羊、豬、家禽。比較西部與東部。',
    },
    HPM05: {
      title: '住宅物業價格指數',
      description:
        '全國、都柏林與其餘地區的住宅價格月度指數。',
    },
  },
};

export default zhHant;
