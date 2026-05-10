import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPizzaSlice,
  FaChartLine,
  FaShoppingBag,
  FaTruck,
  FaSmile,
  FaHome,
  FaClipboardList,
  FaUtensils,
  FaCog,
} from "react-icons/fa";

const KES = (n) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(n);

function Sparkline({ values, accentClass }) {
  const w = 140;
  const h = 42;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pad = 3;
  const pts = values
    .map((v, i) => {
      const x = pad + (i / Math.max(values.length - 1, 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={`h-10 w-[5.5rem] shrink-0 overflow-visible stroke-current ${accentClass} sm:w-36`}
      preserveAspectRatio="none"
      fill="none"
    >
      <polyline
        points={pts}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LiveDot({ className = "" }) {
  return (
    <span className={`relative inline-flex h-2.5 w-2.5 ${className}`}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
    </span>
  );
}

function DonutLegend({ slices }) {
  return (
    <ul className="space-y-2 text-sm">
      {slices.map((s) => (
        <li key={s.label} className="flex items-center justify-between gap-4 text-gray-300">
          <span className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: s.color }}
            />
            {s.label}
          </span>
          <span className="font-semibold text-white tabular-nums">{s.pct}%</span>
        </li>
      ))}
    </ul>
  );
}

function OrderStatusDonut({ slices }) {
  const total = slices.reduce((a, s) => a + s.pct, 0);
  let acc = 0;
  const grad = slices
    .map((s) => {
      const start = (acc / total) * 360;
      acc += s.pct;
      const end = (acc / total) * 360;
      return `${s.color} ${start}deg ${end}deg`;
    })
    .join(", ");

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center">
      <div
        className="relative h-44 w-44 shrink-0 rounded-full p-1 shadow-[0_0_40px_rgba(220,38,38,0.15)]"
        style={{
          background: `conic-gradient(from -90deg, ${grad})`,
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#1c0d10] text-center">
          <p className="text-xs uppercase tracking-wider text-red-300/70">Today</p>
          <p className="text-2xl font-bold text-white">Orders</p>
          <p className="text-sm text-gray-400">status mix</p>
        </div>
      </div>
      <DonutLegend slices={slices} />
    </div>
  );
}

const SIDEBAR = [
  { id: "overview", label: "Overview", icon: FaHome },
  { id: "orders", label: "Orders", icon: FaClipboardList },
  { id: "menu", label: "Menu", icon: FaUtensils },
  { id: "reports", label: "Reports", icon: FaChartLine },
  { id: "settings", label: "Settings", icon: FaCog },
];

const TOP_PIZZAS = [
  { rank: 1, name: "BBQ Chicken Feast", revenue: 184_200, up: true },
  { rank: 2, name: "Pepperoni Supreme", revenue: 156_400, up: true },
  { rank: 3, name: "Nairobi Hot Special", revenue: 128_900, up: false },
  { rank: 4, name: "Margherita Classica", revenue: 98_600, up: true },
  { rank: 5, name: "Veggie Garden", revenue: 72_150, up: false },
];

const FEED = [
  { customer: "Wanjiku M.", status: "Delivering", amount: 2_450, id: "PN-9021" },
  { customer: "James O.", status: "Preparing", amount: 1_890, id: "PN-9022" },
  { customer: "Amina K.", status: "Delivered", amount: 3_200, id: "PN-9020" },
  { customer: "David N.", status: "Preparing", amount: 950, id: "PN-9023" },
  { customer: "Grace T.", status: "Cancelled", amount: 0, id: "PN-9018" },
];

const statusBadge = {
  Delivered: "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/40",
  Delivering: "bg-amber-500/20 text-amber-200 ring-1 ring-amber-500/40",
  Preparing: "bg-red-500/20 text-red-200 ring-1 ring-red-500/40",
  Cancelled: "bg-gray-600/40 text-gray-400 ring-1 ring-gray-500/40",
};

function useNairobiTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return useMemo(() => {
    const d = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Nairobi",
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(now);
    const parts = Object.fromEntries(d.filter((x) => x.type !== "literal").map((x) => [x.type, x.value]));
    return `${parts.weekday}, ${parts.day} ${parts.month} ${parts.year} · ${parts.hour}:${parts.minute}:${parts.second}`;
  }, [now]);
}

function AdminDashboard() {
  const nairobiClock = useNairobiTime();
  const [sidebarId, setSidebarId] = useState("overview");
  const [barsOn, setBarsOn] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setBarsOn(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const weekBars = [
    { label: "Mon", h: 42, peak: false },
    { label: "Tue", h: 55, peak: false },
    { label: "Wed", h: 48, peak: false },
    { label: "Thu", h: 62, peak: false },
    { label: "Fri", h: 78, peak: false },
    { label: "Sat", h: 100, peak: true },
    { label: "Sun", h: 68, peak: false },
  ];

  const donutSlices = [
    { label: "Delivered", pct: 45, color: "#22c55e" },
    { label: "Delivering", pct: 25, color: "#f97316" },
    { label: "Preparing", pct: 22, color: "#ef4444" },
    { label: "Cancelled", pct: 8, color: "#6b7280" },
  ];

  const kpis = [
    {
      title: "Weekly Revenue",
      value: KES(847_500),
      sub: "+12.4% vs last week",
      accent: "text-amber-400",
      spark: [62, 58, 64, 70, 68, 75, 72, 80, 78, 85, 92, 100],
      border: "border-amber-500/30 ring-amber-500/15",
      iconBg: "bg-amber-500/20 text-amber-300",
      Icon: FaChartLine,
    },
    {
      title: "Total Orders",
      value: "1,243",
      sub: "+8.1% weekly",
      accent: "text-red-400",
      spark: [40, 45, 52, 48, 55, 60, 58, 65, 70, 68, 75, 82],
      border: "border-red-500/30 ring-red-500/15",
      iconBg: "bg-red-500/25 text-red-300",
      Icon: FaShoppingBag,
    },
    {
      title: "Active Deliveries",
      value: "18",
      sub: "8 en route CBD",
      accent: "text-orange-400",
      spark: [20, 25, 28, 30, 22, 35, 32, 28, 40, 38, 35, 45],
      border: "border-orange-500/30 ring-orange-500/15",
      iconBg: "bg-orange-500/25 text-orange-300",
      Icon: FaTruck,
    },
    {
      title: "Happy Customers",
      value: "9,820",
      sub: "4.9★ average",
      accent: "text-rose-300",
      spark: [55, 60, 58, 62, 65, 63, 70, 72, 75, 78, 80, 95],
      border: "border-rose-400/25 ring-rose-400/10",
      iconBg: "bg-rose-500/20 text-rose-200",
      Icon: FaSmile,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a090c] via-[#2a1218] to-[#15080a] text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-56 shrink-0 flex-col border-r border-red-900/40 bg-[#231018]/95 backdrop-blur-md md:flex lg:w-64">
          <div className="border-b border-red-900/35 p-5">
            <Link to="/" className="flex items-center gap-2 font-bold text-white transition hover:text-red-400">
              <FaPizzaSlice className="text-2xl text-red-500" />
              <span>Pizza Nairobi</span>
            </Link>
            <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wide text-gray-400">
              <LiveDot />
              <span className="text-orange-300/90">Admin</span>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-3">
            {SIDEBAR.map((item) => {
              const Icon = item.icon;
              const active = sidebarId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSidebarId(item.id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                    active
                      ? "bg-gradient-to-r from-red-700/50 to-orange-700/35 text-white ring-1 ring-red-500/40"
                      : "text-gray-400 hover:bg-red-950/40 hover:text-red-100"
                  }`}
                >
                  <Icon className={active ? "text-orange-300" : "text-gray-500"} aria-hidden />
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="border-t border-red-900/35 p-4">
            <Link
              to="/menu"
              className="block rounded-lg border border-red-800/45 bg-red-950/35 py-2.5 text-center text-sm font-semibold text-red-200 transition hover:bg-red-900/50"
            >
              View storefront
            </Link>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          {/* Top bar */}
          <header className="sticky top-0 z-20 border-b border-red-900/40 bg-[#1c0f12]/85 backdrop-blur-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6 lg:px-8">
              <div>
                <h1 className="text-lg font-bold text-white md:text-xl">Admin Dashboard</h1>
                <p className="text-xs text-red-300/70">
                  Nairobi ·{" "}
                  <span className="font-mono tabular-nums text-gray-300">{nairobiClock}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-orange-600/35 bg-orange-950/30 px-3 py-1.5 text-xs font-semibold text-orange-200">
                  <LiveDot />
                  Live
                </div>
                <Link
                  to="/login"
                  className="rounded-full border border-red-800/50 px-4 py-1.5 text-xs font-semibold text-gray-300 hover:border-red-500/50 hover:text-white"
                >
                  Switch account
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-6 px-4 py-6 md:space-y-8 md:px-6 lg:px-8">
            {/* Mobile nav */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:hidden">
              {SIDEBAR.map((item) => {
                const Icon = item.icon;
                const active = sidebarId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSidebarId(item.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold whitespace-nowrap ${
                      active
                        ? "bg-red-700/50 text-white ring-1 ring-orange-400/40"
                        : "bg-red-950/40 text-gray-400"
                    }`}
                  >
                    <Icon aria-hidden /> {item.label}
                  </button>
                );
              })}
            </div>

            {/* KPI */}
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {kpis.map((k) => {
                const KPIIcon = k.Icon;
                return (
                  <div
                    key={k.title}
                    className={`rounded-2xl border bg-gradient-to-b from-[#36191f]/85 to-[#281218]/92 p-5 shadow-inner ring-1 ${k.border}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400">{k.title}</p>
                        <p className={`mt-2 text-2xl font-bold tabular-nums ${k.accent}`}>{k.value}</p>
                        <p className="mt-1 text-xs text-emerald-400/90">{k.sub}</p>
                      </div>
                      <div className={`rounded-xl p-2.5 ${k.iconBg}`}>
                        <KPIIcon className="text-lg" aria-hidden />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end opacity-95">
                      <Sparkline values={k.spark} accentClass={k.accent} />
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Charts */}
            <section className="grid gap-6 lg:grid-cols-5">
              <div className="rounded-2xl border border-red-900/35 bg-[#29161b]/72 p-5 shadow-xl ring-1 ring-red-900/25 lg:col-span-3">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-white">Weekly revenue</h2>
                    <p className="text-sm text-gray-400">Kitchen + delivery · last 7 days</p>
                  </div>
                  <span className="rounded-full bg-orange-600/25 px-3 py-1 text-xs font-bold text-orange-200 ring-1 ring-orange-400/35">
                    Sat peak day
                  </span>
                </div>
                <div className="flex h-56 items-end justify-between gap-1.5 sm:gap-2 md:gap-3">
                  {weekBars.map((b, i) => (
                    <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
                      <div className="flex h-full w-full max-w-[3.5rem] items-end justify-center sm:max-w-none">
                        <div
                          className={`relative w-full rounded-t-lg transition-[height] duration-[900ms] ease-out ${
                            b.peak
                              ? "bg-gradient-to-t from-orange-700 to-orange-400 shadow-[0_-4px_24px_rgba(251,146,60,0.35)]"
                              : "bg-gradient-to-t from-red-950 to-red-700/85"
                          }`}
                          style={{
                            height: barsOn ? `${b.h}%` : "4%",
                          }}
                        />
                      </div>
                      <span
                        className={`text-[11px] font-semibold uppercase sm:text-xs ${
                          b.peak ? "text-orange-300" : "text-gray-500"
                        }`}
                      >
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-red-900/35 bg-[#29161b]/72 p-5 shadow-xl ring-1 ring-red-900/25 lg:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <LiveDot />
                  <h2 className="text-lg font-bold text-white">Today&apos;s orders</h2>
                </div>
                <p className="mb-6 text-sm text-gray-400">Status breakdown · live sampling</p>
                <OrderStatusDonut slices={donutSlices} />
              </div>
            </section>

            {/* Bottom */}
            <section className="grid gap-6 pb-10 lg:grid-cols-2">
              <div className="rounded-2xl border border-red-900/35 bg-[#29161b]/72 p-5 ring-1 ring-red-900/20">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h2 className="text-lg font-bold text-white">Top 5 selling pizzas</h2>
                  <span className="text-xs text-gray-400">Rev. (KES)</span>
                </div>
                <ul className="space-y-3">
                  {TOP_PIZZAS.map((p) => (
                    <li
                      key={p.rank}
                      className="flex items-center gap-3 rounded-xl border border-red-950/45 bg-black/25 px-3 py-3 sm:gap-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-900/55 text-lg font-bold text-orange-300">
                        {p.rank}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-gray-100">{p.name}</p>
                        <p className="text-sm tabular-nums text-amber-200/95">{KES(p.revenue)}</p>
                      </div>
                      <span
                        className={`shrink-0 text-lg ${p.up ? "text-emerald-400" : "text-red-400"}`}
                        title={p.up ? "Trending up" : "Trending down"}
                      >
                        {p.up ? "▲" : "▼"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-red-900/35 bg-[#29161b]/72 p-5 ring-1 ring-red-900/20">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LiveDot />
                    <h2 className="text-lg font-bold text-white">Live order feed</h2>
                  </div>
                  <span className="rounded-full bg-red-900/45 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-orange-300">
                    Live
                  </span>
                </div>
                <ul className="max-h-[22rem] space-y-2 overflow-auto pr-1">
                  {FEED.map((o, idx) => (
                    <li
                      key={`${o.id}-${idx}`}
                      className="flex flex-wrap items-center gap-3 rounded-xl border border-red-950/40 bg-black/28 px-3 py-2.5"
                    >
                      <LiveDot className="shrink-0 scale-75" />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-100">{o.customer}</p>
                        <p className="text-[11px] text-gray-500">{o.id}</p>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold capitalize ${statusBadge[o.status]}`}
                      >
                        {o.status}
                      </span>
                      <span className="ml-auto shrink-0 text-sm font-semibold tabular-nums text-amber-200/95">
                        {o.amount === 0 ? "—" : KES(o.amount)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Sidebar section placeholder */}
            {sidebarId !== "overview" && (
              <p className="rounded-xl border border-dashed border-red-800/50 bg-red-950/20 px-4 py-3 text-center text-sm text-gray-400">
                <span className="font-semibold text-red-300/90 capitalize">{sidebarId}</span> — plug in
                routes or APIs when ready.
              </p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
