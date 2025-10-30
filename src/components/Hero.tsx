import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 600px)" srcSet="/assets/images/final_pics/green_centre_view.webp" />
          <source media="(min-width: 601px)" srcSet="/assets/images/final_pics/desktop/hero.webp" />
          <img 
            src="/assets/images/final_pics/desktop/hero.webp" 
            alt="Centre Funtastique interior" 
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
          />
        </picture>
        {/* Better overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent md:block hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40 md:block hidden"></div>
        <div className="absolute inset-0 bg-white/20 md:hidden"></div>
        {/* Fun pattern overlay - Desktop only */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 106, 62, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255, 186, 67, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(0, 147, 109, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>
      </div>
      
      {/* Fun Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-x-clip overflow-y-hidden z-50">
        {/* Balloon Cluster - Top Right */}
        <div className="absolute top-24 md:top-28 right-8 animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="w-8 h-12 bg-gradient-to-b from-red-400/80 to-pink-400/70 rounded-full shadow-lg"></div>
          <div className="w-0.5 h-8 bg-gray-400/60 ml-4"></div>
        </div>
        <div className="absolute top-32 md:top-36 right-20 animate-float-slow" style={{ animationDelay: "1s" }}>
          <div className="w-6 h-10 bg-gradient-to-b from-blue-400/80 to-cyan-400/70 rounded-full shadow-lg"></div>
          <div className="w-0.5 h-6 bg-gray-400/60 ml-3"></div>
        </div>
        <div className="absolute top-20 md:top-24 right-32 animate-float" style={{ animationDelay: "0.8s" }}>
          <div className="w-7 h-11 bg-gradient-to-b from-yellow-400/80 to-orange-400/70 rounded-full shadow-lg"></div>
          <div className="w-0.5 h-7 bg-gray-400/60 ml-3.5"></div>
        </div>
        <div className="absolute top-36 md:top-40 right-40 animate-float-slow" style={{ animationDelay: "1.5s" }}>
          <div className="w-5 h-8 bg-gradient-to-b from-green-400/80 to-emerald-400/70 rounded-full shadow-lg"></div>
          <div className="w-0.5 h-5 bg-gray-400/60 ml-2.5"></div>
        </div>
        <div className="absolute top-28 md:top-32 right-48 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-6 h-9 bg-gradient-to-b from-purple-400/80 to-pink-400/70 rounded-full shadow-lg"></div>
          <div className="w-0.5 h-6 bg-gray-400/60 ml-3"></div>
        </div>
        
        {/* Balloon Cluster - Top Left */}
        <div className="absolute top-28 left-16 animate-float-slow" style={{ animationDelay: "1.2s" }}>
          <div className="w-7 h-10 bg-gradient-to-b from-pink-400/80 to-red-400/70 rounded-full shadow-lg"></div>
          <div className="w-0.5 h-7 bg-gray-400/60 ml-3.5"></div>
        </div>
        <div className="absolute top-36 left-28 animate-float" style={{ animationDelay: "1.8s" }}>
          <div className="w-5 h-8 bg-gradient-to-b from-cyan-400/80 to-blue-400/70 rounded-full shadow-lg"></div>
          <div className="w-0.5 h-5 bg-gray-400/60 ml-2.5"></div>
        </div>
        
        {/* Balloon Cluster - Bottom Right */}
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: "2.5s" }}>
          <div className="w-6 h-9 bg-gradient-to-b from-orange-400/80 to-yellow-400/70 rounded-full shadow-lg"></div>
          <div className="w-0.5 h-6 bg-gray-400/60 ml-3"></div>
        </div>
        <div className="absolute bottom-40 right-28 animate-float-slow" style={{ animationDelay: "3s" }}>
          <div className="w-5 h-7 bg-gradient-to-b from-green-400/80 to-teal-400/70 rounded-full shadow-lg"></div>
          <div className="w-0.5 h-5 bg-gray-400/60 ml-2.5"></div>
        </div>
        
        {/* Small floating sparkles */}
        <div className="absolute top-16 left-20 w-3 h-3 bg-yellow-400/70 transform rotate-45 animate-float shadow-lg">
          <div className="w-1 h-1 bg-white/80 rounded-full absolute top-0 left-0 animate-ping"></div>
        </div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-yellow-400/70 transform rotate-45 animate-float-slow shadow-lg" style={{ animationDelay: "1.5s" }}>
          <div className="w-0.5 h-0.5 bg-white/80 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "0.5s" }}></div>
        </div>
        <div className="absolute bottom-24 left-40 w-4 h-4 bg-yellow-400/70 transform rotate-45 animate-float shadow-lg" style={{ animationDelay: "2.2s" }}>
          <div className="w-1 h-1 bg-white/80 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "1s" }}></div>
        </div>
        
        {/* Small floating hearts */}
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-pink-400/70 transform rotate-45 animate-float-slow shadow-lg" style={{ animationDelay: "1.8s" }}>
          <div className="w-2 h-2 bg-pink-400/70 rounded-full absolute -top-0.5 -left-0.5"></div>
          <div className="w-2 h-2 bg-pink-400/70 rounded-full absolute -top-0.5 -right-0.5"></div>
        </div>
        <div className="absolute bottom-32 right-40 w-3 h-3 bg-pink-400/70 transform rotate-45 animate-float shadow-lg" style={{ animationDelay: "2.8s" }}>
          <div className="w-1.5 h-1.5 bg-pink-400/70 rounded-full absolute -top-0.5 -left-0.5"></div>
          <div className="w-1.5 h-1.5 bg-pink-400/70 rounded-full absolute -top-0.5 -right-0.5"></div>
        </div>
        
        {/* Shooting Star */}
        <div className="shooting-star">
          <svg className="star-shape" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          {/* Fun Decorative Card */}
          <div className="relative inline-block">
            {/* Card Background - Clean and readable */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-7 lg:p-8 shadow-xl border-2 border-primary/30 relative overflow-hidden">
              {/* Subtle decorative elements on card - No animations */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary/20 rounded-full"></div>
              <div className="absolute top-4 -left-2 w-3 h-3 bg-primary-light/20 rounded-full"></div>
              <div className="absolute -top-1 left-4 w-2 h-2 bg-secondary/20 rounded-full"></div>
              
              {/* Simple corner decorations */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 transform rotate-45"></div>
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-secondary/30 transform rotate-45"></div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black md:font-extrabold mb-4 md:mb-6 leading-tight">
                <span className="block text-foreground">{t('hero.titleLine1')}</span>
                <span className="block text-primary">{t('hero.titleLine2')}</span>
                <span className="block text-foreground">{t('hero.titleLine3')}</span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-xl md:max-w-2xl mx-auto font-medium mb-6 md:mb-8">
                {t('hero.text').split('funtastique').map((part, i, arr) => (
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-full">funtastique</span>
                    </span>
                  ) : part
                ))}
              </p>

              {/* CTA Button */}
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white px-10 py-5 md:px-14 md:py-7 lg:px-16 lg:py-8 text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                >
                  {t('hero.getStarted')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20 md:h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
