import Link from "next/link";

const products = [
  {
    name: "Osequencing Outreach",
    tagline: "Manual LinkedIn sequencing that turns cold leads into clients.",
    description:
      "Capture enriched LinkedIn prospects, follow a daily queue, and log every touch. Manual-first so nothing slips and every message is personal.",
    prodUrl: "https://outreach.osequencing.com",
    demoUrl: "https://demo.outreach.osequencing.com",
    demoCredentials: "demo@osequencing.com",
    accentFrom: "#6ee04a",
    accentTo: "#3db521",
    features: ["Daily queue", "LinkedIn enrichment", "Touch log & analytics", "Warm-to-client tracking"],
  },
  {
    name: "Osequencing Engine",
    tagline: "Automated cold email operations at scale.",
    description:
      "Import contacts, validate emails, approve AI-generated drafts, and run scheduled multi-step sequences from one controlled pipeline.",
    prodUrl: "https://engine.osequencing.com",
    demoUrl: "https://demo.engine.osequencing.com",
    demoCredentials: "demo@osequencing.com",
    accentFrom: "#4a8fe0",
    accentTo: "#1a5fc4",
    features: ["Email validation", "AI draft approval", "Scheduled sequences", "Bounce & reply tracking"],
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* Nav */}
      <header className="mx-auto w-full max-w-5xl px-4 py-6 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">Osequencing</span>
        <nav className="flex gap-6 text-sm font-medium text-[#555]">
          <a href="#products" className="hover:text-[#121212] transition-colors">Products</a>
          <a href="#philosophy" className="hover:text-[#121212] transition-colors">Why</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d0d0c0] bg-white/70 px-4 py-1.5 text-xs font-medium text-[#555] mb-6">
          Built for B2B founders and agencies
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
          Two tools.{" "}
          <span
            style={{
              background: "linear-gradient(92deg, #6ee04a 0%, #4a8fe0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            One outreach system.
          </span>
        </h1>
        <p className="mt-5 text-lg text-[#555] max-w-xl mx-auto leading-relaxed">
          Osequencing is a suite of outreach tools for B2B founders and agencies — manual LinkedIn sequencing and automated cold email, built to work together.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#products"
            className="inline-flex items-center justify-center h-12 rounded-xl bg-[#121212] text-white px-8 text-sm font-semibold hover:bg-[#2a2a2a] transition-colors"
          >
            See the products
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center justify-center h-12 rounded-xl border border-[#d0d0c0] bg-white/70 px-8 text-sm font-medium hover:bg-white transition-colors"
          >
            Why we built this
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-center mb-10">The Suite</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-[28px] border border-[#d0d0c0] bg-white/90 p-8 shadow-[0_22px_48px_-28px_rgba(0,0,0,0.15)] flex flex-col"
            >
              <div
                className="w-10 h-10 rounded-2xl mb-5"
                style={{ background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})` }}
              />
              <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
              <p
                className="mt-1 text-sm font-medium"
                style={{ color: p.accentTo }}
              >
                {p.tagline}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#555]">{p.description}</p>
              <ul className="mt-5 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#444]">
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: p.accentFrom }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-2 pt-6 border-t border-[#e8e8e0]">
                <a
                  href={p.prodUrl}
                  className="inline-flex items-center justify-center h-10 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})` }}
                >
                  Get Started →
                </a>
                <a
                  href={p.demoUrl}
                  className="inline-flex items-center justify-center h-10 rounded-xl border border-[#d0d0c0] bg-transparent text-sm font-medium text-[#444] hover:bg-[#f5f5ee] transition-colors"
                >
                  Try Demo
                </a>
                <p className="text-center text-[11px] text-[#888] mt-1">
                  Demo login: {p.demoCredentials}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Why we built this</h2>
        <p className="mt-4 text-[#555] leading-relaxed">
          Most outreach tools are built for volume. We built for precision. Osequencing is for the B2B founder or agency owner who wants to run a tight, personal outreach operation — not blast campaigns and hope for replies.
        </p>
        <p className="mt-4 text-[#555] leading-relaxed">
          Outreach handles the human side: LinkedIn enrichment, manual follow-ups, and the daily queue that keeps every lead moving. Engine handles the automation side: validated contacts, approved drafts, and scheduled sends — no spray and pray.
        </p>
        <p className="mt-4 text-[#555] leading-relaxed">
          Together, they cover the full outreach loop from cold to closed.
        </p>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <div className="rounded-[28px] border border-[#d0d0c0] bg-white/90 p-12 shadow-[0_22px_48px_-28px_rgba(0,0,0,0.12)]">
          <h2 className="text-3xl font-bold tracking-tight">Ready to start?</h2>
          <p className="mt-3 text-[#555]">Try the demos — no signup needed. Login as the demo user and explore.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://demo.outreach.osequencing.com"
              className="inline-flex items-center justify-center h-12 rounded-xl border border-[#d0d0c0] bg-[#f5f5ee] px-8 text-sm font-medium text-[#444] hover:bg-white transition-colors"
            >
              Demo — Outreach
            </a>
            <a
              href="https://demo.engine.osequencing.com"
              className="inline-flex items-center justify-center h-12 rounded-xl border border-[#d0d0c0] bg-[#f5f5ee] px-8 text-sm font-medium text-[#444] hover:bg-white transition-colors"
            >
              Demo — Engine
            </a>
          </div>
          <p className="mt-4 text-xs text-[#888]">
            Demos: demo@osequencing.com — ask for the password in your proposal or DM.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#d0d0c0] py-8">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#888]">
          <span>© {new Date().getFullYear()} Osequencing</span>
          <div className="flex gap-6">
            <a href="https://outreach.osequencing.com" className="hover:text-[#444] transition-colors">Outreach</a>
            <a href="https://engine.osequencing.com" className="hover:text-[#444] transition-colors">Engine</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
