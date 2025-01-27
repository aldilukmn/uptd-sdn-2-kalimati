import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Public from "../public";
import { Gtk, Home, Login, NotFound, Profil, Tentang } from "../../pages";
import Private from "../private";
import { Dashboard } from "../../pages/private";

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
  },
  {
    element: <Private/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  }
])

export default function Router (): JSX.Element {
  return <RouterProvider router={routers}/>
}