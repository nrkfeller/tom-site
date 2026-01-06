"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Top of Mind Labs transformed our data infrastructure in just 4 months. Their AI-driven approach reduced our operational costs by 40% while improving accuracy. Exceptional team.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Fortune 500 Financial Services",
    rating: 5,
  },
  {
    quote: "What impressed us most was their systematic process. They didn't just build models—they built production-ready systems with monitoring, testing, and clear handoff. This is the real deal.",
    author: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "PE-Backed Healthcare Platform",
    rating: 5,
  },
  {
    quote: "We've worked with several AI consultancies. Top of Mind Labs stands out for their ability to translate complex ML concepts into tangible business value. ROI was clear within 60 days.",
    author: "Jennifer Park",
    role: "Chief Innovation Officer",
    company: "Global Manufacturing Leader",
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-500/10" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
        &quot;{testimonial.quote}&quot;
      </p>

      {/* Author Info - Hidden for now */}
      {/* Uncomment when you have real client testimonials
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <div className="text-white font-semibold">{testimonial.author}</div>
          <div className="text-gray-400 text-sm">{testimonial.role}</div>
          <div className="text-blue-400 text-sm">{testimonial.company}</div>
        </div>
      </div>
      */}

      {/* Anonymous attribution */}
      {/* <div className="text-gray-400 text-sm italic">
        — Verified Client
      </div> */}
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Client Logos Section - Hidden for now */}
        {/* Uncomment when you have real client logos
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider">
            Trusted by Portfolio Companies of Leading PE Firms
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-16 bg-slate-700/30 rounded-lg flex items-center justify-center border border-slate-600/30"
              >
                <span className="text-gray-500 text-xs font-semibold">Client Logo {i}</span>
              </div>
            ))}
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}

