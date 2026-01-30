import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Decorative rotated elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-forest/10 rounded-full rotate-12 blur-xl" />
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-terracotta/10 rounded-full -rotate-6 blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-2 h-32 bg-forest/20 -rotate-12" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline with slight rotation */}
          <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-6 -rotate-1">
            Regenerative Systems Catalyst
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-forest leading-tight mb-8">
            Scale Up
            <span className="block italic text-terracotta rotate-1">Regeneration</span>
          </h1>
          
          <p className="text-lg md:text-xl text-earth max-w-2xl mx-auto mb-10 leading-relaxed">
            Fostering collaboration, action and innovation to transform 
            food systems. One connection at a time.
          </p>
          
          <a 
            href="https://calendly.com/gabriel-tual/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="group">
              Let's Talk Regeneration
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
    </section>
  );
};

export default Hero;
