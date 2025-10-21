import { Building2, User, Sparkles, Tv } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Private Venue just for your party",
      description: "Enjoy a 1500 sq ft fully private space just for you and your guests—no shared bookings, ever.",
    },
    {
      icon: User,
      title: "Party Host to help with the party",
      description: "Your dedicated host helps with everything from serving food to post-party cleanup so you can relax and enjoy the celebration.",
    },
    {
      icon: Sparkles,
      title: "Customized Decorations & Activities",
      description: "Bring your party to life with your child's favorite decorations. We also offer activities like cupcake decorating, ice-cream making, bracelet making for a small extra price.",
    },
    {
      icon: Tv,
      title: "Includes a Kitchen, TV, Sound System & More",
      description: "Make the most of your event with access to a lot of toys, full kitchen, TV set, sound system, and chairs, tables or anything else you could need.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[hsl(var(--services-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What's Included in Your Funtastique Package
          </h2>
          <p className="text-lg text-muted-foreground">
            We make kids' parties simple, fun, and stress-free for parents. Just bring the cake, food and the kids, we'll handle the rest so you can enjoy the celebration too!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
