
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:col-span-1 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              <span className="text-black">Analyseren</span> met <span className="text-finance-blue">precisie</span>,<br/>
              <span>investeren</span> met <span className="text-black">een</span> <span className="text-finance-blue">visie</span>!
            </h1>
          </div>
          
          <div className="lg:col-span-1">
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
