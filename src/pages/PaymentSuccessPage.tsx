
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user came from payment page
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user || !user.role) {
      navigate('/');
      return;
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-green-100">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Betaling Geslaagd!</h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              Bedankt voor uw abonnement op Aandelen Onder De Loep. Uw account is succesvol geactiveerd.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="font-semibold mb-2">Wat kunt u nu doen?</h2>
              <ul className="space-y-2 text-left">
                <li className="flex items-start">
                  <div className="bg-finance-blue/10 rounded-full p-1 mr-2 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-finance-blue"></div>
                  </div>
                  <span>Bekijk onze volledige <Link to="/portfolio" className="text-finance-blue hover:underline">aandelenportefeuille</Link></span>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-blue/10 rounded-full p-1 mr-2 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-finance-blue"></div>
                  </div>
                  <span>Lees onze diepgaande <Link to="/analyses" className="text-finance-blue hover:underline">analyses</Link></span>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-blue/10 rounded-full p-1 mr-2 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-finance-blue"></div>
                  </div>
                  <span>Bekijk de wekelijkse <Link to="/updates" className="text-finance-blue hover:underline">video-updates</Link></span>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-blue/10 rounded-full p-1 mr-2 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-finance-blue"></div>
                  </div>
                  <span>Verken onze <Link to="/knowledge-portal" className="text-finance-blue hover:underline">kennisportaal</Link></span>
                </li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-600 mb-8">
              Er is een bevestiging van uw abonnement verstuurd naar uw e-mailadres.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/portfolio">
                <Button className="w-full sm:w-auto bg-finance-blue hover:bg-finance-blue/90 text-white">
                  Bekijk de portefeuille
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full sm:w-auto">
                  Terug naar home
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

export default PaymentSuccessPage;
