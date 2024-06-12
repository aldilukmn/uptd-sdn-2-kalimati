import Skeleton from "react-loading-skeleton"
import { identitasGuru } from "./data"

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
          <h3 className="text-2xl text-center mb-2">VISI</h3>
          <p className="mb-5 border-b pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ut omnis deleniti magnam, nam quos rem consequuntur itaque laboriosam inventore, harum dolorum reprehenderit culpa pariatur necessitatibus fugit esse non vel sit temporibus voluptate veritatis soluta sint facilis. Consequatur sunt dicta, molestias accusantium totam omnis magnam ipsum doloribus quae corporis tenetur.</p>
          <h3 className="text-2xl text-center mb-2">MISI</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, similique.</p>
          <ol style={{ listStyle: 'decimal' }} className="md:ml-4">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nesciunt.</li>
          </ol>
        </section>
        <div>
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
        </div>
      </div>
    </>
  )
}

export default Profil