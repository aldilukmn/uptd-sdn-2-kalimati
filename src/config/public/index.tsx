import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function Public() {
  return (
    <div className='relative overflow-x-hidden'>
      <div className='bg-white lg:mx-14 mx-10 mt-10 mb-20 font-quicksand'>
        <Navbar/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Public