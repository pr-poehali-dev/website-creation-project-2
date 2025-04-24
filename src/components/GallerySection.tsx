import { useState } from "react";
import { 
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
    {
      src: "/placeholder.svg",
      alt: "Mercedes-AMG S 63 Front View",
      title: "Внешний вид",
      description: "Агрессивная решетка радиатора AMG и характерный дизайн экстерьера"
    },
    {
      src: "/placeholder.svg",
      alt: "Mercedes-AMG S 63 Interior",
      title: "Интерьер",
      description: "Роскошный салон с эксклюзивной отделкой и спортивными акцентами AMG"
    },
    {
      src: "/placeholder.svg",
      alt: "Mercedes-AMG S 63 Engine",
      title: "Двигатель V8 битурбо",
      description: "Мощный 4.0-литровый V8 битурбо двигатель с гибридной системой"
    },
    {
      src: "/placeholder.svg",
      alt: "Mercedes-AMG S 63 Wheels",
      title: "21-дюймовые колеса",
      description: "Кованые легкосплавные диски AMG с эксклюзивным дизайном"
    },
    {
      src: "/placeholder.svg",
      alt: "Mercedes-AMG S 63 Rear View",
      title: "Вид сзади",
      description: "Характерные четыре выхлопные трубы и диффузор AMG"
    },
    {
      src: "/placeholder.svg",
      alt: "Mercedes-AMG S 63 Dashboard",
      title: "Приборная панель",
      description: "Цифровая панель приборов и система MBUX с расширенной реальностью"
    }
  ];

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-black" id="gallery">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-silver-100">Галерея</h2>
          <p className="text-silver-300">
            Изображения Mercedes-AMG S 63 E Performance демонстрируют его выдающийся дизайн и технологии
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openGallery(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm text-silver-300">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl bg-black border-zinc-800">
          <DialogHeader>
            <DialogTitle className="text-silver-100">{galleryImages[currentImageIndex].title}</DialogTitle>
            <DialogDescription>
              {galleryImages[currentImageIndex].description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative aspect-[16/9] my-4">
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].alt} 
              className="object-contain w-full h-full"
            />
            
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center">
            <div className="text-sm text-silver-300">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
