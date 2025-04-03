
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CreditCard, Check } from "lucide-react";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const subscriberData = location.state?.subscriberData;
  const selectedPlan = location.state?.selectedPlan;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!subscriberData || !selectedPlan) {
      toast({
        title: "Fout bij betaling",
        description: "Er ontbreken gegevens voor deze betalingspagina",
        variant: "destructive",
      });
      navigate('/subscribe');
    }
  }, [subscriberData, selectedPlan, navigate]);

  const getPlanDetails = () => {
    switch (selectedPlan) {
      case "half-year":
        return { name: "Basis abonnement (6 maanden)", price: "€ 90", monthly: "€ 15 per maand" };
      case "year":
        return { name: "Plus abonnement (1 jaar)", price: "€ 150", monthly: "€ 12,50 per maand" };
      case "two-year":
        return { name: "Premium abonnement (2 jaar)", price: "€ 240", monthly: "€ 10 per maand" };
      default:
        return { name: "Onbekend abonnement", price: "€ 0", monthly: "€ 0 per maand" };
    }
  };

  const planDetails = getPlanDetails();

  const handlePayment = () => {
    toast({
      title: "Betaling succesvol",
      description: "Uw abonnement is succesvol geactiveerd. U ontvangt binnen enkele minuten een bevestiging per e-mail.",
      duration: 5000,
    });
    navigate('/portfolio');
  };

  if (!subscriberData || !selectedPlan) {
    return <div className="min-h-screen flex items-center justify-center">Laden...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Betalingsoverzicht</h1>
              <p className="text-gray-600">Controleer uw gegevens en rond de betaling af</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 order-2 lg:order-1">
                <h2 className="text-xl font-semibold mb-4 text-finance-blue">Uw gegevens</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Naam:</span>
                    <span className="font-medium">
                      {subscriberData.firstName} {subscriberData.middleName ? subscriberData.middleName + ' ' : ''}
                      {subscriberData.lastName}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">E-mail:</span>
                    <span className="font-medium">{subscriberData.email}</span>
                  </div>

                  {subscriberData.phone && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Telefoon:</span>
                      <span className="font-medium">{subscriberData.phone}</span>
                    </div>
                  )}

                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <span className="text-gray-600">Adres:</span>
                    <div className="font-medium">
                      <p>{subscriberData.street} {subscriberData.houseNumber}{subscriberData.houseNumberAddition}</p>
                      <p>{subscriberData.postalCode} {subscriberData.city}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-finance-blue/5 rounded-xl p-6 border border-finance-blue/10 order-1 lg:order-2">
                <h2 className="text-xl font-semibold mb-4 text-finance-blue">Abonnement details</h2>
                
                <div className="mb-6 space-y-3">
                  <div className="flex justify-between">
                    <span>Abonnement:</span>
                    <span className="font-medium">{planDetails.name}</span>
                  </div>
                  
                  <div className="flex justify-between text-lg">
                    <span>Totaalbedrag:</span>
                    <span className="font-bold">{planDetails.price}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Wat neerkomt op:</span>
                    <span>{planDetails.monthly}</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Wat u krijgt:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                      <span>Inzicht in onze volledige portefeuille + openstaande orders</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                      <span>Tweemaal per week uitgebreide analyses</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                      <span>Wekelijks een video-update</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                      <span>Toegang tot de kennisportaal</span>
                    </li>
                    {selectedPlan === "year" || selectedPlan === "two-year" ? (
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Inspraak in de aandelen die worden meegenomen in de uitgebreide analyse</span>
                      </li>
                    ) : null}
                    {selectedPlan === "two-year" ? (
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span>Feedback op jouw aandelenportefeuille</span>
                      </li>
                    ) : null}
                  </ul>
                </div>

                <Button 
                  className="w-full py-6 bg-finance-blue hover:bg-finance-blue/90 text-white"
                  onClick={handlePayment}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Betalen
                </Button>
                
                <p className="text-xs text-center mt-4 text-gray-500">
                  Door op "Betalen" te klikken, gaat u akkoord met onze voorwaarden en privacybeleid.
                </p>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>Uw abonnement wordt automatisch en stilzwijgend verlengd met een jaar, tenzij tijdig opgezegd. Opzeggingen dienen schriftelijk te worden ingediend met een opzegtermijn van vier weken voor het einde van de lopende abonnementsperiode.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
