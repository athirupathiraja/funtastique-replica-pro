import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ReviewsAndContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Reviews */}
          <div className="bg-secondary/10 rounded-3xl p-8 lg:p-12 space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-8">Stress FREE Parents</h2>
            
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

            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-white py-6 text-lg font-semibold rounded-full transition-all"
            >
              Read More Reviews
            </Button>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-secondary rounded-3xl p-8 lg:p-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl font-bold text-white mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white border-0 py-6 text-lg rounded-xl"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white border-0 py-6 text-lg rounded-xl"
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-white border-0 py-6 text-lg rounded-xl"
              />
              <Textarea
                placeholder="Write message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-white border-0 py-4 text-lg rounded-xl min-h-[150px]"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsAndContact;
