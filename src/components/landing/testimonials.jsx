
import { Swiper, SwiperSlide } from "swiper/react";
import { avatars, logos } from "../../assets/images";
import gsap from "gsap";
import { useRef, useLayoutEffect, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnCtrlArrow from "../icons/btnCtrlArrow";
import { useState } from "react";
import { useSwiper } from "swiper/react";

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
            onSlideChange={(e) => console.log(e.activeIndex)}
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
            <SlideControls />
        </Swiper>
        
    </div> );
}


const SlideControls = () => {
    const swiper = useSwiper()
    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        // console.log(currentIndex, swiper.activeIndex)
    }, [currentIndex])
    

    return <>
        <div className="w-fit space-x-3 flex my-5">
            <button disabled={currentIndex <= 0} onClick={() => {setCurrentIndex(prev => prev - 1 ) ;swiper.slideTo(swiper.activeIndex - 1); }}  className={`rounded-full w-[42px] h-[42px] border-[1.5px] ${currentIndex <= 0 ? 'border-black text-black' : 'border-text-primary text-text-primary'} grid place-content-center rotate-180`}><BtnCtrlArrow /></button>
            <button disabled={currentIndex >= 1} onClick={() => {setCurrentIndex(prev => prev + 1) ;swiper.slideTo(swiper.activeIndex + 1); }} className={`rounded-full w-[42px] h-[42px] border-[1.5px]  ${currentIndex >= 1 ? 'border-black text-black' : 'border-text-primary text-text-primary'} grid place-content-center`}><BtnCtrlArrow /></button>
        </div>
    </>
}
 
export default TestMSLider;