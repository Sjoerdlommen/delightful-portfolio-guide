
import { ArrowRight, LineChart, List, Mail } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <List className="w-10 h-10 text-finance-blue" />,
      title: "Kies een abonnement",
      description: "Selecteer het abonnement dat het beste past bij jouw beleggingsdoelen en budget."
    },
    {
      icon: <LineChart className="w-10 h-10 text-finance-blue" />,
      title: "Ontvang adviezen",
      description: "Krijg toegang tot diepgaande analyses, portefeuilleadviezen en marktinzichten van onze experts."
    },
    {
      icon: <Mail className="w-10 h-10 text-finance-blue" />,
      title: "Blijf op de hoogte",
      description: "Ontvang regelmatige updates en aanbevelingen om je beleggingsportefeuille te optimaliseren."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-finance-gray" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hoe het werkt</h2>
          <p className="text-lg text-muted-foreground">
            Ons platform maakt professioneel beleggingsadvies toegankelijk en eenvoudig te volgen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 p-4 bg-finance-lightblue inline-block rounded-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground mb-6">{step.description}</p>
              <a 
                href="#" 
                className="text-finance-blue font-medium inline-flex items-center group"
              >
                Meer informatie 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
