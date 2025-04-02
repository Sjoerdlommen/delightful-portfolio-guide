
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-6 max-w-md">
              <span className="text-finance-blue">Analyseren</span> met <span className="text-finance-blue">precisie</span>,<br/>
              <span>investeren</span> met <span className="text-black">een</span> <span className="text-finance-blue">visie</span>!
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Krijg toegang tot onze huidige portefeuille, uitgebreide analyses, video-updates én de kennisportaal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/how-it-works" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-finance-blue hover:bg-finance-blue/90 text-white px-6 py-6 rounded-lg text-base transition-all group">
                  Bekijk hoe het werkt
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-black text-lg font-medium mb-4 text-center">
              Welkom bij Aandelen Onder De Loep
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video">
                <video 
                  className="w-full h-full object-cover rounded-xl"
                  controls
                  autoPlay
                  muted
                >
                  <source src="https://yxukwhaowopkoutjbhwd.supabase.co/storage/v1/object/sign/aandelenonderdeloep/video1918957518.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhYW5kZWxlbm9uZGVyZGVsb2VwL3ZpZGVvMTkxODk1NzUxOC5tcDQiLCJpYXQiOjE3NDM1MTI3MzYsImV4cCI6MTkwMTE5MjczNn0.lZdo3XsLVr5TMnoV6Tqknv2h2zfo0Rewv2cFQREV5VU" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
