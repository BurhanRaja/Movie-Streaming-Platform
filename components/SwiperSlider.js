import { FreeMode, Keyboard, Mousewheel } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

function SwiperSlider({ children, countCard }) {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel, Keyboard]}
      slidesPerView={countCard}
      spaceBetween={countCard === 4 ? 20 : 30}
      scrollbar={true}
      mousewheel={true}
      keyboard={true}
      freeMode={true}
      breakpoints={
        (countCard === 8 && {
          1250: {
            slidesPerView: 8,
          },
          1150: {
            slidesPerView: 7,
          },
          1024: {
            slidesPerView: 6,
          },
          950: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          570: {
            slidesPerView: 5,
          },
          360: {
            slidesPerView: 3,
          },
        }) ||
        (countCard === 4 && {
          1200: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 3,
          },
          690: {
            slidesPerView: 2,
          },
          550: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 1,
          },
        })
      }
      style={{
        width: "100%",
        perspective: "17px",
        overflow: "visible",
        zIndex: "10",
      }}
      className="md:h-[15rem] sm:h-[12rem]"
    >
      {children}
    </Swiper>
  );
}

export default SwiperSlider;
