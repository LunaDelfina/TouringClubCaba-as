import { useEffect, useRef, useState } from "react"
import quotes from "../icons/quotes.png"


const reseñaData = [
    { reseña: "“Muy lindas cabañas, ubicadas cerca de la ruta en un lugar muy tranquilo! Cómodas y bien equipadas. Excelente la atención, muy amables y responden enseguida, y siempre con una sonrisa. Impecable. Para recomendar sin lugar a dudas! Muchas gracias!!”", usuario:"Ariel RC" },
    { reseña: "“Segundo año que venimos y siempre todo de diez. Las cabañas son cómodas, están muy bien equipadas con lo necesario para pasar unas vacaciones. La pileta impecable. Hay parque y juegos para niños . Y la atención de Mariana que está en todos los detalles. Es nuestro lugar cada vez que regresemos a Alta Gracia”", usuario:"Caro" },
    { reseña: "“Excelente lugar. Cabañas súper equipadas, muy grande. El lugar es hermoso, ideal para descansar y relajarte. El parquizado está muy cuidado, la pileta muy linda. La cabaña es muy cómoda, tiene balcón y parrillero individual. Atendido por sus dueños, Mariana una genia, nos ayudó siempre en todo .Sin dudas volveremos!!“", usuario:"Mariam Matta" }
    
]

const OpinionCard = ({ reseña, usuario, visible, delay }) => (
    <div className="bg-white  rounded-lg p-5 mt-5 text-left text-gray-800 shadow-lg transition-all duration-700 flex flex-col justify-between"
        style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: delay,
        }}>
        <img src={quotes} alt="Quote" className="w-8 md:w-10 h-8 md:h-10 mb-4 absolute top-[-15px] left-[-20px]" />
        <img src={quotes} alt="Quote" className="w-8 md:w-10 h-8 md:h-10 mb-4 absolute bottom-[-25px] right-[-20px]" />

        <p className="font-roboto font-light text-sm text-[#6E6E6E] leading-[1.15rem]">{reseña}</p>
        <div>
            <h3 className="text-xl font-playfair mt-4 text-[#F55809] font-bold text-center">{usuario}</h3>
            <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#F27507" }}>★</span>
                ))}
            </div>
        </div>
    </div>
)

const Opiniones = ({ visible }) => {
    const [current, setCurrent] = useState(0)
    const touchStartX=useRef(null);

    const next=()=> setCurrent(i=>(i+1)%reseñaData.length);
    const prev =()=> setCurrent(i=>(i===0?reseñaData.length-1:i-1));

const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    if (diff < -40) prev();
    touchStartX.current = null;
  };


    return (
        <div className="md:hidden ">
        <div className="w-full px-2"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}>
            <OpinionCard
                {...reseñaData[current]}
                visible={visible}
                delay="200ms"
            />
            
        </div>
        <div className=" mt-6 m-auto flex gap-2 w-fit  p-2 rounded-full bg-white">
        {reseñaData.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); }}
            className={`rounded-full transition-all duration-300
              
              ${i === current
                ? "w-6 h-2.5 bg-gradient-to-r from-[#F27507] to-[#CC2329]"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
          />
        ))}
      </div>
      </div>
    )
}

export default Opiniones
