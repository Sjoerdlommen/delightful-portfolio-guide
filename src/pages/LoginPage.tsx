
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Here you would normally implement actual authentication logic
      // For now, we simulate a login process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Login successful
      toast({
        title: "Ingelogd",
        description: "U bent succesvol ingelogd.",
      });
      
      // Store user info in localStorage for demo purposes
      const user = { email, role: "subscriber" };
      localStorage.setItem("user", JSON.stringify(user));
      
      // Redirect to homepage
      navigate("/");
    } catch (err) {
      setError("Er is een fout opgetreden bij het inloggen. Controleer uw gegevens en probeer het opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDemoLogin = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate a login process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Login successful
      toast({
        title: "Demo account ingelogd",
        description: "U bent succesvol ingelogd met het demo account.",
      });
      
      // Store demo user info in localStorage
      const demoUser = { email: "demo@aandelenonderdeloep.nl", role: "subscriber" };
      localStorage.setItem("user", JSON.stringify(demoUser));
      
      // Redirect to homepage
      navigate("/");
    } catch (err) {
      setError("Er is een fout opgetreden bij het inloggen. Probeer het later opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Inloggen bij Aandelen Onder De Loep</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Log in om toegang te krijgen tot al onze diensten
            </p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="naam@voorbeeld.nl" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Wachtwoord</Label>
                <a href="#" className="text-sm text-finance-blue hover:underline">
                  Wachtwoord vergeten?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="rememberMe" 
                checked={rememberMe} 
                onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
              />
              <Label htmlFor="rememberMe" className="text-sm cursor-pointer">
                Onthoud mij
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-finance-blue hover:bg-finance-blue/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Bezig met inloggen..." : "Inloggen"}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-muted-foreground">Of</span>
            </div>
          </div>

          <Button 
            type="button" 
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800"
            onClick={handleDemoLogin}
            disabled={isLoading}
          >
            Inloggen met demo account
          </Button>
          
          <p className="text-center text-sm text-muted-foreground">
            Nog geen account?{" "}
            <a href="/subscribe" className="text-finance-blue hover:underline">
              Abonneer nu
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
