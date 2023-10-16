import { Swiper, SwiperSlide } from 'swiper/react';
import { covers } from '../../assets/images';

import "swiper/css"

const PodSlider = () => {
    return ( <div className='my-28 w-full'>
        <Swiper 
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
        >
        {[...Object.entries(covers), ...Object.entries(covers)].map((([key, value], i) => <SwiperSlide key={i}>
            <SingleSlide image={value} />
        </SwiperSlide>))}
    </Swiper>
    </div>  );
}

const SingleSlide = ({image}) => {
    return (
        <div className='w-[373px] h-[373px] rounded-xl'>
            <img width={373} height={373} className='w-full ' src={image} alt="" />
        </div>
    )
}
 
export default PodSlider;