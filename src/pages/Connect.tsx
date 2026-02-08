import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Connect = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-forest text-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              Step 2
            </p>
            <h1 className="font-display text-5xl md:text-6xl mb-6 rotate-1">
              Connect
            </h1>
            <p className="text-cream/80 text-lg leading-relaxed">
              Creating connections to accelerate impact between different worlds, actively acting as a translating agent for all the doers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Coming Soon */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-cream p-12 border border-forest/10 -rotate-1">
              <h2 className="font-display text-3xl text-forest mb-6">
                Content Coming Soon
              </h2>
              <p className="text-earth leading-relaxed mb-8">
                We're building out this section to showcase how we bridge farmers, investors, innovators, and policymakers. Each connection plants a seed for future collaboration.
              </p>
              <a 
                href="https://calendly.com/gabriel-tual/30min" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="group">
                  Let's Connect Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Connect;
