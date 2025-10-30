import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locations, getAllRegions } from "@/data/locations";
import { useTranslation } from "react-i18next";

const Locations = () => {
  const { t } = useTranslation();
  const regions = getAllRegions();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Map Pins */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <MapPin className="w-6 h-6 text-primary/20" />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-fade-in">
            <span className="block text-foreground">{t('locations.heroTitle')}</span>
            <span className="block text-primary">{t('locations.heroSubtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium animate-fade-in">
            {t('locations.heroDescription')}
          </p>
        </div>
        
        {/* Wavy Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,60 600,60 900,30 C1050,15 1150,0 1200,0 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Locations by Region */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {regions.map((region, regionIndex) => {
            const regionLocations = locations.filter(loc => loc.region === region);
            
            return (
              <div key={region} className="mb-16 last:mb-0 animate-fade-in" style={{ animationDelay: `${regionIndex * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {region}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regionLocations.map((location, index) => (
                    <Link
                      key={location.id}
                      to={`/${location.slug}`}
                      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20 animate-scale-in"
                      style={{ animationDelay: `${(regionIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                            {location.name}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-primary" />
                            {location.distance}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                      </div>

                      {location.neighborhoods && location.neighborhoods.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-xs font-semibold text-muted-foreground mb-2">{t('locations.servingFamilies')}:</p>
                          <div className="flex flex-wrap gap-2">
                            {location.neighborhoods.slice(0, 3).map((neighborhood) => (
                              <span
                                key={neighborhood}
                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                              >
                                {neighborhood}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't See Your Area?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We serve families across the Greater Montreal region. Contact us to see if we can accommodate your location!
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              {t('locations.contactButton')}
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;

