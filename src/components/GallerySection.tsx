const GallerySection = () => {
  const images = [
    { src: "/placeholder.svg", alt: "Mercedes-AMG S 63 front view", className: "col-span-2 row-span-2" },
    { src: "/placeholder.svg", alt: "Mercedes-AMG S 63 interior", className: "" },
    { src: "/placeholder.svg", alt: "Mercedes-AMG S 63 wheels", className: "" },
    { src: "/placeholder.svg", alt: "Mercedes-AMG S 63 rear view", className: "" },
    { src: "/placeholder.svg", alt: "Mercedes-AMG S 63 dashboard", className: "" },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-silver-100">Галерея</h2>
          <p className="text-silver-300">
            Исключительный дизайн и внимание к деталям в каждом элементе
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg ${image.className} group`}>
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3 border border-silver-500 text-silver-100 rounded-full hover:bg-silver-500/10 transition-colors">
            Смотреть больше фотографий
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
