"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  RiUserLine, 
  RiMailLine, 
  RiMessage2Line, 
  RiPhoneLine, 
  RiSendPlaneFill, 
  RiHashtag,
  RiCheckboxCircleFill
} from "react-icons/ri";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Ambient Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Side: Info */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 mb-8">
                  <RiMessage2Line className="text-brand-cyan text-xs" />
                  <span className="text-[10px] font-black tracking-widest text-brand-cyan uppercase">Communication Channel</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter mb-8">
                  INITIATE <span className="text-gradient">CONTACT</span>
                </h2>
                <p className="text-white/40 text-xl leading-relaxed mb-12">
                  Ready to evolve? Submit your project parameters and our neural network will assign the optimal team for your vision.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-2xl group-hover:bg-brand-cyan group-hover:text-black transition-all duration-500">
                      <RiMailLine />
                    </div>
                    <div>
                      <p className="text-white/20 text-[10px] font-black tracking-widest uppercase mb-1">Neural Mail</p>
                      <p className="text-white/80 font-bold group-hover:text-brand-cyan transition-colors">hello@creativenex.io</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-2xl group-hover:bg-brand-violet group-hover:text-white transition-all duration-500">
                      <RiPhoneLine />
                    </div>
                    <div>
                      <p className="text-white/20 text-[10px] font-black tracking-widest uppercase mb-1">Direct Uplink</p>
                      <p className="text-white/80 font-bold group-hover:text-brand-violet transition-colors">+1 (555) NEURAL-01</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-10 md:p-16 rounded-[40px] glass-dark border border-white/5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-violet/5 pointer-events-none" />
                
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">
                        <RiUserLine className="text-brand-cyan" /> Entity Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-brand-cyan/50 transition-all text-white placeholder:text-white/10"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">
                        <RiMailLine className="text-brand-violet" /> Neural Address
                      </label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-brand-violet/50 transition-all text-white placeholder:text-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mobile Number */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">
                        <RiPhoneLine className="text-brand-cyan" /> Direct Uplink
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-brand-cyan/50 transition-all text-white placeholder:text-white/10"
                      />
                    </div>
                    
                    {/* Subject */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">
                        <RiHashtag className="text-brand-violet" /> Transmission Subject
                      </label>
                      <input 
                        type="text" 
                        placeholder="Project Inquiry"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-brand-violet/50 transition-all text-white placeholder:text-white/10"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">
                      <RiMessage2Line className="text-brand-cyan" /> Core Message
                    </label>
                    <textarea 
                      placeholder="Describe your vision..."
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-6 focus:outline-none focus:border-brand-cyan/50 transition-all text-white placeholder:text-white/10 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full group relative px-10 py-6 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-brand-cyan hover:text-white transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-violet opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitted ? (
                        <>
                          <RiCheckboxCircleFill className="text-xl" /> TRANSMISSION SUCCESSFUL
                        </>
                      ) : (
                        <>
                          TRANSMIT DATA <RiSendPlaneFill className="text-xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
