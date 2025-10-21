import { useState, useEffect } from "react";
import { Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "top-0 bg-white shadow-md"
          : "top-8 bg-white/95 backdrop-blur-sm mx-auto left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-2xl shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-white rounded-full border-r-transparent transform rotate-45"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
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
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
              <div className="w-5 h-5 border-3 border-white rounded-full border-r-transparent transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
