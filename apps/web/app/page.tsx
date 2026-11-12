import { Package, TrendingDown, Bell, AlertCircle } from "lucide-react";
import { Sidebar } from "@/component/layout/sidebar";
import { DashboardHeader } from "@/component/layout/dashboard-header";
import { StatCard } from "@/component/dashboard/stat-card";
import { PriceChart } from "@/component/dashboard/price-chart";
import { RecentProducts } from "@/component/dashboard/recent-products";

const stats = [
  {
    title: "Tracked Products",
    value: "24",
    description: "Products currently monitored",
    icon: Package,
    iconColor: "text-indigo-600",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Price Drops",
    value: "08",
    description: "Price decreases detected",
    icon: TrendingDown,
    iconColor: "text-emerald-600",
    iconBackground: "bg-emerald-50",
  },
  {
    title: "Active Alerts",
    value: "12",
    description: "Alerts currently enabled",
    icon: Bell,
    iconColor: "text-amber-600",
    iconBackground: "bg-amber-50",
  },
  {
    title: "Out of Stock",
    value: "03",
    description: "Products unavailable",
    icon: AlertCircle,
    iconColor: "text-red-600",
    iconBackground: "bg-red-50",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <DashboardHeader />

        <main className="mx-auto max-w-7xl space-y-8 p-5 sm:p-8">
          <section>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  Overview
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Track your products and monitor price changes.
                </p>
              </div>

              <button
                type="button"
                disabled
                className="w-fit cursor-not-allowed rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white opacity-70"
              >
                + Add Product
              </button>
            </div>
          </section>

          <section
            aria-label="Monitoring statistics"
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </section>

          <section className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <PriceChart />
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Monitoring Summary
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Current monitoring status
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Active products</span>

                    <span className="font-semibold text-slate-900">24</span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-4/5 rounded-full bg-indigo-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Price drops</span>

                    <span className="font-semibold text-slate-900">08</span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-1/3 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Out of stock</span>

                    <span className="font-semibold text-slate-900">03</span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-1/6 rounded-full bg-red-500" />
                  </div>
                </div>
              </div>

              <p className="mt-8 text-xs text-slate-400">
                Illustrative dashboard data.
              </p>
            </div>
          </section>

          <RecentProducts />

          <footer className="border-t border-slate-200 py-5 text-center text-xs text-slate-400">
            PriceWatch — Product Price Monitoring Platform
          </footer>
        </main>
      </div>
    </div>
  );
}
