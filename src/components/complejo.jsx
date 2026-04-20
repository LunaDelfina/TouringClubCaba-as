import { useState } from "react";
import { motion } from "framer-motion"; // solo si Backg lo necesita
import Backg from "../DecorationComponents/BackgroundWaves.jsx";
import ComplejoCard from "./SubComponents/ComplejoCard.jsx";
import FeatureChips from "./SubComponents/FeatureChips.jsx";

import Pileta   from "../icons/swimmer.png";
import Pet      from "../icons/pet.png";
import Wifi     from "../icons/wifi.png";
import Niños    from "../icons/niños.png";
import Espacios from "../icons/espacios.png";

import Video       from "../img/hero-bg.jpg";
import petfriendly from "../img/CabañasCaract/petfriendly.jpg";
import wifiImg     from "../img/CabañasCaract/wifi.jpg";
import playground  from "../img/CabañasCaract/playground.jpg";
import parrilla    from "../img/CabañasCaract/parrilla.jpg";

// imageIndex apunta al índice dentro de complejoImages
const complejoImages = [Video, petfriendly, wifiImg, playground, parrilla];

const features = [
  { icon: Pileta,   label: "Pileta al aire libre",       imageIndex: 0 }, // hero-bg
  { icon: Pet,      label: "Pet friendly",               imageIndex: 1 },
  { icon: Wifi,     label: "Wifi en todo el complejo",   imageIndex: 2 },
  { icon: Niños,    label: "Zona de juegos para niños",  imageIndex: 3 },
  { icon: Espacios, label: "Parrillas y espacios verdes",imageIndex: 4 },
];

const Complejo = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section 
    id="Complejo"
      className="relative h-[100dvh] snap-start overflow-x-visible flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #F3FEFF 0%, #EFE6D8 49.52%, #D8C4A5 90.38%)",
      }}
    >
      <Backg />
      <div className="relative z-10 w-[90%] md:w-[75%] max-w-5xl mx-auto flex flex-col gap-4">
        <ComplejoCard images={complejoImages} hoveredImage={hoveredImage} />
        <FeatureChips features={features} onHover={setHoveredImage} />
      </div>
    </section>
  );
};

export default Complejo;