import { Hero } from "@/components/Hero";
import { ProductStory } from "@/components/ProductStory";
import { HowItWorks } from "@/components/HowItWorks";
import { AppScreens } from "@/components/AppScreens";
import { Platform } from "@/components/Platform";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductStory />
      <HowItWorks />
      <AppScreens />
      <Platform />
      <FinalCTA />
      <Footer />
    </>
  );
}
