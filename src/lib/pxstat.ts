// CSO PxStat JSON-stat 2.0 client.
// Docs: https://data.cso.ie / https://json-stat.org/

const BASE =
  'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset';

export type JsonStat = {
  class: 'dataset';
  label: string;
  updated: string;
  id: string[];
  size: number[];
  dimension: Record<string, JsonStatDimension>;
  value: Array<number | null>;
  note?: string[];
  href?: string;
};

export type JsonStatDimension = {
  label: string;
  category: {
    index: string[];
    label: Record<string, string>;
    unit?: Record<string, { decimals?: number; label?: string }>;
  };
};

export type DataPoint = {
  // map of dimension id -> chosen category code
  keys: Record<string, string>;
  // map of dimension id -> human label for the chosen category
  labels: Record<string, string>;
  value: number | null;
};

const cache = new Map<string, Promise<JsonStat>>();

export function fetchTable(code: string): Promise<JsonStat> {
  const url = `${BASE}/${encodeURIComponent(code)}/JSON-stat/2.0/en`;
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url)
        .then((r) => {
          if (!r.ok) throw new Error(`CSO ${code}: HTTP ${r.status}`);
          return r.json() as Promise<JsonStat>;
        })
        .catch((err) => {
          cache.delete(url);
          throw err;
        }),
    );
  }
  return cache.get(url)!;
}

// Walk the value array and yield every cell with its dimension keys.
export function iterate(ds: JsonStat): DataPoint[] {
  const out: DataPoint[] = [];
  const dimIds = ds.id;
  const sizes = ds.size;
  const indices = dimIds.map((d) => ds.dimension[d].category.index);
  const labels = dimIds.map((d) => ds.dimension[d].category.label);
  const total = sizes.reduce((a, b) => a * b, 1);
  for (let i = 0; i < total; i++) {
    const keys: Record<string, string> = {};
    const lbls: Record<string, string> = {};
    let rem = i;
    for (let d = dimIds.length - 1; d >= 0; d--) {
      const sz = sizes[d];
      const idx = rem % sz;
      rem = Math.floor(rem / sz);
      const code = indices[d][idx];
      keys[dimIds[d]] = code;
      lbls[dimIds[d]] = labels[d][code] ?? code;
    }
    out.push({ keys, labels: lbls, value: ds.value[i] ?? null });
  }
  return out;
}

// Filter helper. Pass partial dim->code map; returns matching cells.
export function slice(
  ds: JsonStat,
  filter: Record<string, string | string[]>,
): DataPoint[] {
  return iterate(ds).filter((row) =>
    Object.entries(filter).every(([dim, want]) => {
      const got = row.keys[dim];
      return Array.isArray(want) ? want.includes(got) : got === want;
    }),
  );
}

export function dimCodes(ds: JsonStat, dim: string): string[] {
  return ds.dimension[dim]?.category.index ?? [];
}
export function dimLabel(
  ds: JsonStat,
  dim: string,
  code: string,
): string {
  return ds.dimension[dim]?.category.label[code] ?? code;
}

export function fmtNumber(n: number | null | undefined, decimals = 0): string {
  if (n == null || Number.isNaN(n)) return '—';
  return n.toLocaleString('en-IE', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}

export function fmtCompact(n: number | null | undefined): string {
  if (n == null || Number.isNaN(n)) return '—';
  if (Math.abs(n) >= 1_000_000)
    return `${(n / 1_000_000).toFixed(2).replace(/\.?0+$/, '')}m`;
  if (Math.abs(n) >= 10_000)
    return `${(n / 1_000).toFixed(0)}k`;
  if (Math.abs(n) >= 1_000)
    return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}k`;
  return n.toLocaleString('en-IE');
}
