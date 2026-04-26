import { Link, useParams } from 'react-router-dom';
import { findStory } from '../data/stories';
import NotFound from './NotFound';
import PopulationStory from './stories/PopulationStory';
import LanguagesStory from './stories/LanguagesStory';
import CountyStory from './stories/CountyStory';
import CattleStory from './stories/CattleStory';

export default function Story() {
  const { slug } = useParams<{ slug: string }>();
  const story = findStory(slug ?? '');
  if (!story) return <NotFound />;

  return (
    <div className="container-app py-10 sm:py-14 max-w-3xl">
      <Link
        to="/stories"
        className="text-sm text-emerald_ie-700 no-underline hover:underline"
      >
        ← All stories
      </Link>
      <header className="mt-4 mb-8">
        <div className="text-4xl">{story.emoji}</div>
        <h1 className="font-display text-3xl sm:text-4xl text-ink-900 mt-2 leading-tight">
          {story.title}
        </h1>
        <p className="mt-3 text-ink-700/85">{story.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink-700/60">
          <span>{story.estReadMin} min read</span>
          <span>·</span>
          <span>{story.tags.join(' · ')}</span>
        </div>
      </header>

      {slug === 'population-since-1841' && <PopulationStory />}
      {slug === 'languages-of-ireland' && <LanguagesStory />}
      {slug === 'county-by-county' && <CountyStory />}
      {slug === 'cattle-and-people' && <CattleStory />}

      <footer className="mt-12 border-t border-parchment-200 pt-6 text-sm text-ink-700/70">
        <div className="font-medium text-ink-900 mb-2">Underlying CSO tables</div>
        <ul className="space-y-1">
          {story.tables.map((t) => (
            <li key={t.code}>
              <Link to={`/explorer?table=${t.code}`}>{t.code}</Link> —{' '}
              {t.label}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
