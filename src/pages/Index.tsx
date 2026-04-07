import Navbar from "@/components/maneki/Navbar";
import Hero from "@/components/maneki/Hero";
import BatchBadge from "@/components/maneki/BatchBadge";
import TrustStrip from "@/components/maneki/TrustStrip";
import WhySection from "@/components/maneki/WhySection";
import Gallery from "@/components/maneki/Gallery";
import Products from "@/components/maneki/Products";
import Pricing from "@/components/maneki/Pricing";
import Compliance from "@/components/maneki/Compliance";
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
    <BatchBadge />
    <TrustStrip />
    <WhySection />
    <Gallery />
    <Products />
    <Pricing />
    <Compliance />
    <JapanTrust />
    <WhoWeServe />
    <Contact />
    <Footer />
  </>
);

export default Index;
