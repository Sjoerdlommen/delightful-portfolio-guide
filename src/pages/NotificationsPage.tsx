
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotificationsPage = () => {
  const positions = [
    "Aalberts Industries",
    "Adoby Systems",
    "Diageo",
    "Advanced Micro Devices",
    "Alfen NV",
    "Altria Group",
    "Amazon",
    "Basic Fit",
    "Heineken",
    "Hims & Hers Health",
    "Johnson & Johnson",
    "L'Oréal",
    "Monster Beverage Corp",
    "Paypal Holdings",
    "PepsiCo",
    "Realty Income",
    "Scorpio Tankers",
    "Tripadvisor",
    "Unilever",
    "UnitedHealth Group",
    "Walt Disney"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Mededelingen</h1>
          
          <div className="prose max-w-none">
            <p>Aandelen Onder De Loep meldt in het kader van wetgeving de volgende posities (alfabetische volgorde):</p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6 list-none pl-0">
              {positions.map((position, index) => (
                <li key={index} className="py-2 px-4 bg-gray-50 rounded">
                  {position}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotificationsPage;
