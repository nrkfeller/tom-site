"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileSearch } from "lucide-react";

// Placeholder slots — pending publishable engagement data.
// The shape of what we'll publish; no invented results.
const slots = [
  {
    n: "01",
    title: "Governance rollout",
    blurb:
      "How a team put branch policy, provenance, and merge gates in front of agent-authored code — without slowing the PRs that were already shipping.",
  },
  {
    n: "02",
    title: "Regulated SDLC",
    blurb:
      "SSO, access tiers, and audit logs across local and remote agents in a compliance-heavy org that needed every run attributable.",
  },
  {
    n: "03",
    title: "Measurement that landed",
    blurb:
      "The cycle-time, coverage, and defect-rate dashboard leadership actually used to decide whether to keep going.",
  },
];

export default function SdlcCaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-3">
            Engagement data, pending
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            We&apos;re gathering publishable engagement data for this work. The slots below
            show the shape of what&apos;s coming — what shipped, what it replaced, and the
            outcome it drove.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {slots.map((slot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-dashed border-[hsl(var(--border-strong))] bg-surface/60 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-dashed border-[hsl(var(--border-strong))] font-mono text-xs text-muted">
                  {slot.n}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-muted/70 bg-background border border-[hsl(var(--border))] rounded-full px-2.5 py-1">
                  <FileSearch className="w-3 h-3" />
                  Placeholder
                </span>
              </div>

              <h3 className="text-base font-medium text-foreground mb-2">
                {slot.title}
              </h3>
              <p className="text-muted text-[13px] leading-relaxed">{slot.blurb}</p>

              <p className="mt-auto pt-5 text-[11px] uppercase tracking-[0.16em] text-muted/60">
                Pending engagement data
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
