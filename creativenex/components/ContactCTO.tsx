"use client";

import { motion } from "framer-motion";
import { RiMailLine, RiLinkedinLine, RiTwitterXFill, RiMessage3Line, RiUserHeartLine } from "react-icons/ri";

const ContactCTO = () => {
  return (
    <section id="contact-cto" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[50px] border border-white/5 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-transparent to-brand-cyan/10" />
          
          <div className="flex flex-col lg:flex-row items-center relative z-10">
            <div className="lg:w-1/2 p-12 md:p-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-brand-cyan/30 mb-8"
              >
                <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-cyan">Executive Access</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter mb-8">
                HAVE A <span className="text-gradient">COMPLEX PROBLEM?</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed mb-12">
                Our CTO is available for direct consultation on high-impact projects. Skip the sales funnel and speak directly to the architectural lead of your next revolution.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-white/80 hover:text-brand-cyan transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl group-hover:bg-brand-cyan group-hover:text-black transition-all">
                    <RiMailLine />
                  </div>
                  <span className="text-lg font-bold">cto@creativenex.io</span>
                </div>
                <div className="flex items-center gap-4 text-white/80 hover:text-brand-violet transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl group-hover:bg-brand-violet group-hover:text-white transition-all">
                    <RiMessage3Line />
                  </div>
                  <span className="text-lg font-bold">Book a Technical Deep-Dive</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl hover:text-brand-cyan transition-colors">
                  <RiLinkedinLine />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl hover:text-brand-cyan transition-colors">
                  <RiTwitterXFill />
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative min-h-[500px] flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-brand-cyan/5 opacity-30" />
              <div className="relative">
                {/* Abstract "CTO Profile" Silhouette/Visual */}
                <div className="w-80 h-80 rounded-full glass border-4 border-white/5 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-violet/40 to-transparent" />
                  <RiUserHeartLine className="text-[160px] text-white/10" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
                </div>
                
                {/* Status Card */}
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-10 -left-10 glass p-6 rounded-2xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest">Currently Online</span>
                  </div>
                  <span className="text-white/40 text-[10px]">Response time: ~2 hours</span>
                </motion.div>
                
                {/* Expertise Badges */}
                <motion.div
                   animate={{ x: [0, -20, 0] }}
                   transition={{ duration: 7, repeat: Infinity }}
                   className="absolute -bottom-10 -right-10 glass p-6 rounded-2xl border border-white/20"
                >
                  <div className="flex flex-wrap gap-2 max-w-[200px]">
                     {["AI ARCHITECT", "NEXT.JS ELITE", "SYSTEM SCALING"].map(tag => (
                       <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-[8px] font-black tracking-widest text-white/60">{tag}</span>
                     ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTO;
