import { Outlet } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"
import SideBar from "../../components/navbar/private"
import Protected from "../router/protected"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { setToastMessage } from "../../redux/action/toast"
import { showToast } from "../../helpers"

function Private() {
  const dispatch = useDispatch<AppDispatch>();
  const toastMessage  = useSelector((state: RootState) => state.toastReducer.message);
  useEffect(() => {
    if (toastMessage) {
      showToast(toastMessage, 'success')
      dispatch(setToastMessage(null));
    }
  }, [toastMessage, dispatch])
  return (
    <>
      <Protected>
        <Header/>
        <div className="flex h-dvh">
          <SideBar/>
          <Outlet/>
        </div>
        <Footer/>
      </Protected>
    </>
  )
}

export default Private