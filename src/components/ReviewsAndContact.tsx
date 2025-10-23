import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ReviewsAndContact = () => {
  const { t } = useTranslation();
  const reviews = [
    {
      text: "We booked this place for our daughter's bday party and it was absolutely perfect! The space is clean, colorful, and has everything you need. The host was amazing and helped with setup and cleanup. Highly recommend!",
      author: "Bhumika Tandon",
    },
    {
      text: "We just held a Frozen themed party for our 5 year old and it was magical! The decorations were beautiful and the kids had an amazing time. The host was so helpful and patient with all the kids. Worth every penny!",
      author: "Sue",
    },
    {
      text: "Fantastic place to do a kid's party! Private space, great host, and so many activities to keep the kids entertained. Parents could actually relax and enjoy the party. Will definitely book again!",
      author: "Mike Davoli",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Reviews - Full Width */}
          <div className="bg-secondary/10 rounded-3xl p-8 lg:p-12 space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">{t('reviews.title')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="font-semibold text-foreground">{review.author}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white py-6 text-lg font-semibold rounded-full transition-all px-8"
              >
                {t('reviews.submit')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsAndContact;
