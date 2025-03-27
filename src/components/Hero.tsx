
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-0 md:pt-40 md:pb-0 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-finance-lightblue text-finance-blue text-sm font-medium mb-6">
              Professioneel beleggingsadvies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
              Analyseren met <span className="text-finance-blue">precisie</span>, investeren met <span className="text-finance-blue">visie</span>!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Krijg toegang tot onze huidige portefeuille, uitgebreide analyses én openstaande orders en zorg hiermee dat je een betere spreiding aanbrengt in je portefeuille.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/plans">
                <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6 rounded-lg text-base transition-all group">
                  Start Vandaag
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium">Meer dan 5,000+ tevreden klanten</div>
                <div className="text-xs text-muted-foreground">Sluit je vandaag aan bij onze community</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl">
              {/* Placeholder for professional image */}
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                <span className="text-gray-400">Professionele foto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
