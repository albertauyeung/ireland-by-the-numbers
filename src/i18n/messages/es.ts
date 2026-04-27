import type en from './en';

const es: typeof en = {
  brand: {
    name: 'Réalachas',
    tagline: 'Irlanda · en cifras',
  },
  nav: {
    today: 'Hoy',
    stories: 'Historias',
    explorer: 'Explorador',
    about: 'Acerca de',
    languageMenu: 'Idioma',
  },
  share: {
    save: 'Guardar como imagen',
    rendering: 'Generando…',
    shareChart: 'Compartir este gráfico',
  },
  loading: {
    default: 'Cargando datos…',
    fetching: 'Obteniendo {code} de CSO PxStat…',
    errorTitle: 'No se pudieron cargar los datos',
    errorFallback: 'Algo salió mal al obtener los datos.',
  },
  notFound: {
    title: 'Tá brón orainn — no encontrado.',
    body: 'Esta página no parece existir.',
    back: 'Volver al inicio',
  },
  home: {
    pill: 'Datos abiertos · Censo 2022 · Met Éireann · CSO',
    headline: 'Irlanda contada con cifras que sí recordarás.',
    intro:
      'Réalachas convierte los miles de tablas estadísticas de Irlanda en un dato del día, un puñado de historias y un explorador de gráficos al alcance de cualquiera. Sin dolores de cabeza con PxStat, sin SQL — solo el país, en cifras.',
    cta_stories: 'Explorar historias',
    cta_explorer: 'Crea tu gráfico',
    seeData: 'Ver los datos →',
    sectionStoriesTitle: 'Historias que valen tus 5 minutos',
    sectionStoriesSub: 'Análisis seleccionados a partir del Censo 2022 y los datos abiertos del CSO.',
    allStories: 'Todas las historias →',
    pitchLearnersTitle: 'Pensado para aprender',
    pitchLearnersBody:
      'Diseñado para CSPE, Politics & Society y para cualquier persona con curiosidad por la Irlanda contemporánea. Cada gráfico está referenciado — listo para clase o para un brief periodístico.',
    pitchOpenTitle: 'Datos 100 % abiertos',
    pitchOpenBody:
      'Impulsado por la API JSON-stat de CSO PxStat, Met Éireann Open Data, EPA y SEAI. Reutilizado bajo CC BY 4.0 con atribución completa.',
    pitchExplorerTitle: 'Construye tu propio gráfico',
    pitchExplorerBody:
      'Elige una tabla, una categoría, un condado. El explorador simplifica las consultas a CSO PxStat — sin pelearse con JSON.',
  },
  fact: {
    label: 'Dato del día',
    sourceLabel: 'Fuente',
  },
  stories: {
    title: 'Historias desde los datos de Irlanda',
    intro:
      'Análisis breves y guiados por gráficos que ponen el Censo 2022 y las cifras del CSO en lenguaje sencillo.',
    minRead: 'min de lectura',
    backAll: '← Todas las historias',
    underlyingTables: 'Tablas del CSO',
  },
  explorer: {
    title: 'Explorador de gráficos',
    intro:
      'Elige una tabla CSO PxStat, filtra por categoría y mira el gráfico. Las cifras se obtienen en vivo desde data.cso.ie.',
    customLabel: 'O carga cualquier tabla CSO PxStat por código',
    customPlaceholder: 'p. ej. FP002',
    load: 'Cargar',
    browseAll: 'Ver todas las tablas del CSO →',
    saveChart: 'Guardar gráfico como imagen',
    cso: 'CSO',
    updated: 'actualizado',
    source: 'Fuente',
    noPoints: 'No hay datos para la combinación seleccionada.',
    noTime: 'Esta tabla aún no tiene dimensión temporal — el soporte del explorador es limitado.',
    tableNotes: 'Notas de la tabla',
  },
  about: {
    title: 'Acerca de Réalachas',
    lead:
      '«Réalachas» significa {em} en irlandés. La aplicación es un pequeño experimento para convertir los datos abiertos irlandeses en algo que de verdad leerías en el autobús.',
    leadEm: 'realismo',
    whoTitle: 'Para quién',
    who: [
      'Para cualquier persona con curiosidad por la Irlanda moderna — residentes, diáspora, estudiantes.',
      'Para profesores y alumnos de secundaria de CSPE y Politics & Society.',
      'Para periodistas, gente de políticas públicas y analistas de datos que quieren un punto de entrada rápido al CSO.',
    ],
    sourcesTitle: 'De dónde vienen las cifras',
    sourceCso: '{name} — {site}. Más de 5 000 tablas en formato JSON-stat 2.0, gratuitas y sin autenticación.',
    sourceCensus: 'Datos de pequeñas áreas del {name} — {site}.',
    sourceMet: '{name} — {site}. Normales climáticas y APIs de pronóstico/observación.',
    sourceOther: 'Estadísticas energéticas de {seai}, indicadores ambientales de la {epa}, índice de privación HP de {pobal}.',
    licenceTitle: 'Licencia y atribución',
    licenceBody:
      'Todos los conjuntos de datos utilizados aquí se publican bajo {ccby} o la licencia Open Government PSI irlandesa. La atribución se muestra junto a cada gráfico y tarjeta compartible. Réalachas es un proyecto independiente y no está afiliado al CSO ni a ningún organismo estatal.',
    accuracyTitle: 'Sobre la exactitud',
    accuracyBody:
      'Cuando es posible, los gráficos se cargan en vivo desde la API de CSO PxStat para que las cifras siempre sean las más recientes. Algunos datos destacados de la página de inicio se redactan a mano a partir de comunicados del CSO — pueden tener un ciclo de retraso. Si detectas algo erróneo, abre una incidencia.',
  },
  footer: {
    aboutTitle: 'Sobre esta aplicación',
    aboutBody:
      'Réalachas saca a la luz historias desde los datos abiertos irlandeses. Todas las cifras provienen del CSO, Met Éireann, EPA, SEAI y otras fuentes oficiales — la atribución se muestra junto a cada gráfico.',
    sourcesTitle: 'Fuentes de datos',
    licenceTitle: 'Licencia',
    licenceBody:
      'Datos del CSO reutilizados bajo la licencia Creative Commons Attribution 4.0 International (CC BY 4.0). © Government of Ireland. Esta aplicación no está afiliada al CSO ni a ningún organismo estatal.',
    builtWith: 'Construido con React + Vite. Gráficos: Recharts. © {year}.',
  },
  populationStory: {
    p1: 'La población de la República en 1926 — el primer Censo del nuevo Estado — apenas llegaba a los 3 millones. Un siglo después, en el Censo 2022, ronda los ~5,15 millones: la cifra más alta desde 1851 y resultado de tres décadas de fuerte inmigración y fertilidad al alza.',
    p2: 'El gráfico de abajo muestra el total de población en cada Censo desde 1926 hasta 2022, obtenido en vivo desde CSO PxStat (tabla {code}).',
    chartCap: 'Población en cada Censo',
    chartTitle: 'República de Irlanda · 1926–2022',
    statFirst: 'Primer Censo ({year})',
    statLatest: 'Último Censo ({year})',
    statChange: 'Cambio desde el primero',
    h2Change: '¿Qué ha cambiado?',
    p3: 'La gran historia es la migración. La República tuvo emigración en cada década desde la independencia hasta los años 90; desde entonces, dominan las entradas. El Censo 2022 registra que ~20 % de los residentes habituales nacieron fuera del Estado — frente a ~17 % en 2016.',
    p4: 'El crecimiento poblacional también es desigual. El Gran Dublín (Dublin city, Fingal, South Dublin, Dún Laoghaire-Rathdown más Meath, Kildare y Wicklow) concentra la mayor parte del crecimiento, mientras varios condados rurales tuvieron poblaciones planas o en declive hasta hace poco.',
    seriesPopulation: 'Población',
  },
  languagesStory: {
    p1: 'Irlanda es oficialmente bilingüe — el irlandés es la primera lengua oficial del Estado. Pero la vida cotidiana se desarrolla en muchas más lenguas. El Censo 2022 preguntó a los encuestados por las lenguas principales habladas en casa distintas del inglés y el irlandés, y las respuestas dibujan un país mucho más plural de lo que sugiere el estereotipo nacional.',
    chartCap: 'Principales lenguas en casa que no son inglés ni irlandés',
    chartTitle: 'República de Irlanda · Censo 2022',
    seriesSpeakers: 'Hablantes en casa',
    h3Three: 'Tres cosas que conviene saber',
    li1Title: 'El polaco es el tercero.',
    li1Body:
      'Después del inglés y del irlandés, el polaco es la lengua más hablada en casa — unos 124 000 hablantes, ligeramente menos que los ~135 000 de 2011 pero muy por delante de la siguiente lengua.',
    li2Title: 'El irlandés: muy conocido, poco usado.',
    li2Body:
      '1,87 millones de personas dijeron poder hablar irlandés, pero solo 71 968 lo hablan a diario y apenas 20 261 fuera del sistema escolar.',
    li3Title: 'Una de cada cinco personas nació en el extranjero.',
    li3Body:
      'El 20 % de los residentes habituales nació fuera del Estado — frente al 17 % de 2016. Los países de nacimiento más comunes son el Reino Unido, Polonia, India y Rumanía.',
    h3Street: 'Cómo se ve esto en la calle',
    p2: 'En Dublin 8, el polaco, el portugués brasileño y el español se oyen rutinariamente junto al inglés. En el oeste de Galway y en partes de Donegal escucharás irlandés a diario. En Limerick, Mayo, Cork y el noroeste de Dublín hay comunidades crecientes que hablan hindi, malayalam y árabe en casa. El Censo 2022 capta esta instantánea — y cambia de forma notable cada cinco años.',
    languages: {
      Polish: 'Polaco',
      Romanian: 'Rumano',
      Lithuanian: 'Lituano',
      Portuguese: 'Portugués',
      Spanish: 'Español',
      Russian: 'Ruso',
      French: 'Francés',
      Arabic: 'Árabe',
      Hindi: 'Hindi',
    },
  },
  countyStory: {
    p1: 'Condado por condado, la población irlandesa no envejece de manera uniforme. La edad mediana en Fingal — el cinturón norte de Dublín — es de 35,6 años. En Roscommon es 45,6. Esa diferencia de diez años esconde mucho: dónde se mudan los jóvenes para trabajar, qué condados retienen a sus egresados y cuáles solo crecen porque llegan jubilados.',
    chartCap: 'Edad mediana y cambio de población',
    chartTitle: 'Condados seleccionados · Censos 2016 → 2022',
    seriesAge: 'Edad mediana (años)',
    seriesChange: 'Cambio de población desde 2016 (%)',
    h3Patterns: 'Tres patrones',
    li1Title: 'El cinturón del Gran Dublín fue el que más creció.',
    li1Body:
      'Meath, Kildare y Cork city crecieron más del 11 % en seis años — efecto del desbordamiento del precio de la vivienda y la inmigración continua.',
    li2Title: 'El oeste es más mayor.',
    li2Body:
      'Mayo, Leitrim y Roscommon tienen edades medianas por encima de 43 — muy por encima de la mediana estatal de 38,8.',
    li3Title: 'Incluso los condados rurales crecieron.',
    li3Body:
      'A pesar del sesgo de edad, todos los condados de la República crecieron entre 2016 y 2022 — un cambio notable respecto a la década 2008–2016, cuando varios decrecieron.',
  },
  cattleStory: {
    p1: 'Irlanda es famosamente un país de ganado: unos 7,3 millones de cabezas en un Estado de 5,15 millones de personas. Pero la proporción no es uniforme. Dublín tiene menos de 8 000 cabezas; Cavan tiene casi cuatro por cada habitante.',
    chartCap: 'Personas frente a vacas, por condado seleccionado',
    chartTitle: 'Censo 2022 + Encuesta Ganadera de Junio del CSO (AHA01)',
    seriesPeople: 'Personas',
    seriesCattle: 'Vacas',
    h3Why: 'Por qué importa',
    p2: 'El ganado vacuno representa cerca del 60 % de las emisiones agrícolas de Irlanda y un sexto del inventario total de gases de efecto invernadero del Estado. La forma del rebaño — dónde está, qué produce (carne o lácteos) y cómo cambia — aparece directamente en los datos de emisiones de la EPA y en los compromisos climáticos de la UE.',
    p3: 'El CSO publica el tamaño del rebaño cada año en la tabla {code} de PxStat. Prueba el explorador de gráficos para filtrar por condado o por tipo de ganado (vacas lecheras, vacuno de carne, ovino, porcino).',
  },
  counties: {
    Fingal: 'Fingal',
    'Dublin City': 'Dublín (ciudad)',
    'South Dublin': 'Dublín Sur',
    Meath: 'Meath',
    Kildare: 'Kildare',
    'Cork City': 'Cork (ciudad)',
    'Galway City': 'Galway (ciudad)',
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
    Dublin: 'Dublín',
  },
  storyMeta: {
    population: {
      title: 'Cómo cambió la población de Irlanda desde 1841',
      subtitle:
        'El país perdió la mitad de sus habitantes en 70 años — y solo cruzó los niveles previos a la Hambruna recientemente. Un repaso a las cifras del Censo de 1841 a 2022.',
    },
    languages: {
      title: '¿Qué lenguas habla Irlanda?',
      subtitle:
        'El inglés domina, el irlandés persiste, el polaco subió al tercer lugar. Una instantánea de los datos lingüísticos del Censo 2022 y lo que dice de la Irlanda actual.',
    },
    county: {
      title: 'Tu condado en 10 cifras',
      subtitle:
        'Edad mediana, hogares unipersonales, tasa de vacancia, hogares solo en inglés… comparativas por condado a partir del Censo 2022.',
    },
    cattle: {
      title: 'Un país de vacas',
      subtitle:
        'En Irlanda hay unas 1,4 vacas por persona — y la proporción supera 5:1 en algunos condados. Por qué el ganado eclipsa a la población en la Irlanda rural.',
    },
  },
  storyTags: {
    demographics: 'demografía',
    census: 'censo',
    language: 'lengua',
    identity: 'identidad',
    counties: 'condados',
    agriculture: 'agricultura',
    rural: 'rural',
  },
  explorerTables: {
    FY002: {
      title: 'Población en cada Censo, 1926–2022',
      description:
        'Población por grupo de edad y sexo en cada Censo desde 1926. Desplázate por los grupos de edad y mira cómo envejeció el país.',
    },
    AHA01: {
      title: 'Cifras de ganado en junio, por condado',
      description:
        'Encuesta ganadera anual de junio — vacuno, ovino, porcino, aves. Compara el oeste con el este.',
    },
    HPM05: {
      title: 'Índice de precios de vivienda residencial',
      description:
        'Índice mensual de precios de vivienda para el Estado, Dublín y el resto del país.',
    },
  },
};

export default es;
