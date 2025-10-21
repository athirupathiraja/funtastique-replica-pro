import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThemedParties = () => {
  const scrollToThemes = () => {
    const element = document.getElementById("themes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const themes = [
    {
      id: "frozen-party",
      title: "Frozen Party",
      description: "An enchanted adventure with Elsa, Anna, and all your favorite friends.",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800"
    },
    {
      id: "mario-party",
      title: "Mario Party",
      description: "Jump into the Mushroom Kingdom for a super fun adventure with Mario and friends.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800"
    },
    {
      id: "paw-patrol-party",
      title: "Paw Patrol Party",
      description: "Join the pups on a rescue mission adventure that's sure to delight young fans.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800"
    },
    {
      id: "superhero-party",
      title: "Superhero Party",
      description: "Save the day with an action-packed superhero celebration full of heroic fun.",
      image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=800"
    },
    {
      id: "princess-party",
      title: "Princess Party",
      description: "Step into a fairytale kingdom where every child becomes royalty for the day.",
      image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800"
    },
    {
      id: "dinosaur-party",
      title: "Dinosaur Party",
      description: "Roar into prehistoric times with dino-mite decorations and activities.",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800"
    },
    {
      id: "cupcake-decorating-party",
      title: "Cupcake Decorating Party",
      description: "Create sweet memories with hands-on cupcake decorating fun for all.",
      image: "https://images.unsplash.com/photo-1426869884541-df7117556757?w=800"
    },
    {
      id: "slime-factory-party",
      title: "Slime Factory Party",
      description: "Get messy and creative at our slime-making station with endless color combinations.",
      image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Your Child's Dream Party Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in">
            Explore our magical themes, designed to create unforgettable memories. We handle the custom decorations and details, you bring the smiles!
          </p>
          <Button 
            onClick={scrollToThemes}
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 animate-scale-in"
          >
            See All Themes
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Theme Gallery Section */}
      <section id="themes" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Our Funtastique Themes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <div className="overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {theme.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {theme.description}
                  </p>
                  <Link to={`/themes/${theme.id}`}>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThemedParties;
