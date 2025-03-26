
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AnalysesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Analyses</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Hier vind je diepgaande analyses van aandelen en markttrends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Analyse #{item}</h3>
                <p className="text-muted-foreground mb-4">
                  Een diepgaande analyse van de huidige markttrends en investeringsmogelijkheden.
                </p>
                <p className="text-sm text-muted-foreground">Gepubliceerd: {new Date().toLocaleDateString()}</p>
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
