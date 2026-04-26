import StoryCard from '../components/StoryCard';
import { stories } from '../data/stories';

export default function Stories() {
  return (
    <div className="container-app py-10 sm:py-14 space-y-8">
      <header>
        <h1 className="font-display text-3xl sm:text-4xl text-ink-900">
          Stories from Ireland’s data
        </h1>
        <p className="mt-2 text-ink-700/80 max-w-prose">
          Short, chart-led explorations that put Census 2022 and CSO numbers
          in plain English.
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <StoryCard key={s.slug} story={s} />
        ))}
      </div>
    </div>
  );
}
