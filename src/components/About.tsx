import gabrielPhoto from "@/assets/gabriel-tual.jpg";

const About = () => {
  return (
    <section className="py-24 bg-forest text-cream relative overflow-hidden">
      {/* Decorative rotated strip */}
      <div className="absolute top-1/3 -left-20 w-40 h-2 bg-terracotta rotate-45" />
      <div className="absolute bottom-1/4 -right-20 w-40 h-2 bg-terracotta -rotate-45" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="order-2 md:order-1">
              <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
                The Catalyst
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6 -rotate-1">
                Gabriel Tual
              </h2>
              <div className="space-y-4 text-cream/80 leading-relaxed">
                <p>
                  Regenerative Engineer and project developer at the intersection of 
                  food systems, climate action, and technology.
                </p>
                <p>
                  From moderating sessions with Koen van Seijen at packed venues 
                  to writing about the future of farming, I'm building bridges 
                  between the regenerative dreamers and doers.
                </p>
                <p className="text-cream font-medium italic">
                  "Making farming sexy again, one connection at a time."
                </p>
              </div>
            </div>
            
            {/* Photo */}
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square bg-cream/10 rounded-sm rotate-3 relative overflow-hidden">
                <img 
                  src={gabrielPhoto} 
                  alt="Gabriel Tual" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Decorative overlay */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-terracotta/30 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
