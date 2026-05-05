"use client";

import { motion } from "framer-motion";
import { 
  RiCloudLine, 
  RiCodeSSlashLine, 
  RiSmartphoneLine, 
  RiShieldFlashLine,
  RiDatabase2Line,
  RiGlobalLine,
  RiArrowRightUpLine,
  RiPlayFill,
  RiPulseFill
} from "react-icons/ri";

const services = [
  {
    title: "WEB ARCHITECTURE",
    description: "Developing hyper-fast, Next.js powered web ecosystems that redefine user experience in 2026.",
    icon: <RiCodeSSlashLine />,
    color: "from-blue-600 to-cyan-500",
    metrics: "99.9% Perf",
    status: "OPTIMIZED"
  },
  {
    title: "MOBILE ENGINEERING",
    description: "Cross-platform mobile solutions with native-grade performance and spatial UI interactions.",
    icon: <RiSmartphoneLine />,
    color: "from-violet-600 to-purple-500",
    metrics: "60 FPS+",
    status: "NATIVE"
  },
  {
    title: "SEO DOMINANCE",
    description: "AI-driven search engine optimization that puts your brand at the core of the digital neural network.",
    icon: <RiGlobalLine />,
    color: "from-emerald-600 to-teal-500",
    metrics: "Rank #1",
    status: "INDEXING"
  },
  {
    title: "CINEMATIC EDITING",
    description: "High-end post-production and video engineering for immersive brand storytelling.",
    icon: <RiPlayFill />,
    color: "from-red-600 to-orange-500",
    metrics: "8K Ready",
    status: "RENDERING"
  },
  {
    title: "BRAND PROMOTION",
    description: "Strategic digital-first branding and aggressive market positioning using neural analytics.",
    icon: <RiShieldFlashLine />,
    color: "from-amber-600 to-yellow-500",
    metrics: "10X Reach",
    status: "POSITIONING"
  },
  {
    title: "SCALABLE SYSTEMS",
    description: "Architecting backend infrastructures that handle massive global scale with zero latency.",
    icon: <RiCloudLine />,
    color: "from-pink-600 to-rose-500",
    metrics: "0ms Lag",
    status: "SCALING"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-violet/10 border border-brand-violet/20 mb-6"
          >
            <RiPulseFill className="text-brand-violet text-xs" />
            <span className="text-[10px] font-black tracking-widest text-brand-violet uppercase">Service Ecosystem v4.2</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black font-display tracking-tighter mb-8"
          >
            OUR <span className="text-gradient">CAPABILITIES</span>
          </motion.h2>
          <p className="text-white/40 text-xl md:text-2xl font-medium leading-relaxed">
            We provide a comprehensive suite of elite software services designed for the demands of a digital-first future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-10 rounded-[40px] glass-dark border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                 <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/20" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                    <div className="w-2 h-2 rounded-full bg-brand-cyan/20" />
                 </div>
                 <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">{service.status}</span>
              </div>

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl text-white mb-8 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black font-display tracking-tight mb-4 group-hover:text-brand-cyan transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/40 group-hover:text-white/70 transition-colors text-base leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Performance Metrics */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-brand-cyan uppercase tracking-widest">{service.metrics}</span>
                    <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${service.color}`} 
                       />
                    </div>
                 </div>
                 <RiArrowRightUpLine className="text-xl text-white/20 group-hover:text-brand-cyan transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
