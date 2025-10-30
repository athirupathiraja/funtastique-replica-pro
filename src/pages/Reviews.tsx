import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const featuredReviews = [
    {
      text: "Easiest and least stressful party we've ever planned. And the kids had a blast! Highly recommend!",
      author: "Mike Davoli"
    },
    {
      text: "We just held a Frozen themed party... She did such a great job with the decorations... I can't tell you what a relief that was!",
      author: "Sue"
    },
    {
      text: "Cherry was super accommodating... she planned fun activities for the kids! Adults and kids had fun! Such a wonderful experience.",
      author: "Bhumika Tandon"
    }
  ];

  const allReviews = [
    {
      text: "We booked this place for our daughter's bday party and were very pleased. Cherry was super accommodating and helped us with decorations. The space is perfect for kids (lots of toys) and also to accommodate adults. She also planned fun activities for the kids! Adults and kids had fun! Such a wonderful experience.",
      author: "Bhumika Tandon"
    },
    {
      text: "We just held a Frozen themed party in this amazing space. The owner, Cherry was more than accommodating. She did such a great job with the decorations, and helped coordinate the activities with DJ party games. My daughter had an amazing time. And I can't tell you what a relief that was, Cherry prepared food for all the guests. It was the easiest party I've ever planned!!",
      author: "Sue"
    },
    {
      text: "Fantastic place to do a kid's party! The owner Cherry is super nice and welcoming. The place is big, clean and has a great selection of toys for the kids. Easiest and least stressful party we've ever planned. And the kids had a blast. Highly recommend!",
      author: "Mike Davoli"
    },
    {
      text: "Very nice place for a party. A lot of activities for kids. Cherry is so nice and she made our party so easy to organize. Thank you so much!",
      author: "Nadia Macri"
    },
    {
      text: "Amazing experience! Cherry made everything so easy for us. The kids loved the space and all the toys. Would definitely recommend to anyone looking for a stress-free party venue.",
      author: "Eden Bertrang"
    },
    {
      text: "Perfect venue for children's parties! Clean, spacious, and Cherry is wonderful to work with. She takes care of everything so you can actually enjoy the party.",
      author: "Jelly R."
    },
    {
      text: "We had our son's 5th birthday here and it was perfect! The themed decorations were beautiful and the kids had so much fun. Cherry was so helpful throughout the entire process.",
      author: "Negar Jafarpisheh"
    },
    {
      text: "Great space, great host, great party! Cherry made everything so simple. The venue has everything you need and more. Our daughter had the best time!",
      author: "Giannino Coladonato"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-background overflow-hidden">
        {/* Fun Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Stars */}
          <div className="absolute top-12 left-16 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-5 h-5 bg-yellow-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-1 h-1 bg-white/60 rounded-full absolute top-0 left-0 animate-ping"></div>
            </div>
          </div>
          <div className="absolute top-24 left-32 animate-float-slow" style={{ animationDelay: "1s" }}>
            <div className="w-4 h-4 bg-yellow-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-0.5 h-0.5 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>
          <div className="absolute top-16 left-48 animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="w-3 h-3 bg-yellow-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-0.5 h-0.5 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
          
          {/* Floating Hearts */}
          <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: "0.8s" }}>
            <div className="w-6 h-6 bg-pink-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-3 h-3 bg-pink-400/60 rounded-full absolute -top-1.5 -left-1.5"></div>
              <div className="w-3 h-3 bg-pink-400/60 rounded-full absolute -top-1.5 -right-1.5"></div>
            </div>
          </div>
          <div className="absolute top-32 right-36 animate-float-slow" style={{ animationDelay: "1.8s" }}>
            <div className="w-4 h-4 bg-pink-400/60 transform rotate-45 animate-float shadow-lg">
              <div className="w-2 h-2 bg-pink-400/60 rounded-full absolute -top-1 -left-1"></div>
              <div className="w-2 h-2 bg-pink-400/60 rounded-full absolute -top-1 -right-1"></div>
            </div>
          </div>
          
          {/* Floating Balloons */}
          <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-6 h-9 bg-gradient-to-b from-blue-400/60 to-cyan-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-6 bg-gray-400/40 ml-3"></div>
          </div>
          <div className="absolute bottom-32 left-36 animate-float-slow" style={{ animationDelay: "2.5s" }}>
            <div className="w-5 h-7 bg-gradient-to-b from-green-400/60 to-teal-400/50 rounded-full shadow-lg"></div>
            <div className="w-0.5 h-5 bg-gray-400/40 ml-2.5"></div>
          </div>
          
          {/* Floating Sparkles */}
          <div className="absolute bottom-16 right-24 w-3 h-3 bg-yellow-400/50 transform rotate-45 animate-float shadow-lg" style={{ animationDelay: "2.2s" }}>
            <div className="w-1 h-1 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "1.5s" }}></div>
          </div>
          <div className="absolute top-40 right-40 w-2 h-2 bg-yellow-400/50 transform rotate-45 animate-float-slow shadow-lg" style={{ animationDelay: "2.8s" }}>
            <div className="w-0.5 h-0.5 bg-white/60 rounded-full absolute top-0 left-0 animate-ping" style={{ animationDelay: "1.2s" }}></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-fade-in">
            <span className="block text-foreground">{t('reviews.heroTitle')}</span>
            <span className="block text-primary">{t('reviews.heroSubtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium animate-fade-in">
            {t('reviews.heroDescription').split('Funtastique parties').map((part, i, arr) => (
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-primary font-bold">Funtastique parties</span>
                </span>
              ) : part
            ))}
          </p>
        </div>
        
        {/* Wavy Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,60 600,60 900,30 C1050,15 1150,0 1200,0 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <div
                key={index}
                className="bg-secondary/5 rounded-2xl p-8 relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-12 h-12 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{review.text}"
                </p>
                <p className="font-semibold text-foreground">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            {t('reviews.moreReviewsTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  {review.text}
                </p>
                <p className="font-semibold text-foreground text-sm">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Leave a Review */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('reviews.ctaTitle')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('reviews.ctaDescription')}
          </p>
          <a 
            href="https://www.google.com/search?q=centre+funtastique" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg h-14 px-8"
            >
              {t('reviews.ctaButton')}
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section - Book Your Party */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-light to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Happy Families?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            See why parents love Centre Funtastique. Book your stress-free party today and create memories that last a lifetime!
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-xl font-bold px-12 py-7 rounded-full shadow-2xl transform hover:scale-105 transition-all"
            >
              Book Your Funtastique Party
            </Button>
          </Link>
        </div>
      </section>

      {/* Web Design Credit */}
      <section className="py-8 px-4 bg-white">
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

export default Reviews;
