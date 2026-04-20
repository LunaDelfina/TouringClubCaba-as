const CabanasSelecter = ({ data, activeCabin, onSelect, classname="" }) => {
  return (
    <div className={`bg-[#1a120a] hidden md:flex flex-col p-5 gap-2 w-[40%] ${classname}`}>
        <h2 className="text-white/70    font-bold mb-2 text-sm uppercase tracking-widest">Nuestras cabañas</h2>
      {data.map((cabaña, i) => (
        <div
          key={cabaña.id}
          onClick={() => onSelect(i)}
          className={`rounded-[14px] p-3 flex items-center gap-3 cursor-pointer transition-all duration-200
            ${i === activeCabin
              ? "bg-[#F27507]/15 border border-[#F27507]/35"
              : "border border-white/10 hover:bg-white/5"
            }`}
        >
          <img
            src={cabaña.photos[0]}
            alt={cabaña.name}
            className="w-11 h-11 object-cover rounded-[10px] flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            
            <h2 className={`text-[15px] titulo-playfair font-bold truncate transition-colors duration-200
              ${i === activeCabin ? "text-white" : "text-white/70"}`}>
              {cabaña.name}
            </h2>
            <span className="text-[11px] font-bold text-[#F27507]">{cabaña.price} / noche</span>
          </div>
          <svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className={`w-3.5 h-3.5 flex-shrink-0 transition-colors duration-200 ${i === activeCabin ? "text-[#F27507]" : "text-white/20"}`}
          >
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </div>
      ))}

      <div className="mt-auto pt-4 border-t border-white/10">
        <p className="text-[11px] text-white/40 leading-relaxed">
          Todas las cabañas incluyen{" "}
          <span className="text-[#F27507] font-medium">parrilla, limpieza y estacionamiento</span>
        </p>
      </div>

    </div>
  );
};

export default CabanasSelecter;