import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Panorama from "@/components/Panorama";
import Services from "@/components/Services";
import ContactInfo from "@/components/ContactInfo";
import ReviewsAndContact from "@/components/ReviewsAndContact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        {/* <Panorama /> */}
        <Services />
        <ContactInfo />
        <ReviewsAndContact />
        <FAQ />
      </main>
      
      {/* Website Credit Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-white to-muted/10">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
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
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
