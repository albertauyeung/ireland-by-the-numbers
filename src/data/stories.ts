// Story metadata for narrative explorations. Each story drives a dedicated
// page that combines prose with one or more CSO-backed charts.

export type Story = {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  estReadMin: number;
  tags: string[];
  // CSO tables referenced — surfaced as "explore the data" links.
  tables: { code: string; label: string }[];
};

export const stories: Story[] = [
  {
    slug: 'population-since-1841',
    title: 'How Ireland’s population shifted since 1841',
    subtitle:
      'The country lost half its people in 70 years — and only crossed pre-Famine levels recently. A look at Census numbers from 1841 to 2022.',
    emoji: '👥',
    estReadMin: 4,
    tags: ['demographics', 'census'],
    tables: [{ code: 'FY002', label: 'Population at each Census, 1926–2022' }],
  },
  {
    slug: 'languages-of-ireland',
    title: 'What languages does Ireland speak?',
    subtitle:
      'English dominates, Irish persists, Polish climbed to third. A snapshot of Census 2022 language data and what it tells us about modern Ireland.',
    emoji: '🗣️',
    estReadMin: 5,
    tags: ['language', 'census', 'identity'],
    tables: [
      { code: 'FY060', label: 'Daily Irish speakers by area, Census 2022' },
    ],
  },
  {
    slug: 'county-by-county',
    title: 'Your county in 10 numbers',
    subtitle:
      'Median age, share of one-person households, vacancy rate, English-only households… county comparisons drawn from Census 2022.',
    emoji: '🗺️',
    estReadMin: 6,
    tags: ['census', 'counties'],
    tables: [{ code: 'F1001', label: 'Population and area by county' }],
  },
  {
    slug: 'cattle-and-people',
    title: 'A country of cattle',
    subtitle:
      'There are roughly 1.4 cattle for every person in Ireland — and the ratio peaks above 5:1 in some counties. Why livestock dwarfs population in rural Ireland.',
    emoji: '🐄',
    estReadMin: 3,
    tags: ['agriculture', 'rural'],
    tables: [{ code: 'AHA01', label: 'Livestock by county and type' }],
  },
];

export function findStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
