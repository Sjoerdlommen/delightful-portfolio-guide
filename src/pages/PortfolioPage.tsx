
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { PortfolioTable } from "@/components/PortfolioTable";
import { toast } from "@/hooks/use-toast";

const PortfolioPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Listen for authentication state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
      
      if (!session) {
        navigate('/login', { state: { returnTo: '/portfolio' } });
      }
    });
    
    // Check current session
    const checkUser = async () => {
      try {
        setIsLoading(true);
        const { data: { session } } = await supabase.auth.getSession();
        
        setIsAuthenticated(!!session);
        
        if (!session) {
          navigate('/login', { state: { returnTo: '/portfolio' } });
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        toast({
          title: "Er is een fout opgetreden",
          description: "Kon authenticatie status niet controleren",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    checkUser();
    
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-xl text-gray-600">Loading portfolio data...</div>
        </main>
        <Footer />
      </div>
    );
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
