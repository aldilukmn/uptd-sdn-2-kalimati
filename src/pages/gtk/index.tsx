import { useState } from "react"
import { identityGtk } from "./data";

function Gtk() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [isHead, setIsHead] = useState(false);
  const toggleParagraph = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
    setIsHead(false);
  }
  const toggleHead = () => {
    setIsHead((prev) => !prev)
    setIsOpen(null)
  }

  return (
    <>
      <section>
        <h1 className="font-bold text-2xl text-center mt-10 mb-10">Guru dan Tenaga Kependidikan</h1>
        <div className="mb-5 w-80 mx-auto text-white" onClick={toggleHead}>
          <h3 className={`bg-blue text-center py-3 rounded-t-md cursor-pointer font-semibold text-xl ${isHead ? 'rounded-t-md' : 'rounded-md'}`}>KEPALA SEKOLAH</h3>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-blue-soft flex flex-col items-center ${isHead ? 'max-h-dvh py-5 opacity-100 rounded-b-md' : 'max-h-0 opacity-0'}`}>
            <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717941113/uptd%20sdn%202%20kalimati/images/es3ac6l8ugoum9jeijmp.png" alt="Kepala Sekolah" width={125} className="rounded-full mx-auto mb-5" />
            <h4 className=" tracking-wide">Dewi Arti Handayani, S.Pd.SD.</h4>
            <h4>NIP. 19730330 200701 2 005</h4>
          </div>
        </div>
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