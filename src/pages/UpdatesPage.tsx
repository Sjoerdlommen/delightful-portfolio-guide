
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UpdatesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Updates</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Blijf op de hoogte van de laatste ontwikkelingen en updates.
          </p>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">Markt Update #{item}</h3>
                  <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</span>
                </div>
                <p className="text-muted-foreground">
                  Belangrijke ontwikkelingen op de aandelenmarkt en wat dit betekent voor jouw portefeuille.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpdatesPage;
