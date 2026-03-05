import { Helmet } from "react-helmet-async";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedWork from "../components/FeaturedWork";
import About from "../components/About";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingShapes from "../components/FloatingShapes";
import FloatingPhoneButton from "../components/FloatingPhoneButton";
import CustomCursor from "../components/CustomCursor";
import Preloader from "../components/Preloader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pointer-events-auto md:cursor-none">
      <Preloader />
      <CustomCursor />
      <Helmet>
        <title>Signature Photography | Wedding & Portrait Photographer</title>
        <meta name="description" content="Professional wedding and portrait photography capturing life's most precious moments with artistic vision and timeless elegance." />
        <meta name="keywords" content="wedding photography, portrait photographer, event photography, professional photographer" />

        {/* OpenGraph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://signaturephotography.com/" />
        <meta property="og:title" content="Signature Photography | Wedding & Portrait Photographer" />
        <meta property="og:description" content="Professional wedding and portrait photography capturing life's most precious moments with artistic vision and timeless elegance." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1554048612-b6a836894cde?q=80&w=1200&auto=format&fit=crop" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://signaturephotography.com/" />
        <meta property="twitter:title" content="Signature Photography | Wedding & Portrait Photographer" />
        <meta property="twitter:description" content="Professional wedding and portrait photography capturing life's most precious moments with artistic vision." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1554048612-b6a836894cde?q=80&w=1200&auto=format&fit=crop" />
      </Helmet>
      <FloatingShapes />
      <Navigation />
      <Hero />
      <FeaturedWork />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingPhoneButton />
    </div>
  );
};

export default Index;
