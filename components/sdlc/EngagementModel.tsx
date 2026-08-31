"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ScanLine,
  Gauge,
  GitMerge,
  Lock,
  Rocket,
  LineChart,
} from "lucide-react";

interface Step {
  icon: LucideIcon;
  name: string;
  text: string;
}

interface Phase {
  index: string;
  label: string;
  duration: string;
  description: string;
  items: Step[];
}

const phases: Phase[] = [
  {
    index: "01",
    label: "Assess",
    duration: "Weeks 1–2",
    description:
      "We find where agents are already running, what's ungoverned, and what's breaking. You get a scored SDLC readiness report and a prioritized fix list — yours to keep, whether or not you work with us next.",
    items: [
      {
        icon: ScanLine,
        name: "Discover",
        text: "We map every agent in use, where it runs, and what it can touch — local in your IDE and remote in the cloud.",
      },
      {
        icon: Gauge,
        name: "Score",
        text: "We grade each SDLC touchpoint — IDE, Git, CI, tracker, Slack, security — and rank what to fix first.",
      },
    ],
  },
  {
    index: "02",
    label: "Integrate",
    duration: "Weeks 3–6",
    description:
      "We wire the controls into your real tools for one or two teams — versioned agent config in your repo, merge gates in CI, status sync to Jira, PRs surfaced in Slack. All of it lands in your code, not ours.",
    items: [
      {
        icon: GitMerge,
        name: "Wire",
        text: "We implement branch policy, provenance tags, secrets checks, and merge gates in your existing Git and CI — not a new platform.",
      },
      {
        icon: Lock,
        name: "Govern",
        text: "SSO, access tiers, and audit logs so every agent run is attributable — across local and remote agents alike.",
      },
    ],
  },
  {
    index: "03",
    label: "Scale & Measure",
    duration: "Weeks 7–10",
    description:
      "We roll the playbook to the rest of the org and stand up the metrics dashboard. Then we hand over the docs, runbooks, and dashboards. Your team runs it; we're done when you don't need us.",
    items: [
      {
        icon: Rocket,
        name: "Roll out",
        text: "We extend the controls team by team and write the playbook your platform team will maintain after we leave.",
      },
      {
        icon: LineChart,
        name: "Measure",
        text: "Cycle time, coverage, defect rate, and adoption/trust metrics — the numbers leadership asked for from day one.",
      },
    ],
  },
];

export default function EngagementModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="engagement" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-3">Engagement Model</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-3">
            Assess, integrate, scale &amp; measure
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            A playbook we hand off, not a platform you rent. We work in your repos and your
            tools, then leave your team able to run it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-surface rounded-xl border border-[hsl(var(--border))] p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent-soft border border-[hsl(var(--accent-soft))] font-mono text-xs text-accent">
                  {phase.index}
                </span>
                <span className="font-mono nums text-sm text-muted tracking-tight">
                  {phase.duration}
                </span>
              </div>

              <h3 className="text-lg font-medium text-foreground mb-2">
                {phase.label}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {phase.description}
              </p>

              <div className="mt-auto border-t border-[hsl(var(--border))]">
                {phase.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 py-4 ${
                      i < phase.items.length - 1 ? "border-b border-[hsl(var(--border))]" : ""
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent-soft border border-[hsl(var(--accent-soft))] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium text-foreground mb-0.5">
                        {item.name}
                      </h4>
                      <p className="text-muted text-[13px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
