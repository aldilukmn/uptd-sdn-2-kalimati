import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer'
import Time from '../../components/time'
import Navbar from '../../components/navbar/public'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useEffect } from 'react';
import { setToastMessage } from '../../redux/action/toast';
import LocalStorage from '../localStorage';
import { showToast } from '../../helpers';

function Public() {
  const dispatch = useDispatch<AppDispatch>();
  const toastMessage  = useSelector((state: RootState) => state.toastReducer.message);
  const getToken: string = LocalStorage.getToken;
  useEffect(() => {
    if (toastMessage) {
      showToast(toastMessage, 'success');
      dispatch(setToastMessage(null));
    }
  }, [toastMessage, dispatch, getToken])
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