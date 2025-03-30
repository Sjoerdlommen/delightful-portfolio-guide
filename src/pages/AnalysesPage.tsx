
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AnalysesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Analyses</h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-4xl">
            Op deze pagina worden tweemaal per week de uitgebreide analyses geplaatst voor onze abonnees. 
            Wij maken uitgebreide fundamentele analyses over aandelen en indien onze interesse is gewekt 
            gaan wij over op technische analyse en op basis hiervan bepalen wij op welke prijspunten 
            wij onze kooporders gaan doorvoeren. Wij laten de koers dus naar onze entries bewegen.
          </p>
          
          <div className="bg-finance-gray/15 rounded-xl p-8 mb-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Krijg toegang tot onze analyses</h2>
            <p className="mb-6 text-muted-foreground">
              Word abonnee om toegang te krijgen tot al onze diepgaande analyses en inzichten.
            </p>
            <Link to="/subscribe">
              <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white">
                Krijg toegang tot al onze uitgebreide analyses
              </Button>
            </Link>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow opacity-60">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">Analyse ASML Holdings</h3>
                  <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</span>
                </div>
                <p className="text-muted-foreground">
                  Een diepgaande analyse van de recente ontwikkelingen bij ASML en wat dit betekent voor beleggers.
                </p>
                <div className="mt-4">
                  <span className="text-finance-blue cursor-not-allowed">Alleen voor abonnees</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalysesPage;
