import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-forest text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl">
              Growing<span className="text-terracotta">.</span>Tomorrow
            </span>
            <p className="text-cream/60 text-sm mt-1">
              Scaling regeneration through connection.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/gabriel-tual/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-terracotta transition-colors"
              aria-label="Gabriel Tual on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/growing-tomorrow/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-terracotta transition-colors text-sm"
            >
              Company Page →
            </a>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-cream/10 text-center text-cream/40 text-sm">
          © {new Date().getFullYear()} Growing Tomorrow. Cultivating change.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
