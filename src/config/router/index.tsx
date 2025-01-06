import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Profil from "../../pages/profil";
import Tentang from "../../pages/tentang";
import Public from "../public";
import Gtk from "../../pages/gtk";

const routers = createBrowserRouter([
  {
    element: <Public/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/profil',
        element: <Profil/>
      },
      {
        path: '/gtk',
        element: <Gtk/>
      },
      {
        path: '/tentang',
        element: <Tentang/>
      }
    ]
  }
])

export default function Router (): JSX.Element {
  return <RouterProvider router={routers}/>
}