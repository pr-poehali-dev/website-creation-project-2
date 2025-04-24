import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import PerformanceSection from "@/components/PerformanceSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureCards />
        <PerformanceSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
