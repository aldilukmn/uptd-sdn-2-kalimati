import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <section className="flex justify-between border-b pb-3 font-semibold text-black">
        <h1 className="text-3xl">UPTD SDN 2 KALIMATI</h1>
        <div className="flex gap-10 tracking-widest">
          <Link to={'/'}>
            Beranda
          </Link>
          <Link to={'/profil'}>
            Profil
          </Link>
          <Link to={'/tentang'}>
            Tentang
          </Link>
        </div>
      </section>
    </>
  )
}

export default Navbar