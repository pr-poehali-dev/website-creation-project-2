import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-silver-300 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-silver-300 to-silver-100 flex items-center justify-center">
                <span className="text-black font-bold text-xs">AMG</span>
              </div>
              <span className="font-bold text-silver-100">Mercedes-AMG</span>
            </div>
            <p className="mb-4">
              Почувствуйте легендарную мощность Mercedes-AMG S 63 E Performance — гибридного седана премиум-класса, воплощающего передовые технологии и непревзойденную динамику.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-silver-300 hover:text-silver-100">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-silver-100">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-silver-100">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-silver-100">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-silver-100 font-semibold mb-4">Модельный ряд</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-silver-100">S-Class</Link></li>
              <li><Link to="#" className="hover:text-silver-100">E-Class</Link></li>
              <li><Link to="#" className="hover:text-silver-100">C-Class</Link></li>
              <li><Link to="#" className="hover:text-silver-100">GLE</Link></li>
              <li><Link to="#" className="hover:text-silver-100">GLS</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-silver-100 font-semibold mb-4">Сервис</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-silver-100">Запись на тест-драйв</Link></li>
              <li><Link to="#" className="hover:text-silver-100">Конфигуратор</Link></li>
              <li><Link to="#" className="hover:text-silver-100">Техническое обслуживание</Link></li>
              <li><Link to="#" className="hover:text-silver-100">Аксессуары</Link></li>
              <li><Link to="#" className="hover:text-silver-100">Гарантия</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-silver-100 font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Москва, Ленинградское шоссе, 39А стр. 1</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span>info@mercedes-amg.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 text-sm text-silver-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Mercedes-AMG. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-silver-100">Политика конфиденциальности</Link>
            <Link to="#" className="hover:text-silver-100">Условия использования</Link>
            <Link to="#" className="hover:text-silver-100">Карта сайта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
