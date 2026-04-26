// Curated set of CSO PxStat tables that work well with the chart explorer.
// Picked for: small dimensions, interpretable categories, broad appeal.

export type ExplorerTable = {
  code: string;
  title: string;
  description: string;
  // The "x-axis" dimension when visualising — usually time.
  primaryDim: string;
  // Suggested filters: pick a single category for the dim by default.
  defaultFilter?: Record<string, string>;
};

export const explorerTables: ExplorerTable[] = [
  {
    code: 'FY002',
    title: 'Population at each Census, 1926–2022',
    description:
      'Population by age group and sex at every Census from 1926. Drag through age groups and watch how the country aged.',
    primaryDim: 'TLIST(A1)',
  },
  {
    code: 'AHA01',
    title: 'Livestock numbers in June, by county',
    description:
      'Annual June livestock survey — cattle, sheep, pigs, poultry. Compare the West to the East.',
    primaryDim: 'TLIST(A1)',
  },
  {
    code: 'HPM05',
    title: 'Residential property price index',
    description:
      'Monthly index of dwelling prices for the State, Dublin and the rest of country.',
    primaryDim: 'TLIST(M1)',
  },
];
