
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const AnalysesPage = () => {
  // Example analyses with the first one using the provided video URL
  const analyses = [
    {
      id: 1,
      title: "Analyse ASML Holdings",
      date: "15 juni 2023",
      description: "Een diepgaande analyse van de recente ontwikkelingen bij ASML en wat dit betekent voor beleggers.",
      videoUrl: "https://yxukwhaowopkoutjbhwd.supabase.co/storage/v1/object/sign/aandelenonderdeloep/Uitgebreide%20analyses/video1134024311.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhYW5kZWxlbm9uZGVyZGVsb2VwL1VpdGdlYnJlaWRlIGFuYWx5c2VzL3ZpZGVvMTEzNDAyNDMxMS5tcDQiLCJpYXQiOjE3NDM1MTgzMDUsImV4cCI6MTkwMTE5ODMwNX0.qZd0fQkFBYZClTVQp79LXNYfYaoOZyarp25l6T_Ws10",
      isPremium: true
    },
    {
      id: 2,
      title: "Analyse Shell PLC",
      date: "8 juni 2023",
      description: "Bekijk onze analyse van Shell en de impact van recente marktontwikkelingen op de energiesector.",
      videoUrl: "",
      isPremium: true
    },
    {
      id: 3,
      title: "Analyse ING Group",
      date: "1 juni 2023",
      description: "Een strategische analyse van ING Group en de bankensector in het huidige economische klimaat.",
      videoUrl: "",
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Analyses</h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-4xl">
            Op deze pagina worden tweemaal per week de uitgebreide analyses geplaatst voor onze abonnees. 
            Wij maken uitgebreide fundamentele analyses over aandelen en indien onze interesse is gewekt 
            gaan wij over op technische analyse en op basis hiervan bepalen wij op welke prijspunten 
            wij onze kooporders gaan doorvoeren. Wij laten de koers dus naar onze entries bewegen.
          </p>
          
          <div className="bg-finance-gray/15 rounded-xl p-8 mb-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Krijg toegang tot onze analyses</h2>
            <p className="mb-6 text-muted-foreground">
              Word abonnee om toegang te krijgen tot al onze diepgaande analyses en inzichten.
            </p>
            <Link to="/subscribe">
              <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white">
                Krijg toegang tot al onze uitgebreide analyses
              </Button>
            </Link>
          </div>
          
          <div className="space-y-8">
            {analyses.map((analysis) => (
              <div key={analysis.id} className="border rounded-lg shadow-sm hover:shadow-md transition-shadow opacity-60">
                {analysis.videoUrl ? (
                  <div className="relative aspect-video rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Play className="h-16 w-16 text-white opacity-80" />
                      <span className="absolute text-white font-medium bg-black/70 px-3 py-1 rounded-md">
                        Alleen voor abonnees
                      </span>
                    </div>
                    <img 
                      src={`https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`}
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{analysis.title}</h3>
                    <span className="text-sm text-muted-foreground">{analysis.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {analysis.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-finance-blue cursor-not-allowed font-medium">
                      Alleen voor abonnees
                    </span>
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

export default AnalysesPage;
