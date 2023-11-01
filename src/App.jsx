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

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='episodes' element={<EpisodePage />} />
          <Route path='articles'>
              <Route index element={<Articles />} />
              <Route path=':id' element={<Post />} />
          </Route>
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
