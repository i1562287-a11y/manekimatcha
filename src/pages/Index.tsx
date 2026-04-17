import Navbar from "@/components/maneki/Navbar";
import Hero from "@/components/maneki/Hero";
import JapanVsChina from "@/components/maneki/JapanVsChina";
import BatchBadge from "@/components/maneki/BatchBadge";
import TrustBlock from "@/components/maneki/TrustBlock";
import TrustStrip from "@/components/maneki/TrustStrip";
import WhySection from "@/components/maneki/WhySection";
import Products from "@/components/maneki/Products";
import Pricing from "@/components/maneki/Pricing";
import Compliance from "@/components/maneki/Compliance";
import FAQ from "@/components/maneki/FAQ";
import JapanTrust from "@/components/maneki/JapanTrust";
import WhoWeServe from "@/components/maneki/WhoWeServe";
import Contact from "@/components/maneki/Contact";
import Footer from "@/components/maneki/Footer";
import NoiseOverlay from "@/components/maneki/NoiseOverlay";

const Index = () => (
  <>
    <NoiseOverlay />
    <Navbar />
    <Hero />
    <JapanVsChina />
    <BatchBadge />
    <TrustBlock />
    <TrustStrip />
    <WhySection />
    <Products />
    <Pricing />
    <Compliance />
    <FAQ />
    <JapanTrust />
    <WhoWeServe />
    <Contact />
    <Footer />
  </>
);

export default Index;
