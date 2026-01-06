"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Target,
  FlaskConical,
  Cog,
  TestTube,
  Rocket,
  RefreshCw,
  ArrowDown,
} from "lucide-react";

const processSteps = [
  {
    icon: Target,
    number: "01",
    title: "Opportunity & Readiness Alignment",
    subtitle: "The Matchmaking",
    description:
      "We match high-value business pain points to our solution capabilities, ensuring data readiness and producing a scoped project charter with clear success metrics.",
    color: "from-blue-500 to-indigo-600",
    highlights: ["Portfolio Assessment", "Data Readiness", "Success Metrics"],
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Collaborative Research & Solution Design",
    subtitle: "The Prototype",
    description:
      "Develop a Minimum Viable Model (MVM) that achieves target performance through collaborative research and domain expert validation.",
    color: "from-indigo-600 to-purple-600",
    highlights: ["Novel AI Models", "Ground Truth Validation", "Model Cards"],
  },
  {
    icon: Cog,
    number: "03",
    title: "Engineering Handoff & ML System Design",
    subtitle: "The Translation",
    description:
      "Shift from research to production-ready systems with full-stack infrastructure including data pipelines, model serving, and monitoring.",
    color: "from-purple-600 to-pink-600",
    highlights: ["Infrastructure Design", "Production Environment", "Compliance"],
  },
  {
    icon: TestTube,
    number: "04",
    title: "Shadow Testing & A/B Evaluation",
    subtitle: "The Validation",
    description:
      "Prove business value in low-risk environments through shadow mode testing and A/B evaluation with real users before full deployment.",
    color: "from-pink-600 to-red-500",
    highlights: ["Shadow Mode", "A/B Testing", "Metric Validation"],
  },
  {
    icon: Rocket,
    number: "05",
    title: "Production Deployment & MLOps",
    subtitle: "The Launch",
    description:
      "Full rollout with comprehensive MLOps including drift detection, performance monitoring, and automated feedback mechanisms.",
    color: "from-red-500 to-orange-500",
    highlights: ["100% Rollout", "Drift Detection", "Continuous Monitoring"],
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Knowledge Transfer & Iteration",
    subtitle: "The Future",
    description:
      "Leverage shared learning for the next project. Documentation and insights create a knowledge base for continuous improvement and long-term strategic advantage.",
    color: "from-orange-500 to-yellow-500",
    highlights: ["Documentation", "IP Assignment", "Next Opportunity"],
  },
];

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      className={`flex flex-col md:flex-row gap-8 items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content Card with 3D Effects */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex-1 perspective-1000"
      >
        <motion.div
          animate={isHovered ? { 
            rotateX: (mousePosition.y - 50) * -0.1,
            rotateY: (mousePosition.x - 50) * 0.1,
            scale: 1.03,
            z: 30
          } : {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            z: 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-700/50 overflow-hidden group"
        >
          {/* Animated Gradient Border */}
          <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
               style={{
                 background: `linear-gradient(${mousePosition.x * 3.6}deg, transparent, ${step.color.split(' ')[1]} 50%, transparent)`,
                 padding: '2px',
                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 maskComposite: 'exclude',
               }}
          />

          {/* Dynamic Gradient Mesh */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${step.color.split(' ')[1]}, transparent 50%)`,
            }}
          />

          {/* Spotlight */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(500px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.08), transparent 40%)`,
            }}
          />

          {/* Neon Glow */}
          <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500`} 
               style={{ zIndex: -1 }}
          />

          <div className="relative" style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-center gap-4 mb-4">
              {/* Icon with 3D effect */}
              <motion.div
                animate={isHovered ? { 
                  y: -8,
                  scale: 1.15,
                  rotateZ: 10,
                } : {
                  y: 0,
                  scale: 1,
                  rotateZ: 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl relative`}>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                  <step.icon className="w-8 h-8 text-white relative z-10" />
                </div>
              </motion.div>
              
              <div>
                <div className={`text-4xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block`}
                     style={{
                       textShadow: isHovered ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'none',
                     }}>
                  {step.number}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300"
                style={{
                  textShadow: isHovered ? '0 0 20px rgba(59, 130, 246, 0.4)' : 'none',
                  transform: "translateZ(20px)"
                }}>
              {step.title}
            </h3>
            
            <p className="text-blue-400 font-semibold mb-4 group-hover:text-blue-300 transition-colors"
               style={{ transform: "translateZ(15px)" }}>
              {step.subtitle}
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-100 transition-colors"
               style={{ transform: "translateZ(10px)" }}>
              {step.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {step.highlights.map((highlight, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 group-hover:border-blue-400/50 transition-all cursor-default"
                  style={{ transform: `translateZ(${5 + idx * 2}px)` }}
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Scanline */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-15">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-full animate-scan" />
          </div>
        </motion.div>
      </motion.div>

      {/* Connector */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg cursor-pointer`}
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </motion.div>
        {index < processSteps.length - 1 && (
          <div className="w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
        )}
      </div>

      {/* Placeholder for alignment */}
      <div className="flex-1 hidden md:block"></div>
    </div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Stunning Multi-Layer Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-indigo-900/40 to-slate-900"></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/30 via-transparent to-blue-900/30"></div>
      </div>
      
      {/* Massive Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-[900px] h-[900px] bg-indigo-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-pink-600/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "5s" }}></div>
      </div>
      
      {/* Sophisticated Diagonal Lines */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 50px,
          rgba(59, 130, 246, 0.5) 50px,
          rgba(59, 130, 246, 0.5) 51px
        )`
      }}></div>
      
      {/* Subtle Dots Matrix */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 0.8) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Hexagon Pattern (Optional Enhancement) */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, rgba(79, 70, 229, 0.4) 2px, transparent 2px)`,
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0, 40px 40px'
      }}></div>
      
      {/* Dark Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/20 to-slate-900"></div>
      
      {/* Top Glow Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-tl-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            A proven 6-step methodology that transforms AI concepts into production-ready solutions
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2">
            <span className="text-2xl">⚡</span>
            <p className="text-blue-300 font-semibold">
              From opportunity assessment to MLOps in 3-6 months
            </p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>

        {/* Cycle Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-xl">
            <RefreshCw className="w-6 h-6 animate-spin" style={{ animationDuration: "3s" }} />
            <span className="font-semibold text-lg">Continuous Improvement Cycle</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
