import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import Navlink from "../navlink";
import { screenSize } from "../../../libs";
import MenuIcon from '@mui/icons-material/Menu';
import listNav from "./data";
import { MaterialUISwitch } from "../style";

function Navbar() {
  const { width } = screenSize();
  const [isNav, setIsNav] = useState(false);
  const getToken: boolean = !!localStorage.getItem('access_token');
  const handleClick = () => {
    setIsNav(!isNav)
  }
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      window.matchMedia("(prefers-color-scheme: dark)").matches
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      window.matchMedia("(prefers-color-scheme: dark)").matches
    }
  }, [darkMode]);
  return (
    <>
      <section className="flex justify-between lg:px-16 md:px-10 border-b-2 pb-5 font-semibold items-center ">
        {/* <h1 className="text-3xl">UPTD SDN 2 KALIMATI</h1> */}
        <figure>
          <Link to={"/"}>
            <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717920310/uptd%20sdn%202%20kalimati/svg/vapqm0latukpxjjawzfu.svg" className="md:w-18 sm:w-16 w-12" alt="logo" />
          </Link>
        </figure>
        <MaterialUISwitch sx={{ m: 1 }} checked={darkMode} onClick={() => setDarkMode(!darkMode)}/>
        <div className="flex gap-10 tracking-widest items-center">
          {
            width > 768 ? (
            <>
              <Navlink to="/" children="Beranda" needHover={true}/>
              {
                listNav.map((link, key) => (
                  <Navlink key={key} {...link}/>
                ))
              }
              <Navlink to={`${getToken ? '/dashboard' : '/login' }`} children={`${getToken ? 'Dashboard' : 'Login' }`} className="text-white dark:text-dark px-5 py-2 rounded-md hover:bg-blue duration-300" needHover={false}/>
            </>
            ) : (
            <div onClick={handleClick}>
              <>
                <MenuIcon fontSize="medium" className="cursor-pointer"/>
                <div className={`md:text-lg text-sm flex flex-col absolute bg-black text-white bottom-0 -top-10 md:pr-40 pr-20 pl-8 pt-24 z-50 gap-10 transition-all duration-300 ease-in-out ${isNav ? 'right-0' : '-right-full'}`}>
                  <Navlink to="/" children="Beranda" needHover={true} className="w-[4.1rem]"/>
                  <Navlink to="/profil" children="Profil" needHover={true} className="w-11"/>
                  <Navlink to="/gtk" children="GTK" className="w-8" needHover={true}/>
                  <Navlink to="/tentang" children="Tentang" needHover={true} className="w-[4rem]"/>
                  <Navlink to={`${getToken ? '/dashboard' : '/login' }`} children={`${getToken ? 'Dashboard' : 'Login' }`} needHover={false} className=" text-white p-2 rounded-md text-center" />
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