
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 max-w-md">
              <span className="text-black">Analyseren</span> met <span className="text-finance-blue">precisie</span>,<br/>
              <span>investeren</span> met <span className="text-black">een</span> <span className="text-finance-blue">visie</span>!
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Krijg toegang tot onze huidige portefeuille, uitgebreide analyses, video-updates én de kennisportaal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6 rounded-lg text-base transition-all group"
                onClick={scrollToHowItWorks}
              >
                Wat wij bieden
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-lg font-medium">
                <span className="text-black">Welkom bij</span> <span className="text-finance-blue">Aandelen Onder De Loep</span>
              </h3>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.loom.com/embed/7c792579c6604ac28907d8b960f3fd15?sid=7c27e3db-1a2e-4766-ab94-de2935501da1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
