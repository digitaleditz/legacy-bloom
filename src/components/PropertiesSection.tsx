import { motion } from "framer-motion";
import {
  Building2,
  Home,
  LandPlot,
  Briefcase,
  Store,
  Trees,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const propertyTypes = [
  {
    icon: Building2,
    title: "Apartments & Flats",
    tagline: "Modern urban living",
    description:
      "Curated 2, 3 & 4 BHK apartments in the most sought-after addresses across Jammu & Srinagar.",
    highlights: ["1 BHK – 4 BHK", "Premium amenities", "Prime locations"],
  },
  {
    icon: Home,
    title: "Independent Houses & Villas",
    tagline: "Spacious family homes",
    description:
      "Standalone homes and luxury villas with private gardens, parking and architectural character.",
    highlights: ["3 BHK – 6 BHK", "Garden & parking", "Gated communities"],
  },
  {
    icon: LandPlot,
    title: "Residential Plots",
    tagline: "Build your dream",
    description:
      "Clear-title residential plots in upcoming and established localities with full documentation support.",
    highlights: ["5 – 25 Marla", "Verified titles", "DDA / approved layouts"],
  },
  {
    icon: Briefcase,
    title: "Commercial Office Spaces",
    tagline: "Premium workspaces",
    description:
      "Grade-A office spaces and corporate suites in central business districts, ready for fit-out.",
    highlights: ["500 – 10,000 sq.ft", "CBD addresses", "Lease & sale options"],
  },
  {
    icon: Store,
    title: "Retail & Shops",
    tagline: "High-footfall locations",
    description:
      "Showrooms, retail shops and high-street commercial spaces in Jammu & Kashmir's busiest markets.",
    highlights: ["Ground floor units", "Main road frontage", "Anchor locations"],
  },
  {
    icon: Trees,
    title: "Farmhouses & Land",
    tagline: "Heritage retreats",
    description:
      "Farmhouses, orchards and agricultural land — perfect for getaways or long-term investment.",
    highlights: ["1 – 50 kanal", "Orchard land", "Scenic locations"],
  },
];

const PropertiesSection = () => {
  return (
    <section
      id="properties"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-ivory to-background grain"
    >
      {/* Decorative ornaments */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="divider-ornament text-xs uppercase tracking-[0.4em] font-semibold mb-6">
            Property Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-6 leading-[1.05]">
            A Curated Range of{" "}
            <span className="italic text-gradient-red">Properties</span> We Deal In
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From signature apartments to sprawling estates, we represent the full
            spectrum of premium real estate across Jammu &amp; Kashmir.
          </p>
        </motion.div>

        {/* Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {propertyTypes.map((t, index) => (
            <motion.button
              key={t.title}
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative text-left bg-card rounded-2xl p-8 border border-border/70 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              {/* Hover gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top row */}
              <div className="relative flex items-start justify-between mb-7">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-charcoal flex items-center justify-center group-hover:from-secondary group-hover:to-red-dark transition-all duration-500">
                    <t.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:rotate-12 transition-all duration-300" />
              </div>

              {/* Text */}
              <p className="text-[11px] uppercase tracking-[0.25em] text-secondary font-semibold mb-2">
                {t.tagline}
              </p>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3 leading-tight">
                {t.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {t.description}
              </p>

              {/* Highlights */}
              <div className="pt-5 border-t border-border/60 space-y-2">
                {t.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-serif text-2xl md:text-3xl italic text-foreground/80 max-w-2xl mx-auto mb-8">
            “Looking for something specific? Our advisors maintain an extensive
            off-market portfolio.”
          </p>
          <Button
            variant="gold"
            size="xl"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Speak With an Advisor
            <ArrowUpRight className="w-5 h-5 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesSection;
