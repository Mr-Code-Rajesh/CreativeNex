"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  RiExternalLinkLine, 
  RiGithubLine, 
  RiCheckboxCircleFill, 
  RiCloseLine,
  RiRefreshLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiGlobalLine,
  RiScan2Line
} from "react-icons/ri";

const projects = [
  {
    title: "Rajesh AI Platform",
    category: "AI & Innovation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    description: "Next-generation AI orchestration platform with real-time neural processing and spatial analytics.",
    integrity: "100%",
    status: "STABLE_DEPLOY",
    liveUrl: "https://rajesh-ai.vercel.app",
    githubUrl: "#",
    tech: ["Next.js", "OpenAI", "Framer Motion"]
  },
  {
    title: "Saktrix Ecosystem",
    category: "Digital Architecture",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    description: "Comprehensive software ecosystem for enterprise-scale digital transformations and brand evolution.",
    integrity: "99%",
    status: "ENCRYPTED",
    liveUrl: "https://saktrix.vercel.app",
    githubUrl: "#",
    tech: ["React", "Node.js", "Cloudflare"]
  },
  {
    title: "QuantumPay Terminal",
    category: "Fintech Revolution",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    description: "Decentralized payment infrastructure built for high-velocity global transactions in 2026.",
    integrity: "98%",
    status: "LIVE_PRODUCTION",
    liveUrl: "https://creativenex.io",
    githubUrl: "#",
    tech: ["Next.js", "Web3", "Tailwind"]
  },
  {
    title: "Vortex Intelligence",
    category: "SaaS & Security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1000",
    description: "Cyber-defense system that utilizes neural learning to neutralize threats before they manifest.",
    integrity: "100%",
    status: "ACTIVE_SCAN",
    liveUrl: "https://creativenex.io",
    githubUrl: "#",
    tech: ["Python", "TensorFlow", "Next.js"]
  }
];

const ProjectCard = ({ project, index, onPreview }: { project: any, index: number, onPreview: (p: any) => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-[40px] glass border border-white/5 shadow-2xl perspective-1000"
    >
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 w-full p-6 z-30 flex justify-between items-center bg-brand-dark/40 backdrop-blur-md border-b border-white/5 translate-z-20">
         <div className="flex items-center gap-4">
            <div className="flex gap-1">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 group-hover:bg-red-500 transition-colors" />
               <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500 transition-colors" />
               <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/40 group-hover:bg-brand-cyan transition-colors" />
            </div>
            <span className="text-[10px] font-mono text-white/40 tracking-tight">{project.status}</span>
         </div>
         <span className="text-[10px] font-black text-brand-cyan uppercase tracking-widest">Integrity: {project.integrity}</span>
      </div>

      {/* Scanning Line */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden rounded-[40px]">
         <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-brand-cyan/30 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
         />
      </div>

      <div className="aspect-[16/10] overflow-hidden relative translate-z-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all duration-500" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity z-10" />
      
      <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 z-20 translate-z-30">
        <span className="text-brand-cyan font-bold tracking-widest text-[10px] uppercase mb-3">
          {project.category}
        </span>
        <h3 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
          {project.title}
        </h3>
        <p className="text-white/60 text-lg mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-md">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
           {project.tech.map(t => (
             <span key={t} className="px-3 py-1 bg-white/5 rounded-md text-[8px] font-black tracking-widest text-white/40 border border-white/5 uppercase">{t}</span>
           ))}
        </div>
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <button 
            onClick={() => onPreview(project)}
            className="px-8 py-4 rounded-xl bg-brand-cyan text-black flex items-center gap-3 hover:scale-105 active:scale-95 transition-all font-black text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <RiGlobalLine className="text-xl" /> VIEW PROJECT
          </button>
          <button className="w-14 h-14 rounded-xl glass border border-white/20 flex items-center justify-center hover:bg-brand-violet transition-all text-xl">
            <RiGithubLine />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="solutions" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 mb-6"
            >
              <RiScan2Line className="text-brand-cyan text-xs" />
              <span className="text-[10px] font-black tracking-widest text-brand-cyan uppercase">Interactive Repository v10.0</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black font-display tracking-tighter mb-8"
            >
              LATEST <span className="text-gradient">REVOLUTIONS</span>
            </motion.h2>
          </div>
          <button className="px-10 py-4 rounded-2xl glass border border-white/10 font-bold hover:bg-white/5 transition-all text-xs tracking-widest">
            FETCH ARCHIVE
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              onPreview={setSelectedProject} 
            />
          ))}
        </div>

        {/* Browser Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            >
              <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
              
              <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                className="relative w-full h-full max-w-7xl bg-brand-dark rounded-[40px] border border-white/10 overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Browser Chrome */}
                <div className="bg-brand-dark/80 backdrop-blur-md p-5 border-b border-white/10 flex items-center gap-6">
                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button onClick={() => setSelectedProject(null)} className="w-4 h-4 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors" />
                    <div className="w-4 h-4 rounded-full bg-yellow-500/50" />
                    <div className="w-4 h-4 rounded-full bg-green-500/50" />
                  </div>
                  
                  {/* Controls */}
                  <div className="hidden md:flex gap-4 text-white/30 text-xl">
                    <RiArrowLeftSLine className="hover:text-white transition-colors cursor-pointer" />
                    <RiArrowRightSLine className="hover:text-white transition-colors cursor-pointer" />
                    <RiRefreshLine className="hover:text-white transition-colors cursor-pointer" />
                  </div>
                  
                  {/* URL Bar */}
                  <div className="flex-1 glass px-6 py-2 rounded-xl border border-white/5 flex items-center gap-3">
                    <RiGlobalLine className="text-brand-cyan" />
                    <span className="text-white/40 text-sm font-mono truncate">{selectedProject.liveUrl}</span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition-all text-2xl"
                  >
                    <RiCloseLine />
                  </button>
                </div>
                
                {/* Iframe Viewport */}
                <div className="flex-1 bg-white relative">
                   <iframe 
                      src={selectedProject.liveUrl} 
                      className="w-full h-full border-none"
                      title={selectedProject.title}
                   />
                </div>
                
                {/* Footer Info */}
                <div className="p-4 bg-brand-dark/80 border-t border-white/10 flex justify-between items-center text-[10px] font-black tracking-widest text-white/20 uppercase px-10">
                   <span>Project: {selectedProject.title}</span>
                   <span>System: Secure Neural Sandbox</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
