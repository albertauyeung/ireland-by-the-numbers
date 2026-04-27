import { Link, useParams } from 'react-router-dom';
import { findStory } from '../data/stories';
import NotFound from './NotFound';
import PopulationStory from './stories/PopulationStory';
import LanguagesStory from './stories/LanguagesStory';
import CountyStory from './stories/CountyStory';
import CattleStory from './stories/CattleStory';
import { useLocale } from '../i18n/LocaleContext';
import { localizeStory } from '../i18n/stories';

export default function Story() {
  const { slug } = useParams<{ slug: string }>();
  const story = findStory(slug ?? '');
  const { t, locale } = useLocale();
  if (!story) return <NotFound />;
  const meta = localizeStory(story, locale);
  const tags = story.tags.map((tag) =>
    t(`storyTags.${tag}` as 'storyTags.census'),
  );

  return (
    <div className="container-app py-10 sm:py-14 max-w-3xl">
      <Link
        to="/stories"
        className="text-sm text-emerald_ie-700 no-underline hover:underline"
      >
        {t('stories.backAll')}
      </Link>
      <header className="mt-4 mb-8">
        <div className="text-4xl">{story.emoji}</div>
        <h1 className="font-display text-3xl sm:text-4xl text-ink-900 mt-2 leading-tight">
          {meta.title}
        </h1>
        <p className="mt-3 text-ink-700/85">{meta.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink-700/60">
          <span>
            {story.estReadMin} {t('stories.minRead')}
          </span>
          <span>·</span>
          <span>{tags.join(' · ')}</span>
        </div>
      </header>

      {slug === 'population-since-1841' && <PopulationStory />}
      {slug === 'languages-of-ireland' && <LanguagesStory />}
      {slug === 'county-by-county' && <CountyStory />}
      {slug === 'cattle-and-people' && <CattleStory />}

      <footer className="mt-12 border-t border-parchment-200 pt-6 text-sm text-ink-700/70">
        <div className="font-medium text-ink-900 mb-2">
          {t('stories.underlyingTables')}
        </div>
        <ul className="space-y-1">
          {story.tables.map((tbl) => (
            <li key={tbl.code}>
              <Link to={`/explorer?table=${tbl.code}`}>{tbl.code}</Link> —{' '}
              {tbl.label}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
