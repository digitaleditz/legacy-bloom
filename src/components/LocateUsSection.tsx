import { motion } from "framer-motion";
import { MapPin, Globe2, Sparkles } from "lucide-react";

const LocateUsSection = () => {
  return (
    <section id="locate" className="section-padding bg-background overflow-hidden">
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
            Find Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Locate{" "}
            <span className="text-secondary">Kapahi Properties</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wherever you are in the world, your next home in Jammu & Kashmir is just a call away.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.8947889!2d74.8477!3d32.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e853c9ea4e3c1%3A0x3d7b12e9e8e3b4e3!2sTrikuta%20Nagar%2C%20Jammu!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kapahi Properties Location"
              />
            </div>
            {/* Map Pin Overlay */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center shadow-gold animate-pulse-glow">
              <MapPin className="w-8 h-8 text-secondary-foreground" />
            </div>
          </motion.div>

          {/* 3D Globe Concept */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 via-transparent to-secondary/10 animate-pulse" />
              
              {/* Globe container */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary via-navy-light to-primary shadow-elevated overflow-hidden">
                {/* Globe surface pattern */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-secondary/50 via-secondary/20 to-secondary/50 origin-bottom"
                      style={{ transform: `rotate(${i * 22.5}deg)` }}
                    />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
                      style={{ top: `${20 + i * 15}%` }}
                    />
                  ))}
                </div>

                {/* Rotating highlight */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* India highlight */}
                <div className="absolute top-[35%] right-[30%] w-12 h-12">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-secondary/40 rounded-full blur-xl animate-pulse" />
                    <div className="absolute inset-2 bg-secondary rounded-full shadow-gold flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <motion.path
                    d="M 20,30 Q 40,20 60,35"
                    stroke="hsl(43, 70%, 47%)"
                    strokeWidth="0.3"
                    fill="none"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 80,60 Q 70,40 60,35"
                    stroke="hsl(43, 70%, 47%)"
                    strokeWidth="0.3"
                    fill="none"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                  <motion.path
                    d="M 30,75 Q 45,50 60,35"
                    stroke="hsl(43, 70%, 47%)"
                    strokeWidth="0.3"
                    fill="none"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 1.1 }}
                  />
                </svg>
              </div>

              {/* Orbiting elements */}
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-secondary shadow-gold" />
                </div>
              </motion.div>

              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-4 left-4">
                  <div className="w-3 h-3 rounded-full bg-cta shadow-lg" />
                </div>
              </motion.div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe2 className="w-16 h-16 text-secondary/30" />
              </div>
            </div>

            {/* Text below globe */}
            <div className="text-center mt-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Clients from Around the World
              </h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                NRIs and global investors trust Kapahi Properties for their real estate 
                needs in Jammu & Kashmir.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocateUsSection;
