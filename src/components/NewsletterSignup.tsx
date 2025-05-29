
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

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
    <>
      {/* Light background section */}
      <section className="py-16 md:py-24 bg-white">
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
                <Card key={index} className="border-gray-200 bg-white hover:border-finance-blue transition-colors">
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
          </div>
        </div>
      </section>

      {/* Newsletter signup section based on the uploaded image */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                GRATIS UPDATES?
              </h2>
              <p className="text-lg text-muted-foreground">
                Schrijf u in voor onze nieuwsbrief
              </p>
            </div>

            {/* Benefits with checkmarks */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Gratis tips en updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">E-books en analyses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Scherpe aanbiedingen</span>
              </div>
            </div>

            {/* Newsletter form */}
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input
                  type="text"
                  placeholder="Voornaam..."
                  className="bg-gray-100 border-gray-300"
                />
                <Input
                  type="text"
                  placeholder="Achternaam..."
                  className="bg-gray-100 border-gray-300"
                />
                <Input
                  type="email"
                  placeholder="E-mailadres..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-100 border-gray-300"
                />
                <Button 
                  type="submit" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8"
                >
                  Nieuwsbrief ontvangen
                </Button>
              </div>
            </form>

            {/* Privacy notice */}
            <p className="text-xs text-muted-foreground text-center mt-4">
              Door te klikken op deze knop, gaat u akkoord met onze{" "}
              <a href="/privacy" className="text-finance-blue hover:underline">
                Gebruikersvoorwaarden
              </a>{" "}
              en{" "}
              <a href="/privacy" className="text-finance-blue hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterSignup;
