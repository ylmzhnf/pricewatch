import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor,
  iconBackground,
}: StatCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className={`rounded-lg p-2 ${iconBackground}`}>
          <Icon size={19} className={iconColor} />
        </div>
      </div>

      <p className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        {description}
      </p>
    </article>
  );
}