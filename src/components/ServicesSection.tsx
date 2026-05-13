import { motion } from "framer-motion";
import { Home, Key, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Buying & Selling",
    description:
      "Expert guidance for residential, commercial & investment properties. We help you find the perfect property or the right buyer with complete transparency.",
    features: ["Market Analysis", "Property Valuation", "Documentation Support", "Negotiation Expertise"],
  },
  {
    icon: Key,
    title: "Rentals & Leasing",
    description:
      "Hassle-free solutions for both tenants and property owners. From finding the perfect rental to managing lease agreements professionally.",
    features: ["Tenant Screening", "Lease Management", "Property Marketing", "Legal Compliance"],
  },
  {
    icon: TrendingUp,
    title: "Investment Consultancy",
    description:
      "Smart property advice backed by decades of market insight and honesty. We help you make informed investment decisions for long-term growth.",
    features: ["Portfolio Planning", "ROI Analysis", "Market Trends", "Risk Assessment"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-primary text-primary-foreground relative overflow-hidden grain">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="divider-ornament text-xs uppercase tracking-[0.4em] font-semibold text-secondary mb-6">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6 leading-[1.05]">
            End-to-end{" "}
            <span className="italic text-gradient-gold">real estate</span> advisory
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Whether you're acquiring, divesting, leasing or investing — every
            engagement is handled with the discretion and care our family has
            been known for since the 1970s.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-primary-foreground/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-secondary/40 hover:bg-primary-foreground/[0.05] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute top-6 right-6 font-display text-5xl text-primary-foreground/[0.06] font-bold leading-none">
                0{index + 1}
              </span>

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-red-dark flex items-center justify-center mb-7 shadow-red group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-6 h-6 text-secondary-foreground" strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-primary-foreground/65 mb-7 leading-relaxed text-sm">
                {service.description}
              </p>

              <ul className="space-y-2.5 mb-8 pt-5 border-t border-primary-foreground/10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="ghost"
                className="text-secondary hover:text-gold hover:bg-transparent p-0 group/btn font-semibold uppercase tracking-wider text-xs"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-primary-foreground/70 mb-6">
            Not sure which service is right for you? Let's discuss your needs.
          </p>
          <Button variant="gold" size="xl" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Schedule a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
