import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Tentang() {
  return (
    <>
      <div className="text-white">
        <section className="mt-8 mb-5 bg-blue rounded-xl p-4 lg:w-2/4 md:w-3/4 mx-auto">
          <h1 className="md:text-xl font-semibold mb-2">Tentang</h1>
          <p className='text-justify md:text-base text-sm'>Website ini dikelola oleh Tenaga Administrasi Sekolah atau Operator. Jika ada kritik dan saran dapat menghubungi nomor kontak di bawah ini. Terima Kasih.</p>
        </section>
        <section className="mt-8 mb-5 bg-green rounded-xl p-4 lg:w-2/4 md:w-3/4 mx-auto">
          <h1 className="md:text-xl font-semibold mb-2">Kontak</h1>
          <figcaption className='flex items-center gap-2 mb-3 md:text-base text-sm'>
            <WhatsAppIcon/>
            <p>+628-1324718895</p>
          </figcaption>
          <figcaption className='flex items-center gap-2 md:text-base text-sm'>
            <MailOutlineIcon/>
            <p>uptdsdnegeri2kalimati@gmail.com</p>
          </figcaption>
        </section>
      </div>
    </>
  )
}

export default Tentang