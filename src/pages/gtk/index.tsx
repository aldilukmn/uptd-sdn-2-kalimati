import { useState } from "react"
import { identityGtk } from "./data";

function Gtk() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const toggleParagraph = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  }

  return (
    <>
      <section>
        <h1 className="font-bold text-2xl text-center mt-10 mb-10">Guru dan Tenaga Kependidikan</h1>
        <div className="text-white grid md:grid-cols-3 lg:grid-cols-4 gap-5">
         {
          identityGtk.map((value, index) => (
            <div key={index}>
              <h3 className={`text-xl tracking-widest font-semibold text-center cursor-pointer py-3 bg-blue transition-all duration-500 ease-in-out ${isOpen === index ? 'rounded-t-md' : 'rounded-md'}`} onClick={() => toggleParagraph(index)}>{value.status}</h3>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-blue-soft flex flex-col items-center ${isOpen === index ? 'max-h-dvh py-5 opacity-100 rounded-b-md' : 'max-h-0 opacity-0'}`}>
                <img src={value.photo} alt={value.status} width={125} className="rounded-full mb-5"/>
                <h4 className="text-center font-semibold tracking-wide">
                  {value.name}
                </h4>
                <h4>NIP : {value.nip}</h4>
              </div>
            </div>
          ))
         }
        </div>
      </section>
    </>
  )
}

export default Gtk