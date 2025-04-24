import { 
  Zap, 
  Gauge, 
  Star, 
  Shield
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

const FeatureCards = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "802 л.с.",
      description: "Гибридный силовой агрегат V8 битурбо с электродвигателем обеспечивает непревзойденную мощность."
    },
    {
      icon: <Gauge size={24} />,
      title: "3.3 секунды",
      description: "Феноменальное ускорение от 0 до 100 км/ч всего за 3.3 секунды."
    },
    {
      icon: <Star size={24} />,
      title: "Роскошь премиум-класса",
      description: "Изысканная отделка салона с использованием эксклюзивных материалов и новейших технологий."
    },
    {
      icon: <Shield size={24} />,
      title: "Передовая безопасность",
      description: "Интеллектуальные системы активной и пассивной безопасности для максимальной защиты."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-silver-100">Непревзойденная производительность</h2>
          <p className="text-silver-300">
            Mercedes-AMG S 63 E Performance сочетает в себе роскошь представительского седана и динамику спорткара
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default FeatureCards;
