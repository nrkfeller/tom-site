"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  GitBranch,
  Workflow,
  Ticket,
  MessageSquare,
  ShieldCheck,
  LineChart,
  ArrowRight,
} from "lucide-react";

interface Touchpoint {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
}

// One entry per SDLC touchpoint. The spine of the page.
const touchpoints: Touchpoint[] = [
  {
    icon: Code2,
    title: "IDE",
    problem:
      "Every engineer runs a different agent config. Rules drift, prompts aren't versioned, and there's no source of truth for what the agent is allowed to do.",
    solution:
      "Standardized, versioned agent rules and config in your repo. Everyone runs the same guardrails, and changes ship through review — not Slack screenshots.",
  },
  {
    icon: GitBranch,
    title: "Git",
    problem:
      "Agent-authored commits land without provenance, branch policy, or secrets checks. You can't tell what's human, what's machine, or what leaked.",
    solution:
      "Branch and PR policy for agent commits, provenance tags on every change, and secrets safeguards before push. Reviewers see exactly what they're approving.",
  },
  {
    icon: Workflow,
    title: "CI / CD",
    problem:
      "The agent opens PRs blind to your build. Failing tests, lint, and gates show up late — or not at all — and merge is a coin flip.",
    solution:
      "The agent reads build, test, and eval signal and fixes what fails before review. Merge gates treat agent PRs like any other: no fast lane, no silent merges.",
  },
  {
    icon: Ticket,
    title: "Issue tracker",
    problem:
      "The agent works from a Slack summary and guesses the scope. Acceptance criteria never reach it, and ticket status drifts from what actually shipped.",
    solution:
      "Ticket context in — acceptance criteria, linked code, definitions of done. Status updates out — the tracker reflects what the agent actually did.",
  },
  {
    icon: MessageSquare,
    title: "Slack",
    problem:
      "Agent progress lives in a tool nobody on the team watches. Draft PRs and review asks pile up where no one is looking.",
    solution:
      "Progress, draft PRs, and review asks surface in the channel your team already lives in — with links and context, not copy-paste.",
  },
  {
    icon: ShieldCheck,
    title: "Security & governance",
    problem:
      "No one controls which agents reach which repos, data, or prod. There's no audit trail for who ran what, or what it touched.",
    solution:
      "SSO and access tiers per agent and repo, audit logs for every run, and policy on what data the agent can read and send. Cross-cutting — every touchpoint above.",
  },
];

// The metric names leadership asks for. No invented numbers — these are the
// metrics to wire up, not claimed results.
const metrics = [
  "Cycle time",
  "Coverage",
  "Defect rate",
  "Adoption",
  "Trust",
];

export default function Deliverables() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="deliver" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-3">What We Deliver</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-3">
            One control per SDLC touchpoint
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Each touchpoint gets the problem it has today and the control we put in front
            of it. Same shape whether the agent runs in your IDE or in the cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {touchpoints.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface rounded-xl border border-[hsl(var(--border))] hover:border-[hsl(var(--border-strong))] hover:shadow-sm transition-all duration-400 p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-accent-soft border border-[hsl(var(--accent-soft))] flex items-center justify-center flex-shrink-0">
                  <t.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-base font-medium text-foreground">{t.title}</h3>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted mb-1.5">
                    Problem
                  </p>
                  <p className="text-muted text-[13px] leading-relaxed">{t.problem}</p>
                </div>
                <div className="border-t border-[hsl(var(--border))] pt-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-accent mb-1.5 flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3" />
                    What we put in
                  </p>
                  <p className="text-foreground text-[13px] leading-relaxed">
                    {t.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Measurement — the capstone. The thing leadership is waiting for. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 rounded-xl border border-[hsl(var(--border-strong))] bg-surface-raised p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex items-center gap-3 md:w-64 md:flex-shrink-0">
              <div className="w-9 h-9 rounded-lg bg-surface border border-[hsl(var(--border-strong))] flex items-center justify-center flex-shrink-0">
                <LineChart className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-base font-medium text-foreground">Measurement</h3>
            </div>

            <div className="flex-1 space-y-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted mb-1.5">
                  Problem
                </p>
                <p className="text-muted text-[13px] leading-relaxed max-w-2xl">
                  Leadership asks &ldquo;is this working?&rdquo; and the answer is a vibe. No
                  baseline, no cycle-time number, no defect signal — so the whole program
                  reads as faith, not proof.
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-accent mb-1.5 flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3" />
                  What we put in
                </p>
                <p className="text-foreground text-[13px] leading-relaxed max-w-2xl">
                  A dashboard leadership trusts: the same numbers whether the code came from a
                  human or an agent. Cycle time, coverage, and defect rate on the delivery
                  side; adoption and trust on the people side.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {metrics.map((m) => (
                  <span
                    key={m}
                    className="font-mono text-xs uppercase tracking-widest text-muted/80 bg-surface border border-[hsl(var(--border))] rounded-lg px-3 py-1.5"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
