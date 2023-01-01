import { FreeMode, Keyboard, Mousewheel } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

function SwiperSlider({children, countCard}) {
  return (
      <Swiper
        modules={[FreeMode, Mousewheel, Keyboard]}
        slidesPerView={countCard}
        spaceBetween={30}
        scrollbar={true}
        mousewheel={true}
        keyboard={true}
        freeMode={true}
        style={{
          width: "100%",
          perspective: "17px",
          height: "15rem",
          overflow: "visible",
          zIndex: "10",
        }}
      >
        {children} 
      </Swiper>
  );
}

export default SwiperSlider;
