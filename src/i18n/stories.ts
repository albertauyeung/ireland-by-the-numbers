import type { Locale } from './index';
import { MESSAGES } from './index';
import type { Story } from '../data/stories';

const KEY_BY_SLUG: Record<string, 'population' | 'languages' | 'county' | 'cattle'> = {
  'population-since-1841': 'population',
  'languages-of-ireland': 'languages',
  'county-by-county': 'county',
  'cattle-and-people': 'cattle',
};

export function localizeStory(
  story: Story,
  locale: Locale,
): { title: string; subtitle: string } {
  const key = KEY_BY_SLUG[story.slug];
  if (!key) return { title: story.title, subtitle: story.subtitle };
  const meta = MESSAGES[locale].storyMeta[key] ?? MESSAGES.en.storyMeta[key];
  return { title: meta.title, subtitle: meta.subtitle };
}
