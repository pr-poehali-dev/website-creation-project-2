import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white">
              Mercedes<span className="text-red-500">-AMG</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-silver-300 hover:text-white transition-colors">
              Главная
            </Link>
            <Link to="/specifications" className="text-silver-300 hover:text-white transition-colors">
              Характеристики
            </Link>
            <Link to="/features" className="text-silver-300 hover:text-white transition-colors">
              Особенности
            </Link>
            <Link to="/gallery" className="text-silver-300 hover:text-white transition-colors">
              Галерея
            </Link>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Тест-драйв
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-silver-300 hover:text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-silver-300 hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                Главная
              </Link>
              <Link 
                to="/specifications" 
                className="text-silver-300 hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                Характеристики
              </Link>
              <Link 
                to="/features" 
                className="text-silver-300 hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                Особенности
              </Link>
              <Link 
                to="/gallery" 
                className="text-silver-300 hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                Галерея
              </Link>
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white w-full"
                onClick={toggleMenu}
              >
                Тест-драйв
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
