import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import andreinaPhoto from "@/assets/andreina.jfif";
import noePhoto from "@/assets/noe.jfif";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "Noé A.",
    role: "Norrsken",
    quote: "I've lost count of the events and initiatives Gabriel and I have collaborated on at Norrsken. As our Regen Champion, he has an absolute superpower: he makes soil health, resilient landscapes, and agriculture genuinely cool. He effortlessly bridges the gap between tech founders and actual farmers, packing rooms with people eager to listen and act. I'm constantly amazed by his mind and his reach. He retains a fascinating amount of knowledge about our ecosystems and has an incredible talent for connecting the exact right people. Yet, despite his deep expertise, he remains incredibly kind, humble, and generous. What truly sets Gabriel apart is his relentless, authentic passion for the earth. It sounds like a cliché, but I genuinely love working and learning alongside him every day. Regeneration is infinite, and so is the work we need to do, there is honestly no better partner to lead that charge.",
    initials: "NA",
    photo: noePhoto,
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
    quote: "I've had the pleasure of not only working with but also brainstorming and learning from Gabriel. He combines sharp intelligence and efficiency with a rare ability to connect ideas across disciplines and turn them into actionable strategies. Beyond his expertise in sustainability and carbon project development, what truly stands out is his eloquence, adaptability, and genuine kindness. He excels as both an inspiring collaborator and a trusted consultant.",
    initials: "AR",
    photo: andreinaPhoto,
  },
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-forest text-cream relative overflow-hidden">
      <div className="absolute top-20 right-10 w-32 h-32 border border-terracotta/20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-terracotta/20 rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              {t("testimonials.label")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl -rotate-1">
              {t("testimonials.title")}
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
                    {"photo" in testimonial && testimonial.photo && (
                      <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                    )}
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
