const experiences = [
  {
    stat: "100+",
    label: "Connections Made",
    description: "Farmers, investors, and innovators brought together",
  },
  {
    stat: "10+",
    label: "Events Hosted",
    description: "RegenAg gatherings at Norrsken Barcelona",
  },
  {
    stat: "∞",
    label: "Seeds Planted",
    description: "Ideas shared, movements started",
  },
];

const Experience = () => {
  return (
    <section className="py-24 bg-cream relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              Track Record
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest rotate-1">
              Growing Impact
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.label}
                className="text-center p-6"
              >
                <span className="font-display text-6xl text-terracotta block mb-2" style={{ transform: `rotate(${(index - 1) * 3}deg)` }}>
                  {exp.stat}
                </span>
                <h3 className="font-display text-xl text-forest mb-2">
                  {exp.label}
                </h3>
                <p className="text-earth text-sm">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
