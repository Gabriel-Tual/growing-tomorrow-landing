import { Eye, GraduationCap, Coins, ShoppingCart } from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "Inspiration",
    description: "Farmers need to see with their own eyes successes from others operating in the same context. Real stories from real practitioners break through skepticism and ignite the spark of possibility.",
  },
  {
    icon: GraduationCap,
    title: "Knowledge",
    description: "Access to firsthand training or a qualified agronomist who knows how to plan and execute regeneratively. Moving from inspiration to action requires the right knowledge at the right time.",
  },
  {
    icon: Coins,
    title: "Capital",
    description: "Funding for potential yield gaps and investment in transition. The financial bridge that allows farmers to take the leap without risking their livelihoods.",
  },
  {
    icon: ShoppingCart,
    title: "Market",
    description: "Certainty that people want your products. Without market access, all efforts are wasted. We connect regenerative producers with conscious buyers ready to pay for quality.",
  },
];

const RegenerationPathway = () => {
  return (
    <section className="py-24 bg-forest text-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-2 bg-terracotta rotate-45" />
      <div className="absolute bottom-1/3 -right-20 w-40 h-2 bg-terracotta -rotate-45" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              The Framework
            </p>
            <h2 className="font-display text-4xl md:text-5xl -rotate-1">
              The Regeneration Pathway
            </h2>
            <p className="text-cream/70 mt-6 max-w-2xl mx-auto">
              Four essential elements that unlock the transition to regenerative agriculture. Each step builds on the last, creating a pathway from curiosity to transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative bg-cream/5 border border-cream/10 p-6 hover:bg-cream/10 transition-colors"
                style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1)}deg)` }}
              >
                {/* Step number */}
                <span className="absolute -top-3 -left-3 w-8 h-8 bg-terracotta text-cream flex items-center justify-center font-display text-lg rotate-6">
                  {index + 1}
                </span>
                
                <step.icon className="w-10 h-10 text-terracotta mb-4" strokeWidth={1.5} />
                
                <h3 className="font-display text-xl text-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegenerationPathway;
