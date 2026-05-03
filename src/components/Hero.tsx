import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToProcess = () => {
    const processSection = document.getElementById("process");
    if (processSection) {
      processSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-forest/60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-6 -rotate-1">
            {t("hero.tagline")}
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-tight mb-8">
            {t("hero.title1")}
            <span className="block italic text-terracotta rotate-1">{t("hero.title2")}</span>
          </h1>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            onClick={scrollToProcess}
          >
            {t("hero.cta")}
            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cream/30 to-transparent" />
    </section>
  );
};

export default Hero;
