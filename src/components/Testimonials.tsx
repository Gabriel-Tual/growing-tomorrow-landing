import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alice H.",
    role: "Regenerative Farmer, France",
    quote: "Gabriel connected me with the right investors at the perfect time. His network in the regenerative space is unmatched.",
    initials: "AH",
  },
  {
    name: "Alice MN.",
    role: "Impact Fund Manager",
    quote: "Working with Gabriel accelerated our due diligence on regenerative projects. He understands both the farming and finance sides.",
    initials: "AM",
  },
  {
    name: "Andreina R.",
    role: "Food Systems Consultant",
    quote: "The RegenAg community gatherings Gabriel hosts are where real collaborations happen. I've found three project partners there.",
    initials: "AR",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-forest text-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-terracotta/20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-terracotta/20 rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              Voices from the Field
            </p>
            <h2 className="font-display text-4xl md:text-5xl -rotate-1">
              What Collaborators Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-cream/5 backdrop-blur-sm border border-cream/10 p-8 relative"
                style={{ transform: `rotate(${(index - 1) * 1.5}deg)` }}
              >
                <div className="absolute -top-3 left-8 text-terracotta font-display text-6xl leading-none">
                  "
                </div>
                <p className="text-cream/80 leading-relaxed mb-6 pt-4">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-terracotta/30">
                    <AvatarFallback className="bg-terracotta/20 text-cream font-display">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-display text-lg text-cream">{testimonial.name}</p>
                    <p className="text-cream/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
