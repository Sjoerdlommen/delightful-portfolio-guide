
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Bedankt voor je aanmelding!",
        description: "Je ontvangt binnenkort onze nieuwsbrief.",
      });
      setEmail("");
    }
  };

  const features = [
    {
      title: "Uitgebreide Analyse",
      description: "Toegang tot onze fundamentele en technische analyses"
    },
    {
      title: "Portfolio Check",
      description: "Professionele beoordeling van jouw huidige portefeuille"
    },
    {
      title: "Bonusvideo",
      description: "Exclusieve video content en marktinzichten"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Liever eerst een <span className="text-finance-blue">inkijkje</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Meld je aan voor onze nieuwsbrief en ontvang waardevolle inzichten in de wereld van beleggen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:border-finance-blue transition-colors">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2 text-finance-blue">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Voer je e-mailadres in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button 
              type="submit" 
              className="bg-finance-blue hover:bg-finance-blue/90 text-white px-8"
            >
              Aanmelden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
