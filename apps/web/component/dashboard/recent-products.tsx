import { ArrowUpRight, ExternalLink } from "lucide-react";

const products = [
  {
    name: "Wireless Headphones",
    store: "Example Store",
    price: "$89.99",
    previousPrice: "$99.99",
    status: "Price dropped",
    statusColor: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Mechanical Keyboard",
    store: "Example Store",
    price: "$129.99",
    previousPrice: "$129.99",
    status: "No change",
    statusColor: "bg-slate-100 text-slate-600",
  },
  {
    name: "Smart Watch",
    store: "Example Store",
    price: "$199.99",
    previousPrice: "$219.99",
    status: "Price dropped",
    statusColor: "bg-emerald-50 text-emerald-700",
  },
];

export function RecentProducts() {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-semibold text-slate-900">
            Recently Tracked Products
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Overview of your monitored products
          </p>
        </div>
        <a
          href="/products"
          className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          View All
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead className="bg-slate-50">
            <tr className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Current Price</th>
              <th className="px-6 py-4">Previous Price</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.name} className="transition hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {product.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {product.store}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                  {product.price}
                </td>

                <td className="px-6 py-4 text-sm text-slate-500">
                  {product.previousPrice}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${product.statusColor}`}
                  >
                    {product.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <button
                    type="button"
                    aria-label={`Open ${product.name}`}
                    className="text-slate-400 transition hover:text-indigo-600"
                  >
                    <ExternalLink size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
