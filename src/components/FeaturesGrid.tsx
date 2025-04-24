import { 
  Zap, 
  Gauge, 
  Star, 
  Battery, 
  Clock,
  Shield,
  Volume2,
  Smartphone,
  Award
} from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-zinc-800 shadow-lg hover:shadow-red-500/5 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-silver-100">{title}</h3>
      <p className="text-silver-300">{description}</p>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "802 л.с.",
      description: "Гибридный силовой агрегат V8 битурбо с электродвигателем обеспечивает непревзойденную мощность."
    },
    {
      icon: <Gauge size={24} />,
      title: "3.3 секунды",
      description: "Феноменальное ускорение от 0 до 100 км/ч всего за 3.3 секунды благодаря системе полного привода 4MATIC+."
    },
    {
      icon: <Battery size={24} />,
      title: "Гибридная система",
      description: "Электрический диапазон до 33 км позволяет передвигаться по городу без выбросов и в тишине."
    },
    {
      icon: <Clock size={24} />,
      title: "9G-TRONIC",
      description: "Автоматическая коробка передач с 9 ступенями обеспечивает молниеносное переключение передач."
    },
    {
      icon: <Star size={24} />,
      title: "Роскошный интерьер",
      description: "Изысканная отделка салона с использованием эксклюзивных материалов и новейших технологий."
    },
    {
      icon: <Shield size={24} />,
      title: "Передовая безопасность",
      description: "Интеллектуальные системы активной и пассивной безопасности для максимальной защиты."
    },
    {
      icon: <Volume2 size={24} />,
      title: "Burmester® 4D",
      description: "Высокопроизводительная аудиосистема с 31 динамиком и 1750 Вт мощности для непревзойденного звучания."
    },
    {
      icon: <Smartphone size={24} />,
      title: "MBUX",
      description: "Интуитивно понятная мультимедийная система с искусственным интеллектом и расширенной реальностью."
    },
    {
      icon: <Award size={24} />,
      title: "AMG RIDE CONTROL+",
      description: "Активная пневматическая подвеска с адаптивными амортизаторами для комфорта и спортивной динамики."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden" id="features">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-silver-100">Особенности Mercedes-AMG S 63</h2>
          <p className="text-silver-300">
            Безупречное сочетание роскоши представительского седана и выдающейся производительности спорткара
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
