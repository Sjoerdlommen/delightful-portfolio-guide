
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SubscribePage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [newsletter, setNewsletter] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data: any) => {
    console.log({ ...data, selectedPlan, gender, newsletter });
    // Subscription processing logic would go here
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Abonneren op Aandelen Onder Een Tientje</h1>
            <p className="text-gray-600 mb-8 text-center">Vul dit formulier in om een abonnement te nemen op Aandelen Onder Een Tientje.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-finance-blue mb-4">Kies een abonnement:</h2>
                <RadioGroup value={selectedPlan || ""} onValueChange={setSelectedPlan} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="half-year" id="half-year" />
                    <Label htmlFor="half-year" className="cursor-pointer">Halfjaarabonnement voor € 159,00</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="year" id="year" />
                    <Label htmlFor="year" className="cursor-pointer">Jaarabonnement voor € 299,00</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="two-year" id="two-year" />
                    <Label htmlFor="two-year" className="cursor-pointer">Tweejarigabonnement voor € 449,00</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <Label htmlFor="actionCode" className="text-gray-700 mb-1">Actiecode:</Label>
                <Input id="actionCode" className="max-w-md" />
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-finance-blue mb-4">Uw naam en adresgegevens</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-gray-700 mb-1">Aanhef: *</Label>
                    <RadioGroup value={gender || ""} onValueChange={setGender} className="flex space-x-4">
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="mr" id="mr" />
                        <Label htmlFor="mr" className="cursor-pointer">De heer</Label>
                      </div>
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="mrs" id="mrs" />
                        <Label htmlFor="mrs" className="cursor-pointer">Mevrouw</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 mb-1">Voorletters: *</Label>
                      <Input id="firstName" required {...register("firstName", { required: true })} />
                    </div>
                    <div>
                      <Label htmlFor="givenName" className="text-gray-700 mb-1">Voornaam:</Label>
                      <Input id="givenName" {...register("givenName")} />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="middleName" className="text-gray-700 mb-1">Tussenvoegsel:</Label>
                    <Input id="middleName" className="max-w-xs" {...register("middleName")} />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 mb-1">Achternaam: *</Label>
                    <Input id="lastName" required {...register("lastName", { required: true })} />
                  </div>
                  
                  <div>
                    <Label htmlFor="birthDate" className="text-gray-700 mb-1">Geboortedatum:</Label>
                    <Input id="birthDate" type="date" className="max-w-xs" {...register("birthDate")} />
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-finance-blue mb-4">Adresgegevens</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="postalCode" className="text-gray-700 mb-1">Postcode: *</Label>
                      <Input id="postalCode" required {...register("postalCode", { required: true })} />
                    </div>
                    <div>
                      <Label htmlFor="houseNumber" className="text-gray-700 mb-1">Huisnummer: *</Label>
                      <Input id="houseNumber" required {...register("houseNumber", { required: true })} />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="houseNumberAddition" className="text-gray-700 mb-1">Huisnummer toevoeging:</Label>
                    <Input id="houseNumberAddition" className="max-w-xs" {...register("houseNumberAddition")} />
                  </div>
                  
                  <div>
                    <Label htmlFor="street" className="text-gray-700 mb-1">Straat: *</Label>
                    <Input id="street" required {...register("street", { required: true })} />
                  </div>
                  
                  <div>
                    <Label htmlFor="city" className="text-gray-700 mb-1">Plaats: *</Label>
                    <Input id="city" required {...register("city", { required: true })} />
                  </div>
                  
                  <div>
                    <Label htmlFor="country" className="text-gray-700 mb-1">Land: *</Label>
                    <Select defaultValue="nl">
                      <SelectTrigger className="w-full max-w-md">
                        <SelectValue placeholder="Selecteer een land" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nl">Nederland</SelectItem>
                        <SelectItem value="be">België</SelectItem>
                        <SelectItem value="de">Duitsland</SelectItem>
                        <SelectItem value="fr">Frankrijk</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 mb-1">Telefoon:</Label>
                    <Input id="phone" type="tel" {...register("phone")} />
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <div>
                  <Label htmlFor="email" className="text-gray-700 mb-1">E-mail: *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    {...register("email", { required: true })} 
                  />
                  <p className="text-xs text-gray-500 mt-1">* U ontvangt een bevestiging op dit e-mailadres</p>
                </div>
                
                <div className="mt-4">
                  <Label className="text-gray-700 mb-1">Wilt u een drukwerk factuur ontvangen?</Label>
                  <RadioGroup value={newsletter || ""} onValueChange={setNewsletter} className="flex space-x-4 mt-1">
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="yes" id="invoice-yes" />
                      <Label htmlFor="invoice-yes" className="cursor-pointer">Ja</Label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="no" id="invoice-no" />
                      <Label htmlFor="invoice-no" className="cursor-pointer">Nee</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-700">Velden met een * zijn verplicht.</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-green-700 hover:bg-green-800 text-white px-6 py-6">
                  Abonneren
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubscribePage;
