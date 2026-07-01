import Image from "next/image";
import {
  Bot,
  Brain,
  Clock3,
  FileCheck2,
  Inbox,
  MailCheck,
  Send,
  UserPlus,
} from "lucide-react";

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

const outreachHighlights = [
  {
    icon: UserPlus,
    title: "Capture prospects fast",
    description: "Save LinkedIn contacts with their profile context before good leads disappear into open tabs.",
    accent: "border-primary/30 bg-[linear-gradient(135deg,hsl(var(--primary-soft))_0%,hsl(var(--background))_100%)] text-primary",
  },
  {
    icon: Send,
    title: "Run repeatable campaigns",
    description: "Put every new contact into a simple outreach sequence so follow-up is a system, not memory.",
    accent: "border-info/24 bg-[linear-gradient(135deg,hsl(var(--info-soft))_0%,hsl(var(--background))_100%)] text-info",
  },
  {
    icon: Clock3,
    title: "Work from one daily queue",
    description: "Open the app and see exactly who needs a touch today instead of guessing where to start.",
    accent: "border-warning/26 bg-[linear-gradient(135deg,hsl(var(--warning-soft))_0%,hsl(var(--background))_100%)] text-warning",
  },
  {
    icon: Bot,
    title: "Draft messages with AI",
    description: "Generate relevant first drafts from profile context, then edit and send them in your own voice.",
    accent: "border-success/28 bg-[linear-gradient(135deg,hsl(var(--success-soft))_0%,hsl(var(--background))_100%)] text-success",
  },
];

const engineHighlights = [
  {
    icon: UserPlus,
    title: "Import contacts cleanly",
    description: "Bring in prospects from Apollo or your own source and keep the contact record tied to campaign state.",
    accent: "border-primary/30 bg-[linear-gradient(135deg,hsl(var(--primary-soft))_0%,hsl(var(--background))_100%)] text-primary",
  },
  {
    icon: MailCheck,
    title: "Validate before sending",
    description: "Check deliverability and suppression before a contact enters an outbound sequence.",
    accent: "border-info/24 bg-[linear-gradient(135deg,hsl(var(--info-soft))_0%,hsl(var(--background))_100%)] text-info",
  },
  {
    icon: FileCheck2,
    title: "Approve draft copy",
    description: "Generate useful first drafts, then review, edit, and approve before messages reach the queue.",
    accent: "border-success/28 bg-[linear-gradient(135deg,hsl(var(--success-soft))_0%,hsl(var(--background))_100%)] text-success",
  },
  {
    icon: Brain,
    title: "Measure send health",
    description: "Track sent, bounced, replied, and suppressed outcomes so each campaign improves from real data.",
    accent: "border-info/24 bg-[linear-gradient(135deg,hsl(var(--info-soft))_0%,hsl(var(--background))_100%)] text-info",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* Nav */}
      <header className="mx-auto w-full max-w-5xl px-4 py-6 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">Osequencing</span>
        <nav
          className="flex gap-6 text-sm font-medium"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <a href="#outreach" className="hover:text-current transition-colors">Outreach</a>
          <a href="#engine" className="hover:text-current transition-colors">Engine</a>
          <a href="#founder" className="hover:text-current transition-colors">About</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
        <div
          className="relative overflow-hidden px-8 py-12 sm:px-16 sm:py-16"
          style={{
            borderRadius: "var(--radius-hero)",
            border: "1px solid hsl(var(--border))",
            backgroundColor: "hsl(var(--card) / 0.94)",
            boxShadow:
              "0 32px 72px -38px hsl(var(--foreground) / 0.26), 0 18px 34px -24px hsl(var(--primary) / 0.28)",
          }}
        >
          <GridPattern />
          <div
            className="absolute inset-x-0 top-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, hsl(var(--primary-soft) / 0.7), hsl(var(--info-soft) / 0.3), transparent)",
            }}
          />
          <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex shrink-0 items-center justify-center lg:order-last lg:w-1/4">
              <Image
                src="/logo-transparent.png"
                alt="Osequencing"
                width={180}
                height={180}
                className="h-auto w-24 sm:w-32 lg:w-full lg:max-w-[160px]"
                priority
                unoptimized
              />

            </div>
          <div className="flex flex-col items-center text-center gap-6 lg:w-3/4 lg:items-start lg:text-left">
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
                  background:
                    "linear-gradient(92deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 48%, hsl(var(--info)) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                One outreach system.
              </span>
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Osequencing is a suite of outreach tools for B2B founders and agencies — manual LinkedIn sequencing and automated cold email, built to cover the full loop from cold to closed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="#outreach"
                className="inline-flex items-center justify-center h-12 rounded-xl px-10 text-base font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  boxShadow:
                    "0 18px 40px -18px hsl(var(--primary) / 0.95), 0 8px 20px -12px hsl(var(--accent) / 0.65)",
                }}
              >
                See the products
              </a>
              <a
                href="#founder"
                className="inline-flex items-center justify-center h-12 rounded-xl px-8 text-base font-medium transition-colors"
                style={{
                  border: "1px solid hsl(var(--border) / 0.8)",
                  backgroundColor: "hsl(var(--background) / 0.85)",
                }}
              >
                About the founder
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="py-16 sm:py-20"
        style={{
          borderTop: "1px solid hsl(var(--border))",
          backgroundColor: "hsl(var(--muted) / 0.4)",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Built for precision, not volume
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Most outreach tools are built for blast campaigns and spray-and-pray volume. We built for the B2B founder or agency owner who wants a tight, personal operation — where every message is intentional and every lead is tracked from cold to closed.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto text-left">
            {[
              {
                label: "Manual side",
                name: "Osequencing Outreach",
                desc: "LinkedIn enrichment, daily queue, manual follow-ups. Every touch logged. Every warm lead tracked.",
                borderClass: "border-border",
                shadow: "0 22px 40px -28px hsl(var(--foreground) / 0.18)",
              },
              {
                label: "Automated side",
                name: "Osequencing Engine",
                desc: "Validated contacts, approved drafts, visible queue. Automation that stays under control — nothing sends without human approval.",
                borderClass: "border-primary/55",
                shadow: "0 26px 48px -30px hsl(var(--primary) / 0.32)",
              },
            ].map((card) => (
              <div
                key={card.name}
                className="p-6"
                style={{
                  borderRadius: "var(--radius-card-xl)",
                  border: `1px solid`,
                  borderColor:
                    card.name.includes("Engine")
                      ? "hsl(var(--primary) / 0.55)"
                      : "hsl(var(--border))",
                  backgroundColor: "hsl(var(--card))",
                  boxShadow: card.shadow,
                }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {card.label}
                </p>
                <p className="mt-2 font-semibold">{card.name}</p>
                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach Section */}
      <section id="outreach" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium mb-4"
              style={{
                border: "1px solid hsl(var(--primary) / 0.3)",
                color: "hsl(var(--primary))",
                backgroundColor: "hsl(var(--primary-soft))",
              }}
            >
              Osequencing Outreach
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              From cold LinkedIn leads to{" "}
              <span
                style={{
                  background:
                    "linear-gradient(92deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                high-ticket clients.
              </span>
            </h2>
            <p
              className="mt-3 max-w-2xl mx-auto"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              A manual-first LinkedIn outreach system for consultants, agencies, and B2B sellers who need a daily queue, better follow-up discipline, and AI-assisted drafting.
            </p>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {outreachHighlights.map(({ icon: Icon, title, description, accent }) => (
              <div key={title} className="flex items-start gap-5">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border ${accent}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <div className="max-w-md">
                  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                  <p
                    className="mt-2 text-sm leading-6"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://outreach.osequencing.com/sign-up"
              className="inline-flex items-center justify-center h-12 rounded-xl px-10 text-base font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                boxShadow:
                  "0 18px 40px -18px hsl(var(--primary) / 0.95), 0 8px 20px -12px hsl(var(--accent) / 0.65)",
              }}
            >
              Get Started with Outreach
            </a>
            <a
              href="https://demo.outreach.osequencing.com"
              className="inline-flex items-center justify-center h-12 rounded-xl px-8 text-base font-medium transition-colors"
              style={{
                border: "1px solid hsl(var(--border) / 0.8)",
                backgroundColor: "hsl(var(--background) / 0.85)",
              }}
            >
              Try Live Demo
            </a>
          </div>
          <p className="mt-2 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            Demo login: demo@osequencing.com — ask for the password in your proposal or DM.
          </p>
        </div>
      </section>

      {/* Engine Section */}
      <section
        id="engine"
        className="py-16 sm:py-20"
        style={{
          borderTop: "1px solid hsl(var(--border))",
          backgroundColor: "hsl(var(--muted) / 0.4)",
        }}
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium mb-4"
              style={{
                border: "1px solid hsl(var(--info) / 0.3)",
                color: "hsl(var(--info))",
                backgroundColor: "hsl(var(--info-soft))",
              }}
            >
              Osequencing Engine
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              From imported contacts to{" "}
              <span
                style={{
                  background:
                    "linear-gradient(92deg, hsl(var(--primary)) 0%, hsl(var(--info)) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                approved sends.
              </span>
            </h2>
            <p
              className="mt-3 max-w-2xl mx-auto"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Cold email operations deserve the same discipline as any other production system — visible steps, human approval, and no black-box sending that you can&apos;t audit or explain.
            </p>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {engineHighlights.map(({ icon: Icon, title, description, accent }) => (
              <div key={title} className="flex items-start gap-5">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border ${accent}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <div className="max-w-md">
                  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                  <p
                    className="mt-2 text-sm leading-6"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://engine.osequencing.com/sign-up"
              className="inline-flex items-center justify-center h-12 rounded-xl px-10 text-base font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                boxShadow:
                  "0 18px 40px -18px hsl(var(--primary) / 0.95), 0 8px 20px -12px hsl(var(--accent) / 0.65)",
              }}
            >
              Get Started with Engine
            </a>
            <a
              href="https://demo.engine.osequencing.com"
              className="inline-flex items-center justify-center h-12 rounded-xl px-8 text-base font-medium transition-colors"
              style={{
                border: "1px solid hsl(var(--border) / 0.8)",
                backgroundColor: "hsl(var(--card) / 0.85)",
              }}
            >
              Try Live Demo
            </a>
          </div>
          <p className="mt-2 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            Demo login: demo@osequencing.com — ask for the password in your proposal or DM.
          </p>
        </div>
      </section>

      {/* Founder Note */}
      <section id="founder" className="py-16 sm:py-20" style={{ borderTop: "1px solid hsl(var(--border))" }}>
        <div className="mx-auto max-w-5xl px-4">
          <div
            className="p-6 sm:p-10"
            style={{
              borderRadius: "var(--radius-card-xl)",
              border: "1px solid hsl(var(--border))",
              backgroundColor: "hsl(var(--card))",
              boxShadow: "0 22px 40px -30px hsl(var(--foreground) / 0.16)",
            }}
          >
            <div className="max-w-3xl">
              <p className="text-3xl tracking-tight sm:text-4xl">Hi there,</p>
              <div
                className="mt-6 space-y-5 text-base leading-8 sm:text-lg sm:leading-9"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <p>I spent 20 years working in sales before becoming a full-stack developer.</p>
                <p>
                  I built Osequencing because outreach deserves real tooling — not spreadsheets and sticky notes for the manual side, and not black-box automation for the email side.
                </p>
                <p>
                  Outreach gives you a disciplined daily queue for LinkedIn. Engine gives you a controlled cold email pipeline where nothing sends without passing through a human approval step.
                </p>
                <p className="font-medium" style={{ color: "hsl(var(--foreground))" }}>
                  Together, they cover the full loop — from cold to closed.
                </p>
              </div>
            </div>
            <div
              className="mt-10 flex items-center gap-4 pt-8"
              style={{ borderTop: "1px solid hsl(var(--border) / 0.7)" }}
            >
              <div
                className="overflow-hidden rounded-full"
                style={{ border: "1px solid hsl(var(--border))", boxShadow: "0 18px 34px -24px hsl(var(--foreground) / 0.16)" }}
              >
                <Image
                  src="/images/founder.png"
                  alt="Ken Beaudin"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-xl font-semibold tracking-tight sm:text-2xl">Ken Beaudin</p>
                <p className="mt-1 text-base" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 sm:py-20"
        style={{
          borderTop: "1px solid hsl(var(--border))",
          background:
            "linear-gradient(to bottom, hsl(var(--info-soft)), hsl(var(--background)))",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Try the demos — no signup needed
          </h2>
          <p className="mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
            Log in as the demo user and explore both products with realistic data already loaded.
          </p>
          <div className="mt-8 flex flex-col items-stretch sm:flex-row sm:items-center gap-3 justify-center">
            <a
              href="https://demo.outreach.osequencing.com"
              className="inline-flex items-center justify-center h-14 rounded-xl px-12 text-base font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                boxShadow:
                  "0 22px 44px -18px hsl(var(--primary) / 0.98), 0 10px 24px -14px hsl(var(--accent) / 0.7)",
              }}
            >
              Demo — Outreach
            </a>
            <a
              href="https://demo.engine.osequencing.com"
              className="inline-flex items-center justify-center h-14 rounded-xl px-10 text-base font-medium transition-colors"
              style={{
                border: "1px solid hsl(var(--border) / 0.8)",
                backgroundColor: "hsl(var(--background) / 0.88)",
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
      <footer
        className="py-8 mt-auto"
        style={{ borderTop: "1px solid hsl(var(--border))" }}
      >
        <div
          className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <span>© {new Date().getFullYear()} Osequencing</span>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://outreach.osequencing.com"
              className="transition-colors hover:text-current"
            >
              Outreach
            </a>
            <a
              href="https://engine.osequencing.com"
              className="transition-colors hover:text-current"
            >
              Engine
            </a>
            <a href="/privacy" className="transition-colors hover:text-current">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-current">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
