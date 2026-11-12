import {
  LayoutDashboard,
  Package,
  Bell,
  ChartNoAxesCombined,
  Settings,
  Search,
  ChevronDown,
} from "lucide-react";

const navigation = [
  {
    title: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
        active: true,
      },
      {
        label: "Products",
        href: "/products",
        icon: Package,
        active: false,
      },
      {
        label: "Price Alerts",
        href: "/alerts",
        icon: Bell,
        active: false,
      },
      {
        label: "Reports",
        href: "/reports",
        icon: ChartNoAxesCombined,
        active: false,
      },
    ],
  },
];

export function Sidebar() {
  return (
    <>
      <aside className="hidden min-h-screen w-64 shrink-0 flex-col bg-gray-950 text-white lg:flex">
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 font-bold">
            P
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">
              PriceWatch
            </h1>
            <p className="text-xs text-gray-400">
              Price Intelligence
            </p>
          </div>
        </div>

        <div className="px-4 py-6">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-gray-400">
            <Search size={16} />
            <span>Search...</span>
            <span className="ml-auto rounded border border-white/10 px-1.5 py-0.5 text-xs">
              /
            </span>
          </div>
        </div>

        <nav className="flex-1 px-4">
          {navigation.map((group) => (
            <div key={group.title} className="mb-8">
              <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-gray-500">
                {group.title}
              </p>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                        item.active
                          ? "bg-indigo-600 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <a
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <Settings size={18} />
            Settings
          </a>

          <div className="mt-4 flex items-center gap-3 rounded-lg bg-white/5 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold">
              PW
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">
                Demo User
              </p>
              <p className="text-xs text-gray-400">
                Free Plan
              </p>
            </div>

            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </aside>

      <nav className="flex gap-2 overflow-x-auto border-b border-slate-200 bg-gray-950 px-4 py-3 text-sm text-white lg:hidden">
        <a href="/" className="rounded-lg bg-indigo-600 px-3 py-2">
          Dashboard
        </a>
        <a href="/products" className="rounded-lg px-3 py-2 text-gray-300">
          Products
        </a>
        <a href="/alerts" className="rounded-lg px-3 py-2 text-gray-300">
          Alerts
        </a>
        <a href="/reports" className="rounded-lg px-3 py-2 text-gray-300">
          Reports
        </a>
      </nav>
    </>
  );
}