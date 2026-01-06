"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Lightbulb,
  Brain,
  Database,
  Shield,
  Zap,
  ArrowRight,
  X,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Product Design Workshops",
    description:
      "Accelerate product development with hands-on sessions that validate concepts and build design-driven cultures within growing organizations.",
    gradient: "from-yellow-400 to-orange-500",
    features: ["Rapid Prototyping", "User-Centered Design", "Team Alignment"],
    detailedDescription: "Our Product Design Workshops bring together cross-functional teams to rapidly prototype and validate product ideas. We use design thinking methodologies combined with agile practices to help you build better products faster.",
    deliverables: [
      "User journey maps and personas",
      "Interactive prototypes",
      "Validated product concepts",
      "Design system foundations",
      "Implementation roadmap"
    ],
    timeline: "2-4 weeks",
    idealFor: "Growing companies looking to establish product development best practices and accelerate time-to-market"
  },
  {
    icon: Brain,
    title: "AI Use Case Development",
    description:
      "Strategic identification and implementation of AI applications that drive measurable business value and competitive advantage.",
    gradient: "from-blue-500 to-indigo-600",
    features: ["ROI Analysis", "Proof of Concept", "Production Deployment"],
    detailedDescription: "We help you identify, prioritize, and implement AI use cases that deliver measurable ROI. From initial feasibility studies through production deployment, we ensure your AI investments drive real business value.",
    deliverables: [
      "AI opportunity assessment",
      "Prioritized use case portfolio",
      "Proof of concept implementation",
      "Production-ready AI models",
      "Performance monitoring dashboards"
    ],
    timeline: "3-6 months",
    idealFor: "Enterprises ready to move beyond AI experiments into production-grade implementations"
  },
  {
    icon: Database,
    title: "Data Engineering Agents",
    description:
      "Automated data pipelines and intelligent systems that scale infrastructure and deliver real-time insights at enterprise scale.",
    gradient: "from-green-400 to-cyan-500",
    features: ["Pipeline Automation", "Real-Time Processing", "Data Quality"],
    detailedDescription: "Transform your data infrastructure with intelligent, self-healing pipelines that scale automatically. Our agentic approach reduces operational overhead while improving data quality and reliability.",
    deliverables: [
      "Automated ETL/ELT pipelines",
      "Real-time data streaming",
      "Data quality monitoring",
      "Self-healing mechanisms",
      "Scalable architecture"
    ],
    timeline: "4-8 weeks",
    idealFor: "Organizations struggling with data silos, quality issues, or scaling challenges"
  },
  {
    icon: Shield,
    title: "Agentic SRE Systems",
    description:
      "AI-powered reliability engineering that automates incident response, optimizes performance, and reduces operational toil.",
    gradient: "from-purple-500 to-pink-600",
    features: ["Auto-Healing", "Performance Optimization", "24/7 Monitoring"],
    detailedDescription: "Reduce operational toil and improve system reliability with AI agents that monitor, diagnose, and resolve issues automatically. Our SRE systems learn from incidents to prevent future problems.",
    deliverables: [
      "Automated incident response",
      "Predictive alerting system",
      "Performance optimization",
      "Self-healing infrastructure",
      "Comprehensive monitoring"
    ],
    timeline: "6-10 weeks",
    idealFor: "Engineering teams spending too much time on operational work and incident response"
  },
];

function ServiceCard({ service, index, onLearnMore }: { service: typeof services[0]; index: number; onLearnMore: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full perspective-1000"
    >
      {/* Main Card Container with 3D transform */}
      <motion.div
        animate={isHovered ? { 
          rotateX: (mousePosition.y - 50) * -0.2,
          rotateY: (mousePosition.x - 50) * 0.2,
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
        className="relative bg-slate-800/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-700/50 overflow-hidden h-full"
      >
        {/* Animated Gradient Border */}
        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
             style={{
               background: `linear-gradient(${mousePosition.x * 3.6}deg, transparent, ${service.gradient.split(' ')[1]} 50%, transparent)`,
               padding: '2px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}
        />

        {/* Dynamic Gradient Mesh Background */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${service.gradient.split(' ')[1]}, transparent 50%)`,
          }}
        />

        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />

        {/* Neon Glow Effect */}
        <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} 
             style={{ zIndex: -1 }}
        />

        {/* Content Container */}
        <div className="relative" style={{ transform: "translateZ(50px)" }}>
          {/* Floating Icon with Neon Glow */}
          <motion.div
            animate={isHovered ? { 
              y: -10,
              scale: 1.2,
              rotateY: 10,
            } : {
              y: 0,
              scale: 1,
              rotateY: 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative mb-6 w-fit"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl relative`}>
              {/* Icon Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
              <service.icon className="w-8 h-8 text-white relative z-10" />
            </div>
          </motion.div>

          {/* Title with Text Shadow */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300"
              style={{
                textShadow: isHovered ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none',
                transform: "translateZ(30px)"
              }}>
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300"
             style={{ transform: "translateZ(20px)" }}>
            {service.description}
          </p>

          {/* Features with stagger animation */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + idx * 0.1 }}
                className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-all duration-300"
                style={{ 
                  transform: `translateZ(${10 + idx * 5}px)`,
                }}
              >
                <motion.div
                  animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Zap className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                </motion.div>
                <span className="text-sm font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Learn More Button with Magnetic Effect */}
          <motion.button 
            onClick={onLearnMore}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-2 text-blue-400 font-semibold transition-all duration-300 hover:text-blue-300 group/btn overflow-hidden px-4 py-2 rounded-lg border border-blue-500/0 hover:border-blue-500/50"
            style={{ transform: "translateZ(40px)" }}
          >
            {/* Button Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Learn More</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-full animate-scan" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceModal({ service, isOpen, onClose }: { service: typeof services[0] | null; isOpen: boolean; onClose: () => void }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto my-8"
            >
              {/* Header */}
              <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg flex-shrink-0"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Detailed Description */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {service.detailedDescription}
                  </p>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    What You&apos;ll Get
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline & Ideal For */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">Timeline</span>
                    </div>
                    <p className="text-white font-medium">{service.timeline}</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center gap-2 text-indigo-400 mb-2">
                      <Target className="w-5 h-5" />
                      <span className="font-semibold">Ideal For</span>
                    </div>
                    <p className="text-gray-300 text-sm">{service.idealFor}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Get Started with {service.title}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Stunning Multi-Layer Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900"></div>
        
        {/* Secondary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-purple-900/20"></div>
      </div>
      
      {/* Large Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Glowing Dots */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 1) 1.5px, transparent 1.5px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Radial Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/90"></div>
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            End-to-end AI solutions that transform your business from concept to production
          </p>
          <p className="text-blue-400 font-semibold">
            → Full-stack implementation, not just consulting
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
              onLearnMore={() => handleLearnMore(service)}
            />
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
