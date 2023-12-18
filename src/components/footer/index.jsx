import { black, apps, app1, app2, logo, logos, redTwitter, appstore, playstore } from "../../assets/images";
import PageScribble from "../icons/pageScribble";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
    const footerRef = useRef(), headerRef = useRef(), tl = useRef(), betaRef = useRef()

    useLayoutEffect(() => {
        console.log(headerRef.current)
        const ctx = gsap.context(() => {
            
            gsap.set([headerRef.current, ".slidin", ".fade-into"],
            {
                yPercent: 120,
                opacity: 0
            })

            tl.current = gsap.timeline({
                scrollTrigger:{
                    trigger: footerRef.current
            }}).from(betaRef.current, {
                opacity: 0,
                duration: .5
            })

            // ScrollTrigger.batch(["h1 span", ".slidin", ".fade-into"], {
            //     onEnter: (batch) => gsap.to(batch,{
            //         yPercent: 0,
            //         delay: .4,
            //         duration: 1,
            //         opacity: 1,
            //         ease: "elastic.out(1, 0.75)",
            //         stagger: 0.3
            //     })
            // })
        }, footerRef)

        return ctx.revert()
    }, [])

    return ( <div className="w-full overflow-hidden" ref={footerRef}>
    <div className="p-28 space-y-20 flex flex-col bg-aliceblue relative">
        <div className="absolute text-text-primary left-[calc((100%-46px)/2)] -top-[75px] z-20">
            <PageScribble />
        </div>
        <div className="relative w-fit mx-auto flex flex-col z-10">
            <button className="mx-auto rounded text-text-primary px-2 py-1 border border-text-primary uppercase font-bold" ref={betaRef}>Beta</button>
            <h1 className="text-[59px] font-bold text-center mx-auto max-w-[500px]"><span className="inline-block" ref={headerRef}>Available now Pod of Cast App</span></h1>
            <p className="font-medium text-grey mx-auto w-fit slidin">We just launched our podcast app!</p>
        </div>
        <div className="py-8 mx-auto fit-content flex flex-col relative z-10">
            <button className="py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black hover:bg-transparent hover:text-black transition-all duration-300 rounded-lg mb-6">Download Now</button>
            <span className="mx-auto text-grey font-medium">Content also available on:</span>
            <div className="flex gap-x-5 mt-4 mx-auto">
                <img src={black.pods} alt="" />
                <img src={black.spotify} alt="" />
                <img src={black.youtube} alt="" />
            </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 min-w-[1200px] w-full z-0">
            <img width={437} height={416} className="absolute left-0 bottom-0" src={app1} alt="" />
            <img height={680} width={355} className="absolute bottom-0 right-0" src={app2} alt="" />
        </div>
    </div>
    <div className="pt-28 pb-16 px-16 xl:px-28 font-medium">
        <div className="flex flex-col lg:flex-row justify-between mb-[140px] gap-y-10">
            <div className="space-y-8 max-w-[350px]">
                <img src={logo} alt="" />
                <p className="text-[14px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex gap-x-4">
                    <img src={redTwitter} alt="" />
                    <img src={logos.tiktok} alt="" />
                    <img src={logos.instagram} alt="" />
                </div>
            </div>
            <div className="flex gap-x-10">
                <ul className="space-y-8">
                    <li>About</li>
                    <li className="text-text-primary">Testimonials</li>
                    <li>Features</li>
                </ul>
                <ul className="space-y-8">
                    <li className="text-text-primary">Episodes</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <div className="space-y-12">
                    <div className="w-full">
                        <p className="text-grey mb-3">Listen to episodes on your fav platforms</p>
                        <div className="flex gap-x-8">
                        {Object.entries(apps).map(([key, value]) => {
                            return <div className="my-4 w-[90px]" key={key}><img className="mx-auto" src={value} alt="" /></div>
                        })}
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-grey">App availble on:</p>
                        <div className="flex gap-x-6 mt-3">
                            <img src={appstore} alt="" />
                            <img src={playstore} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full border-t border-grey pt-6 flex justify-between">
                <p className="text-grey font-medium">©2022. All Rights Reserved. <span className="text-text-primary">Pod of Cast</span></p>
                <p>Terms  •  Privacy</p>
        </div>
    </div>
    </div> );
}
 
export default Footer;