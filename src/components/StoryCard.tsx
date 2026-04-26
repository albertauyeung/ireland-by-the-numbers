import { Link } from 'react-router-dom';
import type { Story } from '../data/stories';

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Link
      to={`/stories/${story.slug}`}
      className="card p-6 flex flex-col gap-3 hover:-translate-y-0.5 transition no-underline"
    >
      <div className="text-3xl">{story.emoji}</div>
      <div className="font-display text-xl text-ink-900 leading-snug">
        {story.title}
      </div>
      <p className="text-sm text-ink-700/85 leading-relaxed">
        {story.subtitle}
      </p>
      <div className="mt-auto flex items-center gap-2 text-xs text-ink-700/60">
        <span>{story.estReadMin} min read</span>
        <span>·</span>
        <span>{story.tags.join(' · ')}</span>
      </div>
    </Link>
  );
}
