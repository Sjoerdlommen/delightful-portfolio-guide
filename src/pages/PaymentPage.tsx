
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Check, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string>("ideal");
  const [isProcessing, setIsProcessing] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState<any>(null);
  
  // Get subscription data from state or session storage
  useEffect(() => {
    let data = null;
    
    if (location.state?.subscriptionData) {
      data = location.state.subscriptionData;
    } else {
      const storedData = sessionStorage.getItem('subscriptionData');
      if (storedData) {
        data = JSON.parse(storedData);
      }
    }
    
    if (!data) {
      navigate('/subscribe');
      return;
    }
    
    setSubscriptionData(data);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [location.state, navigate]);
  
  const getPlanDetails = (planId: string) => {
    switch (planId) {
      case 'half-year':
        return { name: 'Basis abonnement', duration: '6 maanden', price: '€90', monthly: '€15 per maand' };
      case 'year':
        return { name: 'Plus abonnement', duration: '1 jaar', price: '€150', monthly: '€12,50 per maand' };
      case 'two-year':
        return { name: 'Premium abonnement', duration: '2 jaar', price: '€240', monthly: '€10 per maand' };
      default:
        return { name: 'Onbekend abonnement', duration: '', price: '', monthly: '' };
    }
  };
  
  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Payment successful
      toast({
        title: "Betaling geslaagd",
        description: "Uw abonnement is succesvol geactiveerd.",
      });
      
      // Store user info in localStorage to simulate authentication
      const user = { 
        email: subscriptionData?.email || 'user@example.com', 
        role: "subscriber" 
      };
      localStorage.setItem("user", JSON.stringify(user));
      
      // Redirect to success page
      navigate('/payment-success');
    } catch (error) {
      toast({
        title: "Betaling mislukt",
        description: "Er is een fout opgetreden bij het verwerken van uw betaling. Probeer het later opnieuw.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
  };
  
  // Return early if no subscription data
  if (!subscriptionData) {
    return <div className="min-h-screen flex items-center justify-center">Laden...</div>;
  }
  
  const planDetails = getPlanDetails(subscriptionData.selectedPlan);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payment form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Betaling</h1>
                
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Selecteer een betaalmethode</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['ideal', 'creditcard', 'paypal', 'banktransfer'].map((method) => (
                        <div
                          key={method}
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            paymentMethod === method 
                              ? 'border-finance-blue bg-blue-50 ring-2 ring-finance-blue/20' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setPaymentMethod(method)}
                        >
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 
                              border-finance-blue">
                              {paymentMethod === method && (
                                <div className="w-3 h-3 rounded-full bg-finance-blue"></div>
                              )}
                            </div>
                            <div className="capitalize">{method}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Payment details based on method */}
                  <div className="border-t pt-6">
                    {paymentMethod === 'ideal' && (
                      <div className="space-y-4">
                        <h3 className="font-medium">Selecteer uw bank</h3>
                        <select className="w-full p-3 border border-gray-300 rounded-md">
                          <option>Kies uw bank</option>
                          <option>ABN AMRO</option>
                          <option>ING</option>
                          <option>Rabobank</option>
                          <option>SNS Bank</option>
                          <option>ASN Bank</option>
                          <option>Triodos Bank</option>
                        </select>
                      </div>
                    )}
                    
                    {paymentMethod === 'creditcard' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Kaartnummer</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-md" 
                            placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Vervaldatum</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" 
                              placeholder="MM/JJ" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">CVC</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" 
                              placeholder="123" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Naam kaarthouder</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-md" 
                            placeholder="J. Doe" />
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === 'paypal' && (
                      <div className="text-center p-4">
                        <p className="mb-4">U wordt doorgestuurd naar PayPal om uw betaling te voltooien.</p>
                        <CreditCard className="mx-auto h-12 w-12 text-blue-500" />
                      </div>
                    )}
                    
                    {paymentMethod === 'banktransfer' && (
                      <div className="space-y-4">
                        <p className="text-sm">
                          Maak het bedrag van {planDetails.price} over naar:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p><strong>Bank:</strong> ING Bank</p>
                          <p><strong>IBAN:</strong> NL00 INGB 0000 0000 00</p>
                          <p><strong>Ten name van:</strong> Aandelen Onder De Loep</p>
                          <p><strong>Onder vermelding van:</strong> Uw e-mailadres</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          * Zodra we uw betaling hebben ontvangen, activeren we uw account en sturen we u een bevestiging.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-6">
                    <Button
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className="w-full bg-finance-blue hover:bg-finance-blue/90 text-white py-6"
                    >
                      {isProcessing ? "Betaling wordt verwerkt..." : `Betaal ${planDetails.price}`}
                    </Button>
                    
                    <p className="text-xs text-center text-gray-500 mt-4">
                      Door op 'Betalen' te klikken, gaat u akkoord met onze algemene voorwaarden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Uw bestelling</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">{planDetails.name}</span>
                    <span>{planDetails.price}</span>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Duur</span>
                      <span>{planDetails.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prijs per maand</span>
                      <span>{planDetails.monthly}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold">
                      <span>Totaal</span>
                      <span>{planDetails.price}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Inclusief BTW</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 text-sm mt-6">
                    <h3 className="font-medium flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Inbegrepen in uw abonnement:
                    </h3>
                    <ul className="mt-2 space-y-1 pl-6 list-disc">
                      <li>Inzicht in onze volledige portefeuille</li>
                      <li>Uitgebreide analyses (2x per week)</li>
                      <li>Wekelijkse video-updates</li>
                      <li>Toegang tot de kennisportaal</li>
                      {subscriptionData.selectedPlan !== 'half-year' && (
                        <li>Inspraak in analyses</li>
                      )}
                      {subscriptionData.selectedPlan === 'two-year' && (
                        <li>Feedback op uw portefeuille</li>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <Link to="/subscribe" className="text-finance-blue hover:underline text-sm block text-center">
                    Terug naar gegevens
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
