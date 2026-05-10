import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import InteractiveLandscape from "@/components/InteractiveLandscape";
import Offers from "@/components/Offers";
import RegenerationPathway from "@/components/RegenerationPathway";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Offers />
      <Process />
      <RegenerationPathway />
      <About />
      <Testimonials />
      <CTA />
      <InteractiveLandscape />
      <Footer />
    </main>
  );
};

export default Index;
