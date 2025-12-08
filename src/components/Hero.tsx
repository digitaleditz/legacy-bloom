import { motion } from "framer-motion";
import { Search, MapPin, Home, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-jammu.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jammu city skyline with mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6">
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
            <span className="text-secondary">Trusted Real Estate</span>
            <br />
            For 3 Generations
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
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
            <Button variant="gold" size="xl">
              View Featured Properties
            </Button>
            <Button variant="hero" size="xl">
              Talk to a Real Estate Expert
            </Button>
          </motion.div>

          {/* Property Search Bar */}
          <motion.div
            className="bg-card/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-elevated"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </label>
                <Select>
                  <SelectTrigger className="bg-muted border-0">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jammu">Jammu</SelectItem>
                    <SelectItem value="srinagar">Srinagar</SelectItem>
                    <SelectItem value="trikuta">Trikuta Nagar</SelectItem>
                    <SelectItem value="gandhi">Gandhi Nagar</SelectItem>
                    <SelectItem value="nowgam">Nowgam</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Property Type
                </label>
                <Select>
                  <SelectTrigger className="bg-muted border-0">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">Independent House</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <IndianRupee className="w-4 h-4" />
                  Budget Range
                </label>
                <Select>
                  <SelectTrigger className="bg-muted border-0">
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25-50">₹25L - ₹50L</SelectItem>
                    <SelectItem value="50-75">₹50L - ₹75L</SelectItem>
                    <SelectItem value="75-1cr">₹75L - ₹1Cr</SelectItem>
                    <SelectItem value="1-2cr">₹1Cr - ₹2Cr</SelectItem>
                    <SelectItem value="2cr+">₹2Cr+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button variant="gold" size="lg" className="w-full gap-2">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
