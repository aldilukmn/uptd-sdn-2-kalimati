import Skeleton from '@mui/material/Skeleton';
import { logoUrl, misi, profilDesc, visi } from "./data"
import { Stack } from '@mui/material';

function Profil() {
  return (
    <>
      <div className="my-10 text-justify">
        <div className="lg:flex gap-10 mb-20">
          <figure className={`w-1/6 ${logoUrl ? 'self-center' : ''}`}>
            { logoUrl ? 
            (
              <img src={logoUrl} alt="logo" className="mx-auto lg:mb-0 mb-10" />
            ) : (
              <Skeleton variant="circular" height="100%"/>
            )}
          </figure>
          <section className="bg-blue text-white p-4 rounded-xl w-full">
            <p className="text-xl">
              {
                profilDesc ? profilDesc : 
                <Stack >
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index}/>
                  ))}
                </Stack>
              }
            </p>
          </section>
        </div>
        <section className="bg-green text-white rounded-xl p-5 mb-20">
          <h3 className="text-3xl font-semibold text-center mb-5">VISI</h3>
          <p className=" text-lg">
            {
              visi[0]?.visi
            }
          </p>
          <ol className="list-decimal ml-4">
            {
              visi[0].point.map((value, index) => (
                <li key={index}>
                  {value.desc}
                </li>
              ))
            }
          </ol>
        </section>
        <section className="bg-green text-white rounded-xl p-5 mb-20">
          <h3 className="text-3xl font-semibold text-center mb-2">MISI</h3>
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