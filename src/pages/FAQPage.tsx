
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "Wat is Aandelen onder de loep?",
      answer: "Aandelen onder de loep is een abonnementsdienst die beleggers voorziet van professionele analyses, portefeuilleadviezen en educatieve content over beleggen in aandelen."
    },
    {
      question: "Hoe vaak ontvang ik analyses?",
      answer: "Als abonnee ontvang je tweemaal per week een uitgebreide analyse van aandelen, inclusief technische en fundamentele analyses."
    },
    {
      question: "Kan ik de abonnementen upgraden of downgraden?",
      answer: "Ja, je kunt op elk moment je abonnement wijzigen. Neem hiervoor contact op met onze klantenservice via e-mail."
    },
    {
      question: "Hoe krijg ik toegang tot de kennisportaal?",
      answer: "Na je aanmelding ontvang je inloggegevens waarmee je direct toegang krijgt tot onze kennisportaal met alle educatieve video's en content."
    },
    {
      question: "Kan ik mijn abonnement opzeggen?",
      answer: "Ja, je kunt op elk moment je abonnement opzeggen. Je houdt dan toegang tot het einde van je betaalde periode."
    },
    {
      question: "Zijn er kortingen voor langere abonnementen?",
      answer: "Ja, we bieden korting op jaarabonnementen en nog meer korting op tweejarige abonnementen, waardoor de maandelijkse kosten lager uitvallen."
    },
    {
      question: "Hoe professioneel is de aangeboden informatie?",
      answer: "Alle analyses en adviezen worden opgesteld door ervaren beleggingsanalisten met jarenlange ervaring in de financiële markten en uitgebreide kennis van verschillende sectoren."
    },
    {
      question: "Is er een mobiele app beschikbaar?",
      answer: "Momenteel bieden we een volledig responsieve website die op alle apparaten goed werkt. Een specifieke mobiele app is in ontwikkeling."
    }
  ];

  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde vragen</h1>
            <p className="text-muted-foreground mb-8">
              Vind hier antwoorden op veelgestelde vragen over Aandelen onder de loep.
            </p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openItem === index ? (
                      <ChevronUp className="h-5 w-5 text-finance-blue" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {openItem === index && (
                    <div className="px-6 pb-6 text-muted-foreground">
                      <Separator className="mb-4" />
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-finance-lightblue rounded-lg">
              <h3 className="font-semibold text-finance-blue mb-2">Nog meer vragen?</h3>
              <p className="mb-4">
                Neem contact met ons op als je vragen hebt die hier niet worden beantwoord.
              </p>
              <a 
                href="/contact" 
                className="inline-block text-finance-blue font-medium hover:underline"
              >
                Naar contactpagina
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
