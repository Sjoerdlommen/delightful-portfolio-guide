
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = location.state?.returnTo || '/portfolio';

  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate(returnTo);
      }
    };
    
    checkUser();
  }, [navigate, returnTo]);

  const onSubmit = async (data: { email: string, password: string }) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;

      toast({
        title: "Succesvol ingelogd",
        description: "U bent nu ingelogd bij Aandelen Onder De Loep",
      });
      
      navigate(returnTo);
    } catch (error) {
      toast({
        title: "Inloggen mislukt",
        description: error instanceof Error ? error.message : "Er ging iets mis bij het inloggen.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (type: 'subscriber' | 'non-subscriber') => {
    setIsLoading(true);
    
    try {
      // Demo credentials based on user type
      const demoDetails = type === 'subscriber' 
        ? { email: "demo-abonnee@voorbeeld.nl", password: "demo-password" } 
        : { email: "demo-geen-abonnee@voorbeeld.nl", password: "demo-password" };
      
      console.log(`Demo login as ${type} with:`, demoDetails);
      
      // First try to sign in with the demo credentials
      let { error } = await supabase.auth.signInWithPassword({
        email: demoDetails.email,
        password: demoDetails.password,
      });

      // If the user doesn't exist yet, create it
      if (error && error.message.includes("Invalid login credentials")) {
        const { error: signupError } = await supabase.auth.signUp({
          email: demoDetails.email,
          password: demoDetails.password,
          options: {
            data: {
              is_demo: true,
              subscription_type: type
            }
          }
        });
        
        if (signupError) throw signupError;
        
        // Try signing in again after creating the user
        const { error: retryError } = await supabase.auth.signInWithPassword({
          email: demoDetails.email,
          password: demoDetails.password,
        });
        
        if (retryError) throw retryError;
      } else if (error) {
        throw error;
      }
      
      // Set demo state in localStorage to maintain demo status
      localStorage.setItem('demoUserType', type);
      
      toast({
        title: `Demo ingelogd als ${type === 'subscriber' ? 'abonnee' : 'niet-abonnee'}`,
        description: "U kunt nu het verschil in functionaliteit ervaren",
      });
      
      navigate('/portfolio');
    } catch (error) {
      console.error('Demo login error:', error);
      toast({
        title: "Demo inloggen mislukt",
        description: error instanceof Error ? error.message : "Er ging iets mis bij het demo inloggen.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                  disabled={isLoading}
                >
                  {isLoading ? "Inloggen..." : "Inloggen"}
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
                  disabled={isLoading}
                >
                  {isLoading ? "Inloggen..." : "Login als demo abonnee"}
                </Button>
                <Button
                  variant="outline"
                  className="py-2 text-finance-blue border-finance-blue hover:bg-finance-blue/10"
                  onClick={() => handleDemoLogin('non-subscriber')}
                  disabled={isLoading}
                >
                  {isLoading ? "Inloggen..." : "Login als demo niet-abonnee"}
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
