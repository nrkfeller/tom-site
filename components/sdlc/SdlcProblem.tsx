"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { Boxes, Gavel, ShieldAlert, Repeat, Gauge } from "lucide-react";

interface Problem {
  icon: LucideIcon;
  title: string;
  text: string;
}

const problems: Problem[] = [
  {
    icon: Boxes,
    title: "Fragmented adoption",
    text: "Three teams, three agents, three sets of rules. Nobody's config looks the same.",
  },
  {
    icon: Gavel,
    title: "No governance",
    text: "Agents commit code with no branch policy, no review path, no audit trail.",
  },
  {
    icon: ShieldAlert,
    title: "Untrusted output",
    text: "Reviewers rubber-stamp PRs they can't verify, or block everything and lose the speed.",
  },
  {
    icon: Repeat,
    title: "Broken feedback loop",
    text: "The agent never sees what broke in CI or what got reverted, so it repeats the same mistakes.",
  },
  {
    icon: Gauge,
    title: "No measurement",
    text: "Leadership can't tell if any of this is making you faster, safer, or neither.",
  },
];

export default function SdlcProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-3">
            You have agents. What you don&apos;t have is the SDLC around them.
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Most teams we meet are mid-adoption. The agents are running. The guardrails
            aren&apos;t. Five gaps show up every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {problems.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface rounded-xl border border-[hsl(var(--border))] hover:border-[hsl(var(--border-strong))] hover:shadow-sm transition-all duration-400 p-5 flex flex-col"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-soft border border-[hsl(var(--accent-soft))] flex items-center justify-center mb-4">
                <p.icon className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-[15px] font-medium text-foreground mb-1.5">
                {p.title}
              </h3>
              <p className="text-muted text-[13px] leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
