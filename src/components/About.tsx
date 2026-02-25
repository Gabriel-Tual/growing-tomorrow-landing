import gabrielPhoto from "@/assets/gabriel-tual.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-cream text-forest relative overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-40 h-2 bg-terracotta rotate-45" />
      <div className="absolute bottom-1/4 -right-20 w-40 h-2 bg-terracotta -rotate-45" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
                {t("about.label")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6 -rotate-1">
                {t("about.name")}
              </h2>
              <div className="space-y-4 text-earth leading-relaxed">
                <p>{t("about.bio1")}</p>
                <p>{t("about.bio2")}</p>
                <p>{t("about.bio3")}</p>
                <p className="text-forest font-medium italic">
                  {t("about.quote")}
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square bg-forest/10 rounded-sm rotate-3 relative overflow-hidden">
                <img 
                  src={gabrielPhoto} 
                  alt="Gabriel Tual" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-terracotta/30 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
