import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top of Mind Labs — Deployed AI Researchers & Engineers | AI Strategy & Implementation",
  description: "Get expert deployed AI researchers and engineers embedded in your team. Transform your enterprise with production-ready AI systems that drive measurable business outcomes—delivered in months, not years.",
  keywords: ["deployed AI researchers", "deployed AI engineers", "AI consulting", "machine learning engineers", "AI talent", "enterprise AI", "AI transformation", "data engineering", "embedded AI experts"],
  authors: [{ name: "Top of Mind Labs" }],
  openGraph: {
    title: "Top of Mind Labs — Deployed AI Researchers & Engineers",
    description: "Expert AI researchers and engineers integrated directly into your team, delivering production-ready solutions while building your internal AI capabilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
