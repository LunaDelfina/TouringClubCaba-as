import check from "../../icons/check.png";


const Datos = ({ cabin, index, total }) => {
  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-6">

      {/* TÍTULO */}
      <div className="mb-4">
        <p className="text-xs tracking-[0.2em] text-[#F55809] uppercase font-sans mb-2">
          Cabaña {index + 1} de {total}
        </p>
        <h1 className="titulo-playfair text-[#7D6239] text-[2.2rem] font-bold">
          {cabin.name}
        </h1>
        <div
          className="h-[4px] w-16 rounded-full mt-2 mb-4"
          style={{ background: "linear-gradient(90deg, #F27507 0%, #CC2329 100%)" }}
        />
        <p className="text-[#626262] font-light text-[0.9rem] leading-relaxed">
          {cabin.description}
        </p>
      </div>

      {/* FEATURES */}
      <div className="flex flex-col gap-2 mb-4">
        {cabin.features.map((item, i) => (
          <div key={i} className="flex gap-2 items-center">
            <img src={check} alt="check" className="w-4 h-4 object-contain" />
            <span className="text-[#6E6E6E] text-[0.875rem]">{item}</span>
          </div>
        ))}
      </div>

      {/* PRECIO + CTA */}
      <div className="flex items-center gap-6 mt-2">
        <div>
          <p className="text-[#F27507] font-extrabold text-[2rem] leading-none">
            {cabin.price}
          </p>
          <p className="text-[#B3B3B3] text-xs mt-1">por noche</p>
        </div>
        <button
          className="text-white text-[0.95rem] font-semibold rounded-[12px] px-6 py-2.5 hover:opacity-90 transition-opacity"
          style={{ background: "linear-gradient(90deg, #F27507 0%, #CC2329 100%)" }}
        >
          Reservar
        </button>
      </div>

    </div>
  );
};

export default Datos;