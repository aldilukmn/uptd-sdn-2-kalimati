import Navlink from "./NavLink"

function Navbar() {
  return (
    <>
      <section className="flex justify-between border-b pb-3 font-semibold text-black items-center">
        <h1 className="text-3xl">UPTD SDN 2 KALIMATI</h1>
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