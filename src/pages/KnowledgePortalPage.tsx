
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, BookOpen, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const KnowledgePortalPage = () => {
  const videoCategories = [
    "Fundamentele Analyse", 
    "Technische Analyse", 
    "Beleggingsstrategieën", 
    "Risicomanagement"
  ];

  const featuredVideos = [
    {
      title: "Basisprincipes van Fundamentele Analyse",
      category: "Fundamentele Analyse",
      duration: "14:32",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Technische Indicatoren Begrijpen",
      category: "Technische Analyse",
      duration: "18:45",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Risicospreiding in je Portefeuille",
      category: "Risicomanagement",
      duration: "12:20",
      thumbnail: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Value Investing Strategie",
      category: "Beleggingsstrategieën",
      duration: "21:18",
      thumbnail: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Kennisportaal</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              In onze kennisportaal plaatsen wij video's over essentiële onderwerpen die betrekking hebben op een verantwoorde manier beleggen. Denk hierbij aan onderwerpen zoals het belang van investeren, spreiding aanbrengen en de juiste mindset tijdens het investeren.
            </p>
            <Link to="/subscribe">
              <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white">
                Krijg toegang tot onze kennisportaal
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {videoCategories.map((category, index) => (
              <div key={index} className="p-6 bg-finance-lightblue rounded-xl">
                <h3 className="font-semibold text-finance-blue">{category}</h3>
              </div>
            ))}
          </div>
          
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Uitgelichte Video's</h2>
              <Button variant="outline" className="text-finance-blue border-finance-blue hover:bg-finance-blue hover:text-white">
                Alle Video's
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVideos.map((video, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 opacity-70">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 bg-finance-blue rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                      <span className="absolute bottom-2 text-white text-xs bg-black/60 px-2 py-1 rounded">
                        Alleen voor abonnees
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-finance-blue font-medium mb-2 flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {video.category}
                    </div>
                    <h3 className="font-medium mb-1 line-clamp-2">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgePortalPage;
