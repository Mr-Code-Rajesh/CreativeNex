"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine, RiCommandFill } from "react-icons/ri";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Evolution", href: "#services" },
    { name: "Architecture", href: "#solutions" },
    { name: "Ecosystem", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 glass-dark border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-violet to-brand-cyan rounded-2xl flex items-center justify-center text-white text-2xl group-hover:rotate-[10deg] transition-all duration-500 shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              <RiCommandFill />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-violet to-brand-cyan rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-3xl font-black font-display tracking-tighter uppercase italic">
            Creative<span className="text-brand-cyan">Nex</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="relative group px-8 py-3 rounded-xl bg-white text-black font-black text-xs tracking-widest uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-brand-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-white/80"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 top-0 left-0 w-full h-screen glass-dark z-[-1] flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-4xl font-black font-display uppercase tracking-tighter hover:text-brand-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="mt-8 px-12 py-5 rounded-2xl bg-brand-violet text-white font-black text-xl tracking-widest uppercase">
            Get Started
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
