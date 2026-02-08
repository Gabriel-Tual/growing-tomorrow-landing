import { Users, Link, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: Users,
    title: "Emulate",
    subtitle: "Build the Movement",
    description: "We create content, curate communities and make sure that regeneration is embodied through our stories.",
    rotation: "-rotate-1",
    link: "/emulate",
  },
  {
    icon: Link,
    title: "Connect",
    subtitle: "Bridge the Gap",
    description: "Creating connections to accelerate impact between different worlds, actively acting as a translating agent for all the doers.",
    rotation: "rotate-1",
    link: "/connect",
  },
  {
    icon: Sprout,
    title: "Do",
    subtitle: "Make it Happen",
    description: "Where strategy meets soil. Turning connections into concrete projects, pilots into programs, and ideas into impact. The magic is just beginning.",
    rotation: "-rotate-1",
    link: "/do",
  },
];

const Process = () => {
  const navigate = useNavigate();

  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
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
              <p className="text-earth leading-relaxed mb-6">
                {step.description}
              </p>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="border-forest text-forest hover:bg-forest hover:text-cream"
                onClick={() => navigate(step.link)}
              >
                Know More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
