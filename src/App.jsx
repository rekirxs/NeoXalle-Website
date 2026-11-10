import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Demo from './components/Demo';
import Inside from './components/Inside';
import Features from './components/Features';
import Sports from './components/Sports';
import Specs from './components/Specs';
import Faq from './components/Faq';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Demo />
        <Inside />
        <Features />
        <Sports />
        <Specs />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
