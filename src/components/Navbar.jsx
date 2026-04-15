import logo from "../img/logo.png";
import user from "../icons/avatar.png";
import search from "../icons/search.png";
const Navbar = () => {
  return (
    <nav className="pt-6 font-roboto">
      <div className=" w-[78%] flex justify-between mx-auto mt-[1vh] mb-[3vh]">
        <p className="text-white text-[17px] font-light">
          infocabañas@nuevocentromuebles.com
        </p>
        <div className="flex gap-[1rem] ">
          <a>
            <img src={user} className="h-[25px] w-[25px]" />
          </a>
          <a>
            <img src={search} className="h-[25px] w-[25px]" />
          </a>
        </div>
      </div>
      <div className="mx-auto w-[78%]">
        <div className="flex items-center justify-between ">
          <div className="flex w-[35%] justify-between border-y-2 border-white/60 py-1.5 px-8 text-white tracking-wider font-medium text-[17px] h-fit">
            <p>Complejo</p>
            <p>Cabañas</p>
            <p>Fotos</p>
          </div>

          <div className="mx-10">
            <img
              src={logo}
              alt="Logo"
              className="h-[11vh] w-auto max-w-none object-contain mt-[1vh]"
            />
          </div>

          <div className="flex  w-[35%] justify-between border-y-2 border-white/60 py-1.5 px-8 text-white tracking-wider font-medium text-[17px] h-fit">
            <p>Actividades</p>
            <p>Reseñas</p>
            <p>Contactanos</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
