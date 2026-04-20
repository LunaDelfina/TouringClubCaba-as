import { motion } from "framer-motion";

const FeatureChips = ({ features, onHover }) => (
  <>
    {/* Desktop — igual que ahora, afuera */}
    <div className="hidden md:grid grid-cols-5 gap-3">
      {features.map(({ icon, label, imageIndex }, i) => (
        <motion.div
          key={label}
          className="bg-white/80 backdrop-blur-sm rounded-[18px] flex flex-col items-center justify-center gap-2 py-4 px-2 shadow-[0_2px_16px_rgba(80,40,10,0.07)] cursor-default"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.1, ease: "easeOut", delay: 0.1 + i * 0.03 }}
          whileHover={{ scale: 1.05, y: -4, boxShadow: "0 6px 24px rgba(80,40,10,0.13)" }}
          onMouseEnter={() => onHover(imageIndex)}
          onMouseLeave={() => onHover(null)}
        >
          <img src={icon} className="w-[36px] h-[36px] object-contain" alt={label} />
          <p className="text-[11.5px] font-medium text-[#6E6E6E] text-center leading-snug">{label}</p>
        </motion.div>
      ))}
    </div>

    {/* Mobile — chips compactos para ir dentro de la card */}
    
  </>
);

export default FeatureChips;