import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer'
import Time from '../../components/time'
import Navbar from '../../components/navbar/public'

function Public() {
  return (
    <div className='relative overflow-x-hidden max-w-[1450px] mx-auto'>
      <Time/>
      <div className='bg-white lg:mx-14 mx-10 mt-10 mb-20 font-quicksand'>
        <Navbar/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Public