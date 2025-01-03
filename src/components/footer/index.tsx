import { currentYear } from "./data"

function Footer() {
  return (
    <>
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-xl font-semibold">UPTD SDN 2 Kalimati</h2>
        <h3>Copyright &copy; {currentYear}</h3>
      </section>
    </>
  )
}

export default Footer