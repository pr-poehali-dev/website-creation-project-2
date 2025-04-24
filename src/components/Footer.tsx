import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">С</span>
              </div>
              <span className="font-bold text-lg">СайтПро</span>
            </div>
            <p className="text-muted-foreground">
              Создаем сайты, которые привлекают клиентов и развивают ваш бизнес
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-muted-foreground hover:text-foreground transition-colors">Разработка сайтов</Link></li>
              <li><Link to="/services/design" className="text-muted-foreground hover:text-foreground transition-colors">Дизайн</Link></li>
              <li><Link to="/services/seo" className="text-muted-foreground hover:text-foreground transition-colors">SEO-продвижение</Link></li>
              <li><Link to="/services/support" className="text-muted-foreground hover:text-foreground transition-colors">Техническая поддержка</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">О нас</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Портфолио</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Блог</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">г. Москва, ул. Пушкина, д. 10</li>
              <li className="text-muted-foreground">+7 (123) 456-78-90</li>
              <li className="text-muted-foreground">info@sitepro.ru</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} СайтПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
