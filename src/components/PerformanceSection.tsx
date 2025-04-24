import { Progress } from "@/components/ui/progress";

const PerformanceBar = ({ label, value, max }: { label: string; value: number; max: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-silver-300">{label}</span>
        <span className="text-silver-100 font-medium">{value}</span>
      </div>
      <Progress value={(value / max) * 100} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
    </div>
  );
};

const PerformanceSection = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-8 text-silver-100">Технические характеристики</h2>
              
              <PerformanceBar label="Мощность" value={802} max={1000} />
              <PerformanceBar label="Крутящий момент (Нм)" value={1430} max={1500} />
              <PerformanceBar label="Разгон 0-100 км/ч (сек)" value={3.3} max={10} />
              <PerformanceBar label="Максимальная скорость (км/ч)" value={290} max={300} />
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-silver-300 text-sm mb-1">Двигатель</h3>
                  <p className="text-silver-100 font-medium">4.0 V8 битурбо + электромотор</p>
                </div>
                <div>
                  <h3 className="text-silver-300 text-sm mb-1">Привод</h3>
                  <p className="text-silver-100 font-medium">Полный 4MATIC+</p>
                </div>
                <div>
                  <h3 className="text-silver-300 text-sm mb-1">Трансмиссия</h3>
                  <p className="text-silver-100 font-medium">9G-TRONIC</p>
                </div>
                <div>
                  <h3 className="text-silver-300 text-sm mb-1">Запас хода на электричестве</h3>
                  <p className="text-silver-100 font-medium">До 33 км</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-red-500/20 via-silver-500/10 to-transparent rounded-xl blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/placeholder.svg" 
                  alt="Mercedes-AMG S 63 Engine" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">V8</span>
                <span className="text-xs">BITURBO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
