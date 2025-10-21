import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-light/5 to-secondary/5">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary-light/20 rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-secondary/20 rounded-full animate-float blur-xl" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-60 right-1/3 w-16 h-16 bg-primary/30 rounded-full animate-float-slow blur-xl" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-primary-light/20 rounded-full animate-float blur-xl" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-lg">
              <div className="w-16 h-16 border-8 border-white rounded-full border-r-transparent transform rotate-45"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Centre <span className="text-primary-light">FUN</span>tastique
          </h1>

          {/* Taglines */}
          <p className="text-2xl md:text-3xl text-foreground font-semibold mb-2">
            Private Rental Space for Children's Events
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            We handle the setup so you can have a funtastique time.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
