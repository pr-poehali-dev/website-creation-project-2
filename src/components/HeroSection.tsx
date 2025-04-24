import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 lg:pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-silver-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-in slide-in-from-left" style={{ animationDelay: "100ms" }}>
            <h2 className="text-xl md:text-2xl font-medium text-red-500 mb-2">Mercedes-Benz</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-silver-100 mb-4">
              AMG S 63 <span className="text-red-500">E Performance</span>
            </h1>
            <p className="mt-6 text-lg text-silver-300">
              Непревзойденная мощность 802 л.с. Гибридный силовой агрегат.
              Разгон до 100 км/ч за 3.3 секунды. Воплощение роскоши и производительности.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white group">
                Забронировать тест-драйв
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-silver-500 text-silver-100 hover:bg-silver-500/10">
                Конфигуратор
              </Button>
            </div>
          </div>
          
          <div className="flex-1 animate-in fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl shadow-red-500/10">
              <img 
                src="/placeholder.svg" 
                alt="Mercedes-AMG S 63 E Performance" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-silver-100 flex items-center space-x-2">
                <span className="text-3xl font-bold">802</span>
                <span className="text-sm">л.с.</span>
                <span className="mx-2 w-px h-8 bg-silver-500/50"></span>
                <span className="text-3xl font-bold">3.3</span>
                <span className="text-sm">секунды</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
