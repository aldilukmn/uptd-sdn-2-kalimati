import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function Public() {
  return (
    <>
      <div className='bg-white sm:mx-20 mx-10 mt-10 mb-20 font-quicksand'>
        <Navbar/>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Public