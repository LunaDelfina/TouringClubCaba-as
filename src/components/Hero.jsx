import Navbar from "./SubComponents/Navbar.jsx";
import Titles from "./SubComponents/Titles.jsx";
import Waves from "./waves.jsx";
import bg from "../img/hero-bg.jpg";

import { motion } from "motion/react"
const Hero = () => {
  return (
    <section className=" h-screen snap-start overflow-hidden  relative">
      <img src={bg} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60 "></div>

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
      </div>
    </section>
  );
};
export default Hero;
