import Nav from "../nav";
import PodSlider from "./PodSlider";
import { spiral, stars, apps } from "../../assets/images";
import PageScribble from "../icons/pageScribble";
import {gsap} from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";
import SplitType from "split-type";
const Hero = () => {

    const spiralRef = useRef(null)
    const tl1 = useRef();
    const el = useRef();
    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            tl1.current = gsap.timeline().from(".headerText span", {
                rotation:15,
                yPercent: 120,
                delay: .4,
                duration: .8
            })
            .from(spiralRef.current, {
                opacity: 0,
                duration: .5
            })
        }, el)

        return () => ctx.revert();
        
        // gsap.set(".headerText span",{
        //     rotation:15,
        //     yPercent: 120
        // })

        // tl1.to(".headerText span", {
        //     duration: .8,
        //     delay: 0.4,
        //     rotation: 0,
        //     yPercent: 0,
        //     stagger: 0.2,
        //     ease: "power1.out"
        // })
        

    }, [])



    return ( <div className="w-full bg-primary px-28 relative pb-28" ref={el}>
        <Nav />
        <div className="max-w-[550px] mx-auto flex flex-col">
            <h2 className="headerText text-[96px] font-bold capitalize text-center leading-[110px] overflow-hidden"><span className="inline-block">Your Daily</span></h2>
            <h2 className="headerText text-[96px] font-bold capitalize text-center leading-[110px] text-text-primary overflow-hidden"><span className="inline-block">Podcast</span></h2>
            <p className="my-8 text-light-gray text-center leading-7 font-medium max-w-[310px] w-full mx-auto">We cover all kinds of categories and a weekly special guest.</p>
            <button className="mx-auto py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black rounded-lg hover:bg-transparent hover:text-black transition-all duration-300">Subscribe</button>
        </div>
        <img ref={spiralRef} className="absolute left-0 top-20" src={spiral} />
        <img className="absolute right-14 top-[238px]" height={216} width={155}  src={stars} />
        <PodSlider />
        <div className="border-y border-grey py-8 flex gap-x-4 items-center">
            <h3 className="text-[22px] font-bold mr-auto">Supported by:</h3>
            {Object.entries(apps).map(([key, value]) => {
                return <div className="my-4 w-[23%]" key={key}><img className="mx-auto" src={value} alt="" /></div>
            })}
            {/* <div className="my-4 w-[23%]"></div>
            <div className="my-4 w-[23%]"></div> */}
        </div>
        <div className="absolute text-text-primary left-[calc((100%-46px)/2)] -bottom-[75px]">
            <PageScribble />
        </div>
    </div> );
}
 
export default Hero;