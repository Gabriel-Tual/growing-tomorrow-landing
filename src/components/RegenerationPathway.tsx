import { Eye, GraduationCap, Coins, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RegenerationPathway = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Eye, key: "inspiration" },
    { icon: GraduationCap, key: "knowledge" },
    { icon: Coins, key: "capital" },
    { icon: ShoppingCart, key: "market" },
  ];

  return (
    <section className="py-24 bg-forest text-cream relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-40 h-2 bg-terracotta rotate-45" />
      <div className="absolute bottom-1/3 -right-20 w-40 h-2 bg-terracotta -rotate-45" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              {t("pathway.label")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl -rotate-1">
              {t("pathway.title")}
            </h2>
            <p className="text-cream/70 mt-6 max-w-2xl mx-auto">
              {t("pathway.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.key}
                className="relative bg-cream/5 border border-cream/10 p-6 hover:bg-cream/10 transition-colors"
                style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1)}deg)` }}
              >
                <span className="absolute -top-3 -left-3 w-8 h-8 bg-terracotta text-cream flex items-center justify-center font-display text-lg rotate-6">
                  {index + 1}
                </span>
                
                <step.icon className="w-10 h-10 text-terracotta mb-4" strokeWidth={1.5} />
                
                <h3 className="font-display text-xl text-cream mb-3">
                  {t(`pathway.${step.key}.title`)}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {t(`pathway.${step.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegenerationPathway;
