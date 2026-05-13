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
    <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden grain">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jammu city skyline with mountains"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
      </div>

      {/* Decorative ambient lights */}
      <div className="absolute top-20 right-10 w-[28rem] h-[28rem] bg-secondary/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-float" />

      {/* Editorial frame lines */}
      <div className="absolute inset-x-8 top-32 bottom-32 hidden lg:block pointer-events-none">
        <div className="absolute left-0 top-0 w-px h-16 bg-gradient-to-b from-secondary to-transparent" />
        <div className="absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-secondary to-transparent" />
        <div className="absolute right-0 bottom-0 w-px h-16 bg-gradient-to-t from-secondary to-transparent" />
        <div className="absolute right-0 bottom-0 h-px w-16 bg-gradient-to-l from-secondary to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary-foreground/[0.06] backdrop-blur-md border border-primary-foreground/15 rounded-full text-primary-foreground/90 text-xs uppercase tracking-[0.3em] font-semibold mb-8">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
              Est. 1970s · Jammu &amp; Kashmir
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold text-primary-foreground leading-[1.02] mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A Legacy of <span className="italic text-gradient-gold">Trust</span>,
            <br />
            <span className="text-primary-foreground">Crafted Across</span>{" "}
            <span className="italic text-gradient-red">Three Generations</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-foreground/75 mb-12 max-w-2xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kapahi Properties is Jammu &amp; Kashmir's most trusted real estate
            house — pairing a half-century of integrity with the precision of
            modern advisory.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="gold" size="xl" onClick={() => scrollToSection("properties")} className="group">
              Explore Our Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="xl" onClick={() => scrollToSection("contact")}>
              Speak With an Advisor
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-x-12 gap-y-8 pt-10 border-t border-primary-foreground/15"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl border border-secondary/40 bg-secondary/10 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-primary-foreground leading-none">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mt-1.5">{stat.label}</p>
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
