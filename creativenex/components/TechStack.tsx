"use client";

import { motion } from "framer-motion";
import { 
  RiNextjsLine, 
  RiReactjsLine, 
  RiTailwindCssLine, 
  RiNodejsLine, 
  RiTerminalBoxLine,
  RiCloudLine,
  RiCpuLine,
  RiCodeBoxLine,
  RiQuillPenLine,
  RiInfinityLine,
  RiPantoneLine,
  RiCopperCoinLine,
  RiRadarLine,
  RiCodeSSlashLine,
  RiImage2Line
} from "react-icons/ri";
import { 
  SiPython, 
  SiFramer 
} from "react-icons/si";

const stackGroups = [
  {
    group: "NEURAL ENGINES",
    items: [
      { name: "Python", icon: <SiPython />, label: "AI & ML Core", perf: "99%" },
      { name: "Java", icon: <RiTerminalBoxLine />, label: "Enterprise Logic", perf: "97%" },
      { name: "Node.js", icon: <RiNodejsLine />, label: "Backend Synthesis", perf: "98%" },
      { name: "OpenAI", icon: <RiCpuLine />, label: "LLM Orchestration", perf: "100%" }
    ]
  },
  {
    group: "SPATIAL LOGIC",
    items: [
      { name: "TypeScript", icon: <RiTerminalBoxLine />, label: "Static Integrity", perf: "99%" },
      { name: "Next.js", icon: <RiNextjsLine />, label: "Edge Architecture", perf: "100%" },
      { name: "Framer", icon: <SiFramer />, label: "Motion Physics", perf: "96%" },
      { name: "Tailwind", icon: <RiTailwindCssLine />, label: "Visual System", perf: "98%" }
    ]
  },
  {
    group: "VISUAL GENESIS",
    items: [
      { name: "Photoshop", icon: <RiImage2Line />, label: "Asset Synthesis", perf: "95%" },
      { name: "Adobe Suite", icon: <RiInfinityLine />, label: "Creative Ecosystem", perf: "94%" },
      { name: "Pantone", icon: <RiPantoneLine />, label: "Color Science", perf: "99%" },
      { name: "Vector", icon: <RiQuillPenLine />, label: "Identity Matrix", perf: "98%" }
    ]
  }
];

const TechStack = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-dark border-y border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-violet/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 mb-6"
              >
                <RiRadarLine className="text-brand-cyan text-xs" />
                <span className="text-[10px] font-black tracking-widest text-brand-cyan uppercase">Ecosystem Scan v12.4</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-black font-display tracking-tighter mb-8"
              >
                ELITE <span className="text-gradient">STACK</span>
              </motion.h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2 text-white/20 text-[10px] font-black tracking-widest uppercase">
             <span>Protocol: High-Performance</span>
             <span>Security: Quantum-Safe</span>
          </div>
        </div>

        <div className="space-y-24">
          {stackGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <div className="flex items-center gap-4 mb-12">
                 <span className="text-xs font-black tracking-[0.4em] text-white/30 uppercase">{group.group}</span>
                 <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {group.items.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative p-8 rounded-[32px] glass border border-white/5 hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all flex flex-col items-center text-center overflow-hidden"
                  >
                    {/* Background ID */}
                    <div className="absolute -bottom-4 -right-4 text-white/5 text-6xl font-black italic -z-10 group-hover:text-brand-cyan/5 transition-colors">
                       {t.name.slice(0, 2)}
                    </div>

                    <div className="text-5xl text-white/30 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 relative">
                       <div className="absolute inset-0 bg-brand-cyan/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                       <span className="relative z-10">{t.icon}</span>
                    </div>

                    <h4 className="text-xl font-black font-display tracking-tight text-white mb-2">
                      {t.name}
                    </h4>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-brand-cyan transition-colors mb-4">
                      {t.label}
                    </span>

                    {/* Performance Indicator */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                       <span className="text-[8px] font-mono text-white/40 tracking-widest">PERF_CORE: {t.perf}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
