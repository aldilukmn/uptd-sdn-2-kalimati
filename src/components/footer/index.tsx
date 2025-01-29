import { currentYear } from "./data"

function Footer() {
  return (
    <>
      <section className="bg-black text-white text-center py-16 sm:text-base text-sm">
        <h2 className="md:text-lg text-base font-semibold tracking-widest">UPTD SDN 2 KALIMATI</h2>
        <h3 className="font-semibold tracking-wide md:text-base">KECAMATAN JATIBARANG KABUPATEN INDRAMAYU
        </h3>
        <h4>Copyright &copy; {currentYear}</h4>
      </section>
    </>
  )
}

export default Footer