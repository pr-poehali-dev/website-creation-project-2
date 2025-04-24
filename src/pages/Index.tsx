import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureCards />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Готовы начать свой проект?</h2>
              <p className="text-muted-foreground mb-8">
                Свяжитесь с нами, чтобы обсудить ваши идеи и получить бесплатную консультацию.
              </p>
              <div className="inline-flex p-1 bg-secondary rounded-lg">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-2 bg-transparent focus:outline-none"
                />
                <button className="px-4 py-2 bg-purple text-white rounded-md">
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
