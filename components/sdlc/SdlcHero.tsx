"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

// Concrete nouns over vague ones. The touchpoints the work actually lives in.
const touchpoints = ["Git", "CI", "Jira", "Slack", "Security", "Metrics"];

export default function SdlcHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Warm grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(28 10% 50%) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(28 10% 50%) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Soft warm glow top-left */}
      <div className="absolute -top-40 -left-32 w-[40rem] h-[40rem] rounded-full bg-accent-soft blur-3xl opacity-60 pointer-events-none" />
      {/* Top fade into grid */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[hsl(var(--background))] to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-9"
        >
          {/* Positioning badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2.5 bg-surface border border-[hsl(var(--border))] text-muted text-sm px-4 py-2 rounded-full">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Agent-agnostic · no vendor lock-in
            </span>
          </motion.div>

          {/* Heading — outcome, not the tool */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium leading-[1.05] tracking-tight text-balance max-w-4xl"
          >
            <span className="text-foreground">The agent is the easy part.</span>
            <br />
            <span className="text-muted">Wiring it into your SDLC is the hard part.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-lg text-muted max-w-2xl leading-relaxed"
          >
            We integrate your coding agents into Git, CI, Jira, and Slack — with branch
            policy, merge gates, audit logs, and metrics leadership actually trusts. Bring
            whatever agent you already run.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-medium text-sm hover:bg-accent-hover transition-all duration-300"
            >
              Book a technical assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
            <Link
              href="#deliver"
              className="inline-flex items-center justify-center gap-2 text-foreground px-7 py-3.5 rounded-lg font-medium text-sm border border-[hsl(var(--border-strong))] hover:border-[hsl(var(--muted))] hover:bg-surface transition-all duration-300"
            >
              See what we deliver
            </Link>
          </motion.div>

          {/* Touchpoint strip — concrete nouns, no invented numbers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="pt-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">
                Where the work happens
              </p>
              <span className="h-px flex-1 bg-[hsl(var(--border))]" />
            </div>

            <div className="flex flex-wrap gap-2.5 max-w-3xl">
              {touchpoints.map((t) => (
                <span
                  key={t}
                  className="font-mono text-sm uppercase tracking-widest text-muted/80 border border-[hsl(var(--border))] bg-surface rounded-lg px-3.5 py-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="hidden sm:flex items-center gap-2 text-muted text-xs pt-4"
          >
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            <span className="uppercase tracking-[0.2em]">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
