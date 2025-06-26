
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Certificate } from '@/components/Certificate';
import { Gallery } from '@/components/Gallery';
import { Faculty } from '@/components/Faculty';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import Footer from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Certificate />
      <Gallery />
      <Faculty />
      {/* <Stats /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
