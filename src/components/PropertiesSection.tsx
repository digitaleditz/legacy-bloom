import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Bed, Maximize, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PropertyDetailModal from "./PropertyDetailModal";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    id: 1,
    title: "3BHK Luxury Apartment",
    location: "Trikuta Nagar, Jammu",
    price: "₹85 Lakhs",
    type: "For Sale",
    bhk: "3 BHK",
    size: "1,850 sq.ft",
    image: property1,
    featured: true,
  },
  {
    id: 2,
    title: "Premium Villa with Garden",
    location: "Gandhi Nagar, Jammu",
    price: "₹2.5 Cr",
    type: "For Sale",
    bhk: "4 BHK",
    size: "3,200 sq.ft",
    image: property2,
    featured: true,
  },
  {
    id: 3,
    title: "Commercial Office Space",
    location: "Residency Road, Jammu",
    price: "₹45,000/mo",
    type: "For Rent",
    bhk: "Office",
    size: "2,500 sq.ft",
    image: property3,
    featured: false,
  },
  {
    id: 4,
    title: "Residential Plot",
    location: "Nowgam, Kashmir",
    price: "₹1.2 Cr",
    type: "For Sale",
    bhk: "Plot",
    size: "10 Marla",
    image: property4,
    featured: true,
  },
  {
    id: 5,
    title: "2BHK Mountain View Flat",
    location: "Srinagar, Kashmir",
    price: "₹55 Lakhs",
    type: "For Sale",
    bhk: "2 BHK",
    size: "1,200 sq.ft",
    image: property5,
    featured: false,
  },
  {
    id: 6,
    title: "Heritage Wooden House",
    location: "Pahalgam, Kashmir",
    price: "₹3.8 Cr",
    type: "For Sale",
    bhk: "5 BHK",
    size: "4,500 sq.ft",
    image: property6,
    featured: true,
  },
];

const filters = ["All", "Apartment", "House", "Plot", "Commercial"];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const PropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePropertyClick = (property: typeof properties[0]) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <section id="properties" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            Our Listings
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Properties in{" "}
            <span className="text-secondary">Jammu & Kashmir</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our handpicked selection of premium properties across the region.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handlePropertyClick(property)}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge
                  className={`absolute top-4 left-4 ${
                    property.type === "For Sale"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-cta text-primary-foreground"
                  }`}
                >
                  {property.type}
                </Badge>
                {property.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary/80 text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {property.title}
                </h3>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-foreground">
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-muted-foreground" />
                    {property.bhk}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4 text-muted-foreground" />
                    {property.size}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="flex items-center font-display text-xl font-bold text-secondary">
                    {property.price}
                  </span>
                  <Button variant="ghost" size="sm" className="text-secondary hover:bg-secondary/10">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button 
            variant="outline" 
            size="xl" 
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us For More Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Property Detail Modal */}
      <PropertyDetailModal 
        property={selectedProperty} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default PropertiesSection;
