import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/kapahi-logo-official.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Properties", href: "#properties" },
  { name: "Locate Us", href: "#locate" },
  { name: "Contact", href: "#contact" },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Scroll spy logic
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2.5">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919419189511" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              +91-94191-89511
            </a>
            <a href="tel:+919469460000" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              +91-946-946-0000
            </a>
          </div>
          <a href="mailto:kapahipropertieskp@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="w-4 h-4" />
            kapahipropertieskp@gmail.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/98 backdrop-blur-lg shadow-card border-b border-border"
            : "bg-card/80 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}>
              <img 
                src={logoImage} 
                alt="Kapahi Properties Logo" 
                className="h-14 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="font-display text-xl font-bold text-primary">Kapahi Properties</h1>
                <p className="text-xs text-secondary font-medium">Since 1970s</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors relative group ${
                    activeSection === link.href 
                      ? "text-secondary" 
                      : "text-foreground hover:text-secondary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="gold" size="lg" onClick={() => scrollToSection("#contact")}>
                Get Expert Advice
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container-custom py-4 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    className={`block py-2 transition-colors w-full text-left ${
                      activeSection === link.href 
                        ? "text-secondary font-semibold" 
                        : "text-foreground hover:text-secondary"
                    }`}
                    onClick={() => {
                      scrollToSection(link.href);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </button>
                ))}
                <Button variant="gold" className="w-full" onClick={() => {
                  scrollToSection("#contact");
                  setIsOpen(false);
                }}>
                  Get Expert Advice
                </Button>
                <div className="pt-4 border-t border-border space-y-2">
                  <a href="tel:+919419189511" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
                    <Phone className="w-4 h-4" />
                    +91-94191-89511
                  </a>
                  <a href="tel:+919469460000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
                    <Phone className="w-4 h-4" />
                    +91-946-946-0000
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
