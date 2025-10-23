import { Link, useLocation as useRouterLocation } from "react-router-dom";
import { MapPin, Phone, Calendar, Users, Star, ArrowRight, CheckCircle2, Clock } from "lucide-react";
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
      icon: Calendar,
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

  const faqs = [
    {
      q: `How far is Centre Funtastique kids birthday party venue from ${location.name}?`,
      a: `Our children's birthday party venue is conveniently located ${location.distance} from ${location.name}. We serve families throughout ${location.name} and surrounding areas for kids birthday parties, making us the perfect choice for your child's celebration.`
    },
    {
      q: `What's included in your ${location.name} kids birthday party package?`,
      a: `Every children's birthday party package includes: private party venue rental (no sharing!), dedicated birthday party host, tables & chairs for all guests, full kitchen access, TV & sound system for music and videos, and your choice of themed birthday decorations. Perfect for kids parties in ${location.name}!`
    },
    {
      q: `How many children can attend a birthday party at your ${location.name} venue?`,
      a: `Our kids birthday party venue comfortably accommodates up to 20 children plus parents and guardians. The 1500 sq ft private space is ideal for children's birthday parties, providing plenty of room for activities, games, and celebration for ${location.name} families.`
    },
    {
      q: `Do you provide birthday cake and food for kids parties in ${location.name}?`,
      a: `You bring your child's birthday cake and party food - we handle everything else! Our birthday party venue includes full kitchen access. We also offer popular add-on activities like cupcake decorating, ice cream making, and bracelet crafting to make your ${location.name} kids birthday party extra special.`
    },
    {
      q: `What ages are your ${location.name} birthday parties suitable for?`,
      a: `Centre Funtastique hosts children's birthday parties for kids ages 2-12. Our themed birthday parties, activities, and party space are designed specifically for young children, making us the top choice for kids birthday celebrations in ${location.name}.`
    },
    {
      q: `How do I book a kids birthday party near ${location.name}?`,
      a: `Booking your child's birthday party is easy! Call us at (514) 715-1432 or fill out our online contact form. We'll help you choose the perfect birthday theme, select activities, and schedule your private party time. Most ${location.name} families book 2-4 weeks in advance for weekend birthday parties.`
    }
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
            Kids Birthday Party Venue Serving All {location.name} Neighborhoods
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Centre Funtastique proudly serves children's birthday parties across all {location.name} neighborhoods. Our private kids party venue is easily accessible from these areas:
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
            What Makes Centre Funtastique the Best Kids Birthday Party Venue Near {location.name}?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Centre Funtastique has been hosting memorable children's birthday parties for {location.name} families since 2020. Here's why parents choose us for their kids birthday celebrations:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  100% Private Birthday Party Venue
                </h3>
                <p className="text-muted-foreground">
                  Unlike other kids party venues in {location.name}, our 1500 sq ft space is exclusively yours for your child's birthday party. No sharing with other parties means more privacy, flexibility, and a truly personalized children's birthday celebration.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Professional Kids Party Hosting
                </h3>
                <p className="text-muted-foreground">
                  Every birthday party includes an experienced party host who manages activities, entertains children, serves food, and handles cleanup. {location.name} parents love that they can actually enjoy their child's birthday party instead of working through it!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Themed Birthday Party Packages
                </h3>
                <p className="text-muted-foreground">
                  From Frozen birthday parties to Princess parties, Cupcake decorating to Bracelet making - our themed kids birthday packages make planning easy for {location.name} families. Each theme includes decorations, activities, and supplies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Everything Kids Need for Birthday Fun
                </h3>
                <p className="text-muted-foreground">
                  Our children's birthday party venue includes toys, games, tables, chairs, full kitchen, TV, sound system, and party supplies. Perfect for active kids birthday celebrations in {location.name} - rain or shine!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Convenient Location for {location.name}
                </h3>
                <p className="text-muted-foreground">
                  Located just {location.distance}, Centre Funtastique is easily accessible for birthday party guests from {location.name}. Ample parking makes arrival and pickup smooth for kids birthday parties.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Stress-Free Kids Birthday Parties
                </h3>
                <p className="text-muted-foreground">
                  We handle setup, hosting, activities, and cleanup for your child's birthday party. {location.name} parents consistently rate us 5 stars for making kids birthday celebrations easy, affordable, and unforgettable!
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
            What {location.name} Parents Say About Our Kids Birthday Parties
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Real reviews from families who hosted children's birthday parties at Centre Funtastique
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Best kids birthday party venue near {location.name}! The private space made our daughter's 6th birthday party so special. The party host was amazing with the children and the Frozen theme decorations were beautiful!"
              </p>
              <p className="font-semibold text-sm">- Sarah M., {location.name}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Centre Funtastique made our son's birthday party stress-free! They handled everything - setup, activities, cleanup. All we did was show up and enjoy. Highly recommend for {location.name} families!"
              </p>
              <p className="font-semibold text-sm">- Michael T., {location.name}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Perfect kids birthday party venue! The cupcake decorating activity was a huge hit. 20 children had a blast and parents could relax. Worth the short drive from {location.name}!"
              </p>
              <p className="font-semibold text-sm">- Jessica L., {location.name}</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Read More Reviews from {location.name} Families
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Kids Birthday Party FAQs - {location.name}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Common questions about children's birthday parties from {location.name} families
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information - NAP for SEO */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Contact Centre Funtastique - Kids Birthday Party Venue Serving {location.name}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ready to book your child's birthday party? Contact us today!
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-6">Centre Funtastique</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p className="text-muted-foreground">3551 Rue Bélair</p>
                      <p className="text-muted-foreground">Montréal, QC H2A 2B1</p>
                      <p className="text-sm text-primary mt-1">{location.distance}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:+15147151432" className="text-primary hover:text-primary/80 font-medium">
                        (514) 715-1432
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-6">Kids Birthday Party Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Weekend Parties</p>
                      <p className="text-muted-foreground">Saturday - Sunday: 10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Weekday Parties</p>
                      <p className="text-muted-foreground">Monday - Friday: By Appointment</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6 italic">
                  Serving {location.name} families with private kids birthday party venue rentals and themed party packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your Child's Birthday Party in {location.name} Today!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of {location.name} families who trust Centre Funtastique for their children's birthday parties! We're the top-rated kids birthday party venue near {location.name}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg font-bold shadow-xl">
                Book Your Birthday Party Today
              </Button>
            </Link>
            <a href="tel:+15147151432">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary h-14 px-8 text-lg font-bold">
                <Phone className="w-5 h-5 mr-2" />
                Call (514) 715-1432
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {location.mapUrl && (
        <section className="px-4 pb-20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              Directions from {location.name}
            </h2>
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Directions from ${location.name} to Centre Funtastique`}
              ></iframe>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default LocationDetail;

