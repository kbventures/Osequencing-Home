import { ArrowRight, ListChecks, Mail, Users, BarChart3, Shield, Zap } from "lucide-react";

function GridPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(circle at center, white, transparent 78%)",
        WebkitMaskImage: "radial-gradient(circle at center, white, transparent 78%)",
      }}
    />
  );
}

const products = [
  {
    name: "Osequencing Outreach",
    badge: "Manual LinkedIn Sequencing",
    headline: "From cold LinkedIn leads to high-ticket clients.",
    description:
      "Capture enriched LinkedIn prospects, follow a structured daily queue, and log every touch. Manual-first so every message is personal and nothing slips.",
    prodUrl: "https://outreach.osequencing.com",
    demoUrl: "https://demo.outreach.osequencing.com",
    features: [
      { icon: ListChecks, label: "Daily Queue", desc: "Open the app, see who needs a message, close follow-ups in one session." },
      { icon: Users, label: "LinkedIn Enrichment", desc: "Capture prospect data directly from LinkedIn profiles." },
      { icon: BarChart3, label: "Touch Log & Analytics", desc: "Full history of every outreach action, with revenue tracking." },
    ],
    gradientFrom: "hsl(var(--primary-soft))",
    gradientVia: "hsl(var(--info-soft))",
    primaryColor: "hsl(var(--primary))",
    borderColor: "hsl(var(--primary) / 0.4)",
    shadowColor: "hsl(var(--primary) / 0.24)",
  },
  {
    name: "Osequencing Engine",
    badge: "Automated Cold Email",
    headline: "From imported contacts to approved sends.",
    description:
      "Import prospects, validate emails, approve AI-generated drafts, and run scheduled multi-step sequences from one controlled pipeline.",
    prodUrl: "https://engine.osequencing.com",
    demoUrl: "https://demo.engine.osequencing.com",
    features: [
      { icon: Shield, label: "Email Validation", desc: "Risky and invalid addresses filtered before anything is sent." },
      { icon: Zap, label: "Draft Approval", desc: "AI drafts reviewed and approved before they move to the queue." },
      { icon: Mail, label: "Scheduled Sequences", desc: "Multi-step campaigns with bounce and reply tracking built in." },
    ],
    gradientFrom: "hsl(var(--info-soft))",
    gradientVia: "hsl(var(--primary-soft))",
    primaryColor: "hsl(var(--info))",
    borderColor: "hsl(var(--info) / 0.4)",
    shadowColor: "hsl(var(--info) / 0.24)",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* Nav */}
      <header className="mx-auto w-full max-w-5xl px-4 py-6 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">Osequencing</span>
        <nav className="flex gap-6 text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
          <a href="#products" className="hover:text-current transition-colors">Products</a>
          <a href="#why" className="hover:text-current transition-colors">Why</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
        <div
          className="relative overflow-hidden px-8 py-12 sm:px-16 sm:py-16"
          style={{
            borderRadius: "var(--radius-hero)",
            border: "1px solid hsl(var(--border))",
            backgroundColor: "hsl(var(--card))",
            boxShadow: "0 32px 72px -38px hsl(var(--foreground) / 0.26), 0 18px 34px -24px hsl(var(--primary) / 0.28)",
          }}
        >
          <GridPattern />
          <div
            className="absolute inset-x-0 top-0 h-32"
            style={{
              background: `linear-gradient(to bottom, hsl(var(--primary-soft) / 0.7), hsl(var(--info-soft) / 0.3), transparent)`,
            }}
          />
          <div className="relative flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium"
              style={{
                border: "1px solid hsl(var(--border))",
                backgroundColor: "hsl(var(--muted))",
                color: "hsl(var(--muted-foreground))",
              }}
            >
              Built for B2B founders and agencies
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
              Two tools.{" "}
              <span
                style={{
                  background: "linear-gradient(92deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 48%, hsl(var(--info)) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                One outreach system.
              </span>
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Osequencing is a suite of outreach tools for B2B founders and agencies — manual LinkedIn sequencing and automated cold email, built to cover the full loop from cold to closed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 h-12 rounded-xl px-8 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "hsl(var(--foreground))",
                  color: "hsl(var(--background))",
                  boxShadow: "0 18px 40px -18px hsl(var(--foreground) / 0.6)",
                }}
              >
                See the products <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#why"
                className="inline-flex items-center justify-center h-12 rounded-xl px-8 text-sm font-medium transition-colors"
                style={{
                  border: "1px solid hsl(var(--border))",
                  backgroundColor: "hsl(var(--card) / 0.85)",
                }}
              >
                Why we built this
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">The Suite</h2>
          <p className="mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
            Two products. One for manual precision, one for automated scale.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-col p-8"
              style={{
                borderRadius: "28px",
                border: `1px solid ${p.borderColor}`,
                background: `linear-gradient(135deg, ${p.gradientFrom} 0%, transparent 60%)`,
                backgroundColor: "hsl(var(--card))",
                boxShadow: `0 30px 56px -34px hsl(var(--foreground) / 0.22), 0 16px 30px -20px ${p.shadowColor}`,
              }}
            >
              <span
                className="self-start rounded-full px-3 py-1 text-xs font-medium mb-4"
                style={{
                  border: `1px solid ${p.borderColor}`,
                  color: p.primaryColor,
                  backgroundColor: `${p.gradientFrom}`,
                }}
              >
                {p.badge}
              </span>
              <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
              <p className="mt-3 text-sm leading-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                {p.description}
              </p>

              <div className="mt-6 space-y-4">
                {p.features.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        border: `1px solid ${p.borderColor}`,
                        backgroundColor: p.gradientFrom,
                        color: p.primaryColor,
                      }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{label}</p>
                      <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 pt-6 flex flex-col gap-2"
                style={{ borderTop: "1px solid hsl(var(--border))" }}
              >
                <a
                  href={p.prodUrl}
                  className="inline-flex items-center justify-center h-10 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: p.primaryColor,
                    color: "hsl(var(--primary-foreground))",
                    boxShadow: `0 18px 40px -18px ${p.primaryColor}`,
                  }}
                >
                  Get Started →
                </a>
                <a
                  href={p.demoUrl}
                  className="inline-flex items-center justify-center h-10 rounded-xl text-sm font-medium transition-colors"
                  style={{
                    border: "1px solid hsl(var(--border))",
                    backgroundColor: "hsl(var(--card) / 0.8)",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  Try Live Demo
                </a>
                <p className="text-center text-[11px] mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Login: demo@osequencing.com
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section
        id="why"
        className="py-16 sm:py-20"
        style={{ borderTop: "1px solid hsl(var(--border))", backgroundColor: "hsl(var(--muted) / 0.4)" }}
      >
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Built for precision, not volume</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Most outreach tools are built for spray and pray. We built for the founder or agency owner who wants a tight, personal operation — where every message is intentional and every lead is tracked.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto text-left">
            <div
              className="p-6"
              style={{
                borderRadius: "var(--radius-card-xl)",
                border: "1px solid hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
                boxShadow: "0 22px 40px -28px hsl(var(--foreground) / 0.18)",
              }}
            >
              <p className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>Manual side</p>
              <p className="mt-2 font-semibold">Osequencing Outreach</p>
              <p className="mt-2 text-sm leading-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                LinkedIn enrichment, daily queue, manual follow-ups. Every touch logged. Every warm lead tracked. You stay in control of the relationship.
              </p>
            </div>
            <div
              className="p-6"
              style={{
                borderRadius: "var(--radius-card-xl)",
                border: "1px solid hsl(var(--primary) / 0.4)",
                backgroundColor: "hsl(var(--card))",
                boxShadow: "0 26px 48px -30px hsl(var(--primary) / 0.32)",
              }}
            >
              <p className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>Automated side</p>
              <p className="mt-2 font-semibold">Osequencing Engine</p>
              <p className="mt-2 text-sm leading-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                Validated contacts, approved drafts, visible queue. Automation that stays under control — nothing sends without passing through a human approval step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 sm:py-20"
        style={{
          borderTop: "1px solid hsl(var(--border))",
          background: "linear-gradient(to bottom, hsl(var(--info-soft)), hsl(var(--background)))",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Try the demos — no signup needed</h2>
          <p className="mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
            Log in as the demo user and explore both products with realistic data already loaded.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://demo.outreach.osequencing.com"
              className="inline-flex items-center justify-center h-12 rounded-xl px-8 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                boxShadow: "0 18px 40px -18px hsl(var(--primary) / 0.95)",
              }}
            >
              Demo — Outreach
            </a>
            <a
              href="https://demo.engine.osequencing.com"
              className="inline-flex items-center justify-center h-12 rounded-xl px-8 text-sm font-medium transition-colors"
              style={{
                border: "1px solid hsl(var(--border))",
                backgroundColor: "hsl(var(--card) / 0.85)",
              }}
            >
              Demo — Engine
            </a>
          </div>
          <p className="mt-4 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            Both demos: demo@osequencing.com — ask for the password in your proposal or DM.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid hsl(var(--border))" }} className="py-8 mt-auto">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
          <span>© {new Date().getFullYear()} Osequencing</span>
          <div className="flex gap-6">
            <a href="https://outreach.osequencing.com" className="transition-colors hover:text-current">Outreach</a>
            <a href="https://engine.osequencing.com" className="transition-colors hover:text-current">Engine</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
