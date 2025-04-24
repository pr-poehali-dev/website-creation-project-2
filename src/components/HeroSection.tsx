import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-light/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-soft-blue/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-in" style={{ animationDelay: "100ms" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Создайте идеальный <span className="text-purple">сайт</span> для вашего бизнеса
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Мы помогаем компаниям развиваться с помощью современных веб-технологий.
              Уникальный дизайн, быстрая разработка, продуманный UX.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="flex-1 animate-in" style={{ animationDelay: "300ms" }}>
            <div className="relative aspect-video bg-gradient-to-tr from-purple/30 to-soft-blue/40 rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-purple translate-x-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
