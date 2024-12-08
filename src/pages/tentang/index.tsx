import { Icon } from '@iconify/react/dist/iconify.js'

function Tentang() {
  return (
    <>
      <div className="text-white">
        <section className="mt-8 mb-5 bg-blue rounded-xl p-4 lg:w-2/4 mx-auto">
          <h1 className="text-2xl mb-2">Tentang</h1>
          <p>Website ini dikelola oleh Tenaga Administrasi Sekolah atau Operator. Jika ada kritik dan saran dapat menghubungi nomor kontak di bawah ini. Terima Kasih.</p>
        </section>
        <section className="mt-8 mb-5 bg-green rounded-xl p-4 lg:w-2/4 mx-auto">
          <h1 className="text-2xl mb-2">Kontak</h1>
          <figcaption className='flex items-center gap-2 mb-3'>
            <Icon icon="ic:baseline-whatsapp" width={20} />
            <p>+628-1324718895</p>
          </figcaption>
          <figcaption className='flex items-center gap-2'>
            <Icon icon="ic:outline-email" width={20} />
            <p>aldilukman99@gmail.com</p>
          </figcaption>
        </section>
      </div>
    </>
  )
}

export default Tentang