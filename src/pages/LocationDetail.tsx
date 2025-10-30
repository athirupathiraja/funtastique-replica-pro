import { Link, useLocation as useRouterLocation } from "react-router-dom";
import { MapPin, Phone, Calendar as CalendarIcon, Users, Star, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocationBySlug } from "@/data/locations";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LocationDetail = () => {
  const { t } = useTranslation();
  const routerLocation = useRouterLocation();
  // Extract slug from pathname (remove leading slash)
  const locationSlug = routerLocation.pathname.substring(1);
  const location = getLocationBySlug(locationSlug);

  // Set page title and meta description for SEO
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (location) {
      document.title = location.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', location.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = location.metaDescription;
        document.head.appendChild(meta);
      }
    }
  }, [location]);

  if (!location) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find that location.</p>
          <Link to="/locations">
            <Button>{t('locations.seeAllLocations')}</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const services = [
    {
      icon: MapPin,
      titleKey: 'locations.detail.service1Title',
      descKey: 'locations.detail.service1Desc'
    },
    {
      icon: Users,
      titleKey: 'locations.detail.service2Title',
      descKey: 'locations.detail.service2Desc'
    },
    {
      icon: Star,
      titleKey: 'locations.detail.service3Title',
      descKey: 'locations.detail.service3Desc'
    },
    {
      icon: CalendarIcon,
      titleKey: 'locations.detail.service4Title',
      descKey: 'locations.detail.service4Desc'
    }
  ];

  const themes = [
    { nameKey: "themes.frozen.title", emoji: "❄️", slug: "frozen-party" },
    { nameKey: "themes.princess.title", emoji: "👑", slug: "princess-party" },
    { nameKey: "themes.cupcake.title", emoji: "🧁", slug: "cupcake-decorating" },
    { nameKey: "themes.bracelet.title", emoji: "💎", slug: "bracelet-making" },
    { nameKey: "themes.cartoon.title", emoji: "🎨", slug: "cartoon-party" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-16 animate-float">
            <MapPin className="w-12 h-12 text-primary/20" />
          </div>
          <div className="absolute bottom-20 left-16 animate-float-slow" style={{ animationDelay: '1s' }}>
            <Star className="w-10 h-10 text-secondary/20" />
          </div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-6">
            <Link 
              to="/locations" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              {t('locations.learnMore')}
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-fade-in">
            {location.h1}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {location.intro}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold">{location.distance}</span>
            </div>
            {location.neighborhoods && (
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-semibold">{t('locations.servingFamilies')} {location.neighborhoods.length}+ areas</span>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,60 600,60 900,30 C1050,15 1150,0 1200,0 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            {t('locations.whyChooseUs', { location: location.name })}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('locations.whyDescription', { location: location.name })}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-muted/20 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t(service.titleKey, { location: location.name })}</h3>
                <p className="text-muted-foreground">{t(service.descKey, { location: location.name })}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('locations.detail.themesTitle', { location: location.name })}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('locations.detail.themesDesc', { location: location.name })}
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {themes.map((theme, index) => (
              <Link
                key={index}
                to={`/themes/${theme.slug}`}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform">
                  {theme.emoji}
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {t(theme.nameKey)}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/themed-parties">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                {t('locations.detail.viewAllThemes')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      {location.neighborhoods && location.neighborhoods.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('locations.detail.neighborhoodsTitle', { location: location.name })}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t('locations.detail.neighborhoodsDesc', { location: location.name })}
          </p>

            <div className="grid md:grid-cols-3 gap-4">
              {location.neighborhoods.map((neighborhood, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            {t('locations.detail.benefitsTitle', { location: location.name })}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t('locations.detail.benefitsDesc', { location: location.name })}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  {t('locations.detail.benefit1Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('locations.detail.benefit1Desc', { location: location.name })}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  {t('locations.detail.benefit2Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('locations.detail.benefit2Desc', { location: location.name })}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  {t('locations.detail.benefit3Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('locations.detail.benefit3Desc', { location: location.name })}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  {t('locations.detail.benefit4Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('locations.detail.benefit4Desc', { location: location.name })}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  {t('locations.detail.benefit5Title', { location: location.name })}
                </h3>
                <p className="text-muted-foreground">
                  {t('locations.detail.benefit5Desc', { location: location.name, distance: location.distance })}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  {t('locations.detail.benefit6Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('locations.detail.benefit6Desc', { location: location.name })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('locations.detail.testimonialsTitle', { location: location.name })}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t('locations.detail.testimonialsDesc')}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{t('locations.detail.testimonial1', { location: location.name })}"
              </p>
              <p className="font-semibold text-sm">- {t('locations.detail.testimonial1Author', { location: location.name })}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{t('locations.detail.testimonial2', { location: location.name })}"
              </p>
              <p className="font-semibold text-sm">- {t('locations.detail.testimonial2Author', { location: location.name })}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{t('locations.detail.testimonial3', { location: location.name })}"
              </p>
              <p className="font-semibold text-sm">- {t('locations.detail.testimonial3Author', { location: location.name })}</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                {t('locations.detail.readMoreReviews', { location: location.name })}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('locations.detail.faqTitle', { location: location.name })}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t('locations.detail.faqDesc', { location: location.name })}
          </p>

          <div className="space-y-6">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <div
                key={num}
                className="bg-white rounded-xl p-6 shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {t(`locations.detail.faq${num}Q`, { location: location.name })}
                </h3>
                <p className="text-muted-foreground">
                  {t(`locations.detail.faq${num}A`, { location: location.name, distance: location.distance })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information - NAP for SEO */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('locations.detail.contactTitle', { location: location.name })}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t('locations.detail.contactDesc')}
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-6">{t('locations.detail.centreName')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">{t('locations.detail.addressLabel')}</p>
                      <p className="text-muted-foreground">{t('locations.detail.addressLine1')}</p>
                      <p className="text-muted-foreground">{t('locations.detail.addressLine2')}</p>
                      <p className="text-sm text-primary mt-1">{location.distance}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">{t('contact.phone.label')}</p>
                      <a href="tel:+15147151432" className="text-primary hover:text-primary/80 font-medium">
                        {t('contact.phone.value')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-6">{t('locations.detail.hoursTitle')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{t('locations.detail.weekendParties')}</p>
                      <p className="text-muted-foreground">{t('locations.detail.weekendHours')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{t('locations.detail.weekdayParties')}</p>
                      <p className="text-muted-foreground">{t('locations.detail.weekdayHours')}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6 italic">
                  {t('locations.detail.servingNote', { location: location.name })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-primary/5 to-white border-t border-b relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('locations.detail.ctaTitle', { location: location.name })}
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            {t('locations.detail.ctaDesc', { location: location.name })}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                {t('locations.detail.bookPartyButton')}
              </Button>
            </Link>
            <a href="tel:+15147151432">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-14 px-10 text-lg font-semibold rounded-full transition-all">
                <Phone className="w-5 h-5 mr-2" />
                {t('locations.detail.callButton')} {t('contact.phone.value')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="px-4 py-20 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('locations.detail.directionsTitle', { location: location.name })}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get turn-by-turn directions from {location.name} to Centre Funtastique
            </p>
            <a 
              href={`https://www.google.com/maps/dir/${encodeURIComponent(location.name + ', Laval, QC')}/Centre+Funtastique,+3551+Rue+Bélair,+Montréal,+QC+H2A+2B1`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions on Google Maps
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationDetail;

