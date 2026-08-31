"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { Layers, SlidersHorizontal, Network, GitPullRequest, LineChart } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  text: string;
}

// Four pillars — the work the agent can't do for itself. Each maps to a real
// wall teams hit: the substrate the agent runs on, the economics of running
// it, the systems it can reach, and the review that keeps it honest.
const pillars: Pillar[] = [
  {
    icon: Layers,
    title: "The substrate",
    text:
      "Remote agents and sandboxes so the work survives the session — not just on a laptop. Reproducible environments, fast CI signal, and a knowledge layer the agent and your new hires can both read.",
  },
  {
    icon: SlidersHorizontal,
    title: "Governance & spend",
    text:
      "Sensible defaults on the harnesses you already run — model, reasoning, speed — for the best perf/cost, with spend measured in tasks not tokens behind one control plane. We don't sell a model; we tune the economics.",
  },
  {
    icon: Network,
    title: "MCP integrations",
    text:
      "Wire the agent to your internal systems over MCP — warehouse, traces, logs, tracker. An alert gets investigated with context from all of them, not just the one that paged.",
  },
  {
    icon: GitPullRequest,
    title: "The review loop",
    text:
      "Planning up front, real review, and evals that catch slop before merge. You don't have too many PRs — you have too many bad PRs.",
  },
];

// The metrics leadership actually asks for. No invented numbers — these are
// the dials to wire up, not claimed results.
const metrics = [
  "Cycle time",
  "Coverage",
  "Defect rate",
  "Incidents",
  "Adoption",
  "Trust",
];

export default function Deliverables() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="build" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-3">What We Build</p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground tracking-tight mb-3">
            What we build underneath
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Four pillars — the work the agent can&apos;t do for itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface rounded-xl border border-[hsl(var(--border))] hover:border-[hsl(var(--border-strong))] hover:shadow-sm transition-all duration-400 p-7"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-soft border border-[hsl(var(--accent-soft))] flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{p.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Measurement — the capstone. The "so what" leadership is waiting for. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 rounded-xl border border-[hsl(var(--border-strong))] bg-surface-raised p-7 md:p-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-surface border border-[hsl(var(--border-strong))] flex items-center justify-center flex-shrink-0">
              <LineChart className="w-4 h-4 text-accent" />
            </div>
            <h3 className="text-lg font-medium text-foreground">Measurement</h3>
          </div>
          <p className="text-muted text-[15px] leading-relaxed max-w-2xl mb-5">
            The dashboard leadership trusts — the same numbers whether the code came from a
            human or an agent.
          </p>
          <div className="flex flex-wrap gap-2">
            {metrics.map((m) => (
              <span
                key={m}
                className="font-mono text-xs uppercase tracking-widest text-muted/80 bg-surface border border-[hsl(var(--border))] rounded-lg px-3 py-1.5"
              >
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
