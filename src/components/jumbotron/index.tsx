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
            <img src='https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717922664/uptd%20sdn%202%20kalimati/images/g7kh0tjwrhyqjahl00w6.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717922815/uptd%20sdn%202%20kalimati/images/utcqlqdnrczllz65jvdb.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717922854/uptd%20sdn%202%20kalimati/images/eicyvvft67tfhzg3daif.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717922899/uptd%20sdn%202%20kalimati/images/msyaiwco44xf9ig3qd91.jpg' />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default Jumbotron