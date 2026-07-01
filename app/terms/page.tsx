import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — Osequencing",
  description:
    "Terms of Service for the Osequencing marketing site, operated by Ingenix Online Inc.",
};

const sections: LegalSection[] = [
  {
    title: "Acceptance of these terms",
    items: [
      "This marketing website is operated by Ingenix Online Inc (“we”, “us”).",
      "By using this site you agree to these terms. If you do not agree, do not use it.",
    ],
  },
  {
    title: "This site vs. the products",
    items: [
      "These terms cover only this marketing site.",
      "Use of the Osequencing products (Outreach and Engine) is governed by the separate terms presented within each product.",
    ],
  },
  {
    title: "Use of the site",
    items: [
      "You may view the site and contact us for legitimate purposes.",
      "Do not misuse the site, attempt to disrupt it, scrape it at scale, or use it to break the law or infringe others’ rights.",
    ],
  },
  {
    title: "Intellectual property",
    items: [
      "The content, branding, and design of this site belong to Ingenix Online Inc, except where third-party material is credited.",
      "You may not copy or reuse the content without permission.",
    ],
  },
  {
    title: "Disclaimer of warranties",
    items: [
      "The site and its content are provided “as is” without warranties of any kind, to the fullest extent permitted by law.",
      "Information on the site is for general purposes and may change without notice.",
    ],
  },
  {
    title: "Limitation of liability",
    items: [
      "To the fullest extent permitted by law, Ingenix Online Inc is not liable for any indirect, incidental, or consequential damages arising from use of this site.",
    ],
  },
  {
    title: "Changes",
    items: [
      "We may update the site or these terms at any time. Continued use means you accept the revised terms.",
    ],
  },
  {
    title: "Governing law",
    items: [
      "These terms are governed by the laws of the Province of Quebec and the applicable federal laws of Canada, without regard to conflict of law rules.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      kind="Terms of Service"
      updated="July 1, 2026"
      intro="Osequencing is operated by Ingenix Online Inc. These terms cover your use of this marketing site."
      sections={sections}
      footer="Questions about these terms: contact@ingenix.online."
    />
  );
}
