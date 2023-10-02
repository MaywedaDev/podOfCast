import { Swiper, SwiperSlide } from 'swiper/react';
import { covers } from '../../assets/images';

import "swiper/css"

const PodSlider = () => {
    return ( <div className='my-28 w-full'>
        <Swiper 
            spaceBetween={20}
            slidesPerView="auto"
        >
        {Object.entries(covers).map((([key, value]) => <SwiperSlide>
            <SingleSlide key={key} image={value} />
        </SwiperSlide>))}
        <SwiperSlide>
            <div className='w-[373px] h-[373px] rounded-xl bg-slate-700'>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[373px] h-[373px] rounded-xl bg-slate-700'>
            </div>
        </SwiperSlide>
    </Swiper>
    </div>  );
}

const SingleSlide = ({image}) => {
    return (
        <div className='w-[373px] h-[373px] rounded-xl'>
            <img className='w-full object-scale-down' src={image} alt="" />
        </div>
    )
}
 
export default PodSlider;