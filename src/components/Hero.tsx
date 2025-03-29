
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-0 md:pt-40 md:pb-0 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight text-balance mb-6">
              <span className="text-finance-blue">Analyseren</span> met <span className="text-finance-blue">precisie</span>, <span className="text-finance-blue">investeren</span> met <span className="text-finance-blue">visie</span>!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Krijg toegang tot onze huidige portefeuille, uitgebreide analyses, video-updates én de kennisportaal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/how-it-works">
                <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6 rounded-lg text-base transition-all group">
                  Start Vandaag
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <h3 className="absolute top-0 left-0 right-0 bg-finance-blue/80 text-white py-2 text-center font-medium">
                Welkom bij Aandelen Onder De Loep
              </h3>
              <div className="relative h-full">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="#" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
