
import { Link } from "react-router-dom";
import { ExternalLink, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Producten",
      links: [
        { name: "Beleggingsadvies", href: "#" },
        { name: "Portefeuille analyses", href: "#" },
        { name: "Marktvooruitzichten", href: "#" },
        { name: "Zakelijke oplossingen", href: "#" },
      ],
    },
    {
      title: "Bedrijf",
      links: [
        { name: "Over ons", href: "#" },
        { name: "Ons team", href: "#" },
        { name: "Vacatures", href: "#" },
        { name: "Pers", href: "#" },
      ],
    },
    {
      title: "Ondersteuning",
      links: [
        { name: "Contact", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Voorwaarden", href: "#" },
        { name: "Privacy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="text-2xl font-bold text-finance-blue">InvestAdvies</div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professioneel beleggingsadvies voor particuliere en zakelijke beleggers. 
              Krijg toegang tot diepgaande analyses en portefeuilleadviezen.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-finance-blue hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-finance-blue transition-colors flex items-center"
                    >
                      {link.name}
                      {linkIdx === column.links.length - 1 && (
                        <ExternalLink className="ml-1 h-3 w-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} InvestAdvies. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-finance-blue transition-colors">
              Gebruiksvoorwaarden
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-finance-blue transition-colors">
              Privacybeleid
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-finance-blue transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
