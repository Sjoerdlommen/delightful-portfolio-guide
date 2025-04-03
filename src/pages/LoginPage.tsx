
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Authentication logic would go here
    toast({
      title: "Succesvol ingelogd",
      description: "U bent nu ingelogd bij Aandelen Onder De Loep",
    });
    
    navigate('/portfolio');
  };

  const handleDemoLogin = (type: 'subscriber' | 'non-subscriber') => {
    // Here we would simulate logging in with a demo account
    const demoDetails = type === 'subscriber' 
      ? { email: "demo-abonnee@voorbeeld.nl", password: "demo-password" } 
      : { email: "demo-geen-abonnee@voorbeeld.nl", password: "demo-password" };
    
    console.log(`Demo login as ${type} with:`, demoDetails);
    
    // Set demo state in localStorage to maintain demo status
    localStorage.setItem('demoUserType', type);
    
    toast({
      title: `Demo ingelogd als ${type === 'subscriber' ? 'abonnee' : 'niet-abonnee'}`,
      description: "U kunt nu het verschil in functionaliteit ervaren",
    });
    
    navigate('/portfolio');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900">Inloggen</h1>
              <p className="text-sm text-gray-500 mt-2">
                Log in om toegang te krijgen tot je account
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email" className="text-gray-700">E-mailadres: *</FormLabel>
                      <FormControl>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          className="w-full p-3 border border-gray-300 rounded-md" 
                          placeholder="naam@voorbeeld.nl" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password" className="text-gray-700">Wachtwoord: *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            id="password" 
                            type={showPassword ? "text" : "password"} 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-md pr-10" 
                            {...field} 
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOffIcon className="h-5 w-5" />
                            ) : (
                              <EyeIcon className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <div className="mt-1">
                        <Link to="/forgot-password" className="text-sm text-finance-blue hover:underline">
                          Wachtwoord vergeten
                        </Link>
                      </div>
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-finance-blue border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Onthoud mijn gegevens
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6 bg-finance-blue hover:bg-finance-blue/90 text-white font-medium"
                >
                  Inloggen
                </Button>
              </form>
            </Form>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Demo accounts</h3>
              <div className="flex flex-col space-y-3">
                <Button
                  variant="outline"
                  className="py-2 text-finance-blue border-finance-blue hover:bg-finance-blue/10"
                  onClick={() => handleDemoLogin('subscriber')}
                >
                  Login als demo abonnee
                </Button>
                <Button
                  variant="outline"
                  className="py-2 text-finance-blue border-finance-blue hover:bg-finance-blue/10"
                  onClick={() => handleDemoLogin('non-subscriber')}
                >
                  Login als demo niet-abonnee
                </Button>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-700">
                Heb je nog geen account?{" "}
                <Link to="/subscribe" className="text-finance-blue font-medium hover:underline">
                  Abonneren
                </Link>
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <Link to="/privacy" className="hover:underline">Privacy- en Cookiebeleid</Link>
            <p className="mt-2">© Alle rechten voorbehouden</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
