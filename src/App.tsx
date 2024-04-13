import './App.css'
import AdsComponent from './components/AdsComponent'
import { createBrowserRouter, createRoutesFromElements, Link, MemoryRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NavFooter from './components/NavFooter'
import NavigationBar from './components/NavigationBar'
import Contact from './pages/Contact'
import Warranty from './pages/Warranty'
import { Switch } from '@nextui-org/react'

const App = () => {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Home />}>
  //       {/* <Route path="home" element={<Home />} /> */}
  //       <Route path="warranty" element={<Warranty />} />
  //       <Route path="policies" element={<Contact />} />
  //     </Route>
  //   )
  // )

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     errorElement: <Home />,
  //     children: [
  //       { path: "/warranty", element: <Warranty /> },
  //       { path: "/policies", element: <Contact /> },
  //       { path: "/", element: <Home /> },
  //     ]
  //   },

  // ])


  return (
    <div className="h-[100vh]">
      {/* <AdsComponent /> */}
      <NavigationBar />
      {/* <RouterProvider router={router} /> */}

      <NavFooter />
    </div>
  )
}

export default App
