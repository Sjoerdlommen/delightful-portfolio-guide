
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Building, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show toast notification
    toast({
      title: "Bericht verzonden",
      description: "Bedankt voor uw bericht, wij nemen zo snel mogelijk contact met u op.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Neem contact met ons op</h3>
                    <p className="text-muted-foreground mb-6">
                      Heb je vragen over onze diensten of wil je meer informatie? Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-finance-blue mt-1" />
                    <div>
                      <h4 className="font-medium">E-mail</h4>
                      <a href="mailto:info@aandelenonderdeloep.nl" className="text-muted-foreground hover:text-finance-blue">
                        info@aandelenonderdeloep.nl
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Building className="w-5 h-5 text-finance-blue mt-1" />
                    <div>
                      <h4 className="font-medium">KVK-nummer</h4>
                      <p className="text-muted-foreground">97352241</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-finance-blue mt-1" />
                    <div>
                      <h4 className="font-medium">Adres</h4>
                      <p className="text-muted-foreground">5913RB 16 Venlo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Naam
                        </label>
                        <Input 
                          id="name" 
                          placeholder="Uw naam" 
                          required 
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Uw e-mailadres" 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefoonnummer (optioneel)
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Uw telefoonnummer" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Onderwerp
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="Onderwerp van uw bericht" 
                        required 
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Bericht
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Uw bericht" 
                        rows={5} 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button type="submit" className="bg-finance-blue hover:bg-finance-blue/90 text-white">
                      Versturen
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
