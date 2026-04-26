import { useRef } from 'react';
import { Link } from 'react-router-dom';
import FactCard from '../components/FactCard';
import ShareButton from '../components/ShareButton';
import StoryCard from '../components/StoryCard';
import { todaysFact } from '../data/facts';
import { stories } from '../data/stories';

export default function Home() {
  const fact = todaysFact();
  const cardRef = useRef<HTMLDivElement>(null);
  const featured = stories.slice(0, 3);

  return (
    <div className="container-app py-10 sm:py-14 space-y-14">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[1.1fr_1fr] items-center">
        <div>
          <span className="pill mb-4">Open data · Census 2022 · Met Éireann · CSO</span>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink-900">
            Ireland, told in numbers you’ll actually remember.
          </h1>
          <p className="mt-4 text-lg text-ink-700/90 max-w-prose">
            Réalachas turns Ireland’s thousands of statistical tables into a
            daily fact, a handful of stories, and a chart explorer anyone can
            use. No PxStat headaches, no SQL — just the country, by the
            numbers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/stories" className="btn-primary">
              Explore stories
            </Link>
            <Link to="/explorer" className="btn-ghost">
              Build your own chart
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <FactCard fact={fact} ref={cardRef} />
          <div className="flex justify-end gap-2">
            {fact.table && (
              <Link
                to={`/explorer?table=${fact.table}`}
                className="btn-ghost"
              >
                See the data →
              </Link>
            )}
            <ShareButton
              targetRef={cardRef}
              filename={`realachas-${fact.id}.png`}
            />
          </div>
        </div>
      </section>

      {/* Featured stories */}
      <section>
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="font-display text-2xl text-ink-900">
              Stories worth your 5 minutes
            </h2>
            <p className="text-sm text-ink-700/70">
              Curated explorations using Census 2022 and CSO open data.
            </p>
          </div>
          <Link
            to="/stories"
            className="text-sm text-emerald_ie-700 hover:underline"
          >
            All stories →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((s) => (
            <StoryCard key={s.slug} story={s} />
          ))}
        </div>
      </section>

      {/* Three-up explainer */}
      <section className="grid gap-5 md:grid-cols-3">
        <Pitch
          icon="📚"
          title="Built for learners"
          body="Designed for CSPE, Politics & Society, and anyone curious about modern Ireland. Every chart is sourced — show your work in class or a journalism brief."
        />
        <Pitch
          icon="🔓"
          title="Pure open data"
          body="Powered by the CSO PxStat JSON-stat API, Met Éireann Open Data, EPA and SEAI. Reused under CC BY 4.0 with full attribution."
        />
        <Pitch
          icon="📈"
          title="Make your own chart"
          body="Pick a table, a category, a county. The explorer simplifies CSO PxStat queries — no JSON wrangling required."
        />
      </section>
    </div>
  );
}

function Pitch({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="card p-6">
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 font-display text-lg text-ink-900">{title}</div>
      <p className="mt-1 text-sm text-ink-700/80 leading-relaxed">{body}</p>
    </div>
  );
}
