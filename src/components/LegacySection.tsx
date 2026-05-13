import { motion } from "framer-motion";
import { Quote, Target, Eye } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.jpeg";
import leaderPortrait from "@/assets/leader-portrait.jpeg";
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
          <span className="divider-ornament text-xs uppercase tracking-[0.4em] font-semibold mb-6">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-6 leading-[1.05]">
            Honoring the Past,{" "}
            <span className="italic text-gradient-red">Building the Future</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three generations of dedication, trust, and excellence in serving the
            real estate needs of Jammu &amp; Kashmir.
          </p>
        </motion.div>

        {/* Founders Grid - Editorial Portrait Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {legacyTimeline.map((item, index) => (
            <motion.article
              key={item.era}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Era badge - floating */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="px-5 py-2 rounded-full bg-primary border border-gold/30 shadow-elevated">
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-gradient-gold font-semibold">
                    {item.era}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div className="relative h-full bg-card rounded-3xl pt-12 pb-8 px-8 border border-border/70 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Decorative corner ornaments */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-gold/40 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-gold/40 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-gold/40 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-gold/40 rounded-br-3xl" />

                {/* Background quote */}
                <Quote className="absolute top-14 right-6 w-12 h-12 text-secondary/[0.06]" />

                {/* Portrait Frame */}
                <div className="relative mx-auto w-44 h-52 mb-7">
                  {/* Outer gold frame */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-gold via-gold-light to-gold-dark opacity-90 shadow-gold" />
                  {/* Inner mat */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cream to-ivory p-2 shadow-inner">
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-muted to-ivory">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg pointer-events-none" />
                    </div>
                  </div>
                  {/* Brass nameplate accent */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
                </div>

                {/* Generation label */}
                <div className="text-center mb-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">
                    {index === 0 ? "First Generation" : index === 1 ? "Second Generation" : "Third Generation"}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground text-center leading-tight mb-1">
                  {item.name}
                </h3>
                {item.honorific && (
                  <p className="text-sm italic font-serif text-secondary text-center mb-4">
                    {item.honorific}
                  </p>
                )}

                {/* Ornament divider */}
                <div className="flex items-center justify-center gap-2 my-4">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
                  <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
                </div>

                {/* Title */}
                <p className="font-display italic text-base text-foreground/80 text-center mb-4">
                  {item.title}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm text-center">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
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
