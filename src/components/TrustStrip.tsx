import { motion } from "framer-motion";
import { Clock, Users, Shield, Building2 } from "lucide-react";

const trustItems = [
  {
    icon: Clock,
    title: "Since the 1970s",
    description: "Serving Jammu & Kashmir",
  },
  {
    icon: Users,
    title: "3 Generations Strong",
    description: "Family-Run Business",
  },
  {
    icon: Shield,
    title: "Transparent Dealings",
    description: "Honest Transactions",
  },
  {
    icon: Building2,
    title: "Full Service",
    description: "Residential · Commercial · Investments",
  },
];

const TrustStrip = () => {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
