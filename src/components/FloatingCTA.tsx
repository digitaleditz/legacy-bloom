import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Mobile Sticky Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary shadow-elevated border-t border-secondary/20 p-3">
        <div className="flex gap-3">
          <a href="tel:+919419189511" className="flex-1">
            <Button variant="gold" className="w-full gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
          <a href="#contact" className="flex-1">
            <Button variant="hero" className="w-full gap-2">
              <MessageCircle className="w-4 h-4" />
              Enquire
            </Button>
          </a>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-20 right-0 bg-card rounded-2xl shadow-elevated border border-border p-6 w-72"
            >
              <h4 className="font-display text-lg font-bold text-foreground mb-4">
                Quick Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+919419189511"
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-secondary/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us at</p>
                    <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                      +91-94191-89511
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+919469460000"
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-secondary/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cta flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Or call</p>
                    <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                      +91-946-946-0000
                    </p>
                  </div>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsExpanded(false)}
                  className="block w-full"
                >
                  <Button variant="default" className="w-full">
                    Send Enquiry
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-gold transition-all ${
            isExpanded ? "bg-foreground" : "bg-secondary"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? (
            <X className="w-6 h-6 text-background" />
          ) : (
            <Phone className="w-6 h-6 text-secondary-foreground" />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default FloatingCTA;
