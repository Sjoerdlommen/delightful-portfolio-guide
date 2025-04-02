
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  
  const footerLinks = [
    {
      title: "Beleggen",
      links: [
        { name: "Portefeuille", href: "/portfolio" },
        { name: "Analyses", href: "/analyses" },
        { name: "Updates", href: "/updates" },
        { name: "Kennisportaal", href: "/knowledge-portal" },
      ],
    },
    {
      title: "Aandelen onder de loep",
      links: [
        { name: "Inloggen", href: "/login" },
        { name: "Abonneren", href: "/subscribe" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Mededelingen", href: "/notifications" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" onClick={handleLinkClick} className="inline-block mb-6">
              <img src="/lovable-uploads/b4d25ca2-6d06-44dd-86c2-22ceeac5eb11.png" alt="Aandelen onder de loep" className="h-16" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Werk met behulp van Aandelen Onder De Loep naar een goed gespreide aandelenportefeuille en maak weloverwogen investeringen.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin].map((Icon, index) => (
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
                    <Link
                      to={link.href}
                      onClick={handleLinkClick}
                      className="text-muted-foreground hover:text-finance-blue transition-colors flex items-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Aandelen onder de loep. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-wrap space-x-4">
            <Link to="/terms" onClick={handleLinkClick} className="text-sm text-muted-foreground hover:text-finance-blue transition-colors">
              Voorwaarden
            </Link>
            <Link to="/privacy" onClick={handleLinkClick} className="text-sm text-muted-foreground hover:text-finance-blue transition-colors">
              Privacybeleid
            </Link>
            <Link to="/cookies" onClick={handleLinkClick} className="text-sm text-muted-foreground hover:text-finance-blue transition-colors">
              Cookies
            </Link>
            <Link to="/disclaimer" onClick={handleLinkClick} className="text-sm text-muted-foreground hover:text-finance-blue transition-colors">
              Disclaimer
            </Link>
            <Link to="/notifications" onClick={handleLinkClick} className="text-sm text-muted-foreground hover:text-finance-blue transition-colors">
              Mededelingen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
