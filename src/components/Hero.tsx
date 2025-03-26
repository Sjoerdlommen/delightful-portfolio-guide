
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-finance-lightblue text-finance-blue text-sm font-medium mb-6">
              Professioneel beleggingsadvies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
              Beleggen met inzicht en <span className="text-finance-blue">vertrouwen</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 delayed-fade">
              Krijg toegang tot professionele analyses, portefeuilleadviezen en marktinzichten. 
              Maak gefundeerde beleggingsbeslissingen met onze expertvervaardigde adviezen.
            </p>
            <div className="flex flex-wrap gap-4 delayed-fade-up">
              <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6 rounded-lg text-base transition-all group">
                Start Vandaag
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-finance-blue text-finance-blue hover:bg-finance-blue hover:text-white px-6 py-6 rounded-lg text-base transition-all">
                Ontdek onze plannen
              </Button>
            </div>
            <div className="mt-10 flex items-center space-x-6 delayed-fade-up-medium">
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
          
          <div className="relative delayed-fade-up-long">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white glass-card rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-semibold">Mijn Portefeuille</h3>
                  <p className="text-sm text-muted-foreground">Laatste update: vandaag</p>
                </div>
                <div className="flex items-center px-3 py-1 bg-green-50 text-green-600 rounded-full">
                  <span className="text-sm font-medium">+8.2%</span>
                </div>
              </div>
              
              <div className="space-y-5">
                {[
                  { name: "ASML", price: "€768.40", change: "+2.4%", color: "green" },
                  { name: "Adyen", price: "€945.20", change: "+1.8%", color: "green" },
                  { name: "Philips", price: "€26.50", change: "-0.5%", color: "red" },
                  { name: "ING Groep", price: "€14.38", change: "+3.2%", color: "green" },
                ].map((stock, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <div className="font-medium">{stock.name}</div>
                      <div className="text-sm text-muted-foreground">AMS</div>
                    </div>
                    <div className="text-right">
                      <div>{stock.price}</div>
                      <div className={`text-sm ${stock.color === "green" ? "text-green-600" : "text-red-500"}`}>
                        {stock.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-finance-blue hover:bg-finance-blue/90 text-white rounded-lg transition-all">
                  Bekijk volledig overzicht
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
