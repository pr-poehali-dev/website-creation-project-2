import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-silver-300 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-4">
              Mercedes<span className="text-red-500">-AMG</span>
            </div>
            <p className="mb-4">
              Mercedes-AMG S 63 — воплощение роскоши и производительности. Флагманский седан с гибридным двигателем мощностью 802 л.с.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-silver-300 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-red-500 transition-colors">Главная</a>
              </li>
              <li>
                <a href="#specifications" className="hover:text-red-500 transition-colors">Характеристики</a>
              </li>
              <li>
                <a href="#features" className="hover:text-red-500 transition-colors">Особенности</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-500 transition-colors">Галерея</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Новости</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Контактная информация</h3>
            <ul className="space-y-2">
              <li>Москва, ул. Автомобильная, 123</li>
              <li>+7 (495) 123-45-67</li>
              <li>info@mercedes-amg.ru</li>
              <li>
                <a href="#" className="text-red-500 hover:underline">Запись на тест-драйв</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Подписка на новости</h3>
            <p className="mb-4">Подпишитесь на наши новости, чтобы быть в курсе последних событий и специальных предложений.</p>
            <div className="flex space-x-2">
              <Input placeholder="Ваш email" className="bg-zinc-900 border-zinc-800" />
              <Button className="bg-red-500 hover:bg-red-600">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Mercedes-AMG. Все права защищены.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-red-500 transition-colors">Условия использования</a>
            <a href="#" className="hover:text-red-500 transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
