
import { Play } from "lucide-react";

const WelcomeVideo = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Welkomstvideo</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bekijk onze welkomstvideo om meer te weten te komen over Aandelen onder de loep.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="w-20 h-20 bg-finance-blue/90 rounded-full flex items-center justify-center text-white hover:bg-finance-blue transition-colors"
                aria-label="Play video"
              >
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeVideo;
