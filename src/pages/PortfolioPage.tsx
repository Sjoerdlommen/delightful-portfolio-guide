
import Header from "@/components/Header";
import PortfolioPreview from "@/components/PortfolioPreview";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Portefeuille</h1>
          <PortfolioPreview />
          
          {/* Portfolio access section */}
          <div className="max-w-4xl mx-auto mt-16 border border-gray-200 rounded-xl bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Portefeuille bekijken?</h2>
            <p className="text-muted-foreground mb-6">
              De portefeuille is alleen inzichtelijk voor abonnees van Aandelen Onder De Loep. 
              Log in om toegang te krijgen of bekijk onze abonnementen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login" className="w-full sm:w-auto" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6 w-full">
                  Inloggen
                </Button>
              </Link>
              <Link to="/subscribe" className="w-full sm:w-auto" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6 w-full">
                  Bekijk Abonnementen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Liever eerst een inkijkje section */}
          <div className="max-w-4xl mx-auto mt-16 border border-gray-200 rounded-xl bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Liever eerst een inkijkje?</h2>
            <p className="text-muted-foreground mb-6">
              Download hier gratis een van onze recente analyses en ontdek hoe wij aandelen beoordelen en analyseren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6">
                Download gratis analyse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
