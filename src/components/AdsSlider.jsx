// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

  const ads = [
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/june_2023/anker_mainbanner_web_en.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/june_2023/anker_mainbanner_web_en.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/june_2023/anker_mainbanner_web_en.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/june_2023/anker_mainbanner_web_en.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/june_2023/anker_mainbanner_web_en.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/june_2023/anker_mainbanner_web_en.jpg",
  ]

 const AdsSlider = () => {
  return (
    <Swiper
      className='container'
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      // install Swiper modules
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
   
    {ads.map(ad => <SwiperSlide key={Math.random()}><img className='w-[100%]' src={ad} alt='Image not Found'/></SwiperSlide>)}

    </Swiper>
  );
};

export default AdsSlider