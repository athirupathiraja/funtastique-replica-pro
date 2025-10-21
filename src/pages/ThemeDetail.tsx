import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThemeDetail = () => {
  const { themeId } = useParams();

  const themeData: Record<string, any> = {
    "frozen-party": {
      name: "Frozen Party",
      tagline: "Let It Go Into a Winter Wonderland!",
      description: "Transform our space into Arendelle with this magical Frozen-themed party. Your little ones will feel like they've stepped into Elsa's ice palace, complete with shimmering snowflakes, blue and white décor, and enchanted activities that bring the movie to life.",
      heroImage: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600",
      included: [
        "Custom Frozen backdrop with snowflake decorations",
        "Ice-blue tablecloths and Frozen-themed tableware",
        "Elsa and Anna character masks for all guests",
        "Snowflake craft station",
        "Themed party games led by your host"
      ],
      ages: "3-8 Years Old",
      partySize: "Up to 20 children",
      gallery: [
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800",
        "https://images.unsplash.com/photo-1481769315321-2c183fcada5d?w=800",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800"
      ]
    },
    "superhero-party": {
      name: "Superhero Party",
      tagline: "An Action-Packed Adventure!",
      description: "Calling all heroes! Watch your venue transform into a superhero headquarters where kids can save the day. Complete with cityscape backdrops, comic book decorations, and action-packed activities that will have every child feeling like they have superpowers.",
      heroImage: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=1600",
      included: [
        "Custom superhero city backdrop & table settings",
        "Kryptonite slime-making station",
        "Hero masks and capes for each guest",
        "Themed party games led by your host",
        "Comic book style photo props"
      ],
      ages: "4-8 Years Old",
      partySize: "Up to 15 children",
      gallery: [
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800",
        "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=800",
        "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=800",
        "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800"
      ]
    },
    "mario-party": {
      name: "Mario Party",
      tagline: "Jump Into the Mushroom Kingdom!",
      description: "It's-a me, Mario! Bring the iconic video game to life with a colorful Mario-themed celebration. From question blocks to fire flowers, your venue will become the ultimate Mushroom Kingdom adventure that kids will never forget.",
      heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600",
      included: [
        "Mario-themed backdrop and decorations",
        "Question block piñata or activity station",
        "Mario character masks for all guests",
        "Themed obstacle course games",
        "Mushroom Kingdom photo booth props"
      ],
      ages: "4-10 Years Old",
      partySize: "Up to 18 children",
      gallery: [
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800",
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800"
      ]
    },
    "paw-patrol-party": {
      name: "Paw Patrol Party",
      tagline: "No Job Is Too Big, No Pup Is Too Small!",
      description: "Join Ryder and the pups on an exciting rescue mission! This Paw Patrol party brings Adventure Bay to life with colorful decorations, rescue-themed activities, and plenty of puppy power fun.",
      heroImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600",
      included: [
        "Paw Patrol backdrop and themed decorations",
        "Pup badge making station",
        "Character masks for all the pups",
        "Rescue mission scavenger hunt",
        "Themed party games and activities"
      ],
      ages: "2-6 Years Old",
      partySize: "Up to 15 children",
      gallery: [
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800",
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800",
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800",
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800"
      ]
    },
    "princess-party": {
      name: "Princess Party",
      tagline: "Once Upon a Dream Party!",
      description: "Every child deserves to feel like royalty! Transform the venue into a magical castle with elegant princess decorations, tiaras, and enchanted activities fit for kings and queens.",
      heroImage: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=1600",
      included: [
        "Castle backdrop and royal decorations",
        "Tiaras and jewels for all guests",
        "Princess dress-up accessories",
        "Royal tea party station",
        "Enchanted castle photo booth"
      ],
      ages: "3-8 Years Old",
      partySize: "Up to 20 children",
      gallery: [
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800",
        "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800",
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=800"
      ]
    },
    "dinosaur-party": {
      name: "Dinosaur Party",
      tagline: "Roar Into Prehistoric Times!",
      description: "Travel back millions of years for a dino-mite adventure! This dinosaur party features jungle decorations, fossil activities, and roaring good fun that will thrill any little paleontologist.",
      heroImage: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1600",
      included: [
        "Prehistoric jungle backdrop and decorations",
        "Dinosaur egg hunt activity",
        "Fossil dig excavation station",
        "Dino masks for all guests",
        "Themed stomping games and activities"
      ],
      ages: "3-8 Years Old",
      partySize: "Up to 18 children",
      gallery: [
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800",
        "https://images.unsplash.com/photo-1551191848-2b9bc76e7f42?w=800",
        "https://images.unsplash.com/photo-1596854372407-baba7fef6e51?w=800",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
      ]
    },
    "cupcake-decorating-party": {
      name: "Cupcake Decorating Party",
      tagline: "Sweet Creations & Tasty Fun!",
      description: "Let your little bakers unleash their creativity! This hands-on cupcake decorating party provides everything needed for kids to frost, sprinkle, and design their own delicious masterpieces.",
      heroImage: "https://images.unsplash.com/photo-1426869884541-df7117556757?w=1600",
      included: [
        "Individual cupcake decorating stations",
        "Variety of frostings and toppings",
        "Bakery-themed decorations",
        "Chef hats and aprons for all guests",
        "Take-home boxes for their creations"
      ],
      ages: "4-10 Years Old",
      partySize: "Up to 15 children",
      gallery: [
        "https://images.unsplash.com/photo-1426869884541-df7117556757?w=800",
        "https://images.unsplash.com/photo-1599785209796-786432b228bc?w=800",
        "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800",
        "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800"
      ]
    },
    "slime-factory-party": {
      name: "Slime Factory Party",
      tagline: "Get Messy and Creative!",
      description: "Squish, stretch, and create! This slime-making party is perfect for hands-on fun. Kids will mix their own custom slime with endless color and glitter combinations while we handle all the cleanup.",
      heroImage: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1600",
      included: [
        "Individual slime-making stations",
        "Variety of colors, glitters, and mix-ins",
        "Science lab themed decorations",
        "Lab coats for all guests",
        "Take-home containers for their slime"
      ],
      ages: "5-10 Years Old",
      partySize: "Up to 15 children",
      gallery: [
        "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800",
        "https://images.unsplash.com/photo-1533093818801-0448d25642f1?w=800",
        "https://images.unsplash.com/photo-1503551723145-6c040742065b?w=800",
        "https://images.unsplash.com/photo-1611450403947-3f3c502e1f2c?w=800"
      ]
    }
  };

  const theme = themeData[themeId || ""] || themeData["frozen-party"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Theme Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${theme.heroImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in">
            {theme.name}
          </h1>
        </div>
      </section>

      {/* Theme Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-primary mb-6">
                {theme.tagline}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {theme.description}
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                What's Included
              </h3>
              <ul className="space-y-3 mb-8">
                {theme.included.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                Perfect For
              </h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Ages: {theme.ages}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Party Size: {theme.partySize}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Box */}
            <div className="lg:col-span-1">
              <div className="bg-muted/30 rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Booking Details
                </h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  Add-on to our Funtastique Package
                </p>
                <p className="text-muted-foreground mb-6">
                  Contact us to add this theme to your party booking!
                </p>
                <Link to="/contact">
                  <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90">
                    Book This Theme
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            See The Fun in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {theme.gallery.map((image: string, index: number) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`${theme.name} gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThemeDetail;
