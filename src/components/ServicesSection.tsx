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
    <section id="services" className="section-padding bg-muted/30">
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
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive{" "}
            <span className="text-secondary">Real Estate Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're looking to buy, sell, rent, or invest — we provide end-to-end 
            support with the same values our founders established decades ago.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-secondary" />
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="ghost"
                className="text-secondary hover:text-secondary hover:bg-secondary/10 p-0 group/btn"
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
          <p className="text-lg text-muted-foreground mb-6">
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
