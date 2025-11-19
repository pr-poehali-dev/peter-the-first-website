import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState('biography');

  const timeline = [
    { year: 1672, event: 'Рождение Петра I', description: '9 июня в Москве' },
    { year: 1682, event: 'Начало царствования', description: 'Вместе с братом Иваном V' },
    { year: 1689, event: 'Единоличное правление', description: 'Отстранение царевны Софьи' },
    { year: 1697, event: 'Великое посольство', description: 'Поездка в Европу инкогнито' },
    { year: 1700, event: 'Северная война', description: 'Начало борьбы за Балтику' },
    { year: 1703, event: 'Основание Санкт-Петербурга', description: '27 мая заложена Петропавловская крепость' },
    { year: 1709, event: 'Полтавская битва', description: 'Разгром шведской армии' },
    { year: 1721, event: 'Провозглашение империи', description: 'Россия стала империей, Пётр - императором' },
    { year: 1725, event: 'Кончина императора', description: '8 февраля в Санкт-Петербурге' }
  ];

  const reforms = [
    {
      title: 'Военная реформа',
      icon: 'Sword',
      description: 'Создание регулярной армии и флота',
      details: 'Введение рекрутской повинности, создание военно-морского флота, открытие военных школ и академий'
    },
    {
      title: 'Административная реформа',
      icon: 'Building2',
      description: 'Реорганизация государственного управления',
      details: 'Создание Сената, коллегий вместо приказов, деление страны на губернии'
    },
    {
      title: 'Церковная реформа',
      icon: 'Church',
      description: 'Подчинение церкви государству',
      details: 'Упразднение патриаршества, создание Святейшего Синода'
    },
    {
      title: 'Образовательная реформа',
      icon: 'GraduationCap',
      description: 'Развитие науки и образования',
      details: 'Открытие школ, академий, создание Академии наук, отправка студентов за границу'
    },
    {
      title: 'Экономическая реформа',
      icon: 'TrendingUp',
      description: 'Развитие промышленности и торговли',
      details: 'Создание мануфактур, развитие металлургии, поощрение купечества'
    },
    {
      title: 'Культурная реформа',
      icon: 'Sparkles',
      description: 'Европеизация русского общества',
      details: 'Введение европейского платья, бритье бород, ассамблеи, новый календарь'
    }
  ];

  const achievements = [
    { title: 'Выход к Балтийскому морю', icon: 'Waves', color: 'bg-blue-500' },
    { title: 'Создание флота', icon: 'Ship', color: 'bg-cyan-500' },
    { title: 'Основание Санкт-Петербурга', icon: 'MapPin', color: 'bg-orange-500' },
    { title: 'Победа в Северной войне', icon: 'Trophy', color: 'bg-yellow-500' },
    { title: 'Провозглашение империи', icon: 'Crown', color: 'bg-purple-500' },
    { title: 'Развитие промышленности', icon: 'Factory', color: 'bg-gray-500' }
  ];

  const vkPosts = [
    {
      text: 'Сегодня заложил новую крепость на Неве! Будет здесь город заложен назло надменному соседу 🏰⚓',
      date: '27 мая 1703',
      likes: 9847,
      comments: 342
    },
    {
      text: 'Вернулся из Европы. Многому научился в корабельном деле. Теперь у нас будет свой флот! 🚢',
      date: '25 августа 1698',
      likes: 7653,
      comments: 289
    },
    {
      text: 'Полтава! Виктория! Шведы разбиты! Карл бежал в Турцию 🎉⚔️',
      date: '8 июля 1709',
      likes: 15432,
      comments: 876
    }
  ];

  const friends = [
    { name: 'Франц Лефорт', role: 'Адмирал, соратник', avatar: 'ФЛ' },
    { name: 'Александр Меншиков', role: 'Генералиссимус', avatar: 'АМ' },
    { name: 'Фёдор Апраксин', role: 'Генерал-адмирал', avatar: 'ФА' },
    { name: 'Яков Брюс', role: 'Генерал-фельдмаршал', avatar: 'ЯБ' },
    { name: 'Борис Шереметев', role: 'Фельдмаршал', avatar: 'БШ' },
    { name: 'Пётр Толстой', role: 'Дипломат', avatar: 'ПТ' }
  ];

  const quotes = [
    'Я предчувствую, что россияне когда-нибудь, а может быть, при жизни нашей, пристыдят самые просвещённые народы успехами своими в науках, неутомимостью в трудах и величеством твёрдой и громкой славы',
    'Аз есмь в чину учимых и учащих мя требую',
    'Промедление смерти подобно',
    'Который час веселья не знает, тот врагу цену страданиям отдает'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djEyaDEyVjE2SDM2em0wIDI0djEyaDEyVjQwSDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6">
              <Badge variant="outline" className="bg-white/10 text-white border-white/30 text-lg px-4 py-2">
                1672 — 1725
              </Badge>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif">
              Пётр I Великий
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Первый император Всероссийский, реформатор, основатель Санкт-Петербурга
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-2">
                <Icon name="Crown" size={20} className="mr-2" />
                Император
              </Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-lg px-6 py-2">
                <Icon name="Ship" size={20} className="mr-2" />
                Создатель флота
              </Badge>
              <Badge className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-2">
                <Icon name="Lightbulb" size={20} className="mr-2" />
                Реформатор
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8 bg-white shadow-lg h-auto">
            <TabsTrigger value="biography" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3">
              <Icon name="User" size={18} className="mr-2" />
              Биография
            </TabsTrigger>
            <TabsTrigger value="reforms" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3">
              <Icon name="Wrench" size={18} className="mr-2" />
              Реформы
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3">
              <Icon name="Award" size={18} className="mr-2" />
              Достижения
            </TabsTrigger>
            <TabsTrigger value="timeline" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3">
              <Icon name="Clock" size={18} className="mr-2" />
              Хронология
            </TabsTrigger>
            <TabsTrigger value="legacy" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Наследие
            </TabsTrigger>
            <TabsTrigger value="vk" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              ВКонтакте
            </TabsTrigger>
          </TabsList>

          <TabsContent value="biography" className="animate-fade-in">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Биография Петра Великого</CardTitle>
                <CardDescription>От царевича до императора Всероссийского</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-lg leading-relaxed">
                <section>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center text-blue-800">
                    <Icon name="Baby" size={24} className="mr-2" />
                    Ранние годы
                  </h3>
                  <p className="text-gray-700">
                    Пётр I родился 9 июня 1672 года в Москве. Он был младшим сыном царя Алексея Михайловича от второго брака с Натальей Нарышкиной. В детстве получил домашнее образование, проявлял интерес к военному делу и иностранным наукам.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center text-blue-800">
                    <Icon name="Crown" size={24} className="mr-2" />
                    Начало царствования
                  </h3>
                  <p className="text-gray-700">
                    В 1682 году после смерти царя Фёдора Алексеевича началось совместное царствование Петра и его брата Ивана V под регентством царевны Софьи. В 1689 году Пётр отстранил Софью от власти и стал единоличным правителем.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center text-blue-800">
                    <Icon name="Globe" size={24} className="mr-2" />
                    Великое посольство
                  </h3>
                  <p className="text-gray-700">
                    В 1697-1698 годах Пётр отправился в Европу в составе Великого посольства. Инкогнито работал на верфях Голландии и Англии, изучал кораблестроение, фортификацию, артиллерийское дело. Поездка определила курс на европеизацию России.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center text-blue-800">
                    <Icon name="Swords" size={24} className="mr-2" />
                    Северная война
                  </h3>
                  <p className="text-gray-700">
                    С 1700 по 1721 год Россия вела Северную войну со Швецией за выход к Балтийскому морю. Несмотря на поражение под Нарвой, Пётр создал новую армию и флот. Победа под Полтавой (1709) стала переломным моментом войны.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center text-blue-800">
                    <Icon name="Building" size={24} className="mr-2" />
                    Создание империи
                  </h3>
                  <p className="text-gray-700">
                    В 1721 году после победы в Северной войне Пётр принял титул императора, а Россия была провозглашена империей. Санкт-Петербург стал новой столицей. Пётр провёл масштабные реформы во всех сферах жизни государства.
                  </p>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reforms" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reforms.map((reform, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Icon name={reform.icon} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl font-serif">{reform.title}</CardTitle>
                    <CardDescription>{reform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{reform.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="animate-fade-in">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Главные достижения</CardTitle>
                <CardDescription>Вклад Петра I в историю России</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-14 h-14 ${achievement.color} rounded-full flex items-center justify-center mb-4`}>
                        <Icon name={achievement.icon} size={28} className="text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <Icon name="Anchor" size={24} className="mr-2 text-blue-600" />
                      Создание военно-морского флота
                    </h3>
                    <p className="text-gray-700">
                      Пётр создал мощный флот с нуля. К концу его правления Россия имела 48 линейных кораблей и до 800 галер. Флот стал одним из сильнейших в Европе.
                    </p>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <Icon name="Building2" size={24} className="mr-2 text-orange-600" />
                      Основание Санкт-Петербурга
                    </h3>
                    <p className="text-gray-700">
                      16 мая 1703 года была заложена Петропавловская крепость — начало строительства новой столицы. Город стал «окном в Европу» и символом реформ Петра.
                    </p>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <Icon name="GraduationCap" size={24} className="mr-2 text-purple-600" />
                      Развитие образования и науки
                    </h3>
                    <p className="text-gray-700">
                      Открыты школы навигацких и математических наук, инженерная, артиллерийская школы. В 1724 году учреждена Академия наук. Начато книгопечатание.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="animate-fade-in">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Хронология жизни</CardTitle>
                <CardDescription>Ключевые события в жизни Петра Великого</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-orange-500 to-purple-600"></div>
                  
                  <div className="space-y-8">
                    {timeline.map((item, index) => (
                      <div key={index} className="relative pl-20 pb-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="absolute left-4 w-9 h-9 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-2xl font-bold text-blue-800">{item.year}</h3>
                            <Badge variant="outline" className="text-sm">{item.description}</Badge>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.event}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legacy" className="animate-fade-in">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif">Наследие Петра Великого</CardTitle>
                <CardDescription>Влияние на историю России и мира</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <Icon name="Map" size={32} className="text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Геополитическое наследие</h3>
                    <p className="text-gray-700">
                      Россия получила выход к Балтийскому морю и стала великой европейской державой. Присоединены новые территории, расширены границы империи.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                    <Icon name="Building2" size={32} className="text-orange-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Государственное устройство</h3>
                    <p className="text-gray-700">
                      Создана новая система государственного управления, действовавшая до XX века. Сенат, коллегии, губернии — основа административного деления.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                    <Icon name="Users" size={32} className="text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Культурная революция</h3>
                    <p className="text-gray-700">
                      Европеизация общества, развитие образования и науки, светский характер культуры. Появление первых музеев, театров, газет.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <Icon name="Factory" size={32} className="text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Экономическое развитие</h3>
                    <p className="text-gray-700">
                      Создание мануфактур, развитие промышленности и торговли. Россия стала производить собственное оружие, корабли, металл.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-serif font-bold mb-4 flex items-center">
                    <Icon name="Quote" size={32} className="mr-3" />
                    Оценка историков
                  </h3>
                  <blockquote className="text-lg italic border-l-4 border-orange-500 pl-6">
                    "Пётр I — величайший реформатор в истории России. Его деятельность определила развитие страны на столетия вперёд. Он не просто модернизировал Россию — он создал новую империю, способную конкурировать с ведущими державами Европы."
                  </blockquote>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-6 bg-white rounded-lg shadow">
                    <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                    <p className="text-gray-600">Законодательных актов</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow">
                    <div className="text-4xl font-bold text-orange-600 mb-2">233</div>
                    <p className="text-gray-600">Мануфактуры создано</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow">
                    <div className="text-4xl font-bold text-purple-600 mb-2">53 года</div>
                    <p className="text-gray-600">Прожито</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vk" className="animate-fade-in">
            <Card className="shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-48 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-24"></div>
              </div>

              <CardContent className="relative pt-0">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-20 mb-6">
                  <Avatar className="w-40 h-40 border-4 border-white shadow-xl">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-4xl bg-blue-600 text-white">П I</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-1">Пётр Алексеевич Романов</h2>
                    <p className="text-gray-600 mb-3">Царь и Великий князь всея Руси, Император Всероссийский</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600">
                        <Icon name="Crown" size={14} className="mr-1" />
                        Император
                      </Badge>
                      <Badge className="bg-orange-500">
                        <Icon name="Ship" size={14} className="mr-1" />
                        Основатель флота
                      </Badge>
                      <Badge className="bg-purple-600">
                        <Icon name="Building2" size={14} className="mr-1" />
                        Основатель СПб
                      </Badge>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon name="Info" size={22} className="mr-2 text-blue-600" />
                    Детальная информация
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Политические взгляды:</p>
                        <p className="font-medium">Абсолютная монархия, централизация власти</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Экономические взгляды:</p>
                        <p className="font-medium">Меркантилизм, протекционизм, развитие мануфактур</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Религиозные взгляды:</p>
                        <p className="font-medium">Православие, подчинение церкви государству</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Деятельность:</p>
                        <p className="font-medium">Реформы, строительство флота и городов, ведение войн, модернизация России</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Любимые цитаты:</p>
                        <div className="space-y-2">
                          {quotes.map((quote, idx) => (
                            <p key={idx} className="text-sm italic text-gray-700">«{quote}»</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={20} className="text-gray-500" />
                      <span>Санкт-Петербург, Российская Империя</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Calendar" size={20} className="text-gray-500" />
                      <span>9 июня 1672 г.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Briefcase" size={20} className="text-gray-500" />
                      <span>Император, реформатор, кораблестроитель</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Users" size={20} className="text-gray-500" />
                      <span className="font-semibold">487,592 подписчика</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Heart" size={20} className="text-gray-500" />
                      <span>Ассамблеи, кораблестроение, реформы</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Globe" size={20} className="text-gray-500" />
                      <a href="#" className="text-blue-600 hover:underline">peterthegreat.ru</a>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Icon name="Megaphone" size={24} className="mr-2 text-blue-600" />
                    Что у вас нового?
                  </h3>
                  <Card className="bg-blue-50 border-2 border-blue-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Icon name="Sparkles" size={24} className="text-blue-600 mt-1" />
                        <div>
                          <p className="text-lg font-medium text-blue-900 mb-2">
                            Российская Империя провозглашена!
                          </p>
                          <p className="text-gray-700">
                            После победы в Северной войне Россия получила статус империи. Санкт-Петербург процветает, флот укрепляется, реформы продолжаются. Наука и образование на подъёме!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator className="my-6" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Icon name="ScrollText" size={24} className="mr-2 text-blue-600" />
                    Записи на стене
                  </h3>

                  {vkPosts.map((post, index) => (
                    <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-blue-600 text-white">П I</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-semibold">Пётр Алексеевич Романов</h4>
                            <p className="text-sm text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        
                        <p className="text-lg mb-4 leading-relaxed">{post.text}</p>
                        
                        <Separator className="my-4" />
                        
                        <div className="flex items-center gap-6 text-gray-600">
                          <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                            <Icon name="Heart" size={20} />
                            <span className="font-medium">{post.likes.toLocaleString()}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <Icon name="MessageCircle" size={20} />
                            <span className="font-medium">{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                            <Icon name="Share2" size={20} />
                            <span className="font-medium">Поделиться</span>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Icon name="Users" size={24} className="mr-2 text-blue-600" />
                    Друзья <span className="text-lg text-gray-500 ml-2">{friends.length}</span>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {friends.map((friend, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="pt-6 text-center">
                          <Avatar className="w-16 h-16 mx-auto mb-3">
                            <AvatarFallback className="bg-blue-600 text-white text-sm">{friend.avatar}</AvatarFallback>
                          </Avatar>
                          <p className="font-semibold text-sm mb-1">{friend.name}</p>
                          <p className="text-xs text-gray-500">{friend.role}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
                  <Icon name="Info" size={24} className="mx-auto mb-3 text-blue-600" />
                  <p className="text-gray-700">
                    Это креативная интерпретация страницы ВКонтакте Петра I в образовательных целях 😊
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-serif font-bold mb-2">Пётр I Великий</h3>
            <p className="text-blue-200">Первый Император Всероссийский</p>
          </div>
          <Separator className="bg-blue-700 mb-6" />
          <p className="text-blue-200">
            Образовательный проект о жизни и деятельности Петра Великого
          </p>
          <p className="text-sm text-blue-300 mt-4">
            1672 — 1725
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Index;