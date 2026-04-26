import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

const palette = ['#14543D', '#D88E1F', '#3F8C5F', '#B26C0E', '#0E3F2D'];

type Series = { key: string; label: string };

type Props = {
  data: Array<Record<string, string | number | null>>;
  xKey: string;
  series: Series[];
  type?: 'line' | 'bar';
  height?: number;
  yLabel?: string;
};

export default function StatChart({
  data,
  xKey,
  series,
  type = 'line',
  height = 320,
  yLabel,
}: Props) {
  const fmt = (v: number) =>
    Math.abs(v) >= 1_000_000
      ? `${(v / 1_000_000).toFixed(1)}m`
      : Math.abs(v) >= 1_000
        ? `${(v / 1_000).toFixed(0)}k`
        : v.toString();

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {type === 'line' ? (
          <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 8 }}>
            <CartesianGrid stroke="#E8DBB8" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey={xKey} stroke="#6B6B65" tick={{ fontSize: 12 }} />
            <YAxis
              stroke="#6B6B65"
              tick={{ fontSize: 12 }}
              tickFormatter={fmt}
              label={
                yLabel
                  ? {
                      value: yLabel,
                      angle: -90,
                      position: 'insideLeft',
                      style: { fontSize: 11, fill: '#6B6B65' },
                    }
                  : undefined
              }
            />
            <Tooltip
              contentStyle={{
                background: '#FDFBF6',
                border: '1px solid #E8DBB8',
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v) =>
                typeof v === 'number' ? v.toLocaleString('en-IE') : String(v)
              }
            />
            {series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
            {series.map((s, i) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={palette[i % palette.length]}
                strokeWidth={2.5}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            ))}
          </LineChart>
        ) : (
          <BarChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 8 }}>
            <CartesianGrid stroke="#E8DBB8" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey={xKey} stroke="#6B6B65" tick={{ fontSize: 12 }} />
            <YAxis stroke="#6B6B65" tick={{ fontSize: 12 }} tickFormatter={fmt} />
            <Tooltip
              contentStyle={{
                background: '#FDFBF6',
                border: '1px solid #E8DBB8',
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v) =>
                typeof v === 'number' ? v.toLocaleString('en-IE') : String(v)
              }
            />
            {series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
            {series.map((s, i) => (
              <Bar
                key={s.key}
                dataKey={s.key}
                name={s.label}
                fill={palette[i % palette.length]}
                radius={[6, 6, 0, 0]}
              />
            ))}
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
