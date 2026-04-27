import type en from './en';

const zhHans: typeof en = {
  brand: {
    name: 'Réalachas',
    tagline: '爱尔兰 · 数据里的国度',
  },
  nav: {
    today: '今日',
    stories: '专题',
    explorer: '图表探索',
    about: '关于',
    languageMenu: '语言',
  },
  share: {
    save: '保存为图片',
    rendering: '生成中…',
    shareChart: '分享此图表',
  },
  loading: {
    default: '正在加载数据…',
    fetching: '正在从 CSO PxStat 获取 {code}…',
    errorTitle: '无法加载数据',
    errorFallback: '获取数据时出错。',
  },
  notFound: {
    title: 'Tá brón orainn — 找不到页面。',
    body: '该页面似乎不存在。',
    back: '返回首页',
  },
  home: {
    pill: '开放数据 · 2022 年人口普查 · Met Éireann · CSO',
    headline: '用真正让人记得住的数字，讲述爱尔兰。',
    intro:
      'Réalachas 把爱尔兰数以千计的统计表，变成每日一则小知识、几篇深度故事，以及人人都能上手的图表探索器。无需折腾 PxStat、不写 SQL — 只看数字认识这个国家。',
    cta_stories: '探索专题',
    cta_explorer: '创建你的图表',
    seeData: '查看数据 →',
    sectionStoriesTitle: '值得花五分钟的专题',
    sectionStoriesSub: '精选自 2022 年人口普查与 CSO 开放数据的分析。',
    allStories: '所有专题 →',
    pitchLearnersTitle: '为学习而设',
    pitchLearnersBody:
      '为 CSPE、Politics & Society 课程及任何对当代爱尔兰好奇的人而设。每张图表都有出处 — 在课堂或新闻报道里都用得上。',
    pitchOpenTitle: '完全开放的数据',
    pitchOpenBody:
      '由 CSO PxStat JSON-stat API、Met Éireann Open Data、EPA 与 SEAI 提供数据。依据 CC BY 4.0 授权重用，并完整标注出处。',
    pitchExplorerTitle: '打造你自己的图表',
    pitchExplorerBody:
      '挑一张表、一个分类、一个郡。图表探索器简化了 CSO PxStat 查询 — 完全不必碰 JSON。',
  },
  fact: {
    label: '今日小知识',
    sourceLabel: '数据来源',
  },
  stories: {
    title: '来自爱尔兰数据的专题',
    intro: '简短、以图表为主的分析，把 2022 年人口普查与 CSO 数字写成人话。',
    minRead: '分钟阅读',
    backAll: '← 所有专题',
    underlyingTables: '底层 CSO 数据表',
  },
  explorer: {
    title: '图表探索',
    intro:
      '挑一张 CSO PxStat 表、按分类筛选，立即看到图表。数据实时来自 data.cso.ie。',
    customLabel: '或者用代码加载任何一张 CSO PxStat 表',
    customPlaceholder: '例如 FP002',
    load: '加载',
    browseAll: '浏览所有 CSO 表 →',
    saveChart: '将图表保存为图片',
    cso: 'CSO',
    updated: '更新于',
    source: '来源',
    noPoints: '所选组合没有数据点。',
    noTime: '该表暂无时间维度 — 探索器支持有限。',
    tableNotes: '表格备注',
  },
  about: {
    title: '关于 Réalachas',
    lead:
      '"Réalachas" 在爱尔兰语里意为{em}。这个应用是个小实验，把爱尔兰的开放数据变成你愿意在公交上读完的内容。',
    leadEm: '写实',
    whoTitle: '面向谁',
    who: [
      '所有对当代爱尔兰好奇的人 — 居民、侨民、学生。',
      '中学 CSPE 与 Politics & Society 的师生。',
      '想快速进入 CSO 的记者、政策工作者与数据从业者。',
    ],
    sourcesTitle: '数字从哪里来',
    sourceCso: '{name} — {site}。逾 5,000 张 JSON-stat 2.0 格式的表，免费且无需登录。',
    sourceCensus: '{name} 的小区数据 — {site}。',
    sourceMet: '{name} — {site}。气候常态值与预报／观测 API。',
    sourceOther: '{seai} 能源统计、{epa} 环境指标、{pobal} HP 弱势指数。',
    licenceTitle: '授权与署名',
    licenceBody:
      '本处使用的所有数据集，均依 {ccby} 或爱尔兰 PSI Open Government Licence 发布。每张图表与可分享卡片旁均显示署名。Réalachas 为独立项目，与 CSO 或任何政府机构无关。',
    accuracyTitle: '关于准确性',
    accuracyBody:
      '只要可能，图表都从 CSO PxStat API 实时获取，数字始终为最新发布。首页若干头条小知识为手动编写自 CSO 发布 — 可能落后一个发布周期。如发现错误，欢迎反馈。',
  },
  footer: {
    aboutTitle: '关于本应用',
    aboutBody:
      'Réalachas 从爱尔兰开放数据中挖掘故事。所有数字均来自 CSO、Met Éireann、EPA、SEAI 等官方来源 — 每张图表旁均显示出处。',
    sourcesTitle: '数据来源',
    licenceTitle: '授权',
    licenceBody:
      'CSO 数据依 Creative Commons Attribution 4.0 International（CC BY 4.0）授权重用。© 爱尔兰政府。本应用与 CSO 或任何政府机构无关。',
    builtWith: '基于 React + Vite。图表：Recharts。© {year}。',
  },
  populationStory: {
    p1: '1926 年（新国家首次普查）爱尔兰共和国人口仅约 300 万。一个世纪后的 2022 年普查约为 515 万 — 自 1851 年以来最高，也是三十年来大量移入与生育率回升的成果。',
    p2: '下图显示 1926 至 2022 年每次普查的总人口，数据实时取自 CSO PxStat（表 {code}）。',
    chartCap: '历次普查人口',
    chartTitle: '爱尔兰共和国 · 1926–2022',
    statFirst: '首次普查（{year}）',
    statLatest: '最近普查（{year}）',
    statChange: '与首次相比的变化',
    h2Change: '到底改变了什么？',
    p3: '最大的故事是移民。共和国自独立到 1990 年代每十年都是净迁出；自此以后则由迁入主导。2022 年普查显示常住人口中约 20% 出生于海外 — 高于 2016 年的约 17%。',
    p4: '人口增长也分布不均。大都柏林（Dublin city、Fingal、South Dublin、Dún Laoghaire-Rathdown 加上 Meath、Kildare 与 Wicklow）占了大部分增长，许多乡村郡直到近期人口都呈持平或下滑。',
    seriesPopulation: '人口',
  },
  languagesStory: {
    p1: '爱尔兰官方为双语制 — 爱尔兰语为国家的第一官方语言。但日常生活中的语言远不止这两种。2022 年普查询问了受访者英语与爱尔兰语以外在家中常说的主要语言，答案勾勒出一个比刻板印象更多元的国家。',
    chartCap: '英语／爱尔兰语之外的主要家用语言',
    chartTitle: '爱尔兰共和国 · 2022 年普查',
    seriesSpeakers: '家中使用人数',
    h3Three: '三件值得知道的事',
    li1Title: '波兰语位列第三。',
    li1Body:
      '英语与爱尔兰语之后，波兰语是最常见的家用语言 — 约 124,000 人，比 2011 年的约 135,000 略少，但仍远高于下一个语言。',
    li2Title: '爱尔兰语：广为人知，少人使用。',
    li2Body:
      '187 万人表示能说爱尔兰语，但仅 71,968 人每天使用，其中只有 20,261 人是在校园之外。',
    li3Title: '每五人就有一人在海外出生。',
    li3Body:
      '常住人口中 20% 出生于海外 — 高于 2016 年的 17%。最常见的出生国为英国、波兰、印度与罗马尼亚。',
    h3Street: '街头是怎样的景象',
    p2: '在 Dublin 8，波兰语、巴西葡萄牙语与西班牙语常与英语并存；在西 Galway 与 Donegal 部分地区，每天都听得到爱尔兰语；在 Limerick、Mayo、Cork 与都柏林西北部，使用印地语、马拉雅拉姆语与阿拉伯语的家庭社群正在增加。2022 年普查捕捉了当下的一刻 — 而这幅景象每五年都明显变动。',
    languages: {
      Polish: '波兰语',
      Romanian: '罗马尼亚语',
      Lithuanian: '立陶宛语',
      Portuguese: '葡萄牙语',
      Spanish: '西班牙语',
      Russian: '俄语',
      French: '法语',
      Arabic: '阿拉伯语',
      Hindi: '印地语',
    },
  },
  countyStory: {
    p1: '一郡又一郡，爱尔兰人口的老化速度并不一致。Fingal — 都柏林北侧通勤带 — 的中位年龄为 35.6 岁；Roscommon 则为 45.6 岁。这十年的差距藏着很多事：年轻人去哪里工作、哪些郡留得住毕业生、又有哪些郡仅因为退休族迁入而增长。',
    chartCap: '中位年龄与人口变化',
    chartTitle: '选定郡 · 2016 → 2022 年普查',
    seriesAge: '中位年龄（岁）',
    seriesChange: '自 2016 年以来人口变化（%）',
    h3Patterns: '三大模式',
    li1Title: '大都柏林通勤带增长最快。',
    li1Body:
      'Meath、Kildare 与 Cork city 在六年间均增长超过 11% — 是房价外溢与持续移入的结果。',
    li2Title: '西部年龄更长。',
    li2Body:
      'Mayo、Leitrim 与 Roscommon 的中位年龄均超过 43 — 远高于全国的 38.8。',
    li3Title: '连乡村郡也在增长。',
    li3Body:
      '即便年龄结构偏老，2016 至 2022 年间共和国的每个郡都增长了 — 与 2008–2016 那个有多个郡缩减的十年相比，这是明显的转变。',
  },
  cattleStory: {
    p1: '爱尔兰以牛闻名：515 万人口的国家里有约 730 万头牛。但比例并不均匀。都柏林牛数不到 8,000 头；Cavan 则接近每人四头。',
    chartCap: '人口对比牛数（按选定郡）',
    chartTitle: '2022 年普查 + CSO 六月家畜调查（AHA01）',
    seriesPeople: '人口',
    seriesCattle: '牛只',
    h3Why: '为何重要',
    p2: '牛只约占爱尔兰农业排放的 60%、整体温室气体清单的六分之一。牛群的分布、产出（牛肉或乳制品）以及变化趋势，会直接反映在 EPA 排放数据与欧盟气候承诺上。',
    p3: 'CSO 每年于 PxStat 的 {code} 表发布牛群规模。可在图表探索器中按郡或家畜类型（奶牛、肉牛、羊、猪）切片。',
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
      title: '爱尔兰人口自 1841 年以来的变迁',
      subtitle:
        '70 年内失去一半人口 — 直到近年才重回大饥荒前的水平。从 1841 到 2022 年的人口普查数字。',
    },
    languages: {
      title: '爱尔兰说哪些语言？',
      subtitle:
        '英语为主、爱尔兰语犹存、波兰语登上第三。透过 2022 年普查语言数据，看当代爱尔兰。',
    },
    county: {
      title: '你的郡，10 个数字',
      subtitle:
        '中位年龄、单人住户比例、空置率、仅说英语的住户… 来自 2022 年普查的郡际比较。',
    },
    cattle: {
      title: '牛的国度',
      subtitle:
        '爱尔兰平均每人约有 1.4 头牛 — 部分郡的比例甚至超过 5:1。为什么在乡村，家畜的数量远超人口。',
    },
  },
  storyTags: {
    demographics: '人口',
    census: '人口普查',
    language: '语言',
    identity: '身份',
    counties: '各郡',
    agriculture: '农业',
    rural: '乡村',
  },
  explorerTables: {
    FY002: {
      title: '历次人口普查的人口，1926–2022',
      description:
        '1926 年起每次普查依年龄组与性别的人口。拖动年龄组，看着国家如何老化。',
    },
    AHA01: {
      title: '六月家畜数量，按郡',
      description:
        '每年六月家畜调查 — 牛、羊、猪、家禽。对比西部与东部。',
    },
    HPM05: {
      title: '住宅物业价格指数',
      description:
        '全国、都柏林与其余地区的住宅价格月度指数。',
    },
  },
};

export default zhHans;
