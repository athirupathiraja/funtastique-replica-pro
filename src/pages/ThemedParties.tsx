import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const ThemedParties = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const scrollToThemes = () => {
    const element = document.getElementById("themes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const themes = [
    {
      id: "frozen-party",
      titleKey: "themes.frozen.title",
      descriptionKey: "themes.frozen.description",
      color: "from-blue-400 to-cyan-300",
      icon: "❄️"
    },
    {
      id: "princess-party",
      titleKey: "themes.princess.title",
      descriptionKey: "themes.princess.description",
      color: "from-pink-400 to-purple-300",
      icon: "👑"
    },
    {
      id: "cupcake-decorating",
      titleKey: "themes.cupcake.title",
      descriptionKey: "themes.cupcake.description",
      color: "from-pink-300 to-yellow-200",
      icon: "🧁"
    },
    {
      id: "bracelet-making",
      titleKey: "themes.bracelet.title",
      descriptionKey: "themes.bracelet.description",
      color: "from-purple-400 to-pink-400",
      icon: "💎"
    },
    {
      id: "cartoon-party",
      titleKey: "themes.cartoon.title",
      descriptionKey: "themes.cartoon.description",
      color: "from-orange-400 to-red-400",
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-background overflow-hidden">
        {/* Fun Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Balloons */}
          <div className="absolute top-10 right-8 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-8 h-12 bg-gradient-to-b from-red-400/60 to-pink-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-8 bg-gray-400/40 ml-4"></div>
          </div>
          <div className="absolute top-20 right-20 animate-float-slow" style={{ animationDelay: "1s" }}>
            <div className="w-6 h-10 bg-gradient-to-b from-blue-400/60 to-cyan-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-6 bg-gray-400/40 ml-3"></div>
          </div>
          <div className="absolute top-8 right-32 animate-float" style={{ animationDelay: "0.8s" }}>
            <div className="w-7 h-11 bg-gradient-to-b from-yellow-400/60 to-orange-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-7 bg-gray-400/40 ml-3.5"></div>
          </div>
          
          {/* Left side balloons */}
          <div className="absolute top-16 left-16 animate-float-slow" style={{ animationDelay: "1.2s" }}>
            <div className="w-7 h-10 bg-gradient-to-b from-pink-400/60 to-red-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-7 bg-gray-400/40 ml-3.5"></div>
          </div>
          <div className="absolute top-24 left-28 animate-float" style={{ animationDelay: "1.8s" }}>
            <div className="w-5 h-8 bg-gradient-to-b from-cyan-400/60 to-blue-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-5 bg-gray-400/40 ml-2.5"></div>
          </div>
          
          {/* Floating sparkles */}
          <div className="absolute top-12 left-20 w-3 h-3 bg-yellow-400/50 transform rotate-45 animate-float shadow-lg">
            <div className="w-1 h-1 bg-white/60 rounded-full absolute top-0 left-0 animate-ping"></div>
          </div>
          <div className="absolute top-32 left-32 w-2 h-2 bg-yellow-400/50 transform rotate-45 animate-float-slow shadow-lg" style={{ animationDelay: "1.5s" }}>
            <div className="w-0.5 h-0.5 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "0.5s" }}></div>
          </div>
          <div className="absolute bottom-16 left-40 w-4 h-4 bg-yellow-400/50 transform rotate-45 animate-float shadow-lg" style={{ animationDelay: "2.2s" }}>
            <div className="w-1 h-1 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "1s" }}></div>
          </div>
          
          {/* Floating hearts */}
          <div className="absolute bottom-12 left-20 w-4 h-4 bg-pink-400/50 transform rotate-45 animate-float-slow shadow-lg" style={{ animationDelay: "1.8s" }}>
            <div className="w-2 h-2 bg-pink-400/50 rounded-full absolute -top-0.5 -left-0.5"></div>
            <div className="w-2 h-2 bg-pink-400/50 rounded-full absolute -top-0.5 -right-0.5"></div>
          </div>
          <div className="absolute bottom-24 right-40 w-3 h-3 bg-pink-400/50 transform rotate-45 animate-float shadow-lg" style={{ animationDelay: "2.8s" }}>
            <div className="w-1.5 h-1.5 bg-pink-400/50 rounded-full absolute -top-0.5 -left-0.5"></div>
            <div className="w-1.5 h-1.5 bg-pink-400/50 rounded-full absolute -top-0.5 -right-0.5"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-fade-in">
            <span className="block text-foreground">{t('themedParties.heroTitle')}</span>
            <span className="block text-primary">{t('themedParties.heroSubtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium mb-8 animate-fade-in">
            {t('themedParties.heroDescription').split('unforgettable memories').map((part, i, arr) => (
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-primary font-bold">unforgettable memories</span>
                </span>
              ) : part
            ))}
          </p>
          
          <Button 
            onClick={scrollToThemes}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white px-16 py-8 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 animate-scale-in"
          >
            🎉 {t('themedParties.seeAllThemes')} 🎉
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        {/* Wavy Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,60 600,60 900,30 C1050,15 1150,0 1200,0 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Theme Gallery Section */}
      <section id="themes" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            {t('themedParties.sectionTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {themes.map((theme, index) => (
              <div
                key={theme.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${theme.color} flex items-center justify-center relative overflow-hidden`}>
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-white/30 rounded-full animate-float"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/30 rounded-full animate-float-slow"></div>
                    <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <span className="text-8xl transform group-hover:scale-125 transition-transform duration-300 animate-bounce-slow">
                    {theme.icon}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {t(theme.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t(theme.descriptionKey)}
                  </p>
                  <Link to={`/themes/${theme.id}`}>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all">
                      {t('themedParties.learnMore')} →
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Web Design Badge */}
      <section className="py-8 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            Website crafted with care by{' '}
            <a 
              href="https://griffinstudios.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Griffin Studios
            </a>
            {' '}— Web solutions for growing businesses
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThemedParties;
