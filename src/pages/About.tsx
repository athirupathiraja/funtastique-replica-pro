import { Shield, Sparkles, Coffee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            From a Mom, For Families
          </h1>
          <p className="text-xl md:text-2xl text-white animate-fade-in">
            Learn the story behind Montreal's easiest, most magical party spot.
          </p>
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
