import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'

function Public() {
  return (
    <>
      <div className='bg-white md:my-20 my-10 md:mx-40 mx-10 py-5 px-10 rounded font-patrick-hand'>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Public