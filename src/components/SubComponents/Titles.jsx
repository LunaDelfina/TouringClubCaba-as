
import { motion } from "motion/react"
import FadeContent from '../ReactBits/FadeContentHero.jsx'



import PalabraCambiando from "./TextoReescrito.jsx";
const Principal = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
      
      </motion.div>

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="w-fit text-white mx-auto text-center mt-[10vh]">
        <h1 className="titulo-playfair text-[70px] text-white font-bold">
          Touring Club
        </h1>

        <h3 className="text-[30px] mt-[2vh]">
          Somos tu refugio perfecto en las sierras de Córdoba
        </h3>
        <h3 className="text-[30px]" >
          Elegí <span className="text-[#FF5733] font-bold"><PalabraCambiando /></span>
        </h3>
      </div>
      </FadeContent>

      
    </div>
  );
};

export default Principal;
