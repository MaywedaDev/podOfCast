import { avatars, logos, scribble, star4 } from "../../assets/images";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


const Quote = () => {

    const quoteRef = useRef(null)
    const tl = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.set([...quoteRef.current.children], {
                opacity: 0,
                yPercent: 120
            })

            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: quoteRef.current,
                    start: "top center"
                }
            }).fromTo(quoteRef.current, {
                width: "0%",
                opacity: 0
            }, {
                width: "100%",
                duration: 0.7,
                ease: "power3.out",
                delay: 0.4,
                opacity: 1
            })
            .to([...quoteRef.current.children], {
                opacity: 1,
                yPercent: 0,
                delay: .2,
                duration: .5, 
                stagger: 0.3
            })

        }, quoteRef)


        return () => ctx.revert()
    }, [])

    return ( <div className="w-full bg-primary rounded-xl p-8 flex flex-col relative mx-auto min-h-[340px]" ref={quoteRef}>
        <span className="inline-block mx-auto text-[95px] leading-[80px] text-text-primary font-bold">“</span>
        <h2 className="text-center max-w-[768px] mx-auto text-[35px] font-bold">One of the best daily podcasts that covers every topic on Spotify.</h2>
        <div className="flex gap-x-2 items-center justify-center mt-10">
            <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                <img src={avatars.john} alt="" />
            </div>
            <span className="inline-block font-medium">John Smith,</span>
            <div className="flex items-center gap-x-2">
                <img src={logos.spotifyLogo} alt="" />
                <span className="font-bold">Social Community Manager</span>
            </div>
        </div>
        <img className="absolute -left-[60px] bottom-8" src={scribble} alt="" />
        <img className="absolute -top-[55px] -right-[60px]" src={star4} alt="" />
    </div> );
}
 
export default Quote;