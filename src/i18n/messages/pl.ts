import type en from './en';

const pl: typeof en = {
  brand: {
    name: 'Réalachas',
    tagline: 'Irlandia · w liczbach',
  },
  nav: {
    today: 'Dziś',
    stories: 'Historie',
    explorer: 'Eksplorator',
    about: 'O projekcie',
    languageMenu: 'Język',
  },
  share: {
    save: 'Zapisz jako obraz',
    rendering: 'Generowanie…',
    shareChart: 'Udostępnij ten wykres',
  },
  loading: {
    default: 'Wczytywanie danych…',
    fetching: 'Pobieranie {code} z CSO PxStat…',
    errorTitle: 'Nie udało się wczytać danych',
    errorFallback: 'Coś poszło nie tak podczas pobierania danych.',
  },
  notFound: {
    title: 'Tá brón orainn — nie znaleziono.',
    body: 'Wygląda na to, że ta strona nie istnieje.',
    back: 'Wróć na stronę główną',
  },
  home: {
    pill: 'Otwarte dane · Spis 2022 · Met Éireann · CSO',
    headline: 'Irlandia opowiedziana liczbami, które naprawdę zapamiętasz.',
    intro:
      'Réalachas zamienia tysiące irlandzkich tabel statystycznych w fakt dnia, kilka historii i eksplorator wykresów dla każdego. Bez męki z PxStat, bez SQL — tylko kraj w liczbach.',
    cta_stories: 'Czytaj historie',
    cta_explorer: 'Zbuduj własny wykres',
    seeData: 'Zobacz dane →',
    sectionStoriesTitle: 'Historie warte 5 minut',
    sectionStoriesSub: 'Wybrane analizy oparte na Spisie 2022 i otwartych danych CSO.',
    allStories: 'Wszystkie historie →',
    pitchLearnersTitle: 'Stworzone do nauki',
    pitchLearnersBody:
      'Zaprojektowane dla CSPE, Politics & Society oraz każdego, kto interesuje się współczesną Irlandią. Każdy wykres ma źródło — pokaż swoją pracę w klasie lub w artykule.',
    pitchOpenTitle: 'W 100% otwarte dane',
    pitchOpenBody:
      'Napędzane przez API JSON-stat CSO PxStat, Met Éireann Open Data, EPA i SEAI. Wykorzystywane na licencji CC BY 4.0 z pełnym przypisaniem.',
    pitchExplorerTitle: 'Stwórz własny wykres',
    pitchExplorerBody:
      'Wybierz tabelę, kategorię, hrabstwo. Eksplorator upraszcza zapytania CSO PxStat — bez grzebania w JSON.',
  },
  fact: {
    label: 'Fakt dnia',
    sourceLabel: 'Źródło',
  },
  stories: {
    title: 'Historie z irlandzkich danych',
    intro:
      'Krótkie, oparte na wykresach analizy, które przedstawiają Spis 2022 i liczby CSO w prostym języku.',
    minRead: 'min czytania',
    backAll: '← Wszystkie historie',
    underlyingTables: 'Tabele CSO',
  },
  explorer: {
    title: 'Eksplorator wykresów',
    intro:
      'Wybierz tabelę CSO PxStat, przefiltruj kategorię i zobacz wykres. Liczby pobierane są na żywo z data.cso.ie.',
    customLabel: 'Albo wczytaj dowolną tabelę CSO PxStat po kodzie',
    customPlaceholder: 'np. FP002',
    load: 'Wczytaj',
    browseAll: 'Przeglądaj wszystkie tabele CSO →',
    saveChart: 'Zapisz wykres jako obraz',
    cso: 'CSO',
    updated: 'aktualizacja',
    source: 'Źródło',
    noPoints: 'Brak danych dla wybranej kombinacji.',
    noTime: 'Ta tabela nie ma jeszcze wymiaru czasowego — obsługa eksploratora jest ograniczona.',
    tableNotes: 'Uwagi do tabeli',
  },
  about: {
    title: 'O Réalachas',
    lead:
      '„Réalachas” po irlandzku znaczy {em}. Aplikacja jest niewielkim eksperymentem zamieniającym irlandzkie otwarte dane w coś, co naprawdę chciałbyś przeczytać w autobusie.',
    leadEm: 'realizm',
    whoTitle: 'Dla kogo',
    who: [
      'Dla każdego ciekawego współczesnej Irlandii — mieszkańców, diaspory, studentów.',
      'Dla nauczycieli i uczniów CSPE oraz Politics & Society w szkołach średnich.',
      'Dla dziennikarzy, decydentów i analityków danych szukających szybkiego wejścia do CSO.',
    ],
    sourcesTitle: 'Skąd liczby',
    sourceCso: '{name} — {site}. Ponad 5 000 tabel w formacie JSON-stat 2.0, za darmo, bez logowania.',
    sourceCensus: 'Dane małych obszarów {name} — {site}.',
    sourceMet: '{name} — {site}. Normy klimatyczne i API prognoz/obserwacji.',
    sourceOther: 'Statystyki energetyczne {seai}, wskaźniki środowiskowe {epa}, indeks deprywacji HP {pobal}.',
    licenceTitle: 'Licencja i przypisanie',
    licenceBody:
      'Wszystkie zbiory danych użyte tutaj są publikowane na licencji {ccby} lub irlandzkiej Open Government Licence (PSI). Przypisanie wyświetlane jest obok każdego wykresu i karty do udostępnienia. Réalachas to niezależny projekt, niezwiązany z CSO ani żadną instytucją państwową.',
    accuracyTitle: 'O dokładności',
    accuracyBody:
      'Tam gdzie to możliwe, wykresy pobierane są na żywo z API CSO PxStat, więc liczby są zawsze najświeższe. Niektóre fakty na stronie głównej są pisane ręcznie z publikacji CSO — mogą być opóźnione o jeden cykl. Jeśli zauważysz błąd, zgłoś go.',
  },
  footer: {
    aboutTitle: 'O aplikacji',
    aboutBody:
      'Réalachas pokazuje historie z irlandzkich otwartych danych. Wszystkie liczby pochodzą z CSO, Met Éireann, EPA, SEAI i innych oficjalnych źródeł — przypisanie jest widoczne obok każdego wykresu.',
    sourcesTitle: 'Źródła danych',
    licenceTitle: 'Licencja',
    licenceBody:
      'Dane CSO wykorzystywane na licencji Creative Commons Attribution 4.0 International (CC BY 4.0). © Government of Ireland. Aplikacja nie jest powiązana z CSO ani żadną instytucją państwową.',
    builtWith: 'Zbudowane w React + Vite. Wykresy: Recharts. © {year}.',
  },
  populationStory: {
    p1: 'Populacja Republiki w 1926 roku — pierwszym spisie nowego państwa — wynosiła niespełna 3 miliony. Sto lat później, w Spisie 2022, sięga ~5,15 miliona: to najwyższa liczba od 1851 roku, efekt trzech dekad silnej imigracji i rosnącej dzietności.',
    p2: 'Wykres poniżej pokazuje całkowitą populację z każdego spisu od 1926 do 2022 roku, pobraną na żywo z CSO PxStat (tabela {code}).',
    chartCap: 'Populacja przy każdym spisie',
    chartTitle: 'Republika Irlandii · 1926–2022',
    statFirst: 'Pierwszy spis ({year})',
    statLatest: 'Ostatni spis ({year})',
    statChange: 'Zmiana od pierwszego',
    h2Change: 'Co się zmieniło?',
    p3: 'Główna historia to migracja. Republika doświadczała emigracji w każdej dekadzie od niepodległości aż do lat 90.; od tego czasu dominują napływy. Spis 2022 podaje, że ~20% stałych mieszkańców urodziło się poza granicami państwa — w porównaniu z ~17% w 2016.',
    p4: 'Wzrost populacji jest też nierównomiernie rozłożony. Wielki Dublin (Dublin city, Fingal, South Dublin, Dún Laoghaire-Rathdown plus Meath, Kildare i Wicklow) odpowiada za większość wzrostu, podczas gdy kilka wiejskich hrabstw miało stagnację lub spadek populacji aż do niedawna.',
    seriesPopulation: 'Populacja',
  },
  languagesStory: {
    p1: 'Irlandia jest oficjalnie dwujęzyczna — irlandzki to pierwszy język urzędowy państwa. Ale codzienność toczy się w wielu więcej językach. Spis 2022 pytał respondentów o główne języki używane w domu inne niż angielski i irlandzki, a odpowiedzi rysują kraj o wiele bardziej zróżnicowany niż sugeruje narodowy stereotyp.',
    chartCap: 'Najczęstsze domowe języki inne niż angielski/irlandzki',
    chartTitle: 'Republika Irlandii · Spis 2022',
    seriesSpeakers: 'Używający w domu',
    h3Three: 'Trzy rzeczy, które warto wiedzieć',
    li1Title: 'Polski jest na trzecim miejscu.',
    li1Body:
      'Po angielskim i irlandzkim polski jest najczęściej używanym językiem domowym — około 124 000 osób, nieco mniej niż ~135 000 w 2011, ale wciąż znacznie więcej niż następny język.',
    li2Title: 'Irlandzki: szeroko znany, wąsko używany.',
    li2Body:
      '1,87 miliona osób stwierdziło, że potrafi mówić po irlandzku, ale tylko 71 968 mówi nim codziennie, a zaledwie 20 261 z nich poza systemem szkolnym.',
    li3Title: 'Co piąta osoba urodziła się za granicą.',
    li3Body:
      '20% stałych mieszkańców urodziło się poza granicami państwa — wzrost z 17% w 2016. Najczęstsze kraje urodzenia to Wielka Brytania, Polska, Indie i Rumunia.',
    h3Street: 'Jak to wygląda na ulicy',
    p2: 'W Dublin 8 obok angielskiego rutynowo słychać polski, brazylijski portugalski i hiszpański. Na zachodzie Galway i w częściach Donegal usłyszysz codzienny irlandzki. W Limerick, Mayo, Cork i na północnym zachodzie Dublina rosną społeczności mówiące w domu w hindi, malajalam i arabskim. Spis 2022 uchwycił tę migawkę — i wyraźnie zmienia się ona co pięć lat.',
    languages: {
      Polish: 'polski',
      Romanian: 'rumuński',
      Lithuanian: 'litewski',
      Portuguese: 'portugalski',
      Spanish: 'hiszpański',
      Russian: 'rosyjski',
      French: 'francuski',
      Arabic: 'arabski',
      Hindi: 'hindi',
    },
  },
  countyStory: {
    p1: 'Hrabstwo po hrabstwie populacja Irlandii nie starzeje się równomiernie. Mediana wieku w Fingal — północnym pasie podmiejskim Dublina — wynosi 35,6 lat. W Roscommon to 45,6. Te dziesięć lat różnicy kryje wiele: gdzie młodzi dorośli wyjeżdżają do pracy, które hrabstwa zatrzymują absolwentów szkół, a które rosną tylko dlatego, że osiedlają się w nich emeryci.',
    chartCap: 'Mediana wieku i zmiana populacji',
    chartTitle: 'Wybrane hrabstwa · Spisy 2016 → 2022',
    seriesAge: 'Mediana wieku (lata)',
    seriesChange: 'Zmiana populacji od 2016 (%)',
    h3Patterns: 'Trzy wzorce',
    li1Title: 'Pas Wielkiego Dublina rósł najszybciej.',
    li1Body:
      'Meath, Kildare i Cork city wzrosły o ponad 11% w sześć lat — efekt przelewu cen mieszkań i utrzymującej się imigracji.',
    li2Title: 'Zachód jest starszy.',
    li2Body:
      'Mayo, Leitrim i Roscommon mają mediany wieku powyżej 43 — znacznie powyżej krajowej mediany 38,8.',
    li3Title: 'Nawet wiejskie hrabstwa rosły.',
    li3Body:
      'Mimo nierówności wiekowej każde hrabstwo Republiki wzrosło między 2016 a 2022 — wyraźna zmiana w porównaniu z dekadą 2008–2016, gdy kilka się kurczyło.',
  },
  cattleStory: {
    p1: 'Irlandia słynie z bydła: około 7,3 miliona sztuk w państwie liczącym 5,15 miliona ludzi. Ale proporcja nie jest jednolita. Dublin ma mniej niż 8 000 sztuk bydła; Cavan ma prawie cztery sztuki na mieszkańca.',
    chartCap: 'Ludzie kontra bydło, według wybranego hrabstwa',
    chartTitle: 'Spis 2022 + czerwcowe badanie pogłowia CSO (AHA01)',
    seriesPeople: 'Ludzie',
    seriesCattle: 'Bydło',
    h3Why: 'Dlaczego to ważne',
    p2: 'Bydło odpowiada za około 60% emisji rolniczych Irlandii i jedną szóstą całego krajowego inwentarza gazów cieplarnianych. Kształt stada — gdzie się znajduje, co produkuje (mięso czy mleko) i jak się zmienia — pokazuje się bezpośrednio w danych emisyjnych EPA i w zobowiązaniach klimatycznych UE.',
    p3: 'CSO co roku publikuje wielkość stada w tabeli {code} na PxStat. Wypróbuj eksplorator wykresów, by przefiltrować po hrabstwie lub typie zwierząt (krowy mleczne, bydło mięsne, owce, świnie).',
  },
  counties: {
    Fingal: 'Fingal',
    'Dublin City': 'Dublin (miasto)',
    'South Dublin': 'Dublin Południowy',
    Meath: 'Meath',
    Kildare: 'Kildare',
    'Cork City': 'Cork (miasto)',
    'Galway City': 'Galway (miasto)',
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
      title: 'Jak zmieniała się populacja Irlandii od 1841 roku',
      subtitle:
        'Kraj stracił połowę mieszkańców w 70 lat — i dopiero niedawno przekroczył poziom sprzed Wielkiego Głodu. Spojrzenie na dane spisowe od 1841 do 2022.',
    },
    languages: {
      title: 'W jakich językach mówi Irlandia?',
      subtitle:
        'Angielski dominuje, irlandzki trwa, polski wskoczył na trzecie miejsce. Migawka z danych językowych Spisu 2022 i co mówi nam o współczesnej Irlandii.',
    },
    county: {
      title: 'Twoje hrabstwo w 10 liczbach',
      subtitle:
        'Mediana wieku, udział gospodarstw jednoosobowych, pustostany, gospodarstwa wyłącznie anglojęzyczne… porównania hrabstw na podstawie Spisu 2022.',
    },
    cattle: {
      title: 'Kraj bydła',
      subtitle:
        'W Irlandii przypada około 1,4 sztuki bydła na osobę — a w niektórych hrabstwach wskaźnik przekracza 5:1. Dlaczego inwentarz przyćmiewa populację na irlandzkiej wsi.',
    },
  },
  storyTags: {
    demographics: 'demografia',
    census: 'spis',
    language: 'język',
    identity: 'tożsamość',
    counties: 'hrabstwa',
    agriculture: 'rolnictwo',
    rural: 'wieś',
  },
  explorerTables: {
    FY002: {
      title: 'Populacja w każdym spisie, 1926–2022',
      description:
        'Populacja według grupy wiekowej i płci w każdym spisie od 1926 roku. Przeglądaj grupy wiekowe i obserwuj starzenie się kraju.',
    },
    AHA01: {
      title: 'Pogłowie zwierząt w czerwcu, według hrabstwa',
      description:
        'Coroczne czerwcowe badanie pogłowia — bydło, owce, świnie, drób. Porównaj zachód ze wschodem.',
    },
    HPM05: {
      title: 'Indeks cen mieszkań',
      description:
        'Miesięczny indeks cen mieszkań dla państwa, Dublina i reszty kraju.',
    },
  },
};

export default pl;
