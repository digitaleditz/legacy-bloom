import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-jammu.jpg";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const stats = [
  { icon: Award, value: "50+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Happy Families" },
  { icon: Building2, value: "1000+", label: "Properties Sold" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jammu city skyline with mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" />

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full text-secondary text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Serving Jammu & Kashmir Since the 1970s
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Jammu & Kashmir's{" "}
            <span className="text-secondary relative">
              Trusted Real Estate
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            <br />
            For 3 Generations
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Kapahi Properties, we blend a legacy of honesty with modern expertise to help you 
            buy, sell, rent, or invest in properties across Jammu & Kashmir — with complete 
            transparency and care.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="gold" size="xl" onClick={() => scrollToSection("properties")} className="group">
              View Featured Properties
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="xl" onClick={() => scrollToSection("contact")}>
              Talk to a Real Estate Expert
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
