import { Icon } from "@iconify/react/dist/iconify.js"

function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 text-2xl font-bold">
        <Icon icon="emojione-monotone:frowning-face" width="175" />
        <h2 className="tracking-widest mt-10">Halaman Tidak Ditemukan!</h2>
      </div> 
    </>
  )
}

export default NotFound