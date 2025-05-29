
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { useEffect } from "react";

const PortfolioCheckPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: CheckCircle,
      title: "Professionele beoordeling",
      description: "Onze experts analyseren jouw portefeuille grondig"
    },
    {
      icon: TrendingUp,
      title: "Optimalisatie tips",
      description: "Krijg concrete adviezen om je rendement te verbeteren"
    },
    {
      icon: Shield,
      title: "Risico analyse",
      description: "Ontdek waar je risico's loopt en hoe je deze kunt beperken"
    },
    {
      icon: Users,
      title: "Persoonlijk advies",
      description: "Advies op maat voor jouw situatie en doelstellingen"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Portfolio <span className="text-finance-blue">Check</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Laat jouw aandelenportefeuille checken en ontdek of je rendement laat liggen!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-gray-200 hover:border-finance-blue transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-finance-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-finance-blue" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-finance border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Klaar om je portfolio te laten checken?
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Onze experts staan klaar om jouw portefeuille te analyseren en je concrete adviezen te geven voor betere resultaten.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-finance-blue hover:bg-gray-100 px-8 py-3"
                >
                  Start Portfolio Check
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioCheckPage;
