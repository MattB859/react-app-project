import './index.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Support from './components/customer-support/Support';
import Info from './components/info/Info';
import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <Info/>
      <Pricing/>
      <Footer/>
    </>
  );
}

export default App;
