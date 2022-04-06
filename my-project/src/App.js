import './index.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Support from './components/customer-support/Support';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
    </>
  );
}

export default App;
