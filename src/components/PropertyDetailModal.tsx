import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Maximize, Phone, Send, CheckCircle, Home, Car, Trees, Shield, Wifi, Droplets } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  bhk: string;
  size: string;
  image: string;
  featured: boolean;
  description?: string;
  amenities?: string[];
  neighborhood?: string;
}

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetailModal = ({ property, isOpen, onClose }: PropertyDetailModalProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  if (!property) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Enquiry Sent Successfully!",
      description: `We'll contact you about ${property.title} shortly.`,
    });
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  const amenities = [
    { icon: Car, label: "Parking" },
    { icon: Trees, label: "Garden" },
    { icon: Shield, label: "24/7 Security" },
    { icon: Wifi, label: "High-Speed Internet" },
    { icon: Droplets, label: "Water Supply" },
    { icon: Home, label: "Power Backup" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0" aria-describedby="property-description">
        <div className="relative">
          {/* Property Image */}
          <div className="relative h-64 md:h-80">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className={property.type === "For Sale" ? "bg-secondary text-secondary-foreground" : "bg-cta text-primary-foreground"}>
                {property.type}
              </Badge>
              {property.featured && (
                <Badge className="bg-primary/80 text-primary-foreground">Featured</Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {property.title}
              </DialogTitle>
              <p className="flex items-center gap-2 text-muted-foreground mt-2">
                <MapPin className="w-4 h-4" />
                {property.location}
              </p>
            </DialogHeader>

            {/* Price & Key Stats */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-display text-2xl md:text-3xl font-bold text-secondary">{property.price}</p>
                </div>
                <div className="flex gap-6">
                  <div className="text-center">
                    <Bed className="w-5 h-5 mx-auto text-muted-foreground mb-1" />
                    <p className="text-sm font-medium text-foreground">{property.bhk}</p>
                  </div>
                  <div className="text-center">
                    <Maximize className="w-5 h-5 mx-auto text-muted-foreground mb-1" />
                    <p className="text-sm font-medium text-foreground">{property.size}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6" id="property-description">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Property Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                This stunning {property.bhk} property in {property.location} offers an exceptional living experience. 
                With {property.size} of thoughtfully designed space, this property combines modern amenities with 
                comfortable living. Ideal for families looking for a perfect blend of luxury and convenience.
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Key Features & Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                    <amenity.icon className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-foreground">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhood */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Neighbourhood & Nearby</h3>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of {property.location}, this property enjoys excellent connectivity to schools, 
                hospitals, shopping centers, and public transportation. The area is known for its peaceful environment 
                and family-friendly atmosphere.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">
                Interested in this Property?
              </h3>

              {/* Call Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.location.href = "tel:+919419189511"}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call +91-94191-89511
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.location.href = "tel:+919469460000"}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call +91-946-946-0000
                </Button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-primary/5 px-4 text-sm text-muted-foreground">Or send an enquiry</span>
                </div>
              </div>

              {/* Enquiry Form */}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">Thank You!</h4>
                  <p className="text-sm text-muted-foreground">We'll contact you about this property shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Your Name *" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Textarea 
                    placeholder={`I'm interested in ${property.title}. Please contact me.`}
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Enquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailModal;
