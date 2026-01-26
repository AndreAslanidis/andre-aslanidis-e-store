import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import ProductShowcase from "@/components/ProductShowcase";
import ProductDetails from "@/components/ProductDetails";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyCart from "@/components/MobileStickyCart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <ProductShowcase />
        <ProductDetails />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCart />
    </div>
  );
};

export default Index;
