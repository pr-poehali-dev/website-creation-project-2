import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
            <span className="text-white font-bold">С</span>
          </div>
          <span className="font-bold text-lg">СайтПро</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Главная
          </Link>
          <Link to="/services" className="text-foreground/80 hover:text-foreground transition-colors">
            Услуги
          </Link>
          <Link to="/portfolio" className="text-foreground/80 hover:text-foreground transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            О нас
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Войти
          </Button>
          <Button>
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
