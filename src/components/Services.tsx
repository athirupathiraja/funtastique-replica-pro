import { Building2, User, Sparkles, Tv } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Building2,
      titleKey: "services.venue.title",
      descriptionKey: "services.venue.description",
      image: "/assets/images/final_pics/desktop/centre_white_view.webp",
      mobileImage: "/assets/images/final_pics/mobile/centre_white_view.webp"
    },
    {
      icon: User,
      titleKey: "services.host.title",
      descriptionKey: "services.host.description",
      image: "/assets/images/final_pics/desktop/host.webp",
      mobileImage: "/assets/images/final_pics/mobile/host.webp"
    },
    {
      icon: Sparkles,
      titleKey: "services.decorations.title",
      descriptionKey: "services.decorations.description",
      image: "/assets/images/final_pics/desktop/ftq_cpcake.webp",
      mobileImage: "/assets/images/final_pics/mobile/ftq_cpcake.webp"
    },
    {
      icon: Tv,
      titleKey: "services.facilities.title",
      descriptionKey: "services.facilities.description",
      image: "/assets/images/final_pics/desktop/centre_playground.webp",
      mobileImage: "/assets/images/final_pics/mobile/centre_playground.webp"
    },
  ];

  return (
    <section id="services" className="py-20 bg-[hsl(var(--services-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <picture>
                  <source media="(max-width: 600px)" srcSet={service.mobileImage} />
                  <source media="(min-width: 601px)" srcSet={service.image} />
                  <img 
                    src={service.image} 
                    alt={t(service.titleKey)}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110`}
                    style={service.titleKey === "services.host.title" ? { objectPosition: "50% 15%" } : {}}
                  />
                </picture>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
