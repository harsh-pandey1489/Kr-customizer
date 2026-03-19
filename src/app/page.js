import Image from "next/image";
import Navbar from "./pages/Navbar";
import StepsSection from "./pages/HowToStartPrintOnDemand";

import WhyChooseUs from "./pages/WhyChooseUs";
import CanadianEcommerce from "./pages/CanadianEcommerce";
import HeroSection from "./pages/HeroSection";
import PodSection from "./pages/PodSection";
import PrintOnDemand from "./pages/PrintOnDemand";
import TrustSection from "./pages/TrustSection";
import FeatureBoxes from "./pages/FeatureBoxes";
import HowItWorks from "./pages/HowItWorks";


export default function Home() {
  return (
    <>
      <Navbar />


      <HeroSection />
      <PodSection />
      <CanadianEcommerce />
      <WhyChooseUs />
      <HowItWorks/>
      {/* <StepsSection /> */}
      <PrintOnDemand />
      <TrustSection />
      <FeatureBoxes />


    </>
  );
}
