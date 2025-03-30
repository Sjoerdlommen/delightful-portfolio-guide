
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Erik",
      rating: 5,
      text: "Ik ben al een paar maanden abonnee en ben ontzettend onder de indruk van de diepgaande analyses. Elke week leer ik iets nieuws over de markt. Ik vind het ook heel fijn om iedere week een video te ontvangen waarin wordt teruggeblikt op de week. Absolute aanrader!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      initials: "E"
    },
    {
      name: "Sanne",
      rating: 5,
      text: "Wat een verademing om eindelijk een dienst te hebben die echt de tijd neemt om aandelen grondig te analyseren. Dankzij de uitgebreide rapporten en het kennisportaal heb ik veel meer inzicht gekregen in mijn beleggingsstrategie. Mijn rendement is er flink op vooruitgegaan!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      initials: "S"
    },
    {
      name: "Mark",
      rating: 5,
      text: "Het meest waardevolle voor mij is het inkijkje in de portefeuille. Hierdoor zie ik niet alleen welke aandelen interessant kunnen zijn, maar ook hoe een professionele belegger zijn posities opbouwt. Dit geeft mij enorm veel vertrouwen in mijn eigen keuzes!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      initials: "M"
    },
    {
      name: "Linda",
      rating: 4,
      text: "Ik ben erg tevreden over de analyses en het kennisportaal. De uitleg is helder en goed onderbouwd. Ik zou het perfect vinden als er nog iets meer updates per week kwamen, maar verder echt een topservice!",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      initials: "L"
    },
    {
      name: "Kevin",
      rating: 5,
      text: "Als particuliere belegger is het soms lastig om door de ruis van het nieuws heen te kijken. 'Aandelen onder de loep' biedt precies wat ik nodig heb: objectieve en diepgaande informatie. Dankzij de analyses heb ik al een paar mooie winsten kunnen boeken!",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      initials: "K"
    },
    {
      name: "Sophie",
      rating: 5,
      text: "Het kennisportaal is een goudmijn voor iedereen die serieus wil beleggen. Ik heb al zoveel geleerd en voel me een stuk zelfverzekerder bij het maken van mijn keuzes. De abonnementskosten heb ik er al lang en breed uit!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      initials: "S"
    }
  ];
  
  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const getReviewsToShow = () => {
    const reviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      reviews.push(testimonials[index]);
    }
    return reviews;
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-black">Wat anderen zeggen over</span><br />
            <span className="text-finance-blue">Aandelen Onder De Loep</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getReviewsToShow().map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex mb-3">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
                {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              
              <div className="absolute bottom-4 right-4">
                <Avatar className="h-20 w-20 border-2 border-white shadow-sm">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all ${
                index >= currentIndex && index < currentIndex + 3
                  ? "bg-finance-blue"
                  : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
