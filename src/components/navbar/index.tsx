import { Link } from "react-router-dom"
import Navlink from "./navlink"
import { Icon } from "@iconify/react/dist/iconify.js"
import { screenSize } from "../../libs/screenSize"
import { useState } from "react";

function Navbar() {
  const { width } = screenSize();
  const [isNav, setIsNav] = useState(false);
  const handleClick = () => {
    setIsNav(!isNav)
  }
  return (
    <>
      <section className="flex justify-between lg:px-20 border-b-2 pb-5 font-semibold items-center">
        {/* <h1 className="text-3xl">UPTD SDN 2 KALIMATI</h1> */}
        <figure>
          <Link to={"/"}>
            <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717920310/uptd%20sdn%202%20kalimati/svg/vapqm0latukpxjjawzfu.svg" width={75} alt="logo" />
          </Link>
        </figure>
        <div className="flex gap-10 tracking-widest">
          {
            width > 1024 ? (
            <>
              <Navlink to="/" children="Beranda"/>
              <Navlink to="/profil" children="Profil"/>
              <Navlink to="/gtk" children="GTK"/>
              <Navlink to="/tentang" children="Tentang"/>
            </>
            ) : (
            <div onClick={handleClick}>
              <>
                <Icon icon="material-symbols:menu-rounded" className="cursor-pointer" width="36" />
                <div className={`flex flex-col absolute bg-black text-white bottom-0 -top-10  pr-32 pl-8 pt-24 z-50 gap-10 transition-all duration-300 ease-in-out ${isNav ? 'right-0' : '-right-96'}`}>
                  <Navlink to="/" children="Beranda"/>
                  <Navlink to="/profil" children="Profil" className="w-12"/>
                  <Navlink to="/gtk" children="GTK" className="w-9"/>
                  <Navlink to="/tentang" children="Tentang"/>
                </div>
                <span className={`bg-black absolute left-0 right-0 -top-10 bottom-0 z-40 ${isNav ? 'opacity-50' : 'hidden'}`}></span>
              </>
            </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Navbar