import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-terracotta text-cream relative overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cream/20 rotate-12" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-cream/20 -rotate-6" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-6 -rotate-1">
            {t("cta.title")}
          </h2>
          <p className="text-cream/80 text-lg mb-10 max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
          
          <a 
            href="https://calendly.com/gabriel-tual/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="lg" className="group">
              {t("cta.button")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
