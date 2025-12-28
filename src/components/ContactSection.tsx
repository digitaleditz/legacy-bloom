import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    lookingFor: "",
    area: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('send-enquiry', {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          lookingFor: formData.lookingFor || undefined,
          area: formData.area || undefined,
          message: formData.message || undefined,
          source: "contact_form"
        }
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Enquiry Sent Successfully!",
        description: "One of our experts will get in touch with you shortly.",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", email: "", lookingFor: "", area: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Error sending enquiry:", error);
      toast({
        title: "Error",
        description: "Failed to send enquiry. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Discuss Your{" "}
              <span className="text-secondary">Property Goals</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tell us what you're looking for, and we'll handle the rest. Your satisfaction 
              is our top priority, and we're committed to making your real estate journey 
              smooth and transparent.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                  <p className="text-muted-foreground">
                    02/08, Trikuta Nagar, Jammu<br />
                    J&K – 180020
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Also operational in Kashmir (Nowgam & Srinagar)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                  <a href="tel:+919419189511" className="block text-muted-foreground hover:text-secondary transition-colors">
                    +91-94191-89511
                  </a>
                  <a href="tel:+919469460000" className="block text-muted-foreground hover:text-secondary transition-colors">
                    +91-946-946-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:kapahipropertieskp@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
                    kapahipropertieskp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Sat: 10:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full" />
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 relative">
                Send an Enquiry
              </h3>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground mb-2">
                    Thank You!
                  </h4>
                  <p className="text-muted-foreground">
                    One of our experts will get in touch with you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name *
                      </label>
                      <Input 
                        placeholder="Enter your name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-border focus:border-secondary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+91-XXXXX-XXXXX" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border-border focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-border focus:border-secondary"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        What are you looking for? *
                      </label>
                      <Select 
                        required
                        value={formData.lookingFor}
                        onValueChange={(value) => setFormData({ ...formData, lookingFor: value })}
                      >
                        <SelectTrigger className="border-border focus:border-secondary">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buy">Buy Property</SelectItem>
                          <SelectItem value="sell">Sell Property</SelectItem>
                          <SelectItem value="rent">Rent Property</SelectItem>
                          <SelectItem value="invest">Invest</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        City/Area of Interest
                      </label>
                      <Select
                        value={formData.area}
                        onValueChange={(value) => setFormData({ ...formData, area: value })}
                      >
                        <SelectTrigger className="border-border focus:border-secondary">
                          <SelectValue placeholder="Select Area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jammu">Jammu</SelectItem>
                          <SelectItem value="trikuta">Trikuta Nagar</SelectItem>
                          <SelectItem value="gandhi">Gandhi Nagar</SelectItem>
                          <SelectItem value="srinagar">Srinagar</SelectItem>
                          <SelectItem value="nowgam">Nowgam</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Requirements
                    </label>
                    <Textarea
                      placeholder="Tell us more about what you're looking for..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-border focus:border-secondary"
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Enquiry
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
