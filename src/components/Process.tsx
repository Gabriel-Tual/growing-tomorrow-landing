import { Users, Link, Sprout } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Emulate",
    subtitle: "Build the Movement",
    description: "Hosting RegenAg community gatherings at Norrsken Barcelona, creating spaces where regenerative minds meet. Sharing insights through LinkedIn to inspire the next generation of farmers and changemakers.",
    rotation: "-rotate-1",
  },
  {
    icon: Link,
    title: "Connect",
    subtitle: "Bridge the Gap",
    description: "Hundreds of meaningful connections forged between farmers, investors, innovators and policymakers. Each conversation plants a seed for future collaboration.",
    rotation: "rotate-1",
  },
  {
    icon: Sprout,
    title: "Do",
    subtitle: "Make it Happen",
    description: "Where strategy meets soil. Turning connections into concrete projects, pilots into programs, and ideas into impact. The magic is just beginning.",
    rotation: "-rotate-1",
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest/20 via-terracotta/20 to-forest/20" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
            The Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-forest">
            How Change Happens
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={`relative p-8 bg-cream border border-forest/10 rounded-sm ${step.rotation} hover:rotate-0 transition-transform duration-500`}
            >
              {/* Step number */}
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-terracotta text-cream flex items-center justify-center font-display text-xl rotate-6">
                {index + 1}
              </span>
              
              <step.icon className="w-10 h-10 text-forest mb-6" strokeWidth={1.5} />
              
              <h3 className="font-display text-2xl text-forest mb-2">
                {step.title}
              </h3>
              <p className="text-terracotta font-medium text-sm mb-4">
                {step.subtitle}
              </p>
              <p className="text-earth leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
