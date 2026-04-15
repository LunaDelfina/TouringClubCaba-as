import "./index.css";
import Hero from "./components/Hero.jsx";
import Complejo from "./components/complejo.jsx";
import Cabañas from "./components/Cabañas.jsx";
import Galeria from "./components/Gallery.jsx";
import TransitionWave from "./DecorationComponents/TransitionWave.jsx";
import Actividades from "./components/actividades.jsx";
import Opiniones from "./components/Opiniones.jsx";
import Encontranos from "./components/Encontranos.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <Complejo />
      <Cabañas />
      <TransitionWave />
      <Galeria />
      <Actividades />
      <Opiniones /> 
      <TransitionWave />
      <Encontranos />
      <Footer />
      

    </div>
  );
}

export default App;
