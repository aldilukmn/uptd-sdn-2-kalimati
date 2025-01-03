import { currentYear } from "./data"

function Footer() {
  return (
    <>
      <section className="bg-black text-white text-center py-16">
        <h3>Copyright &copy; {currentYear} || UPTD SDN 2 Kalimati</h3>
      </section>
    </>
  )
}

export default Footer