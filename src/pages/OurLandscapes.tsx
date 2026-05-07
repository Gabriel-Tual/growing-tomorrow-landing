import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Briefcase, Droplets, AlertTriangle, Sprout } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type RegionId = "catalunya" | "cordoba";

const regions: { id: RegionId; coords: [number, number]; nameKey: string }[] = [
  { id: "catalunya", coords: [1.8, 41.7], nameKey: "bioregions.catalunya.name" },
  { id: "cordoba", coords: [-64.2, -31.4], nameKey: "bioregions.cordoba.name" },
];

const OurLandscapes = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<RegionId>("catalunya");

  const detailKey = `landscapes.${selected}`;

  const stats = [
    { icon: Users, label: t("bioregions.stats.population"), value: t(`${detailKey}.population`) },
    { icon: Briefcase, label: t("bioregions.stats.economy"), value: t(`${detailKey}.economy`) },
    { icon: Droplets, label: t("bioregions.stats.watershed"), value: t(`${detailKey}.watershed`) },
    { icon: Sprout, label: t("bioregions.stats.agriculture"), value: t(`${detailKey}.agriculture`) },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-forest text-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-terracotta uppercase tracking-widest text-xs mb-3">
            {t("bioregions.hero.label")}
          </p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            {t("bioregions.hero.title")}
          </h1>
          <p className="text-cream/80 max-w-2xl">{t("bioregions.hero.subtitle")}</p>
        </div>
      </section>

      {/* Map */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-cream border border-forest/15 p-2 md:p-4">
            <ComposableMap
              projectionConfig={{ scale: 140 }}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: { fill: "hsl(45 20% 88%)", stroke: "hsl(150 20% 75%)", strokeWidth: 0.4, outline: "none" },
                        hover: { fill: "hsl(45 20% 82%)", outline: "none" },
                        pressed: { fill: "hsl(45 20% 82%)", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              {regions.map((r) => {
                const active = selected === r.id;
                return (
                  <Marker
                    key={r.id}
                    coordinates={r.coords}
                    onClick={() => setSelected(r.id)}
                    style={{ default: { cursor: "pointer" }, hover: { cursor: "pointer" }, pressed: { cursor: "pointer" } }}
                  >
                    <circle
                      r={active ? 10 : 7}
                      fill="hsl(16 65% 50%)"
                      fillOpacity={0.25}
                    />
                    <circle
                      r={active ? 5 : 4}
                      fill="hsl(16 65% 50%)"
                      stroke="hsl(45 30% 96%)"
                      strokeWidth={1.5}
                    />
                    <text
                      textAnchor="middle"
                      y={-12}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 9,
                        fontWeight: 600,
                        fill: "hsl(150 30% 18%)",
                        pointerEvents: "none",
                      }}
                    >
                      {t(r.nameKey)}
                    </text>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {regions.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelected(r.id)}
                className={`px-4 py-2 text-sm border transition-colors ${
                  selected === r.id
                    ? "bg-forest text-cream border-forest"
                    : "bg-cream text-forest border-forest/30 hover:border-forest"
                }`}
              >
                {t(r.nameKey)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Region detail */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-terracotta uppercase tracking-widest text-xs mb-2">
            {t(`${detailKey}.country`)}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-forest mb-4">
            {t(`${detailKey}.name`)}
          </h2>
          <p className="text-earth leading-relaxed max-w-3xl mb-8">
            {t(`${detailKey}.intro`)}
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-3xl">
            <div className="border-l-2 border-terracotta pl-4">
              <p className="text-xs uppercase tracking-wider text-earth">
                {t("bioregions.pilotLabel")}
              </p>
              <p className="text-forest mt-1">{t(`${detailKey}.pilot`)}</p>
            </div>
            <div className="border-l-2 border-forest/40 pl-4">
              <p className="text-xs uppercase tracking-wider text-earth">
                {t("bioregions.partnersLabel")}
              </p>
              <p className="text-forest mt-1">{t(`${detailKey}.partners`)}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="border border-forest/15 p-5 bg-background">
                <s.icon className="w-6 h-6 text-terracotta mb-3" strokeWidth={1.5} />
                <p className="text-earth text-xs uppercase tracking-wider">{s.label}</p>
                <p className="text-forest mt-1 leading-snug">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="border border-forest/15 bg-forest text-cream p-6 mb-12">
            <p className="text-terracotta text-xs uppercase tracking-widest mb-4">
              {t("bioregions.marketSignalsLabel")}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: t("bioregions.market.abandoned"), value: t(`${detailKey}.market.abandoned`) },
                { label: t("bioregions.market.age"), value: t(`${detailKey}.market.age`) },
                { label: t("bioregions.market.turnover"), value: t(`${detailKey}.market.turnover`) },
                { label: t("bioregions.market.value"), value: t(`${detailKey}.market.value`) },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-2xl md:text-3xl text-cream">{m.value}</p>
                  <p className="text-cream/60 text-xs uppercase tracking-wider mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-forest">
                  {t("bioregions.sections.challenges")}
                </h3>
              </div>
              <ul className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="text-earth border-l-2 border-terracotta pl-4 leading-relaxed">
                    {t(`${detailKey}.challenges.c${i}`)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sprout className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-forest">
                  {t("bioregions.sections.opportunities")}
                </h3>
              </div>
              <ul className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="text-earth border-l-2 border-forest/40 pl-4 leading-relaxed">
                    {t(`${detailKey}.opportunities.o${i}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border border-forest/15 p-6 bg-background">
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
              <h3 className="font-display text-xl text-forest">
                {t("bioregions.sections.watershed")}
              </h3>
            </div>
            <p className="text-earth leading-relaxed">{t(`${detailKey}.watershedDetail`)}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurLandscapes;
