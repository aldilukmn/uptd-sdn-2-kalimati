import { Link } from "react-router-dom"
import Navlink from "./NavLink"

function Navbar() {
  return (
    <>
      <section className="flex justify-between px-20 border-b-2 pb-5 font-semibold items-center">
        {/* <h1 className="text-3xl">UPTD SDN 2 KALIMATI</h1> */}
        <figure>
          <Link to={"/"}>
            <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717920310/uptd%20sdn%202%20kalimati/svg/vapqm0latukpxjjawzfu.svg" width={75} alt="logo" />
          </Link>
        </figure>
        <div className="flex gap-10 tracking-widest">
          <Navlink to="/" children="Beranda"/>
          <Navlink to="/profil" children="Profil"/>
          <Navlink to="/tentang" children="Tentang"/>
        </div>
      </section>
    </>
  )
}

export default Navbar