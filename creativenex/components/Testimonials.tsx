"use client";

import { motion } from "framer-motion";
import { RiDoubleQuotesL, RiShieldCheckLine, RiStarFill, RiUserVoiceFill } from "react-icons/ri";

const testimonials = [
  {
    name: "Alex Sterling",
    role: "CEO, Quantum Systems",
    content: "CreativeNex didn't just build our platform; they architected our future. Their neural-driven approach to software is years ahead of the competition.",
    avatar: "AS",
    rating: 5,
    match: "99.4%",
    id: "VERIFIED_0x72a"
  },
  {
    name: "Sarah Chen",
    role: "CTO, NeuralSoft",
    content: "The level of technical depth and innovation CreativeNex brings to the table is unprecedented. They are the only partners we trust with our core infrastructure.",
    avatar: "SC",
    rating: 5,
    match: "98.9%",
    id: "VERIFIED_0x41b"
  },
  {
    name: "Marcus Vane",
    role: "Founder, CyberDyne",
    content: "From cinematic branding to complex backend scaling, CreativeNex delivered a flawless ecosystem that exceeded every metric we set.",
    avatar: "MV",
    rating: 5,
    match: "99.7%",
    id: "VERIFIED_0x99c"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 mb-6"
          >
            <RiUserVoiceFill className="text-brand-cyan text-xs" />
            <span className="text-[10px] font-black tracking-widest text-brand-cyan uppercase">Identity Protocol v2.4</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black font-display tracking-tighter mb-8"
          >
            NEURAL <span className="text-gradient">FEEDBACK</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[40px] glass-dark border border-white/5 hover:border-white/20 transition-all relative overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                 <div className="flex items-center gap-2">
                    <RiShieldCheckLine className="text-brand-cyan text-xs" />
                    <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">{t.id}</span>
                 </div>
                 <span className="text-[8px] font-black text-brand-cyan uppercase tracking-widest">Match: {t.match}</span>
              </div>

              <div className="absolute top-20 right-8 text-white/5 text-8xl -z-10 group-hover:text-brand-cyan/10 transition-colors">
                <RiDoubleQuotesL />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <RiStarFill key={i} className="text-brand-cyan" />
                ))}
              </div>
              
              <p className="text-white/70 text-lg leading-relaxed mb-10 italic">
                &quot;{t.content}&quot;
              </p>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center font-black text-white/80">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-xl font-black font-display tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-white/40 text-[10px] font-black tracking-widest uppercase">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
