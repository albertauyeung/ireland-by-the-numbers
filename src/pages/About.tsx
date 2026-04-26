export default function About() {
  return (
    <div className="container-app py-10 sm:py-14 max-w-3xl space-y-6">
      <header>
        <h1 className="font-display text-3xl sm:text-4xl text-ink-900">
          About Réalachas
        </h1>
        <p className="mt-2 text-ink-700/80">
          “Réalachas” is Irish for <em>realism</em>. The app is a small
          experiment in turning Irish open data into something you’d actually
          read on the bus.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">Who it’s for</h2>
        <ul className="list-disc pl-5 space-y-1 text-ink-700/90">
          <li>Anyone curious about modern Ireland — residents, diaspora, students.</li>
          <li>Secondary-school CSPE and Politics &amp; Society teachers and pupils.</li>
          <li>Journalists, policy people, data folk who want a quick CSO entry point.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">Where the numbers come from</h2>
        <ul className="space-y-2 text-ink-700/90">
          <li>
            <strong>CSO PxStat</strong> —{' '}
            <a href="https://data.cso.ie" target="_blank" rel="noreferrer">
              data.cso.ie
            </a>
            . 5,000+ tables in the JSON-stat 2.0 format, free, no auth.
          </li>
          <li>
            <strong>Census 2022</strong> small-area data —{' '}
            <a
              href="https://www.cso.ie/en/statistics/population/census2022/"
              target="_blank"
              rel="noreferrer"
            >
              cso.ie
            </a>
            .
          </li>
          <li>
            <strong>Met Éireann Open Data</strong> —{' '}
            <a
              href="https://www.met.ie/about-us/specialised-services/open-data"
              target="_blank"
              rel="noreferrer"
            >
              met.ie
            </a>
            . Climate normals and forecast/observation APIs.
          </li>
          <li>
            <strong>SEAI</strong> energy statistics, <strong>EPA</strong>{' '}
            environmental indicators, <strong>Pobal</strong> HP Deprivation
            Index.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">Licence and attribution</h2>
        <p className="text-ink-700/90">
          All datasets used here are published under{' '}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC BY 4.0
          </a>{' '}
          or the Irish PSI Open Government Licence. Attribution is shown
          beside every chart and shareable card. Réalachas is an independent
          project and is not affiliated with the CSO or any state body.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">A note on accuracy</h2>
        <p className="text-ink-700/90">
          Where possible, charts are pulled live from the CSO PxStat API so the
          numbers are always the latest published figures. Some headline facts
          on the home page are written by hand from CSO releases — they may
          lag by a release cycle. If you spot something wrong, please open an
          issue.
        </p>
      </section>
    </div>
  );
}
