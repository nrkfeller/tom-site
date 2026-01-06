"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Shield, Users, Zap, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "3-6 Month Time to Value",
    description: "See measurable results fast. We deliver production-ready systems in months, not years.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Quality",
    description: "Built for scale with comprehensive monitoring, testing, and compliance from day one.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We work alongside your team, ensuring knowledge transfer and long-term success.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our clients see average 40% cost reduction and 3x efficiency gains within first year.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Award,
    title: "Battle-Tested Methodology",
    description: "6-step process refined across 50+ successful enterprise AI implementations.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Zap,
    title: "Production-First Mindset",
    description: "We don't just build models—we build systems that work reliably at scale.",
    color: "from-green-500 to-emerald-500",
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      <motion.div
        animate={isHovered ? { 
          rotateX: (mousePosition.y - 50) * -0.15,
          rotateY: (mousePosition.x - 50) * 0.15,
          scale: 1.05,
          z: 50
        } : {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          z: 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-6 border border-slate-700/50 h-full relative overflow-hidden"
      >
        {/* Animated Gradient Border */}
        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
             style={{
               background: `linear-gradient(${mousePosition.x * 3.6}deg, transparent, ${benefit.color.split(' ')[1]} 50%, transparent)`,
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
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${benefit.color.split(' ')[1]}, transparent 50%)`,
          }}
        />

        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />

        {/* Neon Glow */}
        <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} 
             style={{ zIndex: -1 }}
        />

        <div className="relative" style={{ transform: "translateZ(30px)" }}>
          {/* Icon with 3D effect */}
          <motion.div
            animate={isHovered ? { 
              y: -8,
              scale: 1.15,
              rotateY: 10,
            } : {
              y: 0,
              scale: 1,
              rotateY: 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative mb-4 w-fit"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-2xl relative`}>
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${benefit.color} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
              <benefit.icon className="w-7 h-7 text-white relative z-10" />
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300"
              style={{
                textShadow: isHovered ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none',
                transform: "translateZ(20px)"
              }}>
            {benefit.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300"
             style={{ transform: "translateZ(15px)" }}>
            {benefit.description}
          </p>
        </div>

        {/* Scanline */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-full animate-scan" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Stunning Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/20 via-transparent to-indigo-900/20"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Top of Mind Labs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re not just consultants—we&apos;re your technical partners committed to your success
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/30 rounded-2xl p-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300">
                Join 50+ enterprises already seeing results
              </p>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

