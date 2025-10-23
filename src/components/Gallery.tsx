import { useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images from final_pics directory
  const images = [
    { 
      id: 1, 
      url: "/assets/images/final_pics/desktop/centre_playground.webp",
      mobileUrl: "/assets/images/final_pics/mobile/centre_playground.webp"
    },
    { 
      id: 2, 
      url: "/assets/images/final_pics/desktop/centre_white_view.webp",
      mobileUrl: "/assets/images/final_pics/mobile/centre_white_view.webp"
    },
    { 
      id: 3, 
      url: "/assets/images/final_pics/desktop/green_centre_view.webp",
      mobileUrl: "/assets/images/final_pics/mobile/green_centre_view.webp"
    },
    { 
      id: 4, 
      url: "/assets/images/final_pics/desktop/ftq_bracelets.webp",
      mobileUrl: "/assets/images/final_pics/mobile/ftq_bracelets.webp"
    },
    { 
      id: 5, 
      url: "/assets/images/final_pics/desktop/cupcakes_1.webp",
      mobileUrl: "/assets/images/final_pics/mobile/cupcakes_1.webp"
    },
    { 
      id: 7, 
      url: "/assets/images/final_pics/desktop/ftq_deco.webp",
      mobileUrl: "/assets/images/final_pics/mobile/ftq_deco.webp"
    },
    { 
      id: 8, 
      url: "/assets/images/final_pics/desktop/frozen_theme.webp",
      mobileUrl: "/assets/images/final_pics/mobile/frozen_theme.webp"
    },
    { 
      id: 9, 
      url: "/assets/images/final_pics/desktop/white_theme.webp",
      mobileUrl: "/assets/images/final_pics/mobile/white_theme.webp"
    },
    { 
      id: 10, 
      url: "/assets/images/final_pics/desktop/green_theme.webp",
      mobileUrl: "/assets/images/final_pics/mobile/green_theme.webp"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('gallery.title')}</h2>
          <p className="text-xl text-primary/80">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Horizontal Collage Grid Layout - 3 rows for landscape orientation */}
        <div className="grid gap-3 md:gap-4 lg:gap-6" style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(3, minmax(120px, 1fr))',
          minHeight: '400px'
        }}>
          
          {/* Top Row - Left: Large landscape image */}
          <div 
            className="cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
            style={{ 
              gridColumn: '1 / 7', 
              gridRow: '1 / 2',
              animationDelay: '0s' 
            }}
            onClick={() => setSelectedImage(0)}
          >
            <picture>
              <source media="(max-width: 600px)" srcSet={images[0].mobileUrl} />
              <source media="(min-width: 601px)" srcSet={images[0].url} />
              <img src={images[0].url} alt="Gallery image 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </picture>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Top Row - Center: Large main focal image */}
          <div 
            className="cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
            style={{ 
              gridColumn: '7 / 13', 
              gridRow: '1 / 3',
              animationDelay: '0.1s' 
            }}
            onClick={() => setSelectedImage(1)}
          >
            <picture>
              <source media="(max-width: 600px)" srcSet={images[1].mobileUrl} />
              <source media="(min-width: 601px)" srcSet={images[1].url} />
              <img src={images[1].url} alt="Gallery image 2" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </picture>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Middle Row - Left: Tall vertical image */}
          <div 
            className="cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
            style={{ 
              gridColumn: '1 / 3', 
              gridRow: '2 / 4',
              animationDelay: '0.2s' 
            }}
            onClick={() => setSelectedImage(2)}
          >
            <picture>
              <source media="(max-width: 600px)" srcSet={images[2].mobileUrl} />
              <source media="(min-width: 601px)" srcSet={images[2].url} />
              <img src={images[2].url} alt="Gallery image 3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </picture>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Middle Row - Center Left: Small square */}
          <div 
            className="cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
            style={{ 
              gridColumn: '3 / 5', 
              gridRow: '2 / 3',
              animationDelay: '0.3s' 
            }}
            onClick={() => setSelectedImage(3)}
          >
            <picture>
              <source media="(max-width: 600px)" srcSet={images[3].mobileUrl} />
              <source media="(min-width: 601px)" srcSet={images[3].url} />
              <img src={images[3].url} alt="Gallery image 4" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </picture>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Middle Row - Center Right: Small square */}
          <div 
            className="cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
            style={{ 
              gridColumn: '5 / 7', 
              gridRow: '2 / 3',
              animationDelay: '0.4s' 
            }}
            onClick={() => setSelectedImage(4)}
          >
            <picture>
              <source media="(max-width: 600px)" srcSet={images[4].mobileUrl} />
              <source media="(min-width: 601px)" srcSet={images[4].url} />
              <img src={images[4].url} alt="Gallery image 5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </picture>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Bottom Row - Left: Medium rectangle */}
          <div 
            className="cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
            style={{ 
              gridColumn: '3 / 7', 
              gridRow: '3 / 4',
              animationDelay: '0.5s' 
            }}
            onClick={() => setSelectedImage(5)}
          >
            <picture>
              <source media="(max-width: 600px)" srcSet={images[5].mobileUrl} />
              <source media="(min-width: 601px)" srcSet={images[5].url} />
              <img src={images[5].url} alt="Gallery image 6" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </picture>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Bottom Row - Right: Three small images in a row (replacing cartoon theme) */}
          {/* Princess theme */}
          <div 
            className="cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
            style={{ 
              gridColumn: '7 / 9', 
              gridRow: '3 / 4',
              animationDelay: '0.6s' 
            }}
            onClick={() => setSelectedImage(6)}
          >
            <picture>
              <source media="(max-width: 600px)" srcSet={images[6].mobileUrl} />
              <source media="(min-width: 601px)" srcSet={images[6].url} />
              <img src={images[6].url} alt="Gallery image 7" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </picture>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* White theme */}
          <div 
            className="cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
            style={{ 
              gridColumn: '9 / 11', 
              gridRow: '3 / 4',
              animationDelay: '0.7s' 
            }}
            onClick={() => setSelectedImage(7)}
          >
            <picture>
              <source media="(max-width: 600px)" srcSet={images[7].mobileUrl} />
              <source media="(min-width: 601px)" srcSet={images[7].url} />
              <img src={images[7].url} alt="Gallery image 8" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </picture>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          {/* Green theme */}
          <div 
            className="cursor-pointer group relative overflow-hidden rounded-lg animate-fade-in hover:scale-105 transition-all duration-300"
            style={{ 
              gridColumn: '11 / 13', 
              gridRow: '3 / 4',
              animationDelay: '0.8s' 
            }}
            onClick={() => setSelectedImage(8)}
          >
            <picture>
              <source media="(max-width: 600px)" srcSet={images[8].mobileUrl} />
              <source media="(min-width: 601px)" srcSet={images[8].url} />
              <img src={images[8].url} alt="Gallery image 9" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </picture>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <picture onClick={(e) => e.stopPropagation()}>
            <source media="(max-width: 600px)" srcSet={images[selectedImage].mobileUrl} />
            <source media="(min-width: 601px)" srcSet={images[selectedImage].url} />
            <img
              src={images[selectedImage].url}
              alt={`Gallery image ${images[selectedImage].id}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            />
          </picture>
        </div>
      )}
    </section>
  );
};

export default Gallery;
