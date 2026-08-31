import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top of Mind Labs — AI Researchers & Engineers Embedded in Your Team",
  description: "We deploy senior AI researchers and engineers directly into your team. Production AI systems in months, not years — with full knowledge transfer so your team owns it.",
  keywords: ["AI engineers", "AI researchers", "embedded AI team", "AI consulting", "machine learning", "enterprise AI", "data engineering", "LLM solutions", "AI implementation"],
  authors: [{ name: "Top of Mind Labs" }],
  openGraph: {
    title: "Top of Mind Labs — AI Researchers & Engineers Embedded in Your Team",
    description: "Senior AI talent deployed into your organization. We build production systems, train your team, and drive measurable results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://visitor-id.prd.coffee.work/pixel?id=e3bc0916-241c-45a9-bb21-4e712ee17aec"
          strategy="afterInteractive"
          async
        />
      </body>
    </html>
  );
}
