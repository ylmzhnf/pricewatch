import { TrendingDown } from "lucide-react";

const chartData = [
  { day: "Mon", value: 55 },
  { day: "Tue", value: 72 },
  { day: "Wed", value: 48 },
  { day: "Thu", value: 85 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 92 },
  { day: "Sun", value: 75 },
];

export function PriceChart() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-semibold text-slate-900">
            Price Overview
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Weekly price monitoring activity
          </p>
        </div>

        <span className="flex w-fit items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          <TrendingDown size={14} />
          Price trends
        </span>
      </div>

      <div className="mt-8 flex h-56 items-end justify-between gap-3 border-b border-slate-100 px-2">
        {chartData.map((item) => (
          <div
            key={item.day}
            className="flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <div
              className="w-full max-w-12 rounded-t-md bg-indigo-500 transition hover:bg-indigo-700"
              style={{ height: `${item.value}%` }}
              title={`${item.value}%`}
            />

            <span className="mb-2 text-xs text-slate-400">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-400">
        Illustrative data — real price analytics will be connected later.
      </p>
    </section>
  );
}