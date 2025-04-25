
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { PortfolioTable } from "@/components/PortfolioTable";

const PortfolioPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    
    if (!session) {
      navigate('/login', { state: { returnTo: '/portfolio' } });
    }
  };

  if (isAuthenticated === null) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Mijn Portefeuille</h1>
          {isAuthenticated ? (
            <PortfolioTable />
          ) : (
            <div>Redirecting to login...</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
