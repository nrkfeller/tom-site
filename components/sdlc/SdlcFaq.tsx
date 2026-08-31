"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

const faqs: Faq[] = [
  {
    q: "Do you require us to standardize on one agent?",
    a: "No. We're agent-agnostic. Bring Claude Code, Cursor, Cline, Codex, Amp — or several at once. The controls live in your SDLC, not in a vendor choice, so you keep your options open and can switch agents without redoing the governance.",
  },
  {
    q: "How do you handle our data and IP?",
    a: "Agent runs and your code stay in your environment and your accounts. We set policy on what data each agent can read and send, and we don't host your code or your prompts. The config, gates, and audit logs all land in your repos — not ours.",
  },
  {
    q: "We're already mid-adoption — can you help?",
    a: "Yes — that's the most common place we start. If three teams already run three different agents with no shared rules, we meet you there. The Assess phase maps what's running and what's exposed before we change anything.",
  },
  {
    q: "Do you build agents, or integrate them?",
    a: "Integrate. We don't sell an agent and we don't lock you to one. We make the SDLC around whatever agent you run hold up — branch policy, merge gates, audit logs, and the metrics leadership trusts.",
  },
];

export default function SdlcFaq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-3">
            Questions we hear first
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Mostly from VPs of Engineering and platform leads already running agents — and
            not sure the pipeline around them holds up.
          </p>
        </motion.div>

        <div className="border border-[hsl(var(--border))] rounded-xl bg-surface overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                className={index < faqs.length - 1 ? "border-b border-[hsl(var(--border))]" : ""}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-surface-raised/50 transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-foreground">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-muted text-[13px] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
