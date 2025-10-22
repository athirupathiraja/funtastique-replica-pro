import { Shield, Sparkles, Coffee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-background overflow-hidden">
        {/* Fun Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Hearts */}
          <div className="absolute top-12 left-16 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-6 h-6 bg-pink-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-3 h-3 bg-pink-400/60 rounded-full absolute -top-1.5 -left-1.5"></div>
              <div className="w-3 h-3 bg-pink-400/60 rounded-full absolute -top-1.5 -right-1.5"></div>
            </div>
          </div>
          <div className="absolute top-24 left-32 animate-float-slow" style={{ animationDelay: "1s" }}>
            <div className="w-4 h-4 bg-pink-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-2 h-2 bg-pink-400/60 rounded-full absolute -top-1 -left-1"></div>
              <div className="w-2 h-2 bg-pink-400/60 rounded-full absolute -top-1 -right-1"></div>
            </div>
          </div>
          
          {/* Floating Stars */}
          <div className="absolute top-16 right-20 animate-float" style={{ animationDelay: "0.8s" }}>
            <div className="w-4 h-4 bg-yellow-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-1 h-1 bg-white/60 rounded-full absolute top-0 left-0 animate-ping"></div>
            </div>
          </div>
          <div className="absolute top-32 right-32 animate-float-slow" style={{ animationDelay: "1.5s" }}>
            <div className="w-3 h-3 bg-yellow-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-0.5 h-0.5 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>
          
          {/* Floating Balloons */}
          <div className="absolute bottom-20 right-16 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-6 h-9 bg-gradient-to-b from-blue-400/60 to-cyan-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-6 bg-gray-400/40 ml-3"></div>
          </div>
          <div className="absolute bottom-32 right-28 animate-float-slow" style={{ animationDelay: "2.5s" }}>
            <div className="w-5 h-7 bg-gradient-to-b from-green-400/60 to-teal-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-5 bg-gray-400/40 ml-2.5"></div>
          </div>
          
          {/* Floating Sparkles */}
          <div className="absolute bottom-16 left-40 w-3 h-3 bg-yellow-400/50 transform rotate-45 animate-float shadow-lg" style={{ animationDelay: "2.2s" }}>
            <div className="w-1 h-1 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "1s" }}></div>
          </div>
          <div className="absolute top-40 left-40 w-2 h-2 bg-yellow-400/50 transform rotate-45 animate-float-slow shadow-lg" style={{ animationDelay: "1.8s" }}>
            <div className="w-0.5 h-0.5 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "0.8s" }}></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-fade-in">
            <span className="block text-foreground">From a Mom,</span>
            <span className="block text-primary">For Families</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium animate-fade-in">
            Learn the story behind Montreal's <span className="text-primary font-bold">easiest, most magical</span> party spot.
          </p>
        </div>
        
        {/* Wavy Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,60 600,60 900,30 C1050,15 1150,0 1200,0 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800"
                alt="Founder of Centre Funtastique"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Right Column - Story */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">
                It All Started With a Simple Idea...
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Centre Funtastique was started by a mom who knows just how wild (and wonderful) kids' parties can be. After planning countless parties for her own children, she saw a need for a private, beautiful, and stress-free space where parents could actually enjoy the celebration.
                </p>
                <p>
                  Our goal is simple: to provide all the magic and fun of a big party, with none of the mess or stress. We handle the details so you can focus on making memories.
                </p>
                <p>
                  From the first balloon to the last goodbye, we're here to make sure your child's special day is truly unforgettable. Because every family deserves a party that's as fun for the parents as it is for the kids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            What We Believe In
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Safety First */}
            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Safety First
              </h3>
              <p className="text-muted-foreground">
                Our space is designed to be a safe, clean, and secure environment for all our little guests.
              </p>
            </div>

            {/* Creating Magic */}
            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Creating Magic
              </h3>
              <p className="text-muted-foreground">
                We believe a party should be a magical escape. Our themes and activities are designed to spark imagination.
              </p>
            </div>

            {/* Stress-Free for Parents */}
            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stress-Free for Parents
              </h3>
              <p className="text-muted-foreground">
                Your only job is to show up and have fun. We'll take care of the setup, hosting, and cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
