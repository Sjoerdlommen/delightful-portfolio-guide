
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
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

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Liever eerst een inkijkje?
            </h2>
            <p className="text-lg text-muted-foreground">
              Wil je eerst zien wat je van onze service kunt verwachten?
            </p>
          </div>

          {/* Benefits stacked vertically */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Uitgebreide Analyse</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Portfolio Check</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Bonusvideo</span>
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
                className="bg-finance-blue hover:bg-blue-700 text-white font-semibold px-8"
              >
                Ontvang een inkijkje!
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
  );
};

export default NewsletterSignup;
