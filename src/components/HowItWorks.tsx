
import { ArrowRight, LineChart, FileText, Mail, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const features = [
    {
      icon: <LineChart className="w-10 h-10 text-finance-blue" />,
      title: "Portefeuille",
      description: "Krijg inzicht in onze gespreide aandelenportefeuille, onze gemiddelde aankoopprijzen en het huidige resultaat.",
      link: "/portfolio"
    },
    {
      icon: <FileText className="w-10 h-10 text-finance-blue" />,
      title: "Uitgebreide Analyses",
      description: "Ontvang tweemaal per week een uitgebreide analyse en zie welke kooporders wij klaarzetten.",
      link: "/analyses"
    },
    {
      icon: <Mail className="w-10 h-10 text-finance-blue" />,
      title: "Updates",
      description: "Ontvang wekelijks een video-update waarin wij terugblikken op de week en onze beslissingen toelichten.",
      link: "/updates"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-finance-blue" />,
      title: "Kennisportaal",
      description: "Krijg toegang tot de kennisportaal met video's over essentiële onderwerpen in het beleggen.",
      link: "/knowledge-portal"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-finance-gray" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Wat wij bieden</h2>
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
              <Link 
                to={feature.link}
                className="text-finance-blue font-medium inline-flex items-center group"
              >
                Meer informatie 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
