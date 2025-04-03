
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MededelingenPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companiesList = [
    "Aalberts Industries",
    "Adoby Systems",
    "Diageo",
    "Advanced Micro Devices",
    "Alfen NV",
    "Altria Group",
    "Amazon",
    "Basic Fit",
    "Heineken",
    "Hims & Hers Health",
    "Johnson & Johnson",
    "L'Oréal",
    "Monster Beverage Corp",
    "Paypal Holdings",
    "PepsiCo",
    "Realty Income",
    "Scorpio Tankers",
    "Tripadvisor",
    "Unilever",
    "UnitedHealth Group",
    "Walt Disney"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Mededelingen</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg mb-6">Aandelen Onder De Loep meldt in het kader van wetgeving de volgende posities:</p>
            
            <h2 className="text-xl font-semibold mb-4">Posities (alfabetische volgorde)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {companiesList.map((company, index) => (
                <div key={index} className="bg-gray-50 px-4 py-3 rounded">
                  {company}
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Belangrijk om te weten</h3>
              <p>Deze posities kunnen op elk moment wijzigen zonder voorafgaande kennisgeving. Deze lijst wordt periodiek bijgewerkt om aan de wettelijke vereisten te voldoen. Het bezit van deze posities kan invloed hebben op de berichtgeving over deze bedrijven, maar Aandelen Onder De Loep streeft naar objectieve analyses.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MededelingenPage;
