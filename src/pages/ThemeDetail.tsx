import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Users, Calendar, Sparkles, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThemeDetail = () => {
  const { themeId } = useParams();

  const themeData: Record<string, any> = {
    "frozen-party": {
      name: "Frozen Party",
      icon: "❄️",
      tagline: "Let It Go Into a Winter Wonderland!",
      description: "Transform our space into Arendelle with this magical Frozen-themed party. Your little ones will feel like they've stepped into Elsa's ice palace, complete with shimmering snowflakes, blue and white décor, and enchanted activities that bring the movie to life.",
      color: "from-blue-400 to-cyan-300",
      accentColor: "blue",
      image: "/assets/images/final_pics/desktop/frozen_theme.webp",
      mobileImage: "/assets/images/final_pics/mobile/frozen_theme.webp",
      included: [
        "Custom Frozen backdrop with snowflake decorations",
        "Ice-blue tablecloths and Frozen-themed tableware",
        "Snowflake craft station for creative fun",
        "Themed party games led by your host",
        "Optional: Elsa & Anna character appearances (extra cost)"
      ],
      activities: [
        "Build a Snowman craft activity",
        "Frozen sing-along session",
        "Ice princess crown decorating",
        "Snowball toss games"
      ],
      ages: "3-8 Years Old",
      partySize: "Up to 20 children",
      decorElements: [
        { emoji: "❄️", top: "10%", left: "10%" },
        { emoji: "⛄", top: "20%", right: "15%" },
        { emoji: "❄️", bottom: "15%", left: "20%" },
        { emoji: "✨", top: "60%", right: "10%" },
        { emoji: "❄️", bottom: "25%", right: "25%" }
      ]
    },
    "princess-party": {
      name: "Princess Party",
      icon: "👑",
      tagline: "Once Upon a Dream Party!",
      description: "Every child deserves to feel like royalty! Transform the venue into a magical castle with elegant princess decorations, tiaras, and enchanted activities fit for kings and queens. A fairytale celebration where dreams really do come true.",
      color: "from-pink-400 to-purple-300",
      accentColor: "pink",
      image: "/assets/images/final_pics/desktop/princess_theme.webp",
      mobileImage: "/assets/images/final_pics/mobile/princess_theme.webp",
      included: [
        "Royal castle backdrop and elegant decorations",
        "Tiaras or crowns for all guests",
        "Princess-themed tableware and linens",
        "Royal tea party station setup",
        "Themed party games and activities"
      ],
      activities: [
        "Crown and tiara decorating station",
        "Royal ball dance party",
        "Princess story time",
        "Magic wand craft making"
      ],
      ages: "3-8 Years Old",
      partySize: "Up to 20 children",
      decorElements: [
        { emoji: "👑", top: "10%", left: "10%" },
        { emoji: "✨", top: "20%", right: "15%" },
        { emoji: "💎", bottom: "15%", left: "20%" },
        { emoji: "🏰", top: "60%", right: "10%" },
        { emoji: "👑", bottom: "25%", right: "25%" }
      ]
    },
    "cupcake-decorating": {
      name: "Cupcake Decorating Party",
      icon: "🧁",
      tagline: "Sweet Creations & Tasty Fun!",
      description: "Let your little bakers unleash their creativity! This hands-on cupcake decorating party provides everything needed for kids to frost, sprinkle, and design their own delicious masterpieces. Each child becomes a pastry chef for the day!",
      color: "from-pink-300 to-yellow-200",
      accentColor: "pink",
      image: "/assets/images/final_pics/desktop/cupcakes_1.webp",
      mobileImage: "/assets/images/final_pics/mobile/cupcakes_1.webp",
      included: [
        "Individual cupcake decorating stations for each child",
        "Fresh-baked cupcakes ready to decorate",
        "Variety of colorful frostings and toppings",
        "Chef hats and aprons for all guests",
        "Take-home boxes for their sweet creations"
      ],
      activities: [
        "Hands-on cupcake frosting and decorating",
        "Sprinkle art techniques",
        "Edible decorations galore",
        "Cupcake decorating competition (optional)"
      ],
      ages: "4-10 Years Old",
      partySize: "Up to 15 children",
      decorElements: [
        { emoji: "🧁", top: "10%", left: "10%" },
        { emoji: "🍰", top: "20%", right: "15%" },
        { emoji: "🎂", bottom: "15%", left: "20%" },
        { emoji: "🧁", top: "60%", right: "10%" },
        { emoji: "🍰", bottom: "25%", right: "25%" }
      ]
    },
    "bracelet-making": {
      name: "Bracelet Making Party",
      icon: "💎",
      tagline: "Create Friendship & Sparkle!",
      description: "Design and create beautiful friendship bracelets in this craft-focused celebration! With colorful beads, charms, and endless design possibilities, every child will create unique pieces to take home and share with friends. A perfect party for creative minds!",
      color: "from-purple-400 to-pink-400",
      accentColor: "purple",
      image: "/assets/images/final_pics/desktop/ftq_bracelets.webp",
      mobileImage: "/assets/images/final_pics/mobile/ftq_bracelets.webp",
      included: [
        "Individual bracelet-making stations with all supplies",
        "Variety of colorful beads, charms, and strings",
        "Step-by-step instruction from your party host",
        "Jewelry boxes to take creations home",
        "Themed decorations and table settings"
      ],
      activities: [
        "Friendship bracelet weaving",
        "Bead pattern designing",
        "Charm bracelet creation",
        "Jewelry design fashion show"
      ],
      ages: "5-10 Years Old",
      partySize: "Up to 15 children",
      decorElements: [
        { emoji: "💎", top: "10%", left: "10%" },
        { emoji: "✨", top: "20%", right: "15%" },
        { emoji: "💍", bottom: "15%", left: "20%" },
        { emoji: "💎", top: "60%", right: "10%" },
        { emoji: "✨", bottom: "25%", right: "25%" }
      ]
    },
    "cartoon-party": {
      name: "Cartoon Party",
      icon: "🎨",
      tagline: "Bring Your Favorite Characters to Life!",
      description: "Jump into a world of colorful fun with a cartoon-themed celebration! Whether it's superheroes, animated friends, or classic cartoons, we'll create a vibrant party atmosphere filled with your child's favorite characters. A customizable theme that matches their unique interests!",
      color: "from-orange-400 to-red-400",
      accentColor: "orange",
      image: "/assets/images/final_pics/desktop/cartoon_theme.webp",
      mobileImage: "/assets/images/final_pics/mobile/cartoon_theme.webp",
      included: [
        "Customizable cartoon character decorations",
        "Vibrant, colorful table settings and balloons",
        "Character-themed party games and activities",
        "Cartoon coloring and craft station",
        "Photo booth area with cartoon props"
      ],
      activities: [
        "Cartoon character drawing workshop",
        "Comic book creation station",
        "Superhero training obstacle course",
        "Cartoon trivia and games"
      ],
      ages: "3-10 Years Old",
      partySize: "Up to 20 children",
      decorElements: [
        { emoji: "🎨", top: "10%", left: "10%" },
        { emoji: "🎭", top: "20%", right: "15%" },
        { emoji: "🖍️", bottom: "15%", left: "20%" },
        { emoji: "🎨", top: "60%", right: "10%" },
        { emoji: "✨", bottom: "25%", right: "25%" }
      ]
    }
  };

  const theme = themeData[themeId || ""] || themeData["frozen-party"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Animated Hero Section */}
      <section className={`relative pt-32 pb-20 px-4 bg-gradient-to-br ${theme.color} overflow-hidden`}>
        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {theme.decorElements.map((elem: any, index: number) => (
            <div
              key={index}
              className="absolute text-4xl md:text-6xl opacity-20 animate-float"
              style={{
                top: elem.top,
                bottom: elem.bottom,
                left: elem.left,
                right: elem.right,
                animationDelay: `${index * 0.5}s`
              }}
            >
              {elem.emoji}
            </div>
          ))}
          
          {/* Sparkles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute w-2 h-2 bg-white/40 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-9xl mb-6 animate-bounce-slow inline-block">
            {theme.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in drop-shadow-lg">
            {theme.name}
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {theme.tagline}
          </p>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Theme Image Showcase */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-scale-in group">
            <picture>
              <source media="(max-width: 600px)" srcSet={theme.mobileImage} />
              <source media="(min-width: 601px)" srcSet={theme.image} />
              <img
                src={theme.image}
                alt={`${theme.name} decoration example`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </picture>
            {/* Overlay gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-t ${theme.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
          </div>
        </div>
      </section>

      {/* Theme Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Sparkles className={`w-8 h-8 text-${theme.accentColor}-500`} />
                  About This Theme
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {theme.description}
                </p>
              </div>

              {/* What's Included */}
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Star className={`w-8 h-8 text-${theme.accentColor}-500`} />
                  What's Included
                </h3>
                <div className="grid gap-4">
                  {theme.included.map((item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${theme.accentColor}-500 flex items-center justify-center`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-muted-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Fun Activities
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {theme.activities.map((activity: string, index: number) => (
                    <div
                      key={index}
                      className={`p-6 bg-gradient-to-br ${theme.color} rounded-xl text-white font-semibold text-center transform hover:scale-105 transition-transform animate-scale-in shadow-lg`}
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      {activity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfect For */}
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Perfect For
                </h3>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                    <Calendar className={`w-6 h-6 text-${theme.accentColor}-500`} />
                    <div>
                      <div className="text-sm text-muted-foreground">Age Range</div>
                      <div className="font-bold text-foreground">{theme.ages}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                    <Users className={`w-6 h-6 text-${theme.accentColor}-500`} />
                    <div>
                      <div className="text-sm text-muted-foreground">Party Size</div>
                      <div className="font-bold text-foreground">{theme.partySize}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Box */}
            <div className="lg:col-span-1">
              <div className={`bg-gradient-to-br ${theme.color} rounded-2xl p-8 sticky top-24 shadow-2xl animate-scale-in`} style={{ animationDelay: '0.6s' }}>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4 animate-bounce-slow">
                    {theme.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ready to Book?
                  </h3>
                  <p className="text-white/90 text-sm">
                    Add this theme to your Funtastique Package
                  </p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6">
                  <div className="text-white/90 text-sm mb-2">Starting at</div>
                  <div className="text-3xl font-bold text-white mb-1">Contact Us</div>
                  <div className="text-white/80 text-sm">for custom pricing</div>
                </div>

                <Link to="/contact">
                  <Button size="lg" className="w-full bg-white text-foreground hover:bg-white/90 font-bold text-lg shadow-xl transform hover:scale-105 transition-all">
                    Book This Theme 🎉
                  </Button>
                </Link>

                <div className="mt-6 text-center">
                  <Link to="/themed-parties" className="text-white/90 hover:text-white text-sm underline">
                    ← Back to All Themes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-8 animate-fade-in">
            Why Choose {theme.name}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl mb-4">🎈</div>
              <h3 className="font-bold text-xl mb-2">Stress-Free</h3>
              <p className="text-muted-foreground">We handle all setup and cleanup</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-bold text-xl mb-2">Custom Magic</h3>
              <p className="text-muted-foreground">Tailored to your child's dreams</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-bold text-xl mb-2">Unforgettable</h3>
              <p className="text-muted-foreground">Memories that last a lifetime</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThemeDetail;
