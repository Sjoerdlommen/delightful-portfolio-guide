
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <section className="pt-32 pb-0 md:pt-40 md:pb-0 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
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
            <AspectRatio ratio={4/3} className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Professionele foto" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
