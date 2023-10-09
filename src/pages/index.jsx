import Hero from "../components/landing/hero";
import { thinkin, bulb, avatars, logos, scribble, star4, sparkle, scribble2, benefits, spiral, spiralBlue, mic, grafitti, black, app1, app2 } from "../assets/images";
import TestMSLider from "../components/landing/testimonials";
import Episodes from "../components/landing/episodes";
import Package from "../components/landing/package";
import Footer from "../components/footer";
import PageScribble from "../components/icons/pageScribble";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
const Home = () => {

    const body = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".headerText h1 span", {
                rotation:15,
                yPercent: 120,
            }, {
                rotation: 0,
                yPercent: 0,
                delay: .4,
                duration: 1,
                ease: "elastic.out(1, 0.75)",
                scrollTrigger: {
                    trigger:"#exm",
                    start: "top center",
                    end: "top 80%",
                }
            })
        }, body)

        return () => ctx.revert()
    }, [])

    return ( <div className="w-full" ref={body}>
        <Hero />
        <div className="p-28 space-y-20 max-w-[1440px] mx-auto relative">
            <div id="exm" className="headerText mx-auto max-w-[830px] w-full">
                <h1 className="text-[59px] font-bold text-center overflow-hidden"><span className="inline-block">Talk. Listen. Get inspired</span></h1>
                <h1 className="text-[59px] font-bold text-center overflow-hidden"><span className="inline-block">by every minute of it.</span></h1>
            </div>
            <div className="flex w-full justify-between pb-8">
                <div className="max-w-[472px] text-center flex flex-col items-center">
                    <img className="mb-12" src={thinkin} alt="" />
                    <p className="text-[16px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                </div>
                <div className="max-w-[472px] text-center flex flex-col items-center">
                    <img className="mb-12" src={bulb} alt="" />
                    <p className="text-[16px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                </div>
            </div>
            <div className="w-full bg-primary rounded-xl p-8 flex flex-col relative">
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
            </div>
            <div className="absolute text-black left-[calc((100%-46px)/2)] -bottom-[75px] z-20">
                <PageScribble />
            </div>
        </div>
        <div className="p-28 space-y-20 bg-aliceblue relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[59px] font-bold text-center mx-auto max-w-[830px]">What our listeners say</h1>
                <p className="font-medium text-grey mx-auto w-fit">Their experience throughout every platform</p>
                <img className="absolute -top-14 -left-24" src={sparkle} alt="" />
            </div>
            <TestMSLider />
            <div className="absolute text-black left-[calc((100%-46px)/2)] -bottom-[75px] z-20">
                <PageScribble />
            </div>
        </div>
        <div className="p-28 space-y-20 flex flex-col max-w-[1440px] mx-auto relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[59px] font-bold text-center mx-auto max-w-[700px]">Membership benefits</h1>
                <p className="font-medium text-grey mx-auto w-fit">Become our sponsor and get all benefits</p>
                <img className="absolute -bottom-4 -right-[130px]" src={scribble2} alt="" />
            </div>
            <div className="w-full flex gap-x-10 gap-y-16 flex-wrap">
                <div className="w-[calc(33%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center">
                    <img src={benefits.scribble} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Topic by Request</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="w-[calc(33%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center">
                    <img src={benefits.shiningStars} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Exclusive Content</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="w-[calc(33%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center">
                    <img src={benefits.face} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Join the Community</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="w-[calc(33%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center">
                    <img src={benefits.face5} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Livestreaming Access</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="w-[calc(33%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center">
                    <img src={benefits.fire} alt="" />
                    <h4 className="mt-auto mb-3 text-center text-[20px] font-bold">Exclusive Episodes & Merch</h4>
                    <p className="text-[16px] font-medium text-center">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="w-[calc(33%-32px)] px-6 h-[180px] shrink-0 flex flex-col items-center">
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
        <div className="p-28 space-y-20 flex flex-col bg-primary relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[59px] font-bold text-center mx-auto max-w-[700px]">Recent Episodes</h1>
                <p className="font-medium text-grey mx-auto w-fit">Available on your favorite platform</p>
            </div>
            <Episodes />
            <button className="mx-auto py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black hover:bg-transparent hover:text-black transition-all duration-300 rounded-lg">BROWSE ALL EPISODES</button>
            <div className="absolute text-black left-[calc((100%-46px)/2)] -bottom-[75px] z-20">
                <PageScribble />
            </div>
        </div>
        <div className="p-28 space-y-20 flex flex-col max-w-[1440px] mx-auto relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[59px] font-bold text-center mx-auto max-w-[700px]">Become our sponsor</h1>
                <p className="font-medium text-grey mx-auto w-fit">Get exclusive episodes, merch and more</p>
            </div>
            <div className="grid grid-cols-3 gap-5 w-full max-w-[1280px] mx-auto relative">
                <Package name="Member" price={9.99} perks={["Exclusive Content", "5% Discount on Merch", "Join the Community", "Livestreaming Access"]}/>
                <Package name="Family" price={14.99} perks={["Everything in Tier 1", "Free tickets to Events", "Limited Edition Merch", "Promote your Product", "Request Topic"]} colored />
                <Package name="Official" price={29.99} perks={["Everything in Tier 2", "Exclusive Badge on Livestreaming", "Become an Official Sponsor", "Early Access to All Episodes", "Free Stikers and Merch"]} />
                <img className="absolute -top-16 -right-[72px] -z-10" src={star4} alt="" />
                <img className="absolute -bottom-10 -left-[72px] -z-10" src={spiralBlue} alt="" />
            </div>
            <div className="absolute text-black left-[calc((100%-46px)/2)] -bottom-[75px] z-20">
                <PageScribble />
            </div>
        </div>
        <div className="p-28 space-y-20 flex flex-col max-w-[1440px] mx-auto relative">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[59px] font-bold text-center mx-auto max-w-[700px]">Article and News</h1>
                <p className="font-medium text-grey mx-auto w-fit">News, tips, tricks and more</p>
            </div>
            <div className="flex gap-6 w-full max-w-[1440px] mx-auto relative">
                <div className="w-full p-3 rounded-xl border-2 border-black shadow-[10px_10px_0px_0px_#000]">
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
                <div className="w-full p-3 rounded-xl border-2 border-black ">
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