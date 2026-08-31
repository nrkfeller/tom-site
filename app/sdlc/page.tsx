import type { Metadata } from "next";
import Header from "@/components/Header";
import SdlcHero from "@/components/sdlc/SdlcHero";
import SdlcProblem from "@/components/sdlc/SdlcProblem";
import Deliverables from "@/components/sdlc/Deliverables";
import EngagementModel from "@/components/sdlc/EngagementModel";
import SdlcFaq from "@/components/sdlc/SdlcFaq";
import SdlcCta from "@/components/sdlc/SdlcCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Coding Agents in Production — Governance, Gates & Measurement | Top of Mind Labs",
  description:
    "The agent is the easy part. We build the substrate underneath your coding agents — governance, gates, and the numbers leadership trusts. Agent-agnostic: bring Claude Code, Cursor, Codex, or Amp.",
  keywords: [
    "coding agents",
    "agent engineering",
    "agent governance",
    "AI code review",
    "merge gates",
    "agent-agnostic",
    "Claude Code",
    "Cursor",
    "Codex",
    "Amp",
    "AI spend",
    "engineering platform",
  ],
  openGraph: {
    title: "Coding Agents in Production — Governance, Gates & Measurement | Top of Mind Labs",
    description:
      "The agent is the easy part. We build the substrate underneath your coding agents.",
    type: "website",
  },
};

export default function SdlcPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SdlcHero />
      <SdlcProblem />
      <Deliverables />
      <EngagementModel />
      <SdlcFaq />
      <SdlcCta />
      <Contact />
      <Footer />
    </main>
  );
}
