import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold tracking-tight">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors">
                Главная
              </a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">
                О себе
              </a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/img/02101aab-b495-4b35-9828-1503c97b32d2.jpg" 
                alt="Профиль"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
                Ваше Имя
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Специалист по созданию современных веб-решений с фокусом на пользовательский опыт и минималистичный дизайн
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
                  Связаться
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8">
                  Портфолио
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">О себе</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-8">
                  <Icon name="Code" size={32} className="mb-4 text-black" />
                  <h3 className="text-xl font-medium mb-3">Разработка</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Создаю современные веб-приложения с использованием последних технологий и лучших практик разработки.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-8">
                  <Icon name="Palette" size={32} className="mb-4 text-black" />
                  <h3 className="text-xl font-medium mb-3">Дизайн</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Проектирую интуитивные интерфейсы, которые сочетают функциональность с эстетической привлекательностью.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-12">Контакты</h2>
            
            {/* Contact Card */}
            <Card className="border border-gray-200 shadow-sm mb-12">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-6">Свяжитесь со мной</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Готов обсудить ваш проект и воплотить ваши идеи в жизнь. 
                  Свяжитесь со мной любым удобным способом.
                </p>
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  Написать
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a 
                href="tel:+79999999999" 
                className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <Icon name="Phone" size={24} className="mb-3 text-black group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">Телефон</span>
              </a>
              <a 
                href="mailto:hello@example.com" 
                className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <Icon name="Mail" size={24} className="mb-3 text-black group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">Email</span>
              </a>
              <a 
                href="https://t.me/username" 
                className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="MessageCircle" size={24} className="mb-3 text-black group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">Telegram</span>
              </a>
              <a 
                href="https://linkedin.com/in/username" 
                className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="Linkedin" size={24} className="mb-3 text-black group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-500 text-sm">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;