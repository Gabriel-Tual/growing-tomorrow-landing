import { Sprout, Users, Mountain } from "lucide-react";

const offers = [
  {
    icon: Sprout,
    title: "Growing Food",
    subtitle: "For Farmers",
    description: "A dedicated track for farmers' needs—from training and technical support to market access and offtake agreements.",
  },
  {
    icon: Users,
    title: "Growing Connection",
    subtitle: "For Projects",
    description: "A relationship service to accelerate your regenerative projects by connecting you with the right partners, together.",
  },
  {
    icon: Mountain,
    title: "Growing Landscape",
    subtitle: "For Regions",
    description: "Strategic support to create landscape-level regeneration projects that transform entire territories.",
  },
];

const Offers = () => {
  return (
    <section className="py-24 bg-cream relative">
      {/* Decorative strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              How We Grow
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest rotate-1">
              Three Pathways to Regeneration
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div 
                key={offer.title}
                className="group relative bg-forest text-cream p-8 transition-transform duration-300 hover:-translate-y-2"
                style={{ transform: `rotate(${(index - 1) * -1}deg)` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <offer.icon className="h-12 w-12 text-terracotta" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <p className="text-terracotta text-sm tracking-widest uppercase mb-2">
                  {offer.subtitle}
                </p>
                <h3 className="font-display text-2xl mb-4">
                  {offer.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  {offer.description}
                </p>
                
                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-terracotta/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
