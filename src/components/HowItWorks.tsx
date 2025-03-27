
import { ArrowRight, LineChart, FileText, Mail, BookOpen } from "lucide-react";

const HowItWorks = () => {
  const features = [
    {
      icon: <LineChart className="w-10 h-10 text-finance-blue" />,
      title: "Portefeuille",
      description: "Als abonnee kunt u onze huidige portefeuille inzien met onder andere de spreiding die wij hebben aangebracht, wat de gemiddelde aankoopprijzen zijn en het huidige resultaat."
    },
    {
      icon: <FileText className="w-10 h-10 text-finance-blue" />,
      title: "Uitgebreide Analyses",
      description: "Wekelijks nemen wij twee aandelen onder de loep en als abonnee nemen we u helemaal mee in deze grondige fundamentele analyse en bepalen wij op basis van technische analyse of wij een kooporder klaarzetten."
    },
    {
      icon: <Mail className="w-10 h-10 text-finance-blue" />,
      title: "Updates",
      description: "Wekelijks ontvangt u een weekupdate in uw mailbox waarin wij u meenemen in onze denkwijze, blik op de beurs en beslissingen die wij nemen."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-finance-blue" />,
      title: "Kennisportaal",
      description: "Omdat wij het belangrijk vinden om u kennis bij te brengen zodat u onze beslissingen begrijpt, hebben wij een kennisportaal opgesteld waarin wij video's plaatsen over belangrijke onderwerpen."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-finance-gray" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Wat wij bieden</h2>
          <p className="text-lg text-muted-foreground">
            Ons platform maakt professioneel beleggingsadvies toegankelijk en eenvoudig te volgen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="mb-6 p-4 bg-finance-lightblue inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
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
