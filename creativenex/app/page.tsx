import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Features from "@/components/Features";
import ContactCTO from "@/components/ContactCTO";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import LetsBuild from "@/components/LetsBuild";
import Stats from "@/components/Stats";
import BackgroundEffect from "@/components/BackgroundEffect";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundEffect />
      <Navbar />
      
      <Hero />
      
      <Stats />
      
      <Services />
      
      <Process />
      
      <Projects />
      
      <Testimonials />
      
      <Features />
      
      <TechStack />
      
      <ContactForm />
      
      <ContactCTO />


      <LetsBuild />

      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-bold text-xl">C</div>
                <span className="font-display font-black text-3xl tracking-tighter uppercase italic">Creative<span className="text-brand-cyan">Nex</span></span>
              </div>
              <p className="text-white/40 text-lg max-w-md leading-relaxed">
                Architecting the digital neural network of tomorrow. We specialize in high-performance software solutions that drive global evolution.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
              <ul className="space-y-4 text-white/40 font-bold text-sm">
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Evolution</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Architecture</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Ecosystem</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Direct CTO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Connect</h4>
              <ul className="space-y-4 text-white/40 font-bold text-sm">
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
            <p className="text-white/20 text-xs font-bold tracking-widest uppercase">
              © 2026 CreativeNex Solutions Architecture. DEPLOYED AT THE EDGE.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
              <a href="#" className="hover:text-white">Privacy Protocol</a>
              <a href="#" className="hover:text-white">Security Standards</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
