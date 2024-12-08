import Skeleton from "react-loading-skeleton"
import { misi, visi } from "./data"

function Profil() {
  return (
    <>
      <div className="my-10">
        <div className="lg:flex gap-10 mb-20">
          {<img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717920310/uptd%20sdn%202%20kalimati/svg/vapqm0latukpxjjawzfu.svg" alt="logo" width={300} className="mx-auto lg:mb-0 mb-10" /> || <Skeleton style={{ width: '50vh', height: '40vh' }}/>}
          <section className="bg-blue text-white p-4 rounded-xl">
            <p className="text-xl">
              UPTD SD Negeri 2 Kalimati merupakan Sekolah Dasar yang berlokasi di Blok Beringin Desa Kalimati Kecamatana Jatibarang Kabupaten Indramayu Jawa Barat. Sekolah Dasar yang dikepalai oleh Ibu Dewi Arti Handayani, S.Pd.SD. dan Guru yang berjumlah 8 orang serta Tenaga Administrasi dan Penjaga Sekolah. Selain itu, siswa/i di UPTD SD Negeri 2 Kalimati berjumlah 121 siswa/i.
            </p>
          </section>
        </div>
        <section className="bg-green text-white rounded-xl p-5 mb-20">
          <h3 className="text-4xl text-center mb-2">VISI</h3>
          <p className=" text-lg">
            {
              visi[0]?.visi
            }
            <ol className="list-decimal ml-4">
              {
                visi[0].point.map((value, index) => (
                  <>
                    <li key={index}>
                      {value.desc}
                    </li>
                  </>
                ))
              }
            </ol>
          </p>
        </section>
        <section className="bg-green text-white rounded-xl p-5 mb-20">
          <h3 className="text-4xl text-center mb-2">MISI</h3>
          <ol className="text-lg list-decimal ml-4">
            {
              misi.map((value, index) => (
                <li key={index}>
                  {value.misi}
                </li>
              ))
            }
          </ol>
        </section>
        {/* <div>
          <h3 className="text-center font-bold text-3xl mb-10">Guru dan Tenaga Kependidikan</h3>
          <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717941113/uptd%20sdn%202%20kalimati/images/es3ac6l8ugoum9jeijmp.png" alt="kepala-sekolah" className="rounded-full border-4 border-gray-300 mx-auto mb-2" width={200} />
          <figcaption className="text-center">
            <h5 className="text-xl font-semibold">KEPALA SEKOLAH</h5>
            <h6 className="text-lg">DEWI ARTI HANDAYANI, S.Pd.SD.</h6>
            <h6>NIP. 19730330 200701 2 005</h6>
          </figcaption>
          <div className="mt-10 grid lg:grid-cols-4 grid-cols-2 gap-10">
            {
              identitasGuru.map((value, index) => (
                <>
                  <div key={index}>
                    <img src={value.foto} alt={value.status} className="rounded-full border-4 border-gray-300 mb-2 mx-auto" width={200} />
                    <figcaption className="text-center">
                      <h5 className="text-xl font-semibold">{value.status}</h5>
                      <h6 className="text-lg">{value.nama}</h6>
                      <h6>NIP. {value.nip}</h6>
                    </figcaption>
                  </div>
                </>
              ))
            }
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Profil