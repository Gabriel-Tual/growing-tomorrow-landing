import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Linkedin, BookOpen, Building } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "RegenAg Communities",
    description: "Building and nurturing local regenerative agriculture communities across Europe. Creating spaces where farmers, entrepreneurs, and changemakers connect, share knowledge, and collaborate on transforming food systems.",
    highlight: "Monthly gatherings bringing together 50+ regenerative practitioners",
  },
  {
    icon: Building,
    title: "Norrsken Champion",
    description: "As an Impact Champion at Norrsken Barcelona, I host and curate events that bring the regenerative movement to one of Europe's leading impact hubs. From panel discussions to hands-on workshops, we're making regeneration accessible to the broader innovation ecosystem.",
    highlight: "20+ events hosted at Norrsken Barcelona",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Content",
    description: "Sharing insights, stories, and lessons from the frontlines of regenerative agriculture. From farm visits to investment trends, I document the journey of scaling regeneration and inspire others to join the movement.",
    highlight: "10,000+ followers engaged in regenerative conversations",
  },
  {
    icon: BookOpen,
    title: "Substack",
    description: "Deep dives into the regenerative world through long-form writing. Exploring the intersection of soil health, business models, and systemic change. Subscribe to get weekly insights on what's working, what's not, and where we're headed.",
    highlight: "Weekly essays on regenerative systems",
  },
];

const Emulate = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-forest text-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              Step 1
            </p>
            <h1 className="font-display text-5xl md:text-6xl mb-6 -rotate-1">
              Emulate
            </h1>
            <p className="text-cream/80 text-lg leading-relaxed">
              We create content, curate communities and make sure that regeneration is embodied through our stories. Here's how we build the movement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Activities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <div 
                  key={activity.title}
                  className="bg-cream p-8 border border-forest/10 hover:-translate-y-2 transition-transform duration-300"
                  style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1)}deg)` }}
                >
                  <activity.icon className="w-12 h-12 text-terracotta mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-forest mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-earth leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <p className="text-terracotta font-medium text-sm italic">
                    {activity.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Emulate;
