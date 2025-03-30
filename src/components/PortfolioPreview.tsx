
import { LineChart, BarChart, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  const portfolioData = [
    { name: "ASML", allocation: 25, growth: 18.4, trend: "up" },
    { name: "ING Group", allocation: 20, growth: 12.7, trend: "up" },
    { name: "Royal Dutch Shell", allocation: 18, growth: -2.3, trend: "down" },
    { name: "Unilever", allocation: 15, growth: 5.1, trend: "up" },
    { name: "Philips", allocation: 12, growth: -4.8, trend: "down" },
    { name: "Adyen", allocation: 10, growth: 24.5, trend: "up" },
  ];

  return (
    <section className="section-padding bg-white py-24" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 fade-in-left">
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Voorbeeldportefeuille</h3>
                <div className="flex space-x-3">
                  <button className="p-2 bg-finance-lightblue rounded-full text-finance-blue">
                    <LineChart className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-finance-lightblue hover:text-finance-blue transition-colors">
                    <BarChart className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-5">
                {portfolioData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg mr-4 flex items-center justify-center ${
                        index % 3 === 0 ? "bg-blue-100 text-finance-blue" : 
                        index % 3 === 1 ? "bg-green-100 text-green-600" : 
                        "bg-purple-100 text-purple-600"
                      }`}>
                        {item.name.substring(0, 2)}
                      </div>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.allocation}% allocatie</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className={`flex items-center ${
                        item.trend === "up" ? "text-green-600" : "text-red-500"
                      }`}>
                        {item.trend === "up" ? (
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        )}
                        <span className="font-medium">{item.growth}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-finance-lightblue rounded-lg p-4 text-sm">
                <p className="text-finance-blue font-medium">
                  Portefeuille prestaties: +12.8% (YTD)
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Krijg inzicht in een optimale portefeuillesamenstelling
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Een goede spreiding in een investeringsportefeuille is belangrijk om risico's te minimaliseren en je kansen op een stabiel rendement te vergroten. Naast spreiding in diverse assets is het dus ook van belang om spreiding aan te brengen in je aandelenportefeuille, dit kan op diverse manieren:
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Spreiding over sectoren",
                "Spreiding over regio's en landen",
                "Spreiding over marktkapitalisatie"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-finance-blue/10 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-finance-blue"></div>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <Link to="/subscribe">
              <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6 rounded-lg transition-all">
                Krijg inzage in onze aandelenportefeuille
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
