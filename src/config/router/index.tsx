import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Public from "../public";
import { Gtk, Home, Login, NotFound, Profil, Tentang } from "../../pages";

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
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ],
  }
])

export default function Router (): JSX.Element {
  return <RouterProvider router={routers}/>
}