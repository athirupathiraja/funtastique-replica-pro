import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
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
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
            <div className="w-10 h-10 border-6 border-white rounded-full border-r-transparent transform rotate-45"></div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
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
          <p className="text-muted-foreground text-sm text-center">
            © Copyright 2025 - Centre Funtastique | Site by Griffin Studios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
