
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Hoe het werkt</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Bij Aandelen Onder De Loep maken wij het beleggen in aandelen toegankelijk voor iedereen. 
                Hieronder leggen wij stap voor stap uit hoe onze dienstverlening werkt.
              </p>
              
              <h2 className="text-2xl font-semibold my-6">Onze aanpak</h2>
              
              <div className="space-y-8 my-10">
                <div className="flex flex-col md:flex-row gap-6 items-center bg-finance-gray/15 p-6 rounded-xl">
                  <div className="flex-shrink-0 bg-finance-blue text-white rounded-full h-14 w-14 flex items-center justify-center text-2xl font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fundamentele analyse</h3>
                    <p>
                      We beginnen altijd met een grondige fundamentele analyse van het aandeel. 
                      We bestuderen de financiële gezondheid, groeivooruitzichten, concurrentiepositie en meer.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center bg-finance-gray/15 p-6 rounded-xl">
                  <div className="flex-shrink-0 bg-finance-blue text-white rounded-full h-14 w-14 flex items-center justify-center text-2xl font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technische analyse</h3>
                    <p>
                      Na de fundamentele analyse kijken we naar de technische aspecten. 
                      We analyseren prijspatronen, trendlijnen, en andere technische indicatoren om te bepalen wanneer we in- en uitstappen.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center bg-finance-gray/15 p-6 rounded-xl">
                  <div className="flex-shrink-0 bg-finance-blue text-white rounded-full h-14 w-14 flex items-center justify-center text-2xl font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kooporders bepalen</h3>
                    <p>
                      Wij laten de koers naar ons toe komen. Dat betekent dat we vooraf bepalen op welke prijspunten we willen kopen, 
                      en wachten totdat de markt naar dat niveau beweegt.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center bg-finance-gray/15 p-6 rounded-xl">
                  <div className="flex-shrink-0 bg-finance-blue text-white rounded-full h-14 w-14 flex items-center justify-center text-2xl font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Wekelijkse updates</h3>
                    <p>
                      Iedere week nemen we een video op waarin we terugblikken op de markt en onze beslissingen toelichten, 
                      zodat u altijd begrijpt waarom we bepaalde keuzes maken.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center bg-finance-gray/15 p-6 rounded-xl">
                  <div className="flex-shrink-0 bg-finance-blue text-white rounded-full h-14 w-14 flex items-center justify-center text-2xl font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Portefeuille-inzicht</h3>
                    <p>
                      Onze abonnees krijgen volledige inzage in onze portefeuille, inclusief de gemiddelde aankoopprijzen en het huidige resultaat. 
                      Zo kunt u ons rendement volgen en vergelijken.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold my-6">Waarom kiezen voor Aandelen Onder De Loep?</h2>
              
              <ul className="space-y-4 mb-10 list-disc pl-6">
                <li>Gedegen fundamentele en technische analyses</li>
                <li>Concrete koopniveaus en rendementsverwachtingen</li>
                <li>Volledig transparante portefeuille</li>
                <li>Wekelijkse video-updates</li>
                <li>Uitgebreide kennisportaal om uw beleggingskennis te vergroten</li>
                <li>Geen belangenverstrengeling - wij handelen pas nadat onze analyses zijn gepubliceerd</li>
              </ul>
              
              <div className="bg-finance-lightblue/30 p-8 rounded-xl text-center my-12">
                <h3 className="text-2xl font-semibold mb-4">Klaar om te beginnen?</h3>
                <p className="mb-6">
                  Word abonnee en krijg direct toegang tot onze analyses, portefeuille en kennisportaal.
                </p>
                <Link to="/subscribe">
                  <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6 rounded-lg text-base transition-all group">
                    Start Vandaag
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
