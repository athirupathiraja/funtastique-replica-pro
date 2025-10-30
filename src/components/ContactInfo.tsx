import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Ready to Book Your Funtastique Party?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.text')}
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t('contact.phone.label')}</h3>
              <a href="tel:+15147151432" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                {t('contact.phone.value')}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t('contact.email.label')}</h3>
              <a href="mailto:centrefuntastique@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-medium break-all">
                {t('contact.email.value')}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t('contact.address.label')}</h3>
              <p className="text-muted-foreground font-medium">
                {t('contact.address.value')}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact">
              <Button
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white px-12 py-7 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Book Your Party Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
