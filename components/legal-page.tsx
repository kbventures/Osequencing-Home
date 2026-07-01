export type LegalSection = {
  title: string;
  items: string[];
};

export function LegalPage({
  kind,
  updated,
  intro,
  sections,
  footer,
}: {
  kind: "Privacy Policy" | "Terms of Service";
  updated: string;
  intro: string;
  sections: LegalSection[];
  footer: string;
}) {
  const otherHref = kind === "Privacy Policy" ? "/terms" : "/privacy";
  const otherLabel =
    kind === "Privacy Policy" ? "Terms of Service" : "Privacy Policy";

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <p className="text-sm font-medium" style={{ color: "hsl(var(--primary))" }}>
        {kind}
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight">Osequencing</h1>
      <p className="mt-2 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
        Last updated: {updated}
      </p>

      <p
        className="mt-8 text-sm leading-relaxed"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {intro}
      </p>

      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <ul className="mt-3 space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  <span style={{ color: "hsl(var(--primary))" }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div
        className="mt-12 pt-6"
        style={{ borderTop: "1px solid hsl(var(--border))" }}
      >
        <p
          className="text-sm leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {footer}
        </p>
        <div className="mt-3 flex flex-wrap gap-6 text-sm">
          <a
            href={otherHref}
            className="font-medium transition-colors hover:text-current"
            style={{ color: "hsl(var(--primary))" }}
          >
            {otherLabel}
          </a>
          <a
            href="/"
            className="font-medium transition-colors hover:text-current"
            style={{ color: "hsl(var(--primary))" }}
          >
            Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
