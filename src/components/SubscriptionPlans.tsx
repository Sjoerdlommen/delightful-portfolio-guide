
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Basis Abonnement",
      duration: "6 maanden",
      price: "€15",
      period: "per maand",
      description: "Perfect voor beginnende beleggers",
      features: [
        "Inzicht in onze volledige portefeuille + openstaande orders",
        "Ontvang tweemaal per week uitgebreide analyses",
        "Ontvang wekelijks een video-update",
        "Toegang tot de kennisportaal"
      ],
      isPopular: false,
      buttonText: "Kies Basis",
      total: 90,
      planId: "half-year"
    },
    {
      name: "Plus Abonnement",
      duration: "1 jaar",
      price: "€12,50",
      period: "per maand",
      description: "Bespaar 15% t.o.v. Basis",
      features: [
        "Inzicht in onze volledige portefeuille + openstaande orders",
        "Ontvang tweemaal per week uitgebreide analyses",
        "Ontvang wekelijks een video-update",
        "Toegang tot de kennisportaal",
        "Krijg inspraak in de aandelen die worden meegenomen in de uitgebreide analyse"
      ],
      isPopular: true,
      buttonText: "Kies Plus",
      total: 150,
      planId: "year"
    },
    {
      name: "Premium Abonnement",
      duration: "2 jaar",
      price: "€10",
      period: "per maand",
      description: "Bespaar 30% t.o.v. Basis",
      features: [
        "Inzicht in onze volledige portefeuille + openstaande orders",
        "Ontvang tweemaal per week uitgebreide analyses",
        "Ontvang wekelijks een video-update",
        "Toegang tot de kennisportaal",
        "Krijg inspraak in de aandelen die worden meegenomen in de uitgebreide analyse",
        "Ontvang feedback op jouw aandelenportefeuille"
      ],
      isPopular: false,
      buttonText: "Kies Premium",
      total: 240,
      planId: "two-year"
    }
  ];

  return (
    <section className="py-24" id="plans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Abonnementen</h2>
          <p className="text-lg text-muted-foreground">
            Kies het abonnement dat het beste bij jou past
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.isPopular 
                  ? "border-2 border-finance-blue shadow-lg" 
                  : "border border-gray-200 shadow-md"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-finance-blue text-white px-4 py-1 text-sm font-medium">
                  Populair
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-2">({plan.duration})</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-finance-blue" />
                      </div>
                      <p className="ml-3 text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <Link to={`/subscribe?plan=${plan.planId}`}>
                  <Button 
                    className={`w-full py-6 ${
                      plan.isPopular 
                        ? "bg-finance-blue hover:bg-finance-blue/90" 
                        : "bg-white border-2 border-finance-blue text-finance-blue hover:bg-finance-blue hover:text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
