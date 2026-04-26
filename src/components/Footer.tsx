export default function Footer() {
  return (
    <footer className="border-t border-parchment-200 bg-parchment-100">
      <div className="container-app py-8 grid gap-6 md:grid-cols-3 text-sm text-ink-700/80">
        <div>
          <div className="font-display text-base text-ink-900 mb-2">
            About this app
          </div>
          <p>
            Réalachas surfaces stories from Irish open data. All figures come
            from the CSO, Met Éireann, EPA, SEAI and other official sources —
            attribution is shown beside every chart.
          </p>
        </div>
        <div>
          <div className="font-display text-base text-ink-900 mb-2">
            Data sources
          </div>
          <ul className="space-y-1">
            <li>
              <a href="https://data.cso.ie" target="_blank" rel="noreferrer">
                CSO PxStat (data.cso.ie)
              </a>
            </li>
            <li>
              <a
                href="https://www.met.ie/about-us/specialised-services/open-data"
                target="_blank"
                rel="noreferrer"
              >
                Met Éireann Open Data
              </a>
            </li>
            <li>
              <a
                href="https://www.seai.ie/data-and-insights/seai-statistics/"
                target="_blank"
                rel="noreferrer"
              >
                SEAI Statistics
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-display text-base text-ink-900 mb-2">
            Licence
          </div>
          <p>
            CSO data reused under the Creative Commons Attribution 4.0
            International licence (CC BY 4.0). © Government of Ireland. This
            app is not affiliated with the CSO or any state body.
          </p>
        </div>
      </div>
      <div className="container-app pb-6 text-xs text-ink-700/60">
        Built with React + Vite. Charts: Recharts. © {new Date().getFullYear()}.
      </div>
    </footer>
  );
}
