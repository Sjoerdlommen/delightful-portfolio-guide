
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const UpdatesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Updates</h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-4xl">
            Wekelijks nemen wij voor onze abonnees een update op in de vorm van een video. 
            In deze video blikken wij terug op de beursweek en lichten wij onze beslissingen toe. 
            De weekupdates worden op deze pagina geplaatst.
          </p>
          
          <div className="bg-finance-gray/15 rounded-xl p-8 mb-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Wekelijkse video-updates</h2>
            <p className="mb-6 text-muted-foreground">
              Word abonnee om toegang te krijgen tot onze wekelijkse video-updates.
            </p>
            <Link to="/subscribe">
              <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white">
                Krijg toegang tot onze weekupdates
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow opacity-60">
                <div className="relative aspect-video">
                  <img 
                    src={`https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    15:23
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">Weekupdate #{item}</h3>
                    <span className="text-xs text-muted-foreground">{new Date().toLocaleDateString()}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Terugblik op de beurs en toelichting op onze recente beslissingen.
                  </p>
                  <div className="mt-3">
                    <span className="text-finance-blue text-sm cursor-not-allowed">Alleen voor abonnees</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpdatesPage;
