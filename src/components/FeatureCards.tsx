import { 
  Rocket, 
  SearchCheck, 
  Smartphone, 
  Palette 
} from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-purple-light/30 rounded-lg flex items-center justify-center text-purple mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: <Rocket size={24} />,
      title: "Быстрая разработка",
      description: "Запускаем проекты в сжатые сроки без потери качества."
    },
    {
      icon: <SearchCheck size={24} />,
      title: "SEO-оптимизация",
      description: "Настраиваем сайт для эффективного продвижения в поисковых системах."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Адаптивный дизайн",
      description: "Создаем сайты, которые идеально выглядят на всех устройствах."
    },
    {
      icon: <Palette size={24} />,
      title: "Уникальный дизайн",
      description: "Разрабатываем индивидуальный стиль для вашего бренда."
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-muted-foreground">
            Мы фокусируемся на качестве и эффективности каждого проекта
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
