import { useTranslation } from "react-i18next";

const Panorama = () => {
  const { t } = useTranslation();
  
  return (
    <section id="panorama" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('panorama.title')}</h2>
          <p className="text-xl text-foreground font-semibold mb-2">{t('panorama.subtitle')}</p>
          <p className="text-lg text-primary/80">
            {t('panorama.description')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group cursor-move">
            {/* Panoramic image with responsive sources */}
            <picture>
              <source media="(max-width: 600px)" srcSet="/assets/images/final_pics/mobile/fun_panorama.webp" />
              <source media="(min-width: 601px)" srcSet="/assets/images/final_pics/desktop/fun_panorama.webp" />
              <img
                src="/assets/images/final_pics/desktop/fun_panorama.webp"
                alt="Panoramic view of Centre Funtastique"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-6 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {t('panorama.dragHint')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panorama;
