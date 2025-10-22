import { useState, useEffect } from "react";
import { Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className={`container mx-auto px-4 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white"
          : "bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg mt-4"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/assets/images/funlogo.svg" 
              alt="Centre Funtastique" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/themed-parties"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Themed Parties
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              to="/reviews"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Reviews
            </Link>
            {isHomePage && (
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              <Globe className="w-4 h-4 mr-1" />
              EN
            </Button>
            <div className="hidden lg:flex items-center gap-2 text-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium">(514) 715-1432</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
