import { Bell, Search } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Dashboard
        </h2>
        <p className="hidden text-sm text-slate-500 sm:block">
          Welcome back! Here's your monitoring overview.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Search"
          className="hidden rounded-lg border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50 sm:block"
        >
          <Search size={18} />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50"
        >
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
          PW
        </div>
      </div>
    </header>
  );
}