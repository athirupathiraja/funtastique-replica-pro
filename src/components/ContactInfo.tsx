import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Centre Funtastique was started by a mom who knows just how wild (and wonderful) kids' parties can be. Our goal? Make celebrating easy, fun, and totally unforgettable — with all the magic and none of the mess!
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Phone</h3>
                <a href="tel:+15147151432" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (514) 715 1432
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <a href="mailto:centrefuntastique@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  centrefuntastique@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">
                  3551 Rue Bélair, Montréal, QC H2A 2B1
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={scrollToForm}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Make Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
