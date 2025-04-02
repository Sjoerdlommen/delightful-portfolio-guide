
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Portefeuille</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            {/* Portfolio content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="glass-card rounded-2xl p-6 md:p-8 shadow-xl">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold">Voorbeeldportefeuille</h3>
                    <div className="flex space-x-3">
                      {/* Controls */}
                    </div>
                  </div>
                  
                  {/* Portfolio items */}
                  <div className="space-y-5">
                    {/* Sample portfolio items would be here */}
                  </div>
                  
                  <div className="mt-8 bg-finance-lightblue rounded-lg p-4 text-sm">
                    <p className="text-finance-blue font-medium">
                      Portefeuille prestaties: +12.8% (YTD)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Krijg inzicht in een optimale portefeuillesamenstelling
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Een goede spreiding in een investeringsportefeuille is belangrijk om risico's te minimaliseren en je kansen op een stabiel rendement te vergroten. Naast spreiding in diverse assets is het dus ook van belang om spreiding aan te brengen in je aandelenportefeuille, dit kan op diverse manieren:
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Spreiding over sectoren",
                    "Spreiding over regio's en landen",
                    "Spreiding over marktkapitalisatie"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-finance-blue/10 flex items-center justify-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-finance-blue"></div>
                        </div>
                      </div>
                      <p className="ml-3 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* New section for subscription call-to-action */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Portefeuille bekijken?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              De portefeuille is alleen inzichtelijk voor abonnees van Aandelen Onder De Loep. Log in om toegang te krijgen of bekijk onze abonnementen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6">
                  Inloggen
                </Button>
              </Link>
              <Link to="/subscribe" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6">
                  Bekijk Abonnementen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
