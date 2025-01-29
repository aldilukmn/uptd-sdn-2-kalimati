import { Link } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react";
import Navlink from "../navlink";
import { screenSize } from "../../../libs";

function Navbar() {
  const { width } = screenSize();
  const [isNav, setIsNav] = useState(false);
  const getToken: boolean = !!localStorage.getItem('access_token');
  const handleClick = () => {
    setIsNav(!isNav)
  }
  return (
    <>
      <section className="flex justify-between lg:px-16 md:px-10 border-b-2 pb-5 font-semibold items-center">
        {/* <h1 className="text-3xl">UPTD SDN 2 KALIMATI</h1> */}
        <figure>
          <Link to={"/"}>
            <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717920310/uptd%20sdn%202%20kalimati/svg/vapqm0latukpxjjawzfu.svg" width={75} alt="logo" />
          </Link>
        </figure>
        <div className="flex gap-10 tracking-widest items-center">
          {
            width > 768 ? (
            <>
              <Navlink to="/" children="Beranda" needHover={true}/>
              <Navlink to="/profil" children="Profil" needHover={true}/>
              <Navlink to="/gtk" children="GTK" needHover={true}/>
              <Navlink to="/tentang" children="Tentang" needHover={true}/>
              <Navlink to={`${getToken ? '/dashboard' : '/login' }`} children={`${getToken ? 'Dashboard' : 'Login' }`} className=" text-white px-5 py-2 rounded-md" needHover={false}/>
            </>
            ) : (
            <div onClick={handleClick}>
              <>
                <Icon icon="material-symbols:menu-rounded" className="cursor-pointer" width="36" />
                <div className={`flex flex-col absolute bg-black text-white bottom-0 -top-10 md:pr-4 pr-20 pl-8 pt-24 z-50 gap-10 transition-all duration-300 ease-in-out ${isNav ? 'right-0' : '-right-full'}`}>
                  <Navlink to="/" children="Beranda" needHover={true} className="w-[4.5rem]"/>
                  <Navlink to="/profil" children="Profil" needHover={true} className="w-12"/>
                  <Navlink to="/gtk" children="GTK" className="w-9" needHover={true}/>
                  <Navlink to="/tentang" children="Tentang" needHover={true} className="w-[4.5rem]"/>
                  <Navlink to={`${getToken ? '/dashboard' : '/login' }`} children={`${getToken ? 'Dashboard' : 'Login' }`} needHover={false} className=" text-white p-2 rounded-md" />
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