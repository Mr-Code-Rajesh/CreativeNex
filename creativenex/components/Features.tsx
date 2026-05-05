"use client";

import { motion } from "framer-motion";
import { RiFlashlightLine, RiShieldLine, RiStackLine, RiUserHeartLine } from "react-icons/ri";

const features = [
  {
    title: "Velocity First",
    description: "We don't just meet deadlines; we accelerate your time-to-market using our proprietary 2026-ready frameworks.",
    icon: <RiFlashlightLine />,
    color: "text-yellow-400"
  },
  {
    title: "Battle-Hardened Security",
    description: "Zero-trust architecture and neural-network security are baked into every line of code we write.",
    icon: <RiShieldLine />,
    color: "text-blue-400"
  },
  {
    title: "Elite Tech Stack",
    description: "From Next.js 16 to Quantum-safe databases, we use the tech of tomorrow to build your solutions today.",
    icon: <RiStackLine />,
    color: "text-violet-400"
  },
  {
    title: "Client-Centric DNA",
    description: "Our solutions are architected around your unique business logic, ensuring a perfect fit every time.",
    icon: <RiUserHeartLine />,
    color: "text-cyan-400"
  }
];

const Features = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black font-display tracking-tighter mb-10"
            >
              WHY CHOOSE <br />
              <span className="text-gradient">CREATIVENEX?</span>
            </motion.h2>
            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className={`w-16 h-16 rounded-2xl glass border border-white/5 flex items-center justify-center text-3xl ${feature.color} group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/40 text-lg leading-relaxed group-hover:text-white/60 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square glass rounded-[60px] border border-white/10 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20 animate-pulse-slow" />
               <div className="relative z-10 text-center">
                  <span className="text-8xl font-black font-display text-white/5 absolute -top-10 left-1/2 -translate-x-1/2">2026</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center"
                  >
                    <div className="w-48 h-48 border-2 border-brand-cyan/30 rounded-full flex items-center justify-center">
                       <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-3xl">
                          <span className="text-6xl font-black text-gradient italic">NX</span>
                       </div>
                    </div>
                  </motion.div>
               </div>
            </div>
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass p-8 rounded-3xl border border-white/20 shadow-2xl"
            >
               <span className="block text-4xl font-black text-brand-cyan">99.9%</span>
               <span className="text-xs font-bold uppercase tracking-widest text-white/50">Uptime Reliability</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl border border-white/20 shadow-2xl"
            >
               <span className="block text-4xl font-black text-brand-violet">10X</span>
               <span className="text-xs font-bold uppercase tracking-widest text-white/50">Faster Deployment</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
