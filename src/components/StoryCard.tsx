import { Link } from 'react-router-dom';
import type { Story } from '../data/stories';
import { useLocale } from '../i18n/LocaleContext';
import { localizeStory } from '../i18n/stories';

export default function StoryCard({ story }: { story: Story }) {
  const { t, locale } = useLocale();
  const meta = localizeStory(story, locale);
  const tags = story.tags
    .map((tag) => t(`storyTags.${tag}` as 'storyTags.census'))
    .filter(Boolean);
  return (
    <Link
      to={`/stories/${story.slug}`}
      className="card p-6 flex flex-col gap-3 hover:-translate-y-0.5 transition no-underline"
    >
      <div className="text-3xl">{story.emoji}</div>
      <div className="font-display text-xl text-ink-900 leading-snug">
        {meta.title}
      </div>
      <p className="text-sm text-ink-700/85 leading-relaxed">{meta.subtitle}</p>
      <div className="mt-auto flex items-center gap-2 text-xs text-ink-700/60">
        <span>
          {story.estReadMin} {t('stories.minRead')}
        </span>
        <span>·</span>
        <span>{tags.join(' · ')}</span>
      </div>
    </Link>
  );
}
