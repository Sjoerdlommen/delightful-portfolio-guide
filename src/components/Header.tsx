
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-[4px] ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-sm py-1 border-gray-300" 
          : "bg-white py-2 border-gray-300"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/aae29d4d-e427-4748-bc8e-b288e3745e34.png" alt="Aandelen onder de loep" className="h-14" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/how-it-works">Hoe het werkt</NavLink>
            <NavLink to="/portfolio">Portefeuille</NavLink>
            <NavLink to="/analyses">Analyses</NavLink>
            <NavLink to="/updates">Updates</NavLink>
            <NavLink to="/knowledge-portal">Kennisportaal</NavLink>
            <div className="ml-4 flex space-x-3">
              <Button size="sm" className="px-4 py-2 bg-finance-blue hover:bg-finance-blue/90 transition-all duration-300 text-white" asChild>
                <Link to="/login">Inloggen</Link>
              </Button>
              <Button size="sm" className="px-4 py-2 bg-finance-blue hover:bg-finance-blue/90 transition-all duration-300 text-white" asChild>
                <Link to="/subscribe">Abonneren</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-finance-blue p-1" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white pt-20 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <MobileNavLink to="/how-it-works" onClick={() => setMobileMenuOpen(false)}>
            Hoe het werkt
          </MobileNavLink>
          <MobileNavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)}>
            Portefeuille
          </MobileNavLink>
          <MobileNavLink to="/analyses" onClick={() => setMobileMenuOpen(false)}>
            Analyses
          </MobileNavLink>
          <MobileNavLink to="/updates" onClick={() => setMobileMenuOpen(false)}>
            Updates
          </MobileNavLink>
          <MobileNavLink to="/knowledge-portal" onClick={() => setMobileMenuOpen(false)}>
            Kennisportaal
          </MobileNavLink>
          <div className="pt-6 flex flex-col space-y-3">
            <Button className="w-full py-3 bg-finance-blue hover:bg-finance-blue/90 text-white" asChild>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Inloggen</Link>
            </Button>
            <Button className="w-full py-3 bg-finance-blue hover:bg-finance-blue/90 text-white" asChild>
              <Link to="/subscribe" onClick={() => setMobileMenuOpen(false)}>Abonneren</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Desktop navigation link component without borders
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-finance-blue transition-colors"
    onClick={() => window.scrollTo(0, 0)}
  >
    {children}
  </Link>
);

// Mobile navigation link component
const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    className="text-xl font-medium text-gray-800 hover:text-finance-blue transition-colors"
    onClick={(e) => {
      window.scrollTo(0, 0);
      if (onClick) onClick();
    }}
  >
    {children}
  </Link>
);

export default Header;
