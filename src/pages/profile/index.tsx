import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';
import { logoUrl, misi, profilDesc, visi } from './data';

function Profil() {
  return (
    <>
      <div className="my-10 text-justify">
        <div className="lg:flex gap-10 mb-20">
          <figure className={`lg:w-1/6 w-1/3 mx-auto ${logoUrl ? 'self-center' : ''}`}>
            { logoUrl ? 
            (
              <img src={logoUrl} alt="logo" className=" lg:mb-0 mb-10" />
            ) : (
              <Skeleton variant="circular" height={150} width={150} className='lg:mb-0 mb-10' />
            )}
          </figure>
          <section className="bg-blue text-white p-4 rounded-xl w-full">
            <p className="md:text-lg">
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
          <h3 className="md:text-2xl text-lg font-semibold text-center mb-5">VISI</h3>
          <p className="md:text-lg">
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
          <h3 className="md:text-2xl text-lg font-semibold text-center mb-2">MISI</h3>
          <ol className="md:text-lg list-decimal ml-4">
            {
              misi.map((value, index) => (
                <li key={index}>
                  {value.misi}
                </li>
              ))
            }
          </ol>
        </section>
      </div>
    </>
  )
}

export default Profil