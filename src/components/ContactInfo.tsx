import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();
  
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
              <h2 className="text-4xl font-bold text-primary mb-6">{t('contact.title')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('contact.text')}
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
                <h3 className="font-bold text-foreground mb-1">{t('contact.phone.label')}</h3>
                <a href="tel:+15147151432" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('contact.phone.value')}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{t('contact.email.label')}</h3>
                <a href="mailto:centrefuntastique@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  {t('contact.email.value')}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{t('contact.address.label')}</h3>
                <p className="text-muted-foreground">
                  {t('contact.address.value')}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={scrollToForm}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                {t('contact.form.title')}
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Find Us</h3>
            <p className="text-muted-foreground">
              Visit us at our location in Montréal
            </p>
          </div>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border-2 border-primary/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1876892744246!2d-73.60259792344383!3d45.54935327107449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91896f5e0f3b7%3A0x5e8c9e6f9e0f8e0!2s3551%20Rue%20B%C3%A9lair%2C%20Montr%C3%A9al%2C%20QC%20H2A%202B1!5e0!3m2!1sen!2sca!4v1703000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Centre Funtastique Location - 3551 Rue Bélair, Montréal, QC H2A 2B1"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
