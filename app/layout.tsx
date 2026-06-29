import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osequencing — B2B Outreach Suite",
  description:
    "Two tools built for serious B2B outreach: manual LinkedIn sequencing and automated cold email operations.",
  metadataBase: new URL("https://osequencing.com"),
  openGraph: {
    title: "Osequencing — B2B Outreach Suite",
    description:
      "Two tools built for serious B2B outreach: manual LinkedIn sequencing and automated cold email operations.",
    url: "https://osequencing.com",
    siteName: "Osequencing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.className} h-full`}>
      <body className="min-h-full flex flex-col bg-[#f0efe8] text-[#121212] antialiased">
        {children}
      </body>
    </html>
  );
}
