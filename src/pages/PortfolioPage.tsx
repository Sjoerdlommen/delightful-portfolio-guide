
import Header from "@/components/Header";
import PortfolioPreview from "@/components/PortfolioPreview";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Mijn Portefeuille</h1>
          <PortfolioPreview />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
