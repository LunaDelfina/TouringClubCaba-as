
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
      <div className="w-[90%] justify-self-center text-white mx-auto text-center mt-[20vh] md:mt-[10vh] z-10 absolute">
      
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-px bg-white/50 rounded"/>
        <span className="text-[#F27507] font-bold tracking-widest text-sm">
        BIENVENIDO A
        </span>
        <div className="w-10 h-px bg-white/50 rounded"/>
      </div>
      
      <h1 className="titulo-playfair italic text-5xl md:text-[80px]  text-white font-bold">
        Touring Club
      </h1>

      <h3 className="text-lg mt-[2vh] text-white/80">
        Somos tu refugio perfecto en las sierras de Córdoba
      </h3>
      <h3 className="text-lg" >
        Elegí <span className="text-[#F27507] font-bold"><PalabraCambiando /></span>
      </h3>

      <div className="flex gap-2 justify-center">
        <button type="button" className=" text-sm border border-white/60 rounded text-white/80 hover:border-[#F27507] hover:text-[#F27507] transition-colors duration-200 px-4 py-2 mt-[3vh] italic font-medium">
        Reservar ahora
        </button>
        <button type="button" className="text-sm border border-white/60 rounded text-white/80 hover:border-[#F27507] hover:text-[#F27507] transition-colors duration-200 px-4 py-2 mt-[3vh] italic font-medium">
        Consultar por whatsapp
        </button>
      </div>
      </div>
      </FadeContent>

      
    </div>
    );
};

export default Principal;
