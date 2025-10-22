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
      <Footer />
    </div>
  );
};

export default Index;
