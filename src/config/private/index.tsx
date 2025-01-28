import { Outlet } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"
import SideBar from "../../components/navbar/private"
import Protected from "../router/protected"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { toast } from "react-toastify"
import { firstCapitalizeWord } from "../../libs"
import { setToastMessage } from "../../redux/action/toast"

function Private() {
  const dispatch = useDispatch<AppDispatch>();
  const toastMessage  = useSelector((state: RootState) => state.toastReducer.message);
  useEffect(() => {
    if (toastMessage) {
      toast.success(firstCapitalizeWord(toastMessage), {
        position: "top-right",
        autoClose: 2000,
        closeButton: false
      });
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