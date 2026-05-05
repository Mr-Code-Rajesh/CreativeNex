"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Lines of Code Deployed", value: "2.4M+", color: "text-brand-cyan" },
  { label: "Projects Revolutionized", value: "150+", color: "text-brand-violet" },
  { label: "Client Growth Average", value: "240%", color: "text-emerald-400" },
  { label: "Neural Compute Hours", value: "85K+", color: "text-amber-400" }
];

const Stats = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-brand-gray/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <span className={`block text-5xl md:text-6xl font-black font-display mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                {stat.value}
              </span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
