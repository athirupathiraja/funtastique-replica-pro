import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Reviews = () => {
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
      <section className="py-20 px-4 mt-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Don't Just Take Our Word For It...
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            See what our happy families have to say about their Funtastique parties! Our greatest joy is seeing your glowing reviews.
          </p>
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
            More from Our Funtastique Families
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Had a Funtastique Time?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We'd love to hear about your experience! New reviews help us and help other parents planning their perfect party.
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
              Leave a Review on Google
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
