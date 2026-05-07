import { Sprout, Users, Mountain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Offers = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const offers = [
    {
      icon: Sprout,
      title: t("offers.food.title"),
      subtitle: t("offers.food.subtitle"),
      description: t("offers.food.description"),
      link: "/growing-food",
    },
    {
      icon: Users,
      title: t("offers.connection.title"),
      subtitle: t("offers.connection.subtitle"),
      description: t("offers.connection.description"),
      link: "/growing-connection",
    },
    {
      icon: Mountain,
      title: t("offers.landscape.title"),
      subtitle: t("offers.landscape.subtitle"),
      description: t("offers.landscape.description"),
      link: "/growing-landscape",
    },
  ];

  return (
    <section className="py-24 bg-cream relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              {t("offers.label")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest rotate-1 mb-4">
              {t("offers.title")}
            </h2>
            <p className="text-earth leading-relaxed">{t("offers.subtitle")}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => {
              const valueKey = offer.link === "/growing-food" ? "offers.food.value" : offer.link === "/growing-connection" ? "offers.connection.value" : "offers.landscape.value";
              const ctaKey = offer.link === "/growing-food" ? "offers.food.cta" : offer.link === "/growing-connection" ? "offers.connection.cta" : "offers.landscape.cta";
              return (
                <div 
                  key={index}
                  onClick={() => navigate(offer.link)}
                  className="group relative bg-forest text-cream p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
                  style={{ transform: `rotate(${(index - 1) * -1}deg)` }}
                >
                  <div className="mb-6">
                    <offer.icon className="h-12 w-12 text-terracotta" strokeWidth={1.5} />
                  </div>
                  
                  <p className="text-terracotta text-sm tracking-widest uppercase mb-2">
                    {offer.subtitle}
                  </p>
                  <h3 className="font-display text-2xl mb-4">
                    {offer.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed mb-5">
                    {offer.description}
                  </p>
                  
                  <p className="text-cream/90 text-sm border-t border-cream/15 pt-4 mb-5">
                    {t(valueKey)}
                  </p>

                  <p className="text-terracotta text-sm mt-auto font-medium">
                    {t(ctaKey)} →
                  </p>
                  
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-terracotta/30" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
