
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Erik de Vries",
      rating: 5,
      text: "Ik ben al een paar maanden abonnee en ben ontzettend onder de indruk van de diepgaande analyses. Elke week leer ik iets nieuws over de markt. Ik vind het ook heel fijn om iedere week een video te ontvangen waarin wordt teruggeblikt op de week. Absolute aanrader!"
    },
    {
      name: "Sanne Jansen",
      rating: 5,
      text: "Wat een verademing om eindelijk een dienst te hebben die echt de tijd neemt om aandelen grondig te analyseren. Dankzij de uitgebreide rapporten en het kennisportaal heb ik veel meer inzicht gekregen in mijn beleggingsstrategie. Mijn rendement is er flink op vooruitgegaan!"
    },
    {
      name: "Mark Willems",
      rating: 5,
      text: "Het meest waardevolle voor mij is het inkijkje in de portefeuille. Hierdoor zie ik niet alleen welke aandelen interessant kunnen zijn, maar ook hoe een professionele belegger zijn posities opbouwt. Dit geeft mij enorm veel vertrouwen in mijn eigen keuzes!"
    },
    {
      name: "Linda van Dijk",
      rating: 4,
      text: "Ik ben erg tevreden over de analyses en het kennisportaal. De uitleg is helder en goed onderbouwd. Ik zou het perfect vinden als er nog iets meer updates per week kwamen, maar verder echt een topservice!"
    },
    {
      name: "Kevin Maas",
      rating: 5,
      text: "Als particuliere belegger is het soms lastig om door de ruis van het nieuws heen te kijken. 'Aandelen onder de loep' biedt precies wat ik nodig heb: objectieve en diepgaande informatie. Dankzij de analyses heb ik al een paar mooie winsten kunnen boeken!"
    },
    {
      name: "Sophie Bakker",
      rating: 5,
      text: "Het kennisportaal is een goudmijn voor iedereen die serieus wil beleggen. Ik heb al zoveel geleerd en voel me een stuk zelfverzekerder bij het maken van mijn keuzes. De abonnementskosten heb ik er al lang en breed uit!"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Wat anderen zeggen over Aandelen Onder De Loep</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
