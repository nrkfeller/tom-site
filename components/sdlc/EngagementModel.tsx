"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Phase {
  index: string;
  label: string;
  duration: string;
  text: string;
}

// A playbook we hand off, not a platform you rent.
const phases: Phase[] = [
  {
    index: "01",
    label: "Assess",
    duration: "Weeks 1–2",
    text:
      "We map what's running, what's exposed, and what to fix first. You keep the report.",
  },
  {
    index: "02",
    label: "Integrate",
    duration: "Weeks 3–6",
    text:
      "We wire the controls into your Git, CI, and tracker — in your repos, not ours.",
  },
  {
    index: "03",
    label: "Scale & Measure",
    duration: "Weeks 7–10",
    text:
      "We roll it out, stand up the dashboard, and hand it over. You run it.",
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
          <p className="text-xs text-muted uppercase tracking-widest mb-3">Engagement</p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground tracking-tight mb-3">
            How we engage
          </h2>
          <p className="text-muted text-base leading-relaxed">
            A playbook we hand off, not a platform you rent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface rounded-xl border border-[hsl(var(--border))] p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent-soft border border-[hsl(var(--accent-soft))] font-mono text-xs text-accent">
                  {phase.index}
                </span>
                <span className="font-mono nums text-sm text-muted tracking-tight">
                  {phase.duration}
                </span>
              </div>

              <h3 className="text-xl font-medium text-foreground mb-3">
                {phase.label}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">{phase.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
