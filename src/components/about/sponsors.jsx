import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { apps } from "../../assets/images";

const Sponsors = () => {
    return ( <Swiper
        spaceBetween={20}
        slidesPerView="auto"
    >
        {Object.entries(apps).map(([key, value]) => <SwiperSlide key={key}>
            <Slide img={value} />
        </SwiperSlide>)}
    </Swiper> );
}

const Slide = ({img}) => {
    return (<div className="w-[570px] pt-10 pb-8 px-16 border-[1.5px] border-black rounded-lg bg-white">
        <div className="max-w-[350px] border-b border-grey mb-8 mx-auto">
            <img className="mx-auto mb-4" src={img} alt="" />
        </div>
        <p className="text-grey font-medium text-center">Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.</p>
    </div>)
}
 
export default Sponsors;