import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import CraftProcessSection from "@/components/CraftProcessSection";
import CollectionsSection from "@/components/CollectionsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomOrderSection from "@/components/CustomOrderSection";
import InstagramEmbedSection from "@/components/InstagramEmbedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import CrochetDivider from "@/components/CrochetDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CrochetDivider variant="wave" />
      <BrandStory />
      <CrochetDivider variant="chain" />
      <CraftProcessSection />
      <CrochetDivider variant="zigzag" />
      <CollectionsSection />
      <CrochetDivider variant="wave" flip />
      <FeaturedProducts />
      <CrochetDivider variant="chain" />
      <CustomOrderSection />
      <CrochetDivider variant="zigzag" flip />
      <InstagramEmbedSection />
      <CrochetDivider variant="wave" />
      <TestimonialsSection />
      <CrochetDivider variant="chain" flip />
      <InstagramSection />
      <CrochetDivider variant="zigzag" />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
