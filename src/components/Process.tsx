import { useState } from "react";
import { Users, Link, Sprout, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Process = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const steps = [
    {
      icon: Users,
      title: t("process.emulate.title"),
      subtitle: t("process.emulate.subtitle"),
      description: t("process.emulate.description"),
      rotation: "-rotate-1",
      link: "/emulate",
    },
    {
      icon: Link,
      title: t("process.connect.title"),
      subtitle: t("process.connect.subtitle"),
      description: t("process.connect.description"),
      rotation: "rotate-1",
      link: "/connect",
    },
    {
      icon: Sprout,
      title: t("process.do.title"),
      subtitle: t("process.do.subtitle"),
      description: t("process.do.description"),
      rotation: "-rotate-1",
      link: "/do",
    },
  ];

  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest/20 via-terracotta/20 to-forest/20" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
            {t("process.label")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-forest">
            {t("process.title")}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`relative p-8 bg-cream border border-forest/10 rounded-sm ${step.rotation} hover:rotate-0 transition-transform duration-500`}
              >
                <span className="absolute -top-4 -left-4 w-10 h-10 bg-terracotta text-cream flex items-center justify-center font-display text-xl rotate-6">
                  {index + 1}
                </span>
                
                <step.icon className="w-10 h-10 text-forest mb-6" strokeWidth={1.5} />
                
                <h3 className="font-display text-2xl text-forest mb-2">
                  {step.title}
                </h3>
                <p className="text-terracotta font-medium text-sm mb-4">
                  {step.subtitle}
                </p>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full text-left text-forest border-t border-forest/10 pt-3 mb-3 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium">
                    {isOpen ? t("process.hideDetails") : t("process.showDetails")}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-earth leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-forest text-forest hover:bg-forest hover:text-cream"
                  onClick={() => navigate(step.link)}
                >
                  {t("process.knowMore")}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
