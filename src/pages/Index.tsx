import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import CollectionsSection from "@/components/CollectionsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomOrderSection from "@/components/CustomOrderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandStory />
      <CollectionsSection />
      <FeaturedProducts />
      <CustomOrderSection />
      <TestimonialsSection />
      <InstagramSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
