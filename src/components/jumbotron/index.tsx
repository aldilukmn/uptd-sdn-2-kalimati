import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Jumbotron() {
  return (
    <>
      <section className='w-2/3'>
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
          <SwiperSlide>
            <img src='https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717919656/uptd%20sdn%202%20kalimati/images/qvigsd6pcxg48hqa9c88.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717919666/uptd%20sdn%202%20kalimati/images/vayztqincwtigzwacazu.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717919671/uptd%20sdn%202%20kalimati/images/fitgkhekedvfkr4akhsa.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717919673/uptd%20sdn%202%20kalimati/images/r3orqu23mmmgbms0nwtb.jpg' />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default Jumbotron