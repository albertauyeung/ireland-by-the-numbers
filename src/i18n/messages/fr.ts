import type en from './en';

const fr: typeof en = {
  brand: {
    name: 'Réalachas',
    tagline: 'L’Irlande · en chiffres',
  },
  nav: {
    today: 'Aujourd’hui',
    stories: 'Récits',
    explorer: 'Explorateur',
    about: 'À propos',
    languageMenu: 'Langue',
  },
  share: {
    save: 'Enregistrer en image',
    rendering: 'Génération…',
    shareChart: 'Partager ce graphique',
  },
  loading: {
    default: 'Chargement des données…',
    fetching: 'Récupération de {code} sur CSO PxStat…',
    errorTitle: 'Impossible de charger les données',
    errorFallback: 'Une erreur est survenue lors de la récupération des données.',
  },
  notFound: {
    title: 'Tá brón orainn — page introuvable.',
    body: 'Cette page ne semble pas exister.',
    back: 'Retour à l’accueil',
  },
  home: {
    pill: 'Données ouvertes · Recensement 2022 · Met Éireann · CSO',
    headline: 'L’Irlande, racontée en chiffres dont vous vous souviendrez.',
    intro:
      'Réalachas transforme les milliers de tableaux statistiques irlandais en un fait du jour, quelques récits, et un explorateur de graphiques accessible à tous. Pas besoin de comprendre PxStat ni le SQL — juste le pays, en chiffres.',
    cta_stories: 'Découvrir les récits',
    cta_explorer: 'Créer votre graphique',
    seeData: 'Voir les données →',
    sectionStoriesTitle: 'Des récits qui valent vos 5 minutes',
    sectionStoriesSub: 'Explorations choisies à partir du Recensement 2022 et des données ouvertes du CSO.',
    allStories: 'Tous les récits →',
    pitchLearnersTitle: 'Pensé pour apprendre',
    pitchLearnersBody:
      'Conçu pour les cours de CSPE, Politics & Society, et toute personne curieuse de l’Irlande contemporaine. Chaque graphique est sourcé — utilisable en classe ou pour un dossier journalistique.',
    pitchOpenTitle: 'Données 100 % ouvertes',
    pitchOpenBody:
      'Propulsé par l’API JSON-stat de CSO PxStat, Met Éireann Open Data, l’EPA et la SEAI. Réutilisé sous licence CC BY 4.0 avec attribution complète.',
    pitchExplorerTitle: 'Construisez votre graphique',
    pitchExplorerBody:
      'Choisissez un tableau, une catégorie, un comté. L’explorateur simplifie les requêtes CSO PxStat — sans manipuler de JSON.',
  },
  fact: {
    label: 'Fait du jour',
    sourceLabel: 'Source',
  },
  stories: {
    title: 'Récits issus des données irlandaises',
    intro:
      'Des explorations courtes et illustrées qui rendent le Recensement 2022 et les chiffres du CSO accessibles à tous.',
    minRead: 'min de lecture',
    backAll: '← Tous les récits',
    underlyingTables: 'Tableaux CSO sous-jacents',
  },
  explorer: {
    title: 'Explorateur de graphiques',
    intro:
      'Choisissez un tableau CSO PxStat, filtrez par catégorie et obtenez le graphique. Les chiffres sont récupérés en direct sur data.cso.ie.',
    customLabel: 'Ou chargez n’importe quel tableau CSO PxStat par code',
    customPlaceholder: 'ex. FP002',
    load: 'Charger',
    browseAll: 'Parcourir tous les tableaux CSO →',
    saveChart: 'Enregistrer le graphique en image',
    cso: 'CSO',
    updated: 'mis à jour',
    source: 'Source',
    noPoints: 'Aucune donnée pour la combinaison sélectionnée.',
    noTime: 'Ce tableau n’a pas encore de dimension temporelle — la prise en charge par l’explorateur est limitée.',
    tableNotes: 'Notes du tableau',
  },
  about: {
    title: 'À propos de Réalachas',
    lead:
      '« Réalachas » signifie {em} en irlandais. L’application est une petite expérience visant à transformer les données ouvertes irlandaises en quelque chose qu’on lirait vraiment dans le bus.',
    leadEm: 'réalisme',
    whoTitle: 'À qui ça s’adresse',
    who: [
      'À toute personne curieuse de l’Irlande moderne — résidents, diaspora, étudiants.',
      'Aux enseignants et élèves de CSPE et de Politics & Society du secondaire.',
      'Aux journalistes, aux décideurs et aux passionnés de données qui veulent un point d’entrée rapide vers le CSO.',
    ],
    sourcesTitle: 'D’où viennent les chiffres',
    sourceCso: '{name} — {site}. Plus de 5 000 tableaux au format JSON-stat 2.0, gratuits, sans authentification.',
    sourceCensus: 'Données par petite zone du {name} — {site}.',
    sourceMet: '{name} — {site}. Normales climatiques et API de prévisions/observations.',
    sourceOther: 'Statistiques énergétiques de {seai}, indicateurs environnementaux de l’{epa}, indice HP de privation de {pobal}.',
    licenceTitle: 'Licence et attribution',
    licenceBody:
      'Tous les jeux de données utilisés ici sont publiés sous {ccby} ou la licence Open Government PSI irlandaise. L’attribution est affichée à côté de chaque graphique et carte partageable. Réalachas est un projet indépendant et n’est affilié ni au CSO ni à aucun organisme d’État.',
    accuracyTitle: 'Une note sur l’exactitude',
    accuracyBody:
      'Quand c’est possible, les graphiques sont chargés en direct depuis l’API CSO PxStat afin que les chiffres correspondent toujours aux dernières données publiées. Certains faits en page d’accueil sont rédigés à la main à partir des publications du CSO — ils peuvent avoir un cycle de retard. Si vous repérez une erreur, ouvrez une issue.',
  },
  footer: {
    aboutTitle: 'À propos de l’application',
    aboutBody:
      'Réalachas met en lumière des récits issus des données ouvertes irlandaises. Tous les chiffres proviennent du CSO, de Met Éireann, de l’EPA, de la SEAI et d’autres sources officielles — l’attribution est affichée à côté de chaque graphique.',
    sourcesTitle: 'Sources de données',
    licenceTitle: 'Licence',
    licenceBody:
      'Données du CSO réutilisées sous la licence Creative Commons Attribution 4.0 International (CC BY 4.0). © Government of Ireland. Cette application n’est affiliée ni au CSO ni à aucun organisme d’État.',
    builtWith: 'Conçu avec React + Vite. Graphiques : Recharts. © {year}.',
  },
  populationStory: {
    p1: 'En 1926 — premier recensement du nouvel État — la population de la République d’Irlande s’élevait à un peu moins de 3 millions. Un siècle plus tard, au Recensement 2022, elle atteint ~5,15 millions : le chiffre le plus élevé depuis 1851, fruit de trois décennies d’immigration soutenue et d’une fécondité en hausse.',
    p2: 'Le graphique ci-dessous montre la population totale à chaque recensement de 1926 à 2022, récupérée en direct depuis CSO PxStat (tableau {code}).',
    chartCap: 'Population à chaque recensement',
    chartTitle: 'République d’Irlande · 1926–2022',
    statFirst: 'Premier recensement ({year})',
    statLatest: 'Dernier recensement ({year})',
    statChange: 'Évolution depuis le premier',
    h2Change: 'Qu’est-ce qui a changé ?',
    p3: 'L’histoire principale, c’est la migration. La République a connu de l’émigration à chaque décennie depuis l’indépendance jusqu’aux années 1990 ; depuis, l’immigration domine. Le Recensement 2022 indique que ~20 % des résidents habituels sont nés hors de l’État — contre ~17 % en 2016.',
    p4: 'La croissance démographique est aussi très inégale. Le Grand Dublin (Dublin city, Fingal, South Dublin, Dún Laoghaire-Rathdown plus Meath, Kildare et Wicklow) concentre la majorité de la croissance, alors que plusieurs comtés ruraux ont vu leur population stagner ou reculer jusqu’à récemment.',
    seriesPopulation: 'Population',
  },
  languagesStory: {
    p1: 'L’Irlande est officiellement bilingue — l’irlandais est la première langue officielle de l’État. Mais la vie quotidienne se déroule dans bien d’autres langues. Le Recensement 2022 a interrogé les répondants sur les principales langues parlées à la maison autres que l’anglais et l’irlandais, et les réponses dessinent un pays bien plus pluriel que le stéréotype national ne le laisse penser.',
    chartCap: 'Principales langues parlées à la maison hors anglais/irlandais',
    chartTitle: 'République d’Irlande · Recensement 2022',
    seriesSpeakers: 'Locuteurs à la maison',
    h3Three: 'Trois choses à savoir',
    li1Title: 'Le polonais est troisième.',
    li1Body:
      'Après l’anglais et l’irlandais, le polonais est la langue la plus parlée à la maison — environ 124 000 locuteurs, légèrement moins que les ~135 000 de 2011 mais largement devant la suivante.',
    li2Title: 'L’irlandais : largement connu, peu utilisé.',
    li2Body:
      '1,87 million de personnes ont déclaré pouvoir parler irlandais, mais seulement 71 968 le parlent quotidiennement et 20 261 d’entre elles en dehors du système scolaire.',
    li3Title: 'Une personne sur cinq est née à l’étranger.',
    li3Body:
      '20 % des résidents habituels sont nés hors de l’État — contre 17 % en 2016. Les pays de naissance les plus courants sont le Royaume-Uni, la Pologne, l’Inde et la Roumanie.',
    h3Street: 'Ce que ça donne dans la rue',
    p2: 'À Dublin 8, on entend régulièrement le polonais, le portugais brésilien et l’espagnol aux côtés de l’anglais. Dans l’ouest de Galway et certaines parties de Donegal, on entend l’irlandais au quotidien. À Limerick, Mayo, Cork et au nord-ouest de Dublin, des communautés grandissantes parlent hindi, malayalam et arabe à la maison. Le Recensement 2022 saisit cet instantané — qui évolue nettement tous les cinq ans.',
    languages: {
      Polish: 'Polonais',
      Romanian: 'Roumain',
      Lithuanian: 'Lituanien',
      Portuguese: 'Portugais',
      Spanish: 'Espagnol',
      Russian: 'Russe',
      French: 'Français',
      Arabic: 'Arabe',
      Hindi: 'Hindi',
    },
  },
  countyStory: {
    p1: 'Comté par comté, la population irlandaise ne vieillit pas de façon uniforme. L’âge médian à Fingal — la ceinture nord de banlieue de Dublin — est de 35,6 ans. À Roscommon, il est de 45,6. Cet écart de dix ans cache beaucoup : où les jeunes adultes partent travailler, quels comtés retiennent leurs jeunes diplômés, et lesquels ne grandissent que parce que des retraités s’y installent.',
    chartCap: 'Âge médian et évolution de la population',
    chartTitle: 'Comtés sélectionnés · Recensements 2016 → 2022',
    seriesAge: 'Âge médian (années)',
    seriesChange: 'Évolution de la population depuis 2016 (%)',
    h3Patterns: 'Trois tendances',
    li1Title: 'La ceinture du Grand Dublin a connu la plus forte croissance.',
    li1Body:
      'Meath, Kildare et Cork city ont tous progressé de plus de 11 % en six ans — un effet du débordement des prix de l’immobilier et de la poursuite de l’immigration.',
    li2Title: 'L’ouest est plus âgé.',
    li2Body:
      'Mayo, Leitrim et Roscommon ont tous un âge médian supérieur à 43 — bien au-dessus de la médiane nationale de 38,8.',
    li3Title: 'Même les comtés ruraux ont grandi.',
    li3Body:
      'Malgré le déséquilibre des âges, tous les comtés de la République ont vu leur population augmenter entre 2016 et 2022 — un changement marqué par rapport à la décennie 2008–2016 où plusieurs avaient reculé.',
  },
  cattleStory: {
    p1: 'L’Irlande est célèbre pour ses bovins : environ 7,3 millions de têtes pour un État de 5,15 millions d’habitants. Mais la proportion n’est pas uniforme. Dublin compte moins de 8 000 bovins ; Cavan en a près de quatre par habitant.',
    chartCap: 'Habitants vs. bovins, par comté sélectionné',
    chartTitle: 'Recensement 2022 + Enquête bovine de juin du CSO (AHA01)',
    seriesPeople: 'Habitants',
    seriesCattle: 'Bovins',
    h3Why: 'Pourquoi ça compte',
    p2: 'Les bovins représentent environ 60 % des émissions agricoles de l’Irlande et un sixième de l’inventaire total des gaz à effet de serre de l’État. La forme du cheptel — où il se trouve, ce qu’il produit (viande vs. laitier), et comment il évolue — apparaît directement dans les données d’émissions de l’EPA et dans les engagements climatiques de l’UE.',
    p3: 'Le CSO publie chaque année la taille du cheptel dans le tableau {code} sur PxStat. Essayez l’explorateur de graphiques pour filtrer par comté ou type d’élevage (vaches laitières, bovins, ovins, porcins).',
  },
  counties: {
    Fingal: 'Fingal',
    'Dublin City': 'Dublin (ville)',
    'South Dublin': 'Dublin Sud',
    Meath: 'Meath',
    Kildare: 'Kildare',
    'Cork City': 'Cork (ville)',
    'Galway City': 'Galway (ville)',
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
      title: 'L’évolution de la population irlandaise depuis 1841',
      subtitle:
        'Le pays a perdu la moitié de ses habitants en 70 ans — et n’a retrouvé son niveau d’avant la Famine que récemment. Un regard sur les chiffres des recensements de 1841 à 2022.',
    },
    languages: {
      title: 'Quelles langues parle-t-on en Irlande ?',
      subtitle:
        'L’anglais domine, l’irlandais persiste, le polonais grimpe à la troisième place. Un instantané des données linguistiques du Recensement 2022 et ce qu’il dit de l’Irlande contemporaine.',
    },
    county: {
      title: 'Votre comté en 10 chiffres',
      subtitle:
        'Âge médian, part de ménages d’une personne, taux de vacance, ménages anglophones uniquement… des comparaisons par comté tirées du Recensement 2022.',
    },
    cattle: {
      title: 'Un pays de bovins',
      subtitle:
        'Il y a environ 1,4 bovin par personne en Irlande — et le ratio dépasse 5:1 dans certains comtés. Pourquoi le bétail éclipse la population dans l’Irlande rurale.',
    },
  },
  storyTags: {
    demographics: 'démographie',
    census: 'recensement',
    language: 'langue',
    identity: 'identité',
    counties: 'comtés',
    agriculture: 'agriculture',
    rural: 'rural',
  },
  explorerTables: {
    FY002: {
      title: 'Population à chaque recensement, 1926–2022',
      description:
        'Population par tranche d’âge et sexe à chaque recensement depuis 1926. Faites défiler les tranches d’âge et observez le vieillissement du pays.',
    },
    AHA01: {
      title: 'Effectifs du cheptel en juin, par comté',
      description:
        'Enquête annuelle de juin sur le cheptel — bovins, ovins, porcins, volaille. Comparez l’ouest à l’est.',
    },
    HPM05: {
      title: 'Indice des prix de l’immobilier résidentiel',
      description:
        'Indice mensuel des prix des logements pour l’État, Dublin et le reste du pays.',
    },
  },
};

export default fr;
