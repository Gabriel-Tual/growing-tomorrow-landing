import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Process />
      <About />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
