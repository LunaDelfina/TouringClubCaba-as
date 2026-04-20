


const ActividadCard = ({ img, titulo, tag, desc,link, visible, delay }) => (
  <div
    className="flex-1 overflow-hidden bg-white rounded-[18px] shadow-[0_8px_32px_rgba(0,0,0,0.18)] flex flex-col transition-all duration-700"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transitionDelay: delay,
    }}
  >
    {/* Imagen */}
    <div className="relative overflow-hidden" style={{ height: "180px" }}>
      <img
        src={img}
        alt={titulo}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      {/* Tag */}
      <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white text-[10px] font-medium tracking-wide">{tag}</span>
      </div>
    </div>

    {/* Cuerpo */}
    <div className="p-4 flex flex-col gap-2 flex-1">
      <h3 className="titulo-playfair text-[#F27507] text-xl font-bold">{titulo}</h3>
      <p className="text-[#6E6E6E] text-[0.8rem] font-light leading-relaxed flex-1">{desc}</p>
      
    <a href={link} 
        className="flex items-center gap-1 text-[#F27507] text-[11px] font-medium mt-2 hover:gap-2 transition-all duration-200"
      >
        Ver más
        <svg viewBox="0 0 24 24" fill="none" stroke="#F27507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
)

export default ActividadCard
