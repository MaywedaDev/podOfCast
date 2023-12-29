import Hero from "../components/landing/hero";
import { thinkin, bulb, avatars, logos, scribble, star4, sparkle, scribble2, benefits, spiral, spiralBlue, mic, grafitti, black, app1, app2, sparkle2 } from "../assets/images";
import TestMSLider from "../components/landing/testimonials";
import Episodes from "../components/landing/episodes";
import Package from "../components/landing/package";
import PageScribble from "../components/icons/pageScribble";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Quote from "../components/landing/quote";
const Home = () => {

    const body = useRef(null)
    const illustrationsRef = useRef([]), benefitsRef = useRef([]); 

    illustrationsRef.current = []
    benefitsRef.current = []


    const addToIllustrations = (el) => {
        if(el && !illustrationsRef.current.includes(el)){
            illustrationsRef.current.push(el)
        }
    }

    const addToBenefits = (el) => {
        if(el && !benefitsRef.current.includes(el)){
            benefitsRef.current.push(el)
        }
    }
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.set(["h1 span", ".slidin", ...illustrationsRef.current, ...benefitsRef.current, ".fade-into"],{
                yPercent: 120,
                opacity: 0})

            const packages = gsap.utils.toArray(".package")

            packages.forEach((el, i) => {
                el.style.transform = `translateX(calc(${i * -100}% - ${i * 20}px))`
            } )

            const animatePackage = (i) => {
                if (i <= 2){
                    gsap.timeline().to(packages[i],{
                        x: 0,
                        delay: .4,
                        duration: .8,
                        ease: "elastic.out(1, 0.75)",
                    }).to(packages[i].querySelector(".section-2"), {
                        top: 377,
                        duration: .8,
                        ease: "elastic.out(1, 0.75)",
                        onComplete: () => animatePackage(i+1)
                    })
                }
            }

            ScrollTrigger.create({
                trigger: "#packages",
                onEnter: () => animatePackage(0)
            })

            // const tl = gsap.timeline({scrollTrigger: {
            //     trigger: "#packages",
            //     start: "top-=400px center",
            // }})

            // tl.to("#packages",{
            //     onStart: animatePackage(0),
            // })

            // ScrollTrigger.batch(packages, {
            //     onEnter: (batch) => gsap.timeline().to(batch, {
            //         left: function(i){
            //             return i * (100 / 3) + "%"
            //         },
            //         delay: .4,
            //         duration: 1,
            //         ease: "elastic.out(1, 0.75)",
            //         stagger: 0.3
            //     })
            // })

            

            ScrollTrigger.batch(["h1 span", ".slidin", ".fade-into"], {
                onEnter: (batch) => gsap.to(batch,{
                    yPercent: 0,
                    delay: .4,
                    duration: 1,
                    opacity: 1,
                    ease: "elastic.out(1, 0.75)",
                    stagger: 0.3
                })
            })

            ScrollTrigger.batch(illustrationsRef.current, {
               onEnter: (batch) => gsap.to(batch,{
                yPercent: 0,
                opacity: 1,
                stagger: 0.3,
                duration: 0.4}),
                start: "top bottom"
            })

            ScrollTrigger.batch(benefitsRef.current, {
                onEnter: (batch) => gsap.to(batch,{
                 yPercent: 0,
                 opacity: 1,
                 stagger: 0.3,
                 duration: 0.4}),
                 start: "top-=400px center", 
             })
            
        }, body)

        return () => ctx.revert()
    }, [])

    return ( <div className="w-full" ref={body}>
        <Hero />
        <div className="md:px-28 px-14 py-28 space-y-20 max-w-[1440px] mx-auto relative">
            <div className="headerText mx-auto max-w-[830px] w-full">
                <h1 className="text-[36px] sm:text-[59px] font-bold text-center overflow-hidden"><span className="inline-block">Talk. Listen. Get inspired</span></h1>
                <h1 className="text-[36px] sm:text-[59px] font-bold text-center overflow-hidden"><span className="inline-block">by every minute of it.</span></h1>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between gap-8 pb-8">
                <div className="max-w-[472px] text-center flex flex-col items-center" ref={addToIllustrations}>
                    <img className="mb-12" src={thinkin} alt="" />
                    <p className="text-[16px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                </div>
                <div className="max-w-[472px] text-center flex flex-col items-center" ref={addToIllustrations}>
                    <img className="mb-12" src={bulb} alt="" />
                    <p className="text-[16px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                </div>
            </div>
            <Quote />
            <div className="absolute text-black left-[calc((100%-46px)/2)] -bottom-[75px] z-20">
                <PageScribble />
            </div>
        </div>
        <div className="md:px-28 px-14 py-28 space-y-20 bg-aliceblue relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[36px] sm:text-[59px] font-bold text-center mx-auto max-w-[830px] overflow-hidden"><span className="inline-block">What our listeners say</span></h1>
                <p className="slidin font-medium text-grey mx-auto w-fit">Their experience throughout every platform</p>
                <img className="absolute -top-14 -left-24 fade-into" src={sparkle} alt="" />
            </div>
            <TestMSLider />
            <div className="absolute text-black left-[calc((100%-46px)/2)] -bottom-[75px] z-20">
                <PageScribble />
            </div>
        </div>
        <div className="md:px-28 px-14 py-28 space-y-20 flex flex-col max-w-[1440px] mx-auto relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[36px] sm:text-[59px] font-bold text-center mx-auto max-w-[700px] overflow-hidden"><span className="inline-block">Membership benefits</span></h1>
                <p className="slidin font-medium text-grey mx-auto w-fit">Become our sponsor and get all benefits</p>
                <img className="absolute -top-[140px] -right-[130px] fade-into" src={scribble2} alt="" />
            </div>
            <div className="w-full flex gap-x-10 gap-y-16 flex-wrap" >
                <div className="lg:w-[calc(33%-32px)] w-full md:w-[calc(50%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center" ref={addToBenefits}>
                    <img src={benefits.scribble} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Topic by Request</h4>
                    <p className="slidin text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="lg:w-[calc(33%-32px)] w-full md:w-[calc(50%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center" ref={addToBenefits}>
                    <img src={benefits.shiningStars} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Exclusive Content</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="lg:w-[calc(33%-32px)] w-full md:w-[calc(50%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center" ref={addToBenefits}>
                    <img src={benefits.face} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Join the Community</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="lg:w-[calc(33%-32px)] w-full md:w-[calc(50%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center" ref={addToBenefits}>
                    <img src={benefits.face5} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Livestreaming Access</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="lg:w-[calc(33%-32px)] w-full md:w-[calc(50%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center" ref={addToBenefits}>
                    <img src={benefits.fire} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Exclusive Episodes & Merch</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="lg:w-[calc(33%-32px)] w-full md:w-[calc(50%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center" ref={addToBenefits}>
                    <img src={benefits.star7} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">And much more!</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
            <button className="mx-auto py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black hover:bg-transparent hover:text-black transition-all duration-300 rounded-lg">SEE PRICING</button>
            <div className="absolute text-black left-[calc((100%-46px)/2)] -bottom-[75px] z-20">
                <PageScribble />
            </div>
        </div>
        <div className="md:p-28 py-28 px-16 space-y-20 flex flex-col bg-primary relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[36px] sm:text-[59px] font-bold text-center mx-auto max-w-[700px] overflow-hidden"><span className="inline-block">Recent Episodes</span></h1>
                <p className=" slidin font-medium text-grey mx-auto w-fit">Available on your favorite platform</p>
            </div>
            <div className="w-full relative">
                <Episodes />
                <img src={sparkle2} alt="" className="absolute -top-[150px] -right-[150px] fade-into" />
            </div>
            <button className="mx-auto py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black hover:bg-transparent hover:text-black transition-all duration-300 rounded-lg">BROWSE ALL EPISODES</button>
            <div className="absolute text-black left-[calc((100%-46px)/2)] -bottom-[75px] z-20">
                <PageScribble />
            </div>
        </div>
        <div className="p-28 space-y-20 flex flex-col max-w-[1440px] mx-auto relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[36px] sm:text-[59px] font-bold text-center mx-auto max-w-[700px] overflow-hidden"><span className="inline-block">Become our sponsor</span></h1>
                <p className="slidin font-medium text-grey mx-auto w-fit">Get exclusive episodes, merch and more</p>
                <img width={75} height={75} src={sparkle2} alt="" className="-left-[50px] -top-[30px] rotate-[270deg] absolute fade-into"  />
            </div>
            <div id="packages" className="grid grid-cols-2 min-[1200px]:grid-cols-3 gap-5 w-full max-w-[1280px] mx-auto relative min-h-[689px]">
                <Package position={1} name="Member" price={9.99} perks={["Exclusive Content", "5% Discount on Merch", "Join the Community", "Livestreaming Access"]}/>
                <Package name="Family" price={14.99} perks={["Everything in Tier 1", "Free tickets to Events", "Limited Edition Merch", "Promote your Product", "Request Topic"]} colored />
                <Package name="Official" price={29.99} perks={["Everything in Tier 2", "Exclusive Badge on Livestreaming", "Become an Official Sponsor", "Early Access to All Episodes", "Free Stikers and Merch"]} />
                <img className="absolute -top-16 -right-[72px] -z-10 fade-into" src={star4} alt="" />
                <img className="absolute -bottom-10 -left-[72px] -z-10 fade-into" src={spiralBlue} alt="" />
            </div>
            <div className="absolute text-black left-[calc((100%-46px)/2)] -bottom-[75px] z-20">
                <PageScribble />
            </div>
        </div>
        <div className="md:p-28 py-28 px-16 space-y-20 flex flex-col max-w-[1440px] mx-auto relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[36px] sm:text-[59px] font-bold text-center mx-auto max-w-[700px] overflow-hidden"><span className="inline-block">Article and News</span></h1>
                <p className="slidin font-medium text-grey mx-auto w-fit">News, tips, tricks and more</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1440px] mx-auto relative">
                <img src={benefits.star7} width={180} height={180} alt="" className="absolute -top-[60px] -left-[100px] rotate-45 -z-10 fade-into" />
                <img className="absolute -bottom-[160px] -right-[160px] rotate-[120deg] fade-into" src={scribble2} alt="" />
                <div ref={addToIllustrations} className="w-full p-3 rounded-xl border-2 border-black shadow-[10px_10px_0px_0px_#000] bg-white">
                    <img className="w-full object-cover rounded-lg h-[320px] mb-6" src={mic} alt="" />
                    <h4 className="uppercase text-grey mb-3 font-bold">Podcast</h4>
                    <h2 className="text-[36px] font-bold text-text-primary mb-4">Setup your own podcast</h2>
                    <p className="text-grey mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
                    <div className="w-full mb-5 bg-grey h-px"></div>
                    <div className="w-full flex items-center justify-between mt-2">
                        <div className="space-x-2">
                            <button className="border border-grey rounded p-2 text-grey">business</button>
                            <button className="border border-grey rounded p-2 text-grey">startup</button>
                        </div>
                        <span className="font-bold">Sep 14, 2021</span>
                    </div>
                </div>
                <div ref={addToIllustrations} className="w-full p-3 rounded-xl border-2 border-black bg-white">
                    <img className="w-full object-cover rounded-lg h-[320px] mb-6" src={grafitti} alt="" />
                    <h4 className="uppercase text-grey mb-3 font-bold">TIPS & TRICK</h4>
                    <h2 className="text-[36px] font-bold text-text-primary mb-4">Doodle artwork 101</h2>
                    <p className="text-grey mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
                    <div className="w-full mb-5 bg-grey h-px"></div>
                    <div className="w-full flex items-center justify-between">
                        <div className="space-x-2">
                            <button className="border border-grey rounded p-2 text-grey">art</button>
                            <button className="border border-grey rounded p-2 text-grey">creative</button>
                            <button className="border border-grey rounded p-2 text-grey">tips and tricks</button>
                        </div>
                        <span className="font-bold">Sep 12, 2021</span>
                    </div>
                </div>
            </div>
            <button className="mx-auto py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black hover:bg-transparent hover:text-black transition-all duration-300 rounded-lg">BROWSE ALL</button>
        </div>
    </div> );
}
 
export default Home;