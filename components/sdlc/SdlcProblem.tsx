"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Four things that break when teams adopt agents without the substrate.
// Each maps to a real signal from the field: fragmented adoption, the review
// bottleneck, unattributed spend, and codebase rot within months.
const problems = [
  "Every engineer runs a different agent. No shared config, no shared rules.",
  "PRs pile up. Reviewers rubber-stamp what they can't verify — or block everything.",
  "The bill climbs. Nobody can tell if it's making you faster.",
  "Three months in, the codebase is harder to change than before the agents.",
];

export default function SdlcProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground tracking-tight mb-4 text-balance">
            You have agents. You don&apos;t have the substrate.
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Most teams we meet are mid-adoption. Four things break.
          </p>
        </motion.div>

        <div className="border-t border-[hsl(var(--border))]">
          {problems.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-5 py-6 border-b border-[hsl(var(--border))]"
            >
              <span className="font-mono nums text-sm text-accent pt-0.5 flex-shrink-0 w-8">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground text-lg leading-relaxed">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
