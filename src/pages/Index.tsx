import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SpecificationsSection />
        <FeaturesGrid />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
