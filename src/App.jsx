import { useState } from 'react'
import Home from './pages'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from './components/layout';
import About from './pages/about';
import EpisodePage from './pages/episodes';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Articles from './pages/articles';
import Post from './pages/singlePost';
import routes from './routes';
gsap.registerPlugin(ScrollTrigger)

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />} >
          {routes.map((route) => {
            if (route.path === "/"){
              return <Route key={route.name} index element={route.element} />
            }
            return <Route key={route.name} path={route.path} element={route.element} />
          })
          }
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
