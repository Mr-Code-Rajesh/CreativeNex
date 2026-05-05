"use client";

import { motion } from "framer-motion";
import { 
  RiFocus3Line, 
  RiMapPinRangeLine, 
  RiCodeBoxLine, 
  RiRocket2Line, 
  RiSeedlingLine,
  RiTerminalFill
} from "react-icons/ri";

const steps = [
  {
    title: "DISCOVERY",
    label: "Neural Analysis",
    status: "SYNTHESIZING DATA...",
    description: "Our AI engines deep-scan your business DNA to identify optimal architectural nodes.",
    icon: <RiFocus3Line />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "STRATEGY",
    label: "Logic Mapping",
    status: "MAPPING ARCHITECTURE...",
    description: "Designing the neural pathways that will carry your data across the digital ecosystem.",
    icon: <RiMapPinRangeLine />,
    color: "from-cyan-500 to-teal-400"
  },
  {
    title: "ENGINEERING",
    label: "Core Synthesis",
    status: "EXECUTING CODE GEN...",
    description: "High-speed assembly using our proprietary 2026-ready neural frameworks and LLM-assisted pipelines.",
    icon: <RiCodeBoxLine />,
    color: "from-violet-600 to-purple-500"
  },
  {
    title: "DEPLOYMENT",
    label: "Edge Injection",
    status: "OPTIMIZING CLUSTERS...",
    description: "Instant deployment across global neural clusters for zero-latency user interactions.",
    icon: <RiRocket2Line />,
    color: "from-emerald-500 to-green-400"
  },
  {
    title: "EVOLUTION",
    label: "Adaptive Growth",
    status: "LEARNING & SCALING...",
    description: "Our systems autonomously learn and scale, ensuring your platform remains at the edge of the possible.",
    icon: <RiSeedlingLine />,
    color: "from-amber-500 to-orange-400"
  }
];

const Process = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-dark">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 mb-6"
            >
              <RiTerminalFill className="text-brand-cyan text-xs" />
              <span className="text-[10px] font-black tracking-widest text-brand-cyan uppercase">AI Neural Pipeline v2.0</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black font-display tracking-tighter mb-8"
            >
              THE <span className="text-gradient">EVOLUTIONARY</span> PATH
            </motion.h2>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-white/20 text-sm font-bold block mb-2 uppercase tracking-widest">System Status</span>
            <div className="flex items-center gap-2 text-brand-cyan font-black text-xs uppercase tracking-tighter">
              <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
              Neural Engines Active
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Main Pipeline Rail */}
          <div className="absolute top-[48px] left-0 w-full h-[2px] bg-white/5 hidden lg:block overflow-hidden">
             <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50"
             />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Step Connector Node */}
                <div className="relative mb-12 flex justify-center lg:justify-start">
                  <div className={`w-24 h-24 rounded-3xl glass border border-white/5 flex items-center justify-center text-4xl text-white group-hover:scale-110 transition-all duration-500 group-hover:border-brand-cyan/40 relative z-20 overflow-hidden`}>
                     {/* Background Glow */}
                     <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                     <div className="relative z-10">{step.icon}</div>
                  </div>
                  
                  {/* Neural Pulse Halo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-cyan/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <span className="text-[10px] font-black tracking-widest text-brand-cyan uppercase">
                      Node_0{i + 1}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/10 hidden lg:block" />
                  </div>
                  
                  <h3 className="text-3xl font-black font-display tracking-tight mb-2 text-white group-hover:text-brand-cyan transition-colors">
                    {step.title}
                  </h3>
                  
                  <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">
                    {step.label}
                  </span>

                  <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors">
                    {step.description}
                  </p>

                  {/* AI Status Log */}
                  <div className="glass p-3 rounded-xl border border-white/5 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                     <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                        <span className="text-[8px] font-black text-brand-cyan uppercase tracking-widest">Active Process</span>
                     </div>
                     <span className="text-[10px] font-mono text-white/40 block overflow-hidden whitespace-nowrap">
                        {step.status}
                     </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Neural Stream */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 -z-10 opacity-20 hidden lg:block">
         <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <motion.path
               d="M0 150 Q 250 50, 500 150 T 1000 150"
               fill="none"
               stroke="rgba(6, 182, 212, 0.2)"
               strokeWidth="1"
               animate={{ d: ["M0 150 Q 250 50, 500 150 T 1000 150", "M0 150 Q 250 250, 500 150 T 1000 150", "M0 150 Q 250 50, 500 150 T 1000 150"] }}
               transition={{ duration: 10, repeat: Infinity }}
            />
         </svg>
      </div>
    </section>
  );
};

export default Process;
