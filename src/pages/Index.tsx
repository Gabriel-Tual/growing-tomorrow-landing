import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Offers from "@/components/Offers";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Process />
      <Offers />
      <About />
      <Testimonials />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
