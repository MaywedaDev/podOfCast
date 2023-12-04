
import Footer from "./footer";
import { CSSTransition, SwitchTransition, Transition } from 'react-transition-group'
import { useOutlet, useLocation } from "react-router-dom";
import routes from "../routes";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Layout = () => {

    const location = useLocation()
    const currentRoute = useOutlet()
    const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
    const preloaderRef = useRef()
    const bodyRef = useRef()

    const tl = useRef()

    const play = useRef()

    const reverse = useRef()

    // useEffect(() => {
    //     console.log(nodeRef)
    // }, [])

    useLayoutEffect(() => {
        play.current = () => {
            console.log("playing...")
            gsap.to(preloaderRef.current, 
                {
                    yPercent: -100,
                    duration: .8
                })
        }
    
        reverse.current = () => {
            console.log("reverse...")
            gsap.to(preloaderRef.current, 
                {
                    yPercent: 0,
                    duration: .8
                })
        }

        return () => {play.current = null; reverse.current = null}
    }, [])

    

    // const play = useRef(() => {
    //     // tl.current.play()
        
    // })

    // const reverse = useRef(() => {
    //     // tl.current.reverse()
        
    // })

    return ( <div className="w-full min-h-screen overflow-hidden relative" ref={bodyRef}>
        <SwitchTransition>
            <Transition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={800}
                onEntered={reverse.current}
                onExiting={play.current}
                mountOnEnter
                unmountOnExit
                in={true}
            >
                {(state) => (<>
                    <div ref={nodeRef}>
                        {currentRoute}
                        <Footer />
                    </div> 
                </>)}
            </Transition>
        </SwitchTransition>
        <div className="fixed translate-y-[100%] top-0 bottom-0 left-0 right-0 bg-red-600 z-50" ref={preloaderRef}></div>
    </div> );
}
 
export default Layout;

//