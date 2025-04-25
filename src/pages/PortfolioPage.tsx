
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
        
        // Check if demo user and seed portfolio data if needed
        if (session?.user && localStorage.getItem('demoUserType') === 'subscriber') {
          const { data: existingItems } = await supabase
            .from('portfolio_items')
            .select('id')
            .eq('user_id', session.user.id);
          
          // Only seed data if the user has no portfolio items
          if (!existingItems || existingItems.length === 0) {
            await seedDemoPortfolioData(session.user.id);
          }
        }
        
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

  // Function to seed demo portfolio data for new demo users
  const seedDemoPortfolioData = async (userId: string) => {
    const portfolioData = [
      { stock_name: "AALBERTS INDUSTR", isin: "NL0000852564", quantity: 15, price_per_share: 28.02, currency: "EUR", total_value: 420.30, total_value_eur: 420.30 },
      { stock_name: "ADOBE SYSTEMS INCORPOR", isin: "US00724F1012", quantity: 1, price_per_share: 360.91, currency: "USD", total_value: 360.91, total_value_eur: 316.84 },
      { stock_name: "ADR ON DIAGEO PLC ADS NEW", isin: "US25243Q2057", quantity: 5, price_per_share: 111.63, currency: "USD", total_value: 558.15, total_value_eur: 490.00 },
      { stock_name: "ADVANCED MICRO DEVICES", isin: "US0079031078", quantity: 8, price_per_share: 94.47, currency: "USD", total_value: 755.76, total_value_eur: 663.48 },
      { stock_name: "ALFEN", isin: "NL0012817175", quantity: 43, price_per_share: 13.75, currency: "EUR", total_value: 591.04, total_value_eur: 591.04 },
      { stock_name: "ALPHABET INC. - CLASS A", isin: "US02079K3059", quantity: 2, price_per_share: 159.28, currency: "USD", total_value: 318.56, total_value_eur: 279.66 },
      { stock_name: "ALTRIA GROUP INC.", isin: "US02209S1033", quantity: 5, price_per_share: 58.71, currency: "USD", total_value: 293.55, total_value_eur: 257.71 },
      { stock_name: "AMAZON.COM INC. - COM", isin: "US0231351067", quantity: 3, price_per_share: 186.54, currency: "USD", total_value: 559.62, total_value_eur: 491.29 },
      { stock_name: "BASIC-FIT N.V.", isin: "NL0011872650", quantity: 13, price_per_share: 19.56, currency: "EUR", total_value: 254.28, total_value_eur: 254.28 },
      { stock_name: "HEINEKEN", isin: "NL0000009165", quantity: 4, price_per_share: 77.60, currency: "EUR", total_value: 310.40, total_value_eur: 310.40 },
      { stock_name: "HIMS & HERS HEALTH INC", isin: "US4330001060", quantity: 9, price_per_share: 28.14, currency: "USD", total_value: 253.26, total_value_eur: 222.34 },
      { stock_name: "JOHNSON & JOHNSON COMM", isin: "US4781601046", quantity: 2, price_per_share: 154.93, currency: "USD", total_value: 309.86, total_value_eur: 272.03 },
      { stock_name: "L'OREAL", isin: "FR0000120321", quantity: 1, price_per_share: 380.80, currency: "EUR", total_value: 380.80, total_value_eur: 380.80 },
      { stock_name: "MONSTER BEVERAGE CORPO", isin: "US61174X1090", quantity: 6, price_per_share: 58.59, currency: "USD", total_value: 351.54, total_value_eur: 308.62 },
      { stock_name: "NIKE INC. COMMON STOC", isin: "US6541061031", quantity: 4, price_per_share: 58.48, currency: "USD", total_value: 233.92, total_value_eur: 205.36 },
      { stock_name: "PAYPAL HOLDINGS INC.", isin: "US70450Y1038", quantity: 8, price_per_share: 64.77, currency: "USD", total_value: 518.16, total_value_eur: 454.89 },
      { stock_name: "PEPSICO INC", isin: "US7134481081", quantity: 4, price_per_share: 135.31, currency: "USD", total_value: 541.24, total_value_eur: 475.15 },
      { stock_name: "REALTY INCOME CORPORAT", isin: "US7561091049", quantity: 5, price_per_share: 57.15, currency: "USD", total_value: 285.75, total_value_eur: 250.86 },
      { stock_name: "SCORPIO TANKERS INC. C", isin: "MHY7542C1306", quantity: 14, price_per_share: 35.99, currency: "USD", total_value: 503.86, total_value_eur: 442.34 },
      { stock_name: "TRIPADVISOR INC. - CO", isin: "US8969452015", quantity: 29, price_per_share: 12.70, currency: "USD", total_value: 368.30, total_value_eur: 323.33 },
      { stock_name: "UNILEVER", isin: "GB00B10RZP78", quantity: 5, price_per_share: 56.14, currency: "EUR", total_value: 280.70, total_value_eur: 280.70 },
      { stock_name: "UNITED PARCEL SERVICE", isin: "US9113121068", quantity: 2, price_per_share: 98.92, currency: "USD", total_value: 197.84, total_value_eur: 173.68 },
      { stock_name: "VANGUARD S&P500", isin: "IE00B3XXRP09", quantity: 4, price_per_share: 90.88, currency: "EUR", total_value: 363.54, total_value_eur: 363.54 },
      { stock_name: "WALT DISNEY COMPANY (T", isin: "US2546871060", quantity: 3, price_per_share: 90.01, currency: "USD", total_value: 270.03, total_value_eur: 237.06 },
      { stock_name: "ISHARES CORE MSCI WORLD UCITS ET...", isin: "IE00B4L5Y983", quantity: 5, price_per_share: 91.92, currency: "EUR", total_value: 459.58, total_value_eur: 459.58 }
    ];

    try {
      // Add user_id to each row
      const dataWithUserId = portfolioData.map(item => ({
        ...item,
        user_id: userId
      }));
      
      const { error } = await supabase
        .from('portfolio_items')
        .insert(dataWithUserId);
      
      if (error) throw error;
      
      console.log("Demo portfolio data seeded successfully");
    } catch (error) {
      console.error("Error seeding demo portfolio:", error);
    }
  };

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
