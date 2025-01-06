import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { jumbotronImage } from './data';
import { Skeleton } from '@mui/material';

function Jumbotron() {
  return (
    <>
      <section className='md:w-2/3'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          loop={true}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className='mySwipper rounded-xl'
        >
          {
            jumbotronImage.map((value, index) => (
              <SwiperSlide key={index} className='h-auto'>
                {
                  value.image ? (
                      <img src={value.image} /> 
                    ) : (
                      <Skeleton style={{height: "98vh"}}/>
                    )
                }
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </>
  )
}

export default Jumbotron