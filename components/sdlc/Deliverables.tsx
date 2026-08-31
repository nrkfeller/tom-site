"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { Layers, SlidersHorizontal, GitPullRequest, LineChart } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  text: string;
}

// Four pillars — the work the agent can't do for itself. Each is grounded in
// what's actually breaking for teams right now, not a feature list.
const pillars: Pillar[] = [
  {
    icon: Layers,
    title: "The substrate",
    text:
      "Reproducible environments, fast CI signal, and a written-down knowledge layer the agent — and your new hires — can read. Agent-friendly is human-friendly.",
  },
  {
    icon: SlidersHorizontal,
    title: "Governance & spend",
    text:
      "Smart model routing and defaults, spend measured in tasks not tokens, behind one control plane. We don't sell a model — we tune the economics.",
  },
  {
    icon: GitPullRequest,
    title: "The review loop",
    text:
      "Planning up front, real review, and evals that catch slop before merge. You don't have too many PRs — you have too many bad PRs.",
  },
  {
    icon: LineChart,
    title: "Measurement",
    text:
      "Tasks not tokens. Cycle time, incidents, adoption, trust. The numbers leadership asked for from day one.",
  },
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
      </div>
    </section>
  );
}
