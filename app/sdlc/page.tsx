import type { Metadata } from "next";
import Header from "@/components/Header";
import SdlcHero from "@/components/sdlc/SdlcHero";
import AgentNeutrality from "@/components/sdlc/AgentNeutrality";
import SdlcProblem from "@/components/sdlc/SdlcProblem";
import Deliverables from "@/components/sdlc/Deliverables";
import EngagementModel from "@/components/sdlc/EngagementModel";
import SdlcCaseStudies from "@/components/sdlc/SdlcCaseStudies";
import SdlcFaq from "@/components/sdlc/SdlcFaq";
import SdlcCta from "@/components/sdlc/SdlcCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Coding Agents in Your SDLC — Governance, Gates & Measurement | Top of Mind Labs",
  description:
    "The agent is the easy part. We integrate your coding agents into Git, CI, Jira, and Slack — with branch policy, merge gates, audit logs, and metrics leadership trusts. Agent-agnostic: bring Claude Code, Cursor, Codex, or Amp.",
  keywords: [
    "coding agents",
    "AI SDLC",
    "agent governance",
    "AI code review",
    "merge gates",
    "agent-agnostic",
    "Claude Code",
    "Cursor",
    "Codex",
    "Amp",
    "engineering platform",
    "AI adoption",
  ],
  openGraph: {
    title: "Coding Agents in Your SDLC — Governance, Gates & Measurement | Top of Mind Labs",
    description:
      "The agent is the easy part. We integrate your coding agents into your SDLC — with governance, gates, and measurement leadership trusts.",
    type: "website",
  },
};

export default function SdlcPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SdlcHero />
      <AgentNeutrality />
      <SdlcProblem />
      <Deliverables />
      <EngagementModel />
      <SdlcCaseStudies />
      <SdlcFaq />
      <SdlcCta />
      <Contact />
      <Footer />
    </main>
  );
}
