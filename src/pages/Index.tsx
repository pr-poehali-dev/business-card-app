import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8">
          <img 
            src="https://cdn.poehali.dev/files/24ebb178-f272-4a71-9b18-951d1fff1e62.jpg" 
            alt="Аватар"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h1 className="text-2xl font-light tracking-tight mb-2">
            Сашка666
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            OSINT специалист
          </p>
        </div>

        {/* Telegram Button */}
        <Button 
          size="lg" 
          className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-3 py-4"
          asChild
        >
          <a 
            href="https://sexstudentki666.t.me" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="MessageCircle" size={20} />
            Написать в Telegram
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;