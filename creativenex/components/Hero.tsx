"use client";

import { motion } from "framer-motion";
import { RiArrowRightLine, RiPlayFill, RiCpuLine, RiPulseLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/10 mb-10 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            <RiPulseLine className="text-brand-cyan animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/90">
              Leading the 2026 Software Revolution
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black font-display leading-[0.95] tracking-tighter mb-10"
          >
            CREATIVE<span className="text-gradient">NEX</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/40 block mt-4">
              Neural Solutions Architecture
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/50 mb-14 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We deploy advanced AI-driven software ecosystems that transform business intelligence into autonomous growth machines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button className="group relative px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center gap-3 hover:bg-brand-cyan hover:text-white transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              INITIATE PROJECT
              <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group px-10 py-5 rounded-2xl glass border border-white/10 font-bold flex items-center gap-4 hover:bg-white/5 transition-all text-white/80">
              <div className="w-10 h-10 rounded-full bg-brand-violet/20 flex items-center justify-center text-brand-violet group-hover:bg-brand-violet group-hover:text-white transition-colors text-xl">
                <RiPlayFill />
              </div>
              SYSTEM DEMO
            </button>
          </motion.div>
        </div>

        {/* Neural Core Visual Component */}

      </div>
    </section>
  );
};

export default Hero;
