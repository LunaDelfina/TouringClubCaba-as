import Navbar from "./SubComponents/Navbar.jsx";
import Titles from "./SubComponents/Titles.jsx";
import Waves from "./SubComponents/waves.jsx";
import WavesMobile from "./SubComponents/wavesmobile.jsx";
import bg from "../img/hero-bg.jpg";

import { motion } from "motion/react"
const Hero = () => {
  return (
    <section className=" h-[100dvh] snap-start overflow-hidden  relative">
      <img src={bg} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0"
      style={{
  background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.25) 100%)"
}} ></div>

      <div className="relative z-10 h-[100vh]">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
        </motion.div>
        <Titles />
        <Waves />
        <WavesMobile />
      </div>
    </section>
  );
};
export default Hero;
