import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Osequencing",
  description:
    "Privacy policy for the Osequencing marketing site, operated by Ingenix Online Inc.",
};

const sections: LegalSection[] = [
  {
    title: "About this site",
    items: [
      "This is the marketing website for Osequencing, a B2B outreach suite operated by Ingenix Online Inc.",
      "The Osequencing products (Outreach and Engine) each have their own privacy policy that covers data you create inside those apps. This policy covers only this marketing site.",
    ],
  },
  {
    title: "Information we collect",
    items: [
      "Contact details you choose to send us, such as an email address or message if you use a contact or feedback form or email us directly.",
      "Basic analytics and technical data, such as pages viewed, approximate location, device or browser type, and server logs, to understand how the site is used.",
    ],
  },
  {
    title: "How we use information",
    items: [
      "To respond to your questions, feedback, or requests.",
      "To measure and improve the site and understand which content is useful.",
      "To keep the site secure and troubleshoot problems.",
    ],
  },
  {
    title: "Cookies and analytics",
    items: [
      "The site may use privacy-friendly analytics and essential cookies to operate and measure the site.",
      "We do not use this data to build advertising profiles and we do not sell it.",
    ],
  },
  {
    title: "How information is shared",
    items: [
      "With hosting and analytics providers used to operate and measure the site.",
      "We do not sell or share personal information as those terms are defined under the CCPA/CPRA.",
    ],
  },
  {
    title: "International data transfers",
    items: [
      "The site is operated from Canada. Service providers may process data in other countries, including the United States, under appropriate safeguards where required.",
    ],
  },
  {
    title: "Your privacy rights (GDPR & CCPA/CPRA)",
    items: [
      "If you are in the EU, UK, or a similar region, you may request access to, correction of, or deletion of personal data, and object to certain processing. Our legal basis is our legitimate interest in running and improving the site and responding to you.",
      "If you are a California resident, you may request to know, delete, or correct personal information, and you will not be treated differently for exercising these rights.",
      "We do not sell or share personal information, so there is nothing to opt out of.",
      "To make a request, email contact@ingenix.online.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      kind="Privacy Policy"
      updated="July 1, 2026"
      intro="Osequencing is operated by Ingenix Online Inc. This policy explains how this marketing site handles information. Data you create inside the Outreach and Engine apps is covered by each product's own privacy policy."
      sections={sections}
      footer="Questions or privacy requests: contact@ingenix.online. This policy is governed by the laws of the Province of Quebec and the applicable federal laws of Canada. We may update it from time to time."
    />
  );
}
