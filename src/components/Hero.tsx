
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20 pb-6 md:pt-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
            <span className="text-black">Analyseren</span> met <span className="text-finance-blue">precisie</span>,<br/>
            <span>investeren</span> met <span className="text-black">een</span> <span className="text-finance-blue">visie</span>!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
