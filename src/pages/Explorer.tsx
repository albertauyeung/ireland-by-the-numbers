import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import StatChart from '../components/StatChart';
import ShareButton from '../components/ShareButton';
import { Loading, ErrorBox } from '../components/Loading';
import { useTable } from '../lib/useTable';
import { dimCodes, dimLabel, slice, type JsonStat } from '../lib/pxstat';
import { explorerTables } from '../data/explorerTables';
import { useLocale } from '../i18n/LocaleContext';

export default function Explorer() {
  const [params, setParams] = useSearchParams();
  const [customCode, setCustomCode] = useState('');
  const code = params.get('table') ?? 'FY002';
  const state = useTable(code);
  const cardRef = useRef<HTMLDivElement>(null);
  const { t, m } = useLocale();

  const setCode = (next: string) => {
    setParams({ table: next });
  };

  const localTable = (c: string) =>
    (m.explorerTables as Record<string, { title: string; description: string }>)[c];

  return (
    <div className="container-app py-10 sm:py-14 space-y-8">
      <header className="max-w-3xl">
        <h1 className="font-display text-3xl sm:text-4xl text-ink-900">
          {t('explorer.title')}
        </h1>
        <p className="mt-2 text-ink-700/80">{t('explorer.intro')}</p>
      </header>

      <section className="grid gap-3 md:grid-cols-3">
        {explorerTables.map((tbl) => {
          const local = localTable(tbl.code);
          return (
            <button
              key={tbl.code}
              onClick={() => setCode(tbl.code)}
              className={`card p-5 text-left transition hover:-translate-y-0.5 ${
                tbl.code === code
                  ? 'ring-2 ring-emerald_ie-700 bg-emerald_ie-50'
                  : ''
              }`}
            >
              <div className="font-mono text-[11px] text-ink-700/60">
                {tbl.code}
              </div>
              <div className="font-display text-base text-ink-900 mt-1 leading-snug">
                {local?.title ?? tbl.title}
              </div>
              <p className="text-sm text-ink-700/70 mt-1.5">
                {local?.description ?? tbl.description}
              </p>
            </button>
          );
        })}
      </section>

      <section className="card p-4 flex flex-wrap items-center gap-3">
        <label className="text-sm text-ink-700/80">{t('explorer.customLabel')}</label>
        <input
          type="text"
          placeholder={t('explorer.customPlaceholder')}
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value.toUpperCase())}
          className="rounded-md border border-parchment-300 px-3 py-1.5 text-sm font-mono w-32"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && customCode.trim()) setCode(customCode.trim());
          }}
        />
        <button
          className="btn-primary"
          onClick={() => customCode.trim() && setCode(customCode.trim())}
        >
          {t('explorer.load')}
        </button>
        <a
          href="https://data.cso.ie"
          target="_blank"
          rel="noreferrer"
          className="text-sm ml-auto"
        >
          {t('explorer.browseAll')}
        </a>
      </section>

      <section ref={cardRef} className="card p-6 space-y-5">
        {state.status === 'loading' && (
          <Loading label={t('loading.fetching').replace('{code}', code)} />
        )}
        {state.status === 'error' && <ErrorBox error={state.error} />}
        {state.status === 'ready' && (
          <ExplorerView ds={state.data} code={code} />
        )}
      </section>

      {state.status === 'ready' && (
        <div className="flex justify-end">
          <ShareButton
            targetRef={cardRef}
            filename={`realachas-${code}.png`}
            label={t('explorer.saveChart')}
          />
        </div>
      )}
    </div>
  );
}

function isTimeDim(id: string): boolean {
  return id.startsWith('TLIST');
}

function isTotalCode(label: string): boolean {
  const l = label.toLowerCase();
  return /^all|total|state|both sexes|all ages/.test(l);
}

function ExplorerView({ ds, code }: { ds: JsonStat; code: string }) {
  const { t } = useLocale();
  const dimIds = ds.id;
  const timeDim = dimIds.find(isTimeDim);
  const filterDims = dimIds.filter((d) => d !== timeDim);

  const defaults = useMemo(() => {
    const out: Record<string, string> = {};
    for (const d of filterDims) {
      const codes = dimCodes(ds, d);
      const first =
        codes.find((c) => isTotalCode(dimLabel(ds, d, c))) ?? codes[0];
      out[d] = first;
    }
    return out;
  }, [ds]); // eslint-disable-line react-hooks/exhaustive-deps

  const [filters, setFilters] = useState<Record<string, string>>(defaults);
  useEffect(() => {
    setFilters(defaults);
  }, [defaults, code]);

  const rows = useMemo(() => {
    if (!timeDim) return [];
    const cells = slice(ds, filters);
    return cells
      .map((c) => ({
        x: c.labels[timeDim],
        value: c.value,
      }))
      .sort((a, b) => String(a.x).localeCompare(String(b.x)));
  }, [ds, filters, timeDim]);

  const chartType: 'line' | 'bar' = rows.length > 30 ? 'line' : 'bar';
  const updated = ds.updated?.split('T')[0] ?? '';
  const note = ds.note?.[0];

  return (
    <>
      <div className="flex flex-wrap items-start gap-x-6 gap-y-2 justify-between">
        <div>
          <div className="font-mono text-[11px] text-ink-700/60">
            {t('explorer.cso')} · {code} · {t('explorer.updated')} {updated}
          </div>
          <div className="font-display text-xl text-ink-900 mt-1 max-w-prose">
            {ds.label}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {filterDims.map((d) => (
            <DimSelect
              key={d}
              ds={ds}
              dim={d}
              value={filters[d]}
              onChange={(v) => setFilters((f) => ({ ...f, [d]: v }))}
            />
          ))}
        </div>
      </div>

      {timeDim && rows.length > 0 ? (
        <StatChart
          data={rows}
          xKey="x"
          series={[{ key: 'value', label: 'Value' }]}
          type={chartType}
          height={360}
        />
      ) : (
        <div className="text-sm text-ink-700/70">
          {timeDim ? t('explorer.noPoints') : t('explorer.noTime')}
        </div>
      )}

      <div className="text-[11px] font-mono text-ink-700/60">
        {t('explorer.source')}: CSO · {code} · CC BY 4.0 ·{' '}
        <a
          href={`https://data.cso.ie/table/${code}`}
          target="_blank"
          rel="noreferrer"
        >
          data.cso.ie/table/{code}
        </a>
      </div>
      {note && (
        <details className="text-xs text-ink-700/70">
          <summary className="cursor-pointer">{t('explorer.tableNotes')}</summary>
          <p className="mt-2 whitespace-pre-line">{note}</p>
        </details>
      )}
    </>
  );
}

function DimSelect({
  ds,
  dim,
  value,
  onChange,
}: {
  ds: JsonStat;
  dim: string;
  value: string | undefined;
  onChange: (v: string) => void;
}) {
  const codes = dimCodes(ds, dim);
  const label = ds.dimension[dim].label;
  if (codes.length <= 1) return null;
  return (
    <label className="text-sm">
      <div className="text-[11px] uppercase tracking-wider text-ink-700/60 mb-1">
        {label}
      </div>
      <select
        value={value ?? codes[0]}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-parchment-300 bg-white px-2.5 py-1.5 text-sm max-w-[18rem]"
      >
        {codes.map((c) => (
          <option key={c} value={c}>
            {dimLabel(ds, dim, c)}
          </option>
        ))}
      </select>
    </label>
  );
}
