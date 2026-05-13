import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
