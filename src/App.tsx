
import Hero from "./components/Hero.jsx";
import Complejo from "./components/complejo.jsx";
import Cabañas from "./components/Cabañas.jsx";
import Galeria from "./components/Gallery.jsx";
import TransitionWave from "./DecorationComponents/TransitionWave.jsx";
import Actividades from "./components/actividades.jsx";
import Opiniones from "./components/Opiniones.jsx";
import Footer from "./Footer.jsx";

import CTA from "./components/CTASection.jsx"

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory overflow-x-hidden scrollbar-hide ">
      <Hero />
      <Complejo />
      <Cabañas />
      <TransitionWave />
      <Galeria />
      <Actividades />
      <Opiniones /> 
      <CTA/>
      <Footer />
      

    </div>
  );
}

export default App;
