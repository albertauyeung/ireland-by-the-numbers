import { useRef } from 'react';
import { Link } from 'react-router-dom';
import FactCard from '../components/FactCard';
import ShareButton from '../components/ShareButton';
import StoryCard from '../components/StoryCard';
import { todaysFact } from '../data/facts';
import { stories } from '../data/stories';
import { useLocale } from '../i18n/LocaleContext';
import { localizeFact } from '../i18n/facts';

export default function Home() {
  const { t, locale } = useLocale();
  const fact = localizeFact(todaysFact(), locale);
  const cardRef = useRef<HTMLDivElement>(null);
  const featured = stories.slice(0, 3);

  return (
    <div className="container-app py-10 sm:py-14 space-y-14">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[1.1fr_1fr] items-center">
        <div>
          <span className="pill mb-4">{t('home.pill')}</span>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink-900">
            {t('home.headline')}
          </h1>
          <p className="mt-4 text-lg text-ink-700/90 max-w-prose">
            {t('home.intro')}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/stories" className="btn-primary">
              {t('home.cta_stories')}
            </Link>
            <Link to="/explorer" className="btn-ghost">
              {t('home.cta_explorer')}
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
                {t('home.seeData')}
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
              {t('home.sectionStoriesTitle')}
            </h2>
            <p className="text-sm text-ink-700/70">
              {t('home.sectionStoriesSub')}
            </p>
          </div>
          <Link
            to="/stories"
            className="text-sm text-emerald_ie-700 hover:underline"
          >
            {t('home.allStories')}
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
          title={t('home.pitchLearnersTitle')}
          body={t('home.pitchLearnersBody')}
        />
        <Pitch
          icon="🔓"
          title={t('home.pitchOpenTitle')}
          body={t('home.pitchOpenBody')}
        />
        <Pitch
          icon="📈"
          title={t('home.pitchExplorerTitle')}
          body={t('home.pitchExplorerBody')}
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
