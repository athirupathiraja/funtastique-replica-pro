import { useState, useEffect } from "react";
import { Phone, Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="/assets/images/funlogo.svg" 
                alt="Centre Funtastique" 
                className="h-10 md:h-12 w-auto"
                fetchPriority="high"
              />
            </Link>
          </div>

          {/* Navigation - Desktop (Centered) */}
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

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              <Globe className="w-4 h-4 mr-1" />
              EN
            </Button>
            <div className="hidden lg:flex items-center gap-2 text-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium">(514) 715-1432</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center p-6 border-b">
                    <img 
                      src="/assets/images/funlogo.svg" 
                      alt="Centre Funtastique" 
                      className="h-10 w-auto"
                      fetchPriority="high"
                    />
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 flex flex-col py-6">
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      to="/themed-parties"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      Themed Parties
                    </Link>
                    <Link
                      to="/about"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      Contact
                    </Link>
                    <Link
                      to="/reviews"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      Reviews
                    </Link>
                    {isHomePage && (
                      <button
                        onClick={() => scrollToSection("faq")}
                        className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors text-left"
                      >
                        FAQ
                      </button>
                    )}

                    {/* Divider */}
                    <div className="my-4 mx-6 border-t border-border"></div>

                    {/* Phone Number */}
                    <a 
                      href="tel:+15147151432"
                      className="px-6 py-3 flex items-center gap-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="font-medium">(514) 715-1432</span>
                    </a>
                  </nav>

                  {/* Bottom Section - Language Toggle & Book Now */}
                  <div className="border-t p-6 space-y-3 bg-muted/20">
                    {/* Language Toggle */}
                    <Button 
                      variant="outline" 
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white h-12 text-base font-medium"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      English (EN)
                    </Button>

                    {/* Book Now CTA */}
                    <Link to="/contact" onClick={closeMobileMenu} className="block">
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white h-14 text-lg font-bold shadow-lg"
                      >
                        🎉 Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
