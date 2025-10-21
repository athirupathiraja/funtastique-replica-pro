import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - in real implementation, these would be actual gallery photos
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800", height: "h-64" },
    { id: 2, url: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800", height: "h-80" },
    { id: 3, url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800", height: "h-72" },
    { id: 4, url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800", height: "h-96" },
    { id: 5, url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800", height: "h-64" },
    { id: 6, url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800", height: "h-80" },
    { id: 7, url: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800", height: "h-72" },
    { id: 8, url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800", height: "h-64" },
    { id: 9, url: "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?w=800", height: "h-96" },
    { id: 10, url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800", height: "h-80" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Gallery</h2>
          <p className="text-xl text-primary/80">
            ✨ Tap any image for a FUNtastique close-up view of our space & activities! ✨
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl ${image.height} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={`Gallery image ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
            </div>
          ))}
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
          <img
            src={images[selectedImage].url}
            alt={`Gallery image ${images[selectedImage].id}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
