
import { Swiper, SwiperSlide } from "swiper/react";
import { avatars, logos } from "../../assets/images";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TestMSLider = () => {

    const sliderRef = useRef([])
    const swiperRef = useRef(null)

    sliderRef.current = []

    const addToSlider = (el) => {
        if(el && !sliderRef.current.includes(el)){
            sliderRef.current.push(el)
        }
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.set(sliderRef.current, {
                yPercent: 120,
            })

            ScrollTrigger.batch(sliderRef.current, {
                onEnter: (batch) => gsap.to(batch,{
                    yPercent: 0,
                    delay: .4,
                    duration: 1,
                    ease: "elastic.out(1, 0.75)",
                    stagger: 0.5
                })
            })
        }, sliderRef)


        return () => ctx.revert()
    }, [])



    return ( <div className="my-28" ref={swiperRef}>
        <Swiper
            spaceBetween={20}
            slidesPerView="auto"
        >
            <SwiperSlide>
                <div ref={addToSlider} className="w-[570px] rounded-xl bg-white p-6">
                    <span className="inline-block text-[95px] leading-[80px] text-text-primary font-bold">“</span>
                    <p className="text-[20px] font-medium mb-8">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </p>
                    <div className="flex gap-x-2 items-center mt-10">
                        <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                            <img src={avatars.luna} alt="" />
                        </div>
                        <span className="inline-block font-medium">Luna lovegood,</span>
                        <div className="flex items-center gap-x-2">
                            <img src={logos.spotifyLogo} alt="" />
                            <span className="font-bold">Spotify</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div ref={addToSlider} className="w-[570px] rounded-xl bg-white p-6">
                    <span className="inline-block text-[95px] leading-[80px] text-text-primary font-bold">“</span>
                    <p className="text-[20px] font-medium mb-8">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </p>
                    <div className="flex gap-x-2 items-center mt-10">
                        <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                            <img src={avatars.emily} alt="" />
                        </div>
                        <span className="inline-block font-medium">Emily Blunt,</span>
                        <div className="flex items-center gap-x-2">
                            <img src={logos.gpods2} alt="" />
                            <span className="font-bold">Google Podcasts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div ref={addToSlider} className="w-[570px] rounded-xl bg-white p-6">
                    <span className="inline-block text-[95px] leading-[80px] text-text-primary font-bold">“</span>
                    <p className="text-[20px] font-medium mb-8">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </p>
                    <div className="flex gap-x-2 items-center mt-10">
                        <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                            <img src={avatars.mia} alt="" />
                        </div>
                        <span className="inline-block font-medium">Mia Winters,</span>
                        <div className="flex items-center gap-x-2">
                            <img src={logos.spotifyLogo} alt="" />
                            <span className="font-bold">Spotify</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div> );
}
 
export default TestMSLider;