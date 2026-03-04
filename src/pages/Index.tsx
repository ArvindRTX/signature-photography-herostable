import { Helmet } from "react-helmet-async";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedWork from "../components/FeaturedWork";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingShapes from "../components/FloatingShapes";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Signature Photography | Wedding & Portrait Photographer</title>
        <meta name="description" content="Professional wedding and portrait photography capturing life's most precious moments with artistic vision and timeless elegance." />
        <meta name="keywords" content="wedding photography, portrait photographer, event photography, professional photographer" />
        <meta property="og:title" content="Signature Photography | Wedding & Portrait Photographer" />
        <meta property="og:description" content="Capturing life's most precious moments with artistic vision and timeless elegance." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <FloatingShapes />
      <Navigation />
      <Hero />
      <FeaturedWork />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
