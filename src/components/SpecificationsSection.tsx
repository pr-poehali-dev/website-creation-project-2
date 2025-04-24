import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const SpecificationsSection = () => {
  return (
    <section className="py-24 bg-slate-950" id="specifications">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-silver-100">Технические характеристики</h2>
          <p className="text-silver-300">
            Детальная информация о Mercedes-AMG S 63 E Performance - флагманском седане с гибридным двигателем
          </p>
        </div>
        
        <Tabs defaultValue="engine">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-900 border border-zinc-800">
              <TabsTrigger value="engine" className="data-[state=active]:bg-red-500">Двигатель</TabsTrigger>
              <TabsTrigger value="performance" className="data-[state=active]:bg-red-500">Динамика</TabsTrigger>
              <TabsTrigger value="dimensions" className="data-[state=active]:bg-red-500">Размеры</TabsTrigger>
              <TabsTrigger value="equipment" className="data-[state=active]:bg-red-500">Оснащение</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="engine">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Mercedes-AMG V8 Biturbo Engine" 
                  className="rounded-xl shadow-lg border border-zinc-800"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-silver-100">Гибридный V8 битурбо</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-silver-300">Двигатель</span>
                      <span className="text-silver-100 font-medium">4.0 V8 битурбо + электромотор</span>
                    </div>
                    <Progress value={100} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-silver-300">Мощность ДВС</span>
                      <span className="text-silver-100 font-medium">612 л.с.</span>
                    </div>
                    <Progress value={76} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-silver-300">Мощность электромотора</span>
                      <span className="text-silver-100 font-medium">190 л.с.</span>
                    </div>
                    <Progress value={23} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-silver-300">Суммарная мощность</span>
                      <span className="text-silver-100 font-medium">802 л.с.</span>
                    </div>
                    <Progress value={100} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-silver-300">Крутящий момент</span>
                      <span className="text-silver-100 font-medium">1430 Нм</span>
                    </div>
                    <Progress value={95} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-4 rounded border border-zinc-800">
                    <h4 className="text-silver-300 text-sm mb-1">Емкость батареи</h4>
                    <p className="text-silver-100 font-medium">13.1 кВт⋅ч</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded border border-zinc-800">
                    <h4 className="text-silver-300 text-sm mb-1">Запас хода на электричестве</h4>
                    <p className="text-silver-100 font-medium">До 33 км</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="performance">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-6 text-silver-100">Динамические характеристики</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-silver-300">Разгон 0-100 км/ч</span>
                      <span className="text-silver-100 font-medium">3.3 сек</span>
                    </div>
                    <Progress value={85} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-silver-300">Максимальная скорость</span>
                      <span className="text-silver-100 font-medium">290 км/ч (ограничена электроникой)</span>
                    </div>
                    <Progress value={97} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-silver-300">Расход топлива (смеш.)</span>
                      <span className="text-silver-100 font-medium">7.9 л/100 км</span>
                    </div>
                    <Progress value={40} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-4 rounded border border-zinc-800">
                    <h4 className="text-silver-300 text-sm mb-1">Трансмиссия</h4>
                    <p className="text-silver-100 font-medium">9G-TRONIC</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded border border-zinc-800">
                    <h4 className="text-silver-300 text-sm mb-1">Привод</h4>
                    <p className="text-silver-100 font-medium">Полный 4MATIC+</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Mercedes-AMG S 63 Performance" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-silver-100">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-2">AMG Performance</div>
                    <div className="text-2xl font-bold">3.3 секунды до 100 км/ч</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="dimensions">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <img 
                  src="/placeholder.svg" 
                  alt="Mercedes-AMG S 63 Dimensions" 
                  className="rounded-xl shadow-lg border border-zinc-800 w-full h-auto"
                />
              </div>
              
              <div className="bg-slate-900 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-2xl font-bold mb-6 text-silver-100">Габариты</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-silver-300">Длина</span>
                    <span className="text-silver-100 font-medium">5336 мм</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-silver-300">Ширина</span>
                    <span className="text-silver-100 font-medium">1954 мм</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-silver-300">Высота</span>
                    <span className="text-silver-100 font-medium">1503 мм</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-silver-300">Колесная база</span>
                    <span className="text-silver-100 font-medium">3216 мм</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-silver-300">Объем багажника</span>
                    <span className="text-silver-100 font-medium">510 л</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-silver-300">Снаряженная масса</span>
                    <span className="text-silver-100 font-medium">2590 кг</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-silver-300">Объем топливного бака</span>
                    <span className="text-silver-100 font-medium">76 л</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="equipment">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-900 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-4 text-silver-100">Комфорт и Технологии</h3>
                <ul className="space-y-2 text-silver-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>MBUX с двумя 12.3" экранами</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Проекционный дисплей с AR</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>4-зонный климат-контроль</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Burmester® 4D аудиосистема</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Подогрев и вентиляция сидений</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-900 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-4 text-silver-100">Безопасность</h3>
                <ul className="space-y-2 text-silver-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Комплекс Driving Assistance Plus</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Адаптивный круиз-контроль</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Система экстренного торможения</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Система контроля слепых зон</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Система ночного видения</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-900 rounded-xl border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-4 text-silver-100">AMG Performance</h3>
                <ul className="space-y-2 text-silver-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>AMG DYNAMIC SELECT</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Активная подвеска AMG RIDE CONTROL+</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Керамическая высокопроизводительная тормозная система</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Полноуправляемое шасси</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>AMG спортивные кресла с боковой поддержкой</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SpecificationsSection;
