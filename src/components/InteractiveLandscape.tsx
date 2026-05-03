import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type HoveredElement = "landscape" | "community" | "farms" | null;

const InteractiveLandscape = () => {
  const [hovered, setHovered] = useState<HoveredElement>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const elements = {
    landscape: {
      label: t("landscape.landscapeLabel"),
      color: "hsl(150, 30%, 18%)",
      hoverColor: "hsl(150, 30%, 25%)",
      link: "/growing-landscape",
      offer: t("offers.landscape.title"),
    },
    farms: {
      label: t("landscape.farmsLabel"),
      color: "hsl(16, 65%, 50%)",
      hoverColor: "hsl(16, 65%, 58%)",
      link: "/growing-food",
      offer: t("offers.food.title"),
    },
    community: {
      label: t("landscape.communityLabel"),
      color: "hsl(45, 30%, 96%)",
      hoverColor: "hsl(45, 30%, 100%)",
      link: "/growing-connection",
      offer: t("offers.connection.title"),
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              {t("landscape.label")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest -rotate-1">
              {t("landscape.title")}
            </h2>
            <p className="text-earth mt-6 max-w-2xl mx-auto">
              {t("landscape.subtitle")}
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            <svg
              viewBox="0 0 600 600"
              className="w-full max-w-lg h-auto"
              style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.1))" }}
            >
              {/* Main landscape circle */}
              <circle
                cx="300"
                cy="300"
                r="250"
                fill={hovered === "landscape" ? elements.landscape.hoverColor : elements.landscape.color}
                stroke="hsl(16, 65%, 50%)"
                strokeWidth="3"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHovered("landscape")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navigate(elements.landscape.link)}
                opacity={hovered && hovered !== "landscape" ? 0.7 : 1}
              />

              {/* Community line/path crossing the landscape */}
              <path
                d="M 80 380 Q 200 250 300 300 Q 400 350 520 220"
                fill="none"
                stroke={hovered === "community" ? elements.community.hoverColor : elements.community.color}
                strokeWidth={hovered === "community" ? 8 : 5}
                strokeLinecap="round"
                strokeDasharray={hovered === "community" ? "none" : "12 6"}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHovered("community")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navigate(elements.community.link)}
                opacity={hovered && hovered !== "community" ? 0.5 : 1}
              />

              {/* Farm blurbs scattered in the landscape */}
              {[
                { cx: 200, cy: 220, r: 28 },
                { cx: 350, cy: 180, r: 22 },
                { cx: 280, cy: 350, r: 32 },
                { cx: 420, cy: 300, r: 20 },
                { cx: 180, cy: 380, r: 25 },
                { cx: 380, cy: 400, r: 18 },
                { cx: 250, cy: 260, r: 15 },
                { cx: 340, cy: 280, r: 24 },
              ].map((farm, i) => (
                <circle
                  key={i}
                  cx={farm.cx}
                  cy={farm.cy}
                  r={hovered === "farms" ? farm.r + 4 : farm.r}
                  fill={hovered === "farms" ? elements.farms.hoverColor : elements.farms.color}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHovered("farms")}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => navigate(elements.farms.link)}
                  opacity={hovered && hovered !== "farms" ? 0.5 : 0.85}
                />
              ))}

              {/* Labels */}
              <text x="300" y="570" textAnchor="middle" fill="hsl(16, 65%, 50%)" fontSize="20" fontWeight="600" className="pointer-events-none uppercase" letterSpacing="2">
                {elements.landscape.label}
              </text>
            </svg>

            {/* Legend */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 flex-wrap w-full">
              {(["landscape", "farms", "community"] as const).map((key) => (
                <button
                  key={key}
                  className={`flex items-center gap-2 text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    hovered === key ? "sm:scale-110 font-semibold" : "opacity-70 hover:opacity-100"
                  }`}
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => navigate(elements[key].link)}
                >
                  <span
                    className="w-4 h-4 rounded-full border-2 border-forest/20 flex-shrink-0"
                    style={{ backgroundColor: elements[key].color }}
                  />
                  <span className="text-forest text-left">
                    {elements[key].label} → {elements[key].offer}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLandscape;
