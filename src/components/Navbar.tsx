import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-silver-300 to-silver-100 flex items-center justify-center">
            <span className="text-black font-bold text-sm">AMG</span>
          </div>
          <span className="font-bold text-lg text-silver-100">Mercedes-AMG</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-silver-300 hover:text-silver-100 transition-colors">
            Главная
          </Link>
          <Link to="/models" className="text-silver-300 hover:text-silver-100 transition-colors">
            Модели
          </Link>
          <Link to="/features" className="text-silver-300 hover:text-silver-100 transition-colors">
            Характеристики
          </Link>
          <Link to="/gallery" className="text-silver-300 hover:text-silver-100 transition-colors">
            Галерея
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex text-silver-300 hover:text-silver-100">
            Конфигуратор
          </Button>
          <Button className="bg-silver-100 text-black hover:bg-silver-300">
            Тест-драйв
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
