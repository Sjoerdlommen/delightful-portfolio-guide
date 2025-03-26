
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Basis",
      price: "€19",
      period: "per maand",
      description: "Perfect voor beginnende beleggers",
      features: [
        "Wekelijkse marktanalyses",
        "Toegang tot basis-aanbevelingen",
        "Digitaal dashboard",
        "Email ondersteuning"
      ],
      isPopular: false,
      buttonText: "Start met Basis"
    },
    {
      name: "Premium",
      price: "€39",
      period: "per maand",
      description: "Voor de serieuze belegger",
      features: [
        "Dagelijkse marktanalyses",
        "Gepersonaliseerde aanbevelingen",
        "Uitgebreid dashboard",
        "Prioriteit email ondersteuning",
        "Toegang tot webinars"
      ],
      isPopular: true,
      buttonText: "Kies Premium"
    },
    {
      name: "Zakelijk",
      price: "€99",
      period: "per maand",
      description: "Voor professionele beleggers",
      features: [
        "Real-time marktanalyses",
        "Op maat gemaakte aanbevelingen",
        "Geavanceerd dashboard",
        "Persoonlijke adviseur",
        "Exclusieve investeringskansen",
        "Directe telefonische ondersteuning"
      ],
      isPopular: false,
      buttonText: "Zakelijk starten"
    }
  ];

  return (
    <section className="section-padding py-24" id="plans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Abonnementen</h2>
          <p className="text-lg text-muted-foreground">
            Kies het abonnement dat het beste past bij jouw beleggingsdoelen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl fade-up ${
                plan.isPopular 
                  ? "border-2 border-finance-blue shadow-lg" 
                  : "border border-gray-200 shadow-md"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-finance-blue text-white px-4 py-1 text-sm font-medium">
                  Populair
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
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
                
                <Button 
                  className={`w-full py-6 ${
                    plan.isPopular 
                      ? "bg-finance-blue hover:bg-finance-blue/90" 
                      : "bg-white border-2 border-finance-blue text-finance-blue hover:bg-finance-blue hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
