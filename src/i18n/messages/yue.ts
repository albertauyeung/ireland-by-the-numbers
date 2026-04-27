import type en from './en';

// 粵語（廣東話）— 香港書面口語形式（用「啲」「嘅」「喺」等口語詞）
const yue: typeof en = {
  brand: {
    name: 'Réalachas',
    tagline: '愛爾蘭 · 用數字睇',
  },
  nav: {
    today: '今日',
    stories: '專題',
    explorer: '圖表探索',
    about: '關於',
    languageMenu: '語言',
  },
  share: {
    save: '存做圖片',
    rendering: '緊整圖…',
    shareChart: '分享呢個圖表',
  },
  loading: {
    default: '緊載入資料…',
    fetching: '緊由 CSO PxStat 攞 {code}…',
    errorTitle: '載入唔到資料',
    errorFallback: '攞資料嘅時候出咗問題。',
  },
  notFound: {
    title: 'Tá brón orainn — 揾唔到呢一頁。',
    body: '呢一頁好似唔存在。',
    back: '返主頁',
  },
  home: {
    pill: '開放資料 · 2022 年人口普查 · Met Éireann · CSO',
    headline: '用真係記得住嘅數字，講愛爾蘭。',
    intro:
      'Réalachas 將愛爾蘭幾千張統計表，變成每日一個小知識、幾篇深度故事，仲有人人都用得嘅圖表探索器。唔使煩 PxStat、唔使寫 SQL — 淨係睇住數字認識呢個國家。',
    cta_stories: '睇專題',
    cta_explorer: '整你自己嘅圖表',
    seeData: '睇數據 →',
    sectionStoriesTitle: '值得用 5 分鐘睇嘅專題',
    sectionStoriesSub: '揀過嘅分析，全部用 2022 年普查同 CSO 開放資料。',
    allStories: '全部專題 →',
    pitchLearnersTitle: '為學習而設',
    pitchLearnersBody:
      '針對 CSPE、Politics & Society 課程，同所有對當代愛爾蘭有興趣嘅人。每個圖表都標明出處 — 上堂或者寫新聞稿都用得。',
    pitchOpenTitle: '完全開放嘅資料',
    pitchOpenBody:
      '由 CSO PxStat JSON-stat API、Met Éireann Open Data、EPA 同 SEAI 提供資料。依 CC BY 4.0 授權重用，註明出處。',
    pitchExplorerTitle: '整你自己嘅圖表',
    pitchExplorerBody:
      '揀張表、揀類別、揀個郡。圖表探索器將 CSO PxStat 嘅查詢簡化咗 — 完全唔使掂 JSON。',
  },
  fact: {
    label: '今日小知識',
    sourceLabel: '資料來源',
  },
  stories: {
    title: '由愛爾蘭資料寫成嘅專題',
    intro: '簡短、用圖表帶路嘅分析，將 2022 年普查同 CSO 數字寫成日常話。',
    minRead: '分鐘睇完',
    backAll: '← 全部專題',
    underlyingTables: '底層 CSO 資料表',
  },
  explorer: {
    title: '圖表探索',
    intro:
      '揀一張 CSO PxStat 表、揀類別，即刻睇到圖表。數字實時由 data.cso.ie 攞。',
    customLabel: '又或者用代碼載入任何一張 CSO PxStat 表',
    customPlaceholder: '例如 FP002',
    load: '載入',
    browseAll: '睇晒所有 CSO 表 →',
    saveChart: '將圖表存做圖片',
    cso: 'CSO',
    updated: '更新於',
    source: '來源',
    noPoints: '揀嘅組合冇資料。',
    noTime: '呢張表暫時冇時間維度 — 探索器支援有限。',
    tableNotes: '表格註釋',
  },
  about: {
    title: '關於 Réalachas',
    lead:
      '「Réalachas」喺愛爾蘭文係{em}嘅意思。呢個 app 係個小實驗，將愛爾蘭嘅開放資料變成你會喺巴士上睇嘅嘢。',
    leadEm: '寫實',
    whoTitle: '畀邊啲人睇',
    who: [
      '所有對當代愛爾蘭有興趣嘅人 — 居民、僑民、學生。',
      '中學 CSPE 同 Politics & Society 嘅老師同學生。',
      '想快啲入門 CSO 嘅記者、政策人同數據人。',
    ],
    sourcesTitle: '啲數字邊度嚟',
    sourceCso: '{name} — {site}。超過 5,000 張 JSON-stat 2.0 格式嘅表，免費、唔使登入。',
    sourceCensus: '{name} 嘅小區資料 — {site}。',
    sourceMet: '{name} — {site}。氣候常態值同預報／觀測 API。',
    sourceOther: '{seai} 能源統計、{epa} 環境指標、{pobal} HP 弱勢指數。',
    licenceTitle: '授權同標明出處',
    licenceBody:
      '呢度用嘅所有資料集，全部依 {ccby} 或者愛爾蘭 PSI Open Government Licence 發佈。每個圖表同分享卡旁邊都會見到出處。Réalachas 係獨立項目，同 CSO 或者任何政府部門冇關係。',
    accuracyTitle: '關於準確度',
    accuracyBody:
      '只要可以，圖表都係由 CSO PxStat API 實時攞，數字一直保持最新。主頁啲頭條小知識係手動寫嘅 — 可能落後一個發佈周期。如果見到錯誤，歡迎反映。',
  },
  footer: {
    aboutTitle: '關於呢個 app',
    aboutBody:
      'Réalachas 由愛爾蘭開放資料度搵故事。所有數字都嚟自 CSO、Met Éireann、EPA、SEAI 等等官方來源 — 每個圖表旁邊都會見到出處。',
    sourcesTitle: '資料來源',
    licenceTitle: '授權',
    licenceBody:
      'CSO 資料依 Creative Commons Attribution 4.0 International（CC BY 4.0）授權重用。© 愛爾蘭政府。本 app 同 CSO 或者任何政府部門冇關係。',
    builtWith: '用 React + Vite 整。圖表：Recharts。© {year}。',
  },
  populationStory: {
    p1: '1926 年（新國家頭一次普查）愛爾蘭共和國人口先得約 300 萬。一個世紀之後，2022 年普查大約 515 萬人 — 自 1851 年以嚟最高，係三十年間大量移入同生育率回升嘅成果。',
    p2: '下面嘅圖表展示 1926 至 2022 年每次普查嘅總人口，數據實時由 CSO PxStat 攞（表 {code}）。',
    chartCap: '歷次普查人口',
    chartTitle: '愛爾蘭共和國 · 1926–2022',
    statFirst: '首次普查（{year}）',
    statLatest: '最近一次普查（{year}）',
    statChange: '同首次比嘅變化',
    h2Change: '究竟變咗啲乜？',
    p3: '最大嘅故事係移民。共和國由獨立到 1990 年代每十年都係淨流出；之後就由流入主導。2022 年普查顯示常住人口入面有約 20% 喺海外出世 — 比 2016 年嘅約 17% 高。',
    p4: '人口增長都唔係平均分布。大都柏林（Dublin city、Fingal、South Dublin、Dún Laoghaire-Rathdown 加埋 Meath、Kildare 同 Wicklow）佔咗大部分增長，多個鄉村郡直到近年人口都係持平甚至下跌。',
    seriesPopulation: '人口',
  },
  languagesStory: {
    p1: '愛爾蘭官方係雙語制 — 愛爾蘭文係國家嘅第一官方語言。但日常生活入面講嘅語言遠遠唔止呢兩種。2022 年普查問咗受訪者英文同愛爾蘭文之外，喺屋企最常講嘅主要語言，啲答案勾畫出一個比刻板印象更加多元嘅國家。',
    chartCap: '英文／愛爾蘭文以外嘅主要家用語言',
    chartTitle: '愛爾蘭共和國 · 2022 年普查',
    seriesSpeakers: '屋企使用人數',
    h3Three: '三件值得知道嘅事',
    li1Title: '波蘭文排第三。',
    li1Body:
      '英文同愛爾蘭文之後，波蘭文係最多人喺屋企講嘅語言 — 大約 124,000 人，比 2011 年嘅約 135,000 略少，但仍然遠遠拋離下一個語言。',
    li2Title: '愛爾蘭文：個個識，少人講。',
    li2Body:
      '187 萬人話自己識講愛爾蘭文，但只有 71,968 人每日都講，而入面只有 20,261 人係喺校園以外。',
    li3Title: '每五個人就有一個喺海外出世。',
    li3Body:
      '常住人口入面 20% 喺海外出世 — 比 2016 年嘅 17% 高。最常見嘅出生地係英國、波蘭、印度同羅馬尼亞。',
    h3Street: '街頭實際係點',
    p2: '喺 Dublin 8，波蘭文、巴西葡萄牙文同西班牙文成日同英文一齊聽到；喺 Galway 西部同 Donegal 部分地區，每日都聽到愛爾蘭文；喺 Limerick、Mayo、Cork 同都柏林西北部，講印地文、馬拉雅拉姆文同阿拉伯文嘅家庭社群越嚟越多。2022 年普查影低咗呢一刻 — 而呢個畫面每五年都會明顯變動。',
    languages: {
      Polish: '波蘭文',
      Romanian: '羅馬尼亞文',
      Lithuanian: '立陶宛文',
      Portuguese: '葡萄牙文',
      Spanish: '西班牙文',
      Russian: '俄文',
      French: '法文',
      Arabic: '阿拉伯文',
      Hindi: '印地文',
    },
  },
  countyStory: {
    p1: '一郡一郡咁睇，愛爾蘭嘅人口老化速度唔一致。Fingal — 都柏林北面嘅通勤帶 — 中位年齡係 35.6 歲；Roscommon 就係 45.6 歲。呢十年嘅差距藏住好多嘢：年輕人去邊度搵工、邊啲郡留得住啲畢業生、又邊啲郡淨係因為退休人士搬入嚟先增長。',
    chartCap: '中位年齡同人口變化',
    chartTitle: '揀選郡 · 2016 → 2022 年普查',
    seriesAge: '中位年齡（歲）',
    seriesChange: '由 2016 年起人口變化（%）',
    h3Patterns: '三大模式',
    li1Title: '大都柏林通勤帶增長最快。',
    li1Body:
      'Meath、Kildare 同 Cork city 喺六年內都增長超過 11% — 係樓價外溢同持續移入嘅結果。',
    li2Title: '西部老啲。',
    li2Body:
      'Mayo、Leitrim 同 Roscommon 嘅中位年齡都過咗 43 — 遠高於全國嘅 38.8。',
    li3Title: '連鄉村郡都增長。',
    li3Body:
      '即使年齡結構偏老，2016 至 2022 年之間共和國每個郡都增長咗 — 同 2008–2016 年嗰個有幾個郡縮細嘅十年比，係明顯嘅轉變。',
  },
  cattleStory: {
    p1: '愛爾蘭以牛聞名：515 萬人嘅國家有大約 730 萬隻牛。但比例唔均勻。都柏林牛嘅數量唔到 8,000 隻；Cavan 就接近每個人四隻。',
    chartCap: '人口對牛數（按揀選郡）',
    chartTitle: '2022 年普查 + CSO 六月家畜調查（AHA01）',
    seriesPeople: '人口',
    seriesCattle: '牛隻',
    h3Why: '點解咁緊要',
    p2: '牛大約佔愛爾蘭農業排放嘅 60%、整體溫室氣體清冊嘅六分之一。牛群點分布、生產乜（牛肉定乳製品）同點變化，會直接反映喺 EPA 排放數據同歐盟氣候承諾上面。',
    p3: 'CSO 每年喺 PxStat 嘅 {code} 表發佈牛群規模。可以喺圖表探索器入面按郡或者家畜類型（乳牛、肉牛、羊、豬）切片睇。',
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
      title: '愛爾蘭人口由 1841 年起嘅變遷',
      subtitle:
        '70 年間失去一半人口 — 直到近年先重返大饑荒之前嘅水平。由 1841 到 2022 年嘅人口普查數字。',
    },
    languages: {
      title: '愛爾蘭講邊啲語言？',
      subtitle:
        '英文為主、愛爾蘭文仲喺度、波蘭文升上第三。透過 2022 年普查嘅語言數據，睇當代愛爾蘭。',
    },
    county: {
      title: '你個郡，10 個數字',
      subtitle:
        '中位年齡、一個人住嘅住戶比例、空置率、淨講英文嘅住戶… 由 2022 年普查嚟嘅郡際比較。',
    },
    cattle: {
      title: '牛嘅國度',
      subtitle:
        '愛爾蘭平均每個人有大約 1.4 隻牛 — 有啲郡嘅比例甚至過咗 5:1。點解喺鄉村，家畜嘅數量遠遠多過人口。',
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
      title: '歷次人口普查嘅人口，1926–2022',
      description:
        '1926 年起每次普查按年齡組同性別嘅人口。拖過唔同年齡組，睇住國家點老化。',
    },
    AHA01: {
      title: '六月家畜數量，按郡',
      description:
        '每年六月家畜調查 — 牛、羊、豬、家禽。比較西部同東部。',
    },
    HPM05: {
      title: '住宅物業價格指數',
      description:
        '全國、都柏林同其餘地區嘅住宅價格月度指數。',
    },
  },
};

export default yue;
