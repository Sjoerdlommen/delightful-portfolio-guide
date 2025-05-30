
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const AnalysesPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stock: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.stock) {
      toast({
        title: "Aanvraag verzonden!",
        description: "Je ontvangt binnenkort onze uitgebreide analyse.",
      });
      setFormData({ name: "", email: "", stock: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Uitgebreide Analyse</h1>
            
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              Investeer met vertrouwen en vraag een uitgebreide analyse op maat aan!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Wil je weten of een aandeel écht toekomst heeft? Met de Uitgebreide Analyse krijg je een diepgaand en helder overzicht van zowel de fundamentele als technische kant van een aandeel. Inclusief:
            </p>
            
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Krachtige SWOT-analyse</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Concurrentieanalyse en ESG-beoordeling</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Financiële gezondheid toetst en waarderingsratio's</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Hoe aantrekkelijk is het aandeel?</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Koersdoelen en technische trends</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Of je nu twijfelt over een aankoop of je huidige positie wilt heroverwegen: deze analyse helpt je om weloverwogen beslissingen te nemen. Je ontvang een uitgebreid rapport in pdf-bestand zodat je het altijd makkelijk terug kunt kijken.
            </p>
            
            <p className="text-lg font-semibold mb-4">
              Een goede investering begint met de juiste informatie.
            </p>
            
            <p className="text-xl font-bold text-finance-blue mb-8">
              ➡️ Nu tijdelijk voor slechts €19,50
            </p>
            
            {/* Application Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Vraag jouw uitgebreide analyse aan
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Naam *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Uw volledige naam"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mailadres *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="uw.email@voorbeeld.nl"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="stock" className="block text-sm font-medium mb-2">
                    Aandeel *
                  </label>
                  <Input
                    type="text"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    placeholder="Naam van het aandeel"
                    required
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-finance-blue hover:bg-finance-blue/90 text-white font-semibold py-3 text-lg"
                >
                  Vraag nu aan!
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Door te klikken op deze knop, gaat u akkoord met onze{" "}
                <a href="/terms" className="text-finance-blue hover:underline">
                  Gebruikersvoorwaarden
                </a>{" "}
                en{" "}
                <a href="/privacy" className="text-finance-blue hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalysesPage;
