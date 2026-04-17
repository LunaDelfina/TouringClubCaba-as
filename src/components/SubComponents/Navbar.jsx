import logo from "../../img/logo.png";
import user from "../../icons/avatar.png";
import search from "../../icons/search.png";
import Iconos from "./icons.jsx";

const Navbar = () => {
  return (
    <nav className="pt-6 font-roboto">

      {/* Fila superior: email + iconos — solo desktop */}
      <div className="hidden md:flex w-[78%] justify-end mx-auto mt-[1vh] mb-[3vh]">
        <Iconos/>
      </div>

      {/* Contenedor principal */}
      <div className="mx-auto w-[90%] md:w-[78%]">

        {/* Mobile: logo + iconos arriba */}
        <div className="flex md:hidden justify-between items-center mb-3">
          
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain mt-5" />
          <div className="flex gap-3">
            <Iconos/>
          </div>
        </div>

        {/* Barra de navegación */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

          {/* Menú izquierdo — orden 1 en desktop, debajo en mobile */}
          <div className="hidden  md:order-1 md:w-[35%] md:justify-between md:flex
                          overflow-x-auto gap-6 md:gap-0
                          border-y-2 border-white/60 py-1.5 md:px-8
                          text-white tracking-wider font-medium text-sm italic md:text-[17px]">
            <a href="#Complejo"><p className="whitespace-nowrap">Complejo</p></a>
            <a href="#Cabañas"><p className="whitespace-nowrap">Cabañas</p></a>
            <a href="#Fotos"><p className="whitespace-nowrap">Fotos</p></a>
            {/* Solo visibles en mobile (unificamos los dos menús) */}
           </div>

          {/* Logo — orden 2 en desktop, arriba en mobile (ya renderizado arriba) */}
          <div className="hidden md:block md:order-2 mx-10">
            <img src={logo} alt="Logo"
              className="h-[11vh] w-auto max-w-none object-contain mt-[1vh]" />
          </div>

          {/* Menú derecho — orden 3, solo desktop */}
          <div className="hidden md:flex md:order-3 w-[35%] justify-between
                          border-y-2 border-white/60 py-1.5 px-8
                          text-white italic tracking-wider font-medium text-[17px] h-fit">
            <a href="#Actividades"><p>Actividades</p></a>
            <a href="#Reseñas"><p>Reseñas</p></a>
            <a href="#Contactanos"><p>Contactanos</p></a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;