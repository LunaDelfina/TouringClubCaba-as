import { useRef, useState } from "react"
import ActividadCard from "./actividadesCard.jsx"

const ActividadMobile = ({ actividades, visible }) => {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)

  const next = () => setCurrent(i => (i + 1) % actividades.length)
  const prev = () => setCurrent(i => (i === 0 ? actividades.length - 1 : i - 1))

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    if (diff < -40) prev()
    touchStartX.current = null
  }

  return (
    <div className="md:hidden w-full">
      <div className="w-full px-2" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <ActividadCard
          {...actividades[current]}
          visible={visible}
          delay="200ms"
        />
      </div>

      <div className="mt-6 mx-auto flex gap-2 w-fit p-2 rounded-full bg-white">
        {actividades.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-gradient-to-r from-[#F27507] to-[#CC2329]"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ActividadMobile