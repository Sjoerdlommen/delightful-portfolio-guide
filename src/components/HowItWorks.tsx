
import { FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Uitgebreide Analyse",
      description: "Ontvang een uitgebreide analyse (fundamenteel én technisch) naar keuze en maak weloverwogen investeringsbeslissingen!",
      link: "/analyses"
    },
    {
      icon: TrendingUp,
      title: "Portfolio Check",
      description: "Laat jouw aandelenportefeuille checken en ontdek of je rendement laat liggen!",
      link: "/portfolio-check"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wat wij <span className="text-finance-blue">bieden</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Werk met behulp van Aandelen Onder De Loep naar een goed gespreide aandelenportefeuille toe en maak weloverwogen investeringen. Zie hieronder ons aanbod.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {steps.map((step, index) => (
              <Link
                key={index}
                to={step.link}
                className="group relative p-8 rounded-xl border border-gray-200 hover:border-finance-blue transition-all duration-300 hover:shadow-lg bg-white"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-finance-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-finance-blue/20 transition-colors">
                    <step.icon className="h-8 w-8 text-finance-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-finance-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
