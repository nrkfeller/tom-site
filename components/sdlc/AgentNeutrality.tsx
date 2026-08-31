"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop, Cloud } from "lucide-react";

// Real agents, split by where the agent *runs* — your environment vs. the
// vendor's cloud. We name them; we don't favor any of them.
const localAgents = ["Claude Code", "Cursor", "Cline"];
const remoteAgents = ["Codex", "Amp"];

export default function AgentNeutrality() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Chip = ({ name }: { name: string }) => (
    <span className="font-mono text-sm text-foreground border border-[hsl(var(--border-strong))] bg-background rounded-lg px-4 py-2">
      {name}
    </span>
  );

  return (
    <section className="py-14 border-y border-[hsl(var(--border))] bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-8"
        >
          Works with the agent you already run
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-xl border border-[hsl(var(--border))] bg-background p-6"
          >
            <div className="flex items-center gap-2 text-muted text-xs uppercase tracking-widest mb-4">
              <Laptop className="w-4 h-4 text-accent" />
              Local — in your IDE &amp; terminal
            </div>
            <div className="flex flex-wrap gap-2.5">
              {localAgents.map((name) => (
                <Chip key={name} name={name} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-xl border border-[hsl(var(--border))] bg-background p-6"
          >
            <div className="flex items-center gap-2 text-muted text-xs uppercase tracking-widest mb-4">
              <Cloud className="w-4 h-4 text-accent" />
              Remote — in the vendor&apos;s cloud
            </div>
            <div className="flex flex-wrap gap-2.5">
              {remoteAgents.map((name) => (
                <Chip key={name} name={name} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-sm text-muted mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          We don&apos;t sell or favor an agent. The controls live in your SDLC, not in a
          vendor choice — so you keep your options open.
        </motion.p>
      </div>
    </section>
  );
}
