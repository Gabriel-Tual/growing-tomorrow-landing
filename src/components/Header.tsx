import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-forest/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-display text-2xl text-forest hover:text-terracotta transition-colors">
            Growing<span className="text-terracotta">.</span>Tomorrow
          </a>
          
          <a 
            href="https://calendly.com/gabriel-tual/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="border-forest text-forest hover:bg-forest hover:text-cream">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
