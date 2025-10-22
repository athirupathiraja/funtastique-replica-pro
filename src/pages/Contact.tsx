import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-background overflow-hidden">
        {/* Fun Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Phone Icons */}
          <div className="absolute top-12 right-16 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-8 h-12 bg-primary/60 rounded-lg shadow-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="absolute top-24 right-32 animate-float-slow" style={{ animationDelay: "1s" }}>
            <div className="w-6 h-9 bg-secondary/60 rounded-lg shadow-lg flex items-center justify-center">
              <Mail className="w-3 h-3 text-white" />
            </div>
          </div>
          
          {/* Floating Hearts */}
          <div className="absolute top-16 left-20 animate-float" style={{ animationDelay: "0.8s" }}>
            <div className="w-5 h-5 bg-pink-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-2.5 h-2.5 bg-pink-400/60 rounded-full absolute -top-1 -left-1"></div>
              <div className="w-2.5 h-2.5 bg-pink-400/60 rounded-full absolute -top-1 -right-1"></div>
            </div>
          </div>
          <div className="absolute top-32 left-36 animate-float-slow" style={{ animationDelay: "1.5s" }}>
            <div className="w-4 h-4 bg-pink-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-2 h-2 bg-pink-400/60 rounded-full absolute -top-0.5 -left-0.5"></div>
              <div className="w-2 h-2 bg-pink-400/60 rounded-full absolute -top-0.5 -right-0.5"></div>
            </div>
          </div>
          
          {/* Floating Stars */}
          <div className="absolute bottom-20 left-16 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-4 h-4 bg-yellow-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-1 h-1 bg-white/60 rounded-full absolute top-0 left-0 animate-ping"></div>
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float-slow" style={{ animationDelay: "2.5s" }}>
            <div className="w-3 h-3 bg-yellow-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-0.5 h-0.5 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>
          
          {/* Floating Balloons */}
          <div className="absolute bottom-16 right-20 animate-float" style={{ animationDelay: "2.2s" }}>
            <div className="w-6 h-9 bg-gradient-to-b from-blue-400/60 to-cyan-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-6 bg-gray-400/40 ml-3"></div>
          </div>
          <div className="absolute bottom-28 right-36 animate-float-slow" style={{ animationDelay: "2.8s" }}>
            <div className="w-5 h-7 bg-gradient-to-b from-green-400/60 to-teal-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-5 bg-gray-400/40 ml-2.5"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-fade-in">
            <span className="block text-foreground">Let's Plan</span>
            <span className="block text-primary">Your Party!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium animate-fade-in">
            Fill out the form below or use our contact details to get in touch. We typically respond within <span className="text-primary font-bold">24 hours</span>.
          </p>
        </div>
        
        {/* Wavy Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,60 600,60 900,30 C1050,15 1150,0 1200,0 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tell us about your party and we'll get back to you soon!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-14 text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-14 text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-14 text-lg"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your party..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="min-h-[150px] text-lg"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg bg-primary text-white hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <div className="bg-muted/20 rounded-2xl p-8 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Phone</p>
                        <a href="tel:+15147151432" className="text-muted-foreground hover:text-primary transition-colors">
                          +1 (514) 715-1432
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Email</p>
                        <a href="mailto:centrefuntastique@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                          centrefuntastique@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Address</p>
                        <p className="text-muted-foreground">
                          3551 Rue Bélair<br />
                          Montréal, QC H2A 2B1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Business Hours</p>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: By Appointment Only</p>
                        <p>Saturday - Sunday: 10:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1876892744246!2d-73.60259792344383!3d45.54935327107449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91896f5e0f3b7%3A0x5e8c9e6f9e0f8e0!2s3551%20Rue%20B%C3%A9lair%2C%20Montr%C3%A9al%2C%20QC%20H2A%202B1!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Centre Funtastique Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
