import { createRef } from "react"
import Home from "../pages"
import About from "../pages/about"
import EpisodePage from "../pages/episodes"
import Articles from "../pages/articles"
import Post from "../pages/singlePost"

const routes = [
    {path: "/", name: "Home", element: <Home />, nodeRef: createRef()},
    { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
    {path: "/episodes", name: 'Episodes', element: <EpisodePage />, nodeRef: createRef()},
    {path: "/articles", name: 'Articles', element: <Articles />, nodeRef: createRef()},
    {path: "/articles/:id", name: "Post", element: <Post />, nodeRef: createRef()}
]

export default routes