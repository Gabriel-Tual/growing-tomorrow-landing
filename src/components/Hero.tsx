import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProcess = () => {
    const processSection = document.getElementById("process");
    if (processSection) {
      processSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-forest/60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline with slight rotation */}
          <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-6 -rotate-1">
            Regenerative Systems Catalyst
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-tight mb-8">
            Scale Up
            <span className="block italic text-terracotta rotate-1">Regeneration</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Solving the speed issue through collaboration, community and action, at all scales.
          </p>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            onClick={scrollToProcess}
          >
            Discover How
            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cream/30 to-transparent" />
    </section>
  );
};

export default Hero;
