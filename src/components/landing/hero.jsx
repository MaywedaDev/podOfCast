import Nav from "../nav";
import PodSlider from "./PodSlider";
import { spiral, stars, apps } from "../../assets/images";
import PageScribble from "../icons/pageScribble";
import {gsap} from "gsap";
import { useRef, useLayoutEffect } from "react";

const Hero = () => {

    const spiralRef = useRef(null), starRef = useRef(null), sponsors = useRef(null) 
    const tl1 = useRef();
    const el = useRef();
    const pods = useRef();
    const navbar = useRef();

    const body = document.body

    useLayoutEffect(() => {
        body.style.position = "fixed"
        
        const ctx = gsap.context(() => {
            
            tl1.current = gsap.timeline().from(".headerText span", {
                rotation:15,
                yPercent: 120,
                delay: .4,
                duration: 1,
                ease: "elastic.out(1, 0.75)"
            })
            .from([spiralRef.current, starRef.current], {
                opacity: 0,
                duration: .5
            }).from("p", {
                opacity: 0,
                y: 20,
                ease: "power3.out",
                duration: .4
            }, "<")
            .fromTo("#main_btn", {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                ease: "power3.out",
                duration: .4
            }, "<")
            .from(pods.current, {
                y: 20,
                opacity: 0
            })
            .from(navbar.current, {
                opacity: 0,
                duration: .4
            }, "<")
            .fromTo(navbar.current.querySelectorAll("button"), {
                y: -50,
                opacity: 0
            }, {y: 0, opacity: 1, duration: 0.4, ease: "linear", stagger: 0.2, onComplete: () => {body.style.position = "static"}})


            gsap.from([...sponsors.current?.children], {
                opacity: 0,
                x: 50,
                stagger: 0.7,
                scrollTrigger: {
                    trigger: "#sponsors",
                    start: "top 75%",
                    end: "top 80%",
                }
            })
        }, el)

        return () => {
            body.style.position = "static";
            ctx.revert()
        };
        

    }, [])



    return ( <div className="w-full bg-primary md:px-28 px-14 relative pb-28" ref={el}>
        <Nav ref={navbar} />
        <div className="max-w-[550px] mx-auto flex flex-col relative z-20">
            <h2 className="origin-bottom headerText text-[72px] lg:text-[96px] font-bold capitalize text-center leading-[80px] lg:leading-[110px] overflow-hidden"><span className="inline-block">Your Daily</span></h2>
            <h2 className=" origin-bottom headerText text-[72px] lg:text-[96px] font-bold capitalize text-center leading-[80px] lg:leading-[110px] text-text-primary overflow-hidden"><span className="inline-block">Podcast</span></h2>
            <p className="my-8 text-light-gray text-center leading-7 font-medium max-w-[310px] w-full mx-auto">We cover all kinds of categories and a weekly special guest.</p>
            <button id="main_btn" className="opacity-0 mx-auto py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black rounded-lg hover:bg-transparent hover:text-black transition-all duration-300">Subscribe</button>
        </div>
        <img ref={spiralRef} className="absolute lg:left-0 -left-24 top-20" src={spiral} />
        <img ref={starRef} className="absolute right-8 lg:right-14 top-[238px]" height={216} width={155}  src={stars} />
        <div style={{ marginLeft: -112, marginRight: -112 }} ref={pods}><PodSlider /></div>
        <div id="sponsors" ref={sponsors} className="border-y border-grey py-8 flex md:flex-row flex-col gap-x-4 space-y-7 items-center">
            <h3 className="text-[22px] font-bold mr-auto">Supported by:</h3>
            <div className="grow flex gap-x-6">
                {Object.entries(apps).map(([key, value]) => {
                    return <div className="my-4 w-full" key={key}><img className="mx-auto" src={value} alt="" /></div>
                })}
            </div>
            {/* <div className="my-4 w-[23%]"></div>
            <div className="my-4 w-[23%]"></div> */}
        </div>
        <div className="absolute text-text-primary left-[calc((100%-46px)/2)] -bottom-[75px] hidden">
            <PageScribble />
        </div>
    </div> );
}
 
export default Hero;