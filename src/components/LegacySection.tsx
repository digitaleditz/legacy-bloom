import { motion } from "framer-motion";
import { Quote, Target, Eye } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.jpg";
import leaderPortrait from "@/assets/leader-portrait.jpg";
import vishalPortrait from "@/assets/vishal-portrait.jpg";

const legacyTimeline = [
  {
    era: "1970s",
    title: "The Visionary Founder",
    name: "Late Sh. Lal Chand Kapahi",
    honorific: "(Lali Shah Ji)",
    description:
      "Laid the foundation with a simple belief: property deals are about people, families, and futures. His integrity and compassion set the tone for generations to come.",
    image: founderPortrait,
  },
  {
    era: "1990s",
    title: "Building Trust Across Generations",
    name: "Late Sh. Tilak Raj Kapahi",
    honorific: "(Kapahi Sahab)",
    description:
      "Strengthened the foundation with sincerity, hard work, and unwavering values. He earned the deep trust of countless families across Jammu & Kashmir.",
    image: leaderPortrait,
  },
  {
    era: "Present",
    title: "Carrying the Legacy Forward",
    name: "Vishal Kapahi",
    honorific: "",
    description:
      "Committed to combining traditional honesty with modern real estate solutions. Leading Kapahi Properties into a new era while honoring the family's core values.",
    image: vishalPortrait,
  },
];

const LegacySection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Honoring the Past,{" "}
            <span className="text-secondary">Building the Future</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three generations of dedication, trust, and excellence in serving the 
            real estate needs of Jammu & Kashmir.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-secondary/50 to-secondary" />

          <div className="space-y-16">
            {legacyTimeline.map((item, index) => (
              <motion.div
                key={item.era}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-card border border-border relative">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
                    <span className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-semibold mb-4">
                      {item.era}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg font-semibold text-secondary mb-1">
                      {item.name}
                    </p>
                    {item.honorific && (
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.honorific}
                      </p>
                    )}
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-secondary items-center justify-center shadow-gold flex-shrink-0 z-10">
                  <span className="text-secondary-foreground font-bold text-sm">
                    {index + 1}
                  </span>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-elevated">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          <motion.div
            className="bg-primary rounded-2xl p-8 text-primary-foreground"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To remain Jammu & Kashmir's most trusted real estate brand, preserving 
              the family's legacy of honesty while embracing innovation and modern 
              practices that serve our clients better.
            </p>
          </motion.div>

          <motion.div
            className="bg-card rounded-2xl p-8 border border-border shadow-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide transparent, personalized, professional real estate solutions 
              that turn property goals into lifelong relationships — built on trust, 
              integrity, and genuine care for every client.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
