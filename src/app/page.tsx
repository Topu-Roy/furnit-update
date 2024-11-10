import BrandsWorkedWith from "@/components/home/brandsWorkedWith";
import CategoryCTA from "@/components/home/categoryCTA";
import HeroSection from "@/components/home/heroSection";
import HomeProductCarousel from "@/components/home/homeProductCarousel";
import NewArrivals from "@/components/home/newArrivals";
import OurBenefits from "@/components/home/ourBenefits";
import ReadBlogSection from "@/components/home/readBlogSection";
import SecondCTA from "@/components/home/secondCTA";
import { auth } from "@/server/auth";
import { db } from "@/server/db";

export default async function Home() {
  const [products, session] = await Promise.all([db.product.findMany(), auth()]);

  if (!products) {
    return <div>No Products found...</div>;
  }

  return (
    <>
      <HeroSection />
      <BrandsWorkedWith />
      <CategoryCTA />
      <HomeProductCarousel products={products} />
      <SecondCTA />
      <NewArrivals products={products} user={session} />
      <OurBenefits />
      <ReadBlogSection />
    </>
  );
}
