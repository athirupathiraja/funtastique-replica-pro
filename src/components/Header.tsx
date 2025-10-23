import { useState, useEffect } from "react";
import { Phone, Globe, Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

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
      <div className={`container mx-auto px-4 py-2 md:py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white"
          : "bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg mt-4 mx-4"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="/assets/images/funlogo.svg" 
                alt="Centre Funtastique" 
                className="h-16 md:h-12 w-auto"
                fetchPriority="high"
              />
            </Link>
          </div>

          {/* Navigation - Desktop (Centered) */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/themed-parties"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.themedParties')}
            </Link>
            
            {/* Locations Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors font-medium text-base">
                {t('nav.locations')}
              </button>
              
              {/* First Level - Cities */}
              <div className="absolute left-0 top-full mt-2 w-[200px] bg-white rounded-md shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-2">
                  {/* Laval with Submenu */}
                  <div className="relative group/laval">
                    <div className="px-4 py-2 hover:bg-primary/10 text-sm font-medium cursor-pointer flex items-center justify-between">
                      <span>Laval</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    
                    {/* Laval Neighborhoods */}
                    <div className="absolute left-full top-0 ml-1 w-[200px] bg-white rounded-md shadow-lg border border-border opacity-0 invisible group-hover/laval:opacity-100 group-hover/laval:visible">
                      <div className="py-2">
                        <Link to="/laval/chomedey/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Chomedey
                        </Link>
                        <Link to="/laval/sainte-dorothee/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Sainte-Dorothée
                        </Link>
                        <Link to="/laval/laval-des-rapides/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Laval-des-Rapides
                        </Link>
                        <Link to="/laval/vimont/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Vimont
                        </Link>
                        <Link to="/laval/fabreville/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Fabreville
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Longueuil with Submenu */}
                  <div className="relative group/longueuil">
                    <div className="px-4 py-2 hover:bg-primary/10 text-sm font-medium cursor-pointer flex items-center justify-between">
                      <span>Longueuil</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    
                    {/* Longueuil Neighborhoods */}
                    <div className="absolute left-full top-0 ml-1 w-[200px] bg-white rounded-md shadow-lg border border-border opacity-0 invisible group-hover/longueuil:opacity-100 group-hover/longueuil:visible">
                      <div className="py-2">
                        <Link to="/longueuil/vieux-longueuil/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Vieux-Longueuil
                        </Link>
                        <Link to="/longueuil/saint-hubert/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Saint-Hubert
                        </Link>
                        <Link to="/longueuil/greenfield-park/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Greenfield Park
                        </Link>
                        <Link to="/longueuil/saint-lambert/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Saint-Lambert
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/brossard/birthday-hosting"
                    className="block px-4 py-2 hover:bg-primary/10 text-sm font-medium"
                  >
                    Brossard
                  </Link>
                  
                  <div className="border-t border-border my-1"></div>
                  
                  {/* Montreal with Submenu */}
                  <div className="relative group/montreal">
                    <div className="px-4 py-2 hover:bg-primary/10 text-sm font-medium cursor-pointer flex items-center justify-between">
                      <span>Montreal</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    
                    {/* Montreal Neighborhoods */}
                    <div className="absolute left-full top-0 ml-1 w-[200px] bg-white rounded-md shadow-lg border border-border opacity-0 invisible group-hover/montreal:opacity-100 group-hover/montreal:visible">
                      <div className="py-2">
                        <Link to="/montreal/centre-ville/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Centre-Ville
                        </Link>
                        <Link to="/montreal/plateau-mont-royal/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Plateau-Mont-Royal
                        </Link>
                        <Link to="/montreal/rosemont/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Rosemont
                        </Link>
                        <Link to="/montreal/villeray/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Villeray
                        </Link>
                        <Link to="/montreal/ahuntsic/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Ahuntsic
                        </Link>
                        <Link to="/montreal/cote-des-neiges/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Côte-des-Neiges
                        </Link>
                        <Link to="/montreal/verdun/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Verdun
                        </Link>
                        <Link to="/montreal/saint-leonard/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          Saint-Léonard
                        </Link>
                        <Link to="/montreal/riviere-des-prairies/birthday-hosting" className="block px-4 py-2 hover:bg-primary/10 text-sm">
                          RDP
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-border my-1"></div>
                  
                  <Link
                    to="/locations"
                    className="block px-4 py-2 text-primary hover:bg-primary/10 text-sm font-medium"
                  >
                    View All →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.contact')}
            </Link>
            <Link
              to="/reviews"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.reviews')}
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
            <Button 
              onClick={toggleLanguage}
              variant="outline" 
              size="sm" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              <Globe className="w-4 h-4 mr-1" />
              {i18n.language === 'en' ? 'FR' : 'EN'}
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
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary p-1">
                  <Menu className="h-24 w-24" strokeWidth={3} />
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
                      {t('nav.home')}
                    </Link>
                    <Link
                      to="/themed-parties"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {t('nav.themedParties')}
                    </Link>
                    <Link
                      to="/locations"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {t('nav.locations')}
                    </Link>
                    <Link
                      to="/about"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {t('nav.about')}
                    </Link>
                    <Link
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {t('nav.contact')}
                    </Link>
                    <Link
                      to="/reviews"
                      onClick={closeMobileMenu}
                      className="px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {t('nav.reviews')}
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
                      onClick={toggleLanguage}
                      variant="outline" 
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white h-12 text-base font-medium"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      {i18n.language === 'en' ? 'Français (FR)' : 'English (EN)'}
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
