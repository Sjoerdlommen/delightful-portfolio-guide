
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const PortfolioCheckPage = () => {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bestand: null as File | null
  });
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target;
    if (id === "bestand" && files) {
      setFormData(prev => ({ ...prev, [id]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Portfolio Check aanvraag:", formData);
    
    toast({
      title: "Aanvraag verzonden",
      description: "We nemen zo snel mogelijk contact met je op voor je portfolio check.",
      duration: 5000,
    });
    
    setFormData({
      naam: "",
      email: "",
      bestand: null
    });
  };

  const benefits = [
    "Spreiding over sectoren en regio's",
    "Risicoblootstelling en balans tussen groei en stabiliteit",
    "Mogelijke concentratierisico's",
    "Kansen om jouw aandelenportefeuille te versterken"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Laat je <span className="text-finance-blue">portefeuille doorlichten</span> – weet jij hoe goed je écht gespreid bent?
              </h1>
              <p className="text-lg text-muted-foreground">
                Een goed rendement begint met een slimme spreiding. Met de Portfolio Check analyseer ik de samenstelling van je portefeuille op:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Je ontvangt een heldere beoordeling én concrete tips om je portefeuille toekomstbestendig te maken in een pdf-bestand, zodat je het altijd makkelijk terug kunt kijken.
                  </p>
                  <p className="font-semibold text-finance-blue">
                    Voorkom verrassingen en haal meer uit je beleggingen.
                  </p>
                  <p className="text-lg font-bold mt-2">
                    ➡️ Nu tijdelijk voor slechts €19,50
                  </p>
                </div>
              </div>

              <Card className="border-finance-blue">
                <CardHeader>
                  <CardTitle className="text-center text-finance-blue">Portfolio Check aanvragen</CardTitle>
                  <CardDescription className="text-center">
                    Upload je portfolio en ontvang een professionele analyse
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
                        Naam *
                      </label>
                      <Input
                        id="naam"
                        placeholder="Uw volledige naam"
                        value={formData.naam}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mailadres *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Uw e-mailadres"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="bestand" className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio bestand *
                      </label>
                      <Input
                        id="bestand"
                        type="file"
                        accept=".pdf,.xlsx,.xls,.csv"
                        onChange={handleChange}
                        required
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-finance-blue file:text-white hover:file:bg-finance-blue/90"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Ondersteunde formaten: PDF, Excel, CSV
                      </p>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-finance-blue hover:bg-finance-blue/90 text-white py-3"
                    >
                      Doe nu de check!
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioCheckPage;
