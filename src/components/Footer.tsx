import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div>
            <img 
              src="/assets/images/funlogo.svg" 
              alt="Centre Funtastique" 
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/themed-parties"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.themedParties')}
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Link>
            <Link
              to="/reviews"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.reviews')}
            </Link>
          </nav>

          {/* Social Media */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm text-center space-y-1">
            <p>© Copyright 2025 - Centre Funtastique</p>
            <p>
              Website crafted with care by{' '}
              <a 
                href="https://griffinstudios.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Griffin Studios
              </a>
              {' '}— Web solutions for growing businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
