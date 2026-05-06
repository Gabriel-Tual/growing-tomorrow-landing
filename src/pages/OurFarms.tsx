import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Ruler, Sprout, Droplets, Mountain, Home, Grape, Building2 } from "lucide-react";
import farmHero from "@/assets/farm-penedes.jpg";
import farmMasia from "@/assets/farm-masia.jpg";
import farmVines from "@/assets/farm-vines.jpg";

const OurFarms = () => {
  const { t } = useLanguage();

  const facts = [
    { icon: Ruler, label: t("farms.facts.size"), value: "42 ha" },
    { icon: Grape, label: t("farms.facts.current"), value: t("farms.facts.currentValue") },
    { icon: Droplets, label: t("farms.facts.water"), value: t("farms.facts.waterValue") },
    { icon: Mountain, label: t("farms.facts.soil"), value: t("farms.facts.soilValue") },
    { icon: Home, label: t("farms.facts.housing"), value: "Masia, 140 m²" },
    { icon: Building2, label: t("farms.facts.buildings"), value: "Celler + 2 hangars, 900 m²" },
  ];

  const projects = [
    t("farms.projects.p1"),
    t("farms.projects.p2"),
    t("farms.projects.p3"),
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24">
        <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
          <img
            src={farmHero}
            alt={t("farms.hero.imageAlt")}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest/40" />
          <div className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-10">
            <p className="text-cream/90 text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {t("farms.hero.region")}
            </p>
            <h1 className="font-display text-cream text-4xl md:text-6xl leading-tight">
              {t("farms.hero.title")}
            </h1>
            <p className="text-cream/80 mt-3 max-w-2xl">{t("farms.hero.tagline")}</p>
            <div className="mt-6">
              <a href="https://calendly.com/gabriel-tual/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-cream">
                  {t("farms.cta.button")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Region focus */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-terracotta uppercase tracking-widest text-xs mb-3">
            {t("farms.region.label")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-forest mb-6">
            {t("farms.region.title")}
          </h2>
          <div className="space-y-4 text-earth leading-relaxed">
            <p>{t("farms.region.p1")}</p>
            <p>{t("farms.region.p2")}</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {[
              { k: "barcelona", d: "55 km" },
              { k: "vilafranca", d: "8 km" },
              { k: "coast", d: "20 km" },
            ].map((c) => (
              <div key={c.k} className="border border-forest/15 p-4 bg-cream">
                <p className="font-display text-2xl text-forest">{c.d}</p>
                <p className="text-earth text-sm">{t(`farms.region.${c.k}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="grid md:grid-cols-2 gap-1">
        <img src={farmMasia} alt={t("farms.images.masia")} loading="lazy" className="w-full h-72 md:h-96 object-cover" />
        <img src={farmVines} alt={t("farms.images.vines")} loading="lazy" className="w-full h-72 md:h-96 object-cover" />
      </section>

      {/* Key facts */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-terracotta uppercase tracking-widest text-xs mb-3">
            {t("farms.facts.label")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-forest mb-10">
            {t("farms.facts.title")}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {facts.map((f) => (
              <div key={f.label} className="border border-forest/15 p-6 bg-background">
                <f.icon className="w-7 h-7 text-terracotta mb-3" strokeWidth={1.5} />
                <p className="text-earth text-sm">{f.label}</p>
                <p className="font-display text-xl text-forest mt-1">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Possible projects */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-terracotta uppercase tracking-widest text-xs mb-3">
            {t("farms.projects.label")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-forest mb-8">
            {t("farms.projects.title")}
          </h2>
          <ul className="space-y-4">
            {projects.map((p, i) => (
              <li key={i} className="flex gap-4 border-l-2 border-terracotta pl-4">
                <Sprout className="w-5 h-5 text-terracotta shrink-0 mt-1" strokeWidth={1.5} />
                <p className="text-earth leading-relaxed">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-cream">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl mb-4">{t("farms.cta.title")}</h2>
          <p className="text-cream/80 mb-8">{t("farms.cta.subtitle")}</p>
          <a href="https://calendly.com/gabriel-tual/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-cream">
              {t("farms.cta.button")}
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurFarms;
