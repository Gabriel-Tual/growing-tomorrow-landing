import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { type Language, languageLabels } from "@/translations";

const languages: Language[] = ["en", "fr", "es"];

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-forest/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-display text-2xl text-forest hover:text-terracotta transition-colors">
            Growing<span className="text-terracotta">.</span>Tomorrow
          </a>
          
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-forest/20 rounded-sm overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                    language === lang
                      ? "bg-forest text-cream"
                      : "text-forest hover:bg-forest/10"
                  }`}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>

            <a 
              href="https://calendly.com/gabriel-tual/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="border-forest text-forest hover:bg-forest hover:text-cream">
                {t("header.cta")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
