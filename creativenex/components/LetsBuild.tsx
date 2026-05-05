"use client";

import { motion } from "framer-motion";
import { RiArrowRightLine, RiRocketLine, RiSparklingLine } from "react-icons/ri";

const LetsBuild = () => {
  return (
    <section id="lets-build" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[60px] p-12 md:p-32 bg-brand-dark border border-white/10 overflow-hidden shadow-2xl">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-violet/20 via-transparent to-brand-cyan/20 opacity-50" />
          <motion.div 
             animate={{ 
               scale: [1, 1.2, 1],
               rotate: [0, 90, 0]
             }}
             transition={{ duration: 20, repeat: Infinity }}
             className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]" 
          />
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/10 mb-12"
            >
              <RiSparklingLine className="text-brand-cyan" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-white/80">
                The Future is Now
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black font-display tracking-tighter mb-10"
            >
              LET&apos;S BUILD <br />
              <span className="text-gradient">TOGETHER.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/50 mb-16 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Whether you have a fully-formed vision or just a spark of an idea, we have the architectural expertise to turn it into a global revolution.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <button className="group px-12 py-6 rounded-2xl bg-white text-black font-black text-lg flex items-center gap-4 hover:bg-brand-cyan hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl">
                START A REVOLUTION
                <RiRocketLine className="text-2xl group-hover:rotate-12 transition-transform" />
              </button>
              <button className="px-10 py-6 rounded-2xl glass border border-white/10 font-bold text-lg hover:bg-white/5 transition-all text-white/70 flex items-center gap-3">
                Talk to an Expert
                <RiArrowRightLine />
              </button>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 opacity-10">
             <RiSparklingLine className="text-[120px]" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
             <RiRocketLine className="text-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsBuild;
