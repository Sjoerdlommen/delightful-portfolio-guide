
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const UitgebreideAnalysePage = () => {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    aandeel: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Uitgebreide Analyse aanvraag:", formData);
    
    toast({
      title: "Aanvraag verzonden",
      description: "We nemen zo snel mogelijk contact met je op voor je uitgebreide analyse.",
      duration: 5000,
    });
    
    setFormData({
      naam: "",
      email: "",
      aandeel: ""
    });
  };

  const benefits = [
    "Krachtige SWOT-analyse",
    "Concurrentieanalyse en ESG-beoordeling",
    "Financiële gezondheid toetst en waarderingsratio's",
    "Hoe aantrekkelijk is het aandeel?",
    "Koersdoelen en technische trends"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Investeer met vertrouwen en vraag een <span className="text-finance-blue">uitgebreide analyse</span> op maat aan!
              </h1>
              <p className="text-lg text-muted-foreground">
                Wil je weten of een aandeel écht toekomst heeft? Met de Uitgebreide Analyse krijg je een diepgaand en helder overzicht van zowel de fundamentele als technische kant van een aandeel.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Inclusief:</h2>
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
                    Of je nu twijfelt over een aankoop of je huidige positie wilt heroverwegen: deze analyse helpt je om weloverwogen beslissingen te nemen. Je ontvangt een uitgebreid rapport in pdf-bestand zodat je het altijd makkelijk terug kunt kijken.
                  </p>
                  <p className="font-semibold text-finance-blue">
                    Een goede investering begint met de juiste informatie.
                  </p>
                  <p className="text-lg font-bold mt-2">
                    ➡️ Nu tijdelijk voor slechts €19,50
                  </p>
                </div>
              </div>

              <Card className="border-finance-blue">
                <CardHeader>
                  <CardTitle className="text-center text-finance-blue">Vraag je analyse aan</CardTitle>
                  <CardDescription className="text-center">
                    Vul onderstaande gegevens in en ontvang je uitgebreide analyse
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
                      <label htmlFor="aandeel" className="block text-sm font-medium text-gray-700 mb-1">
                        Aandeel *
                      </label>
                      <Input
                        id="aandeel"
                        placeholder="Welk aandeel wilt u laten analyseren?"
                        value={formData.aandeel}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-finance-blue hover:bg-finance-blue/90 text-white py-3"
                    >
                      Vraag nu aan!
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

export default UitgebreideAnalysePage;
