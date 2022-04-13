import './index.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Support from './components/customer-support/Support';
import Info from './components/info/Info';
import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';
import Partners from './components/partners/Partners';
import ContactForm from './components/contact/ContactForm';



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <Info/>
      <Partners/>
      <Pricing/>
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default App;
