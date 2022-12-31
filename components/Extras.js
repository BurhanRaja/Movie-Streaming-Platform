import { FreeMode, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

function Extras({ videos }) {
//   console.log(videos.results);
  return (
    <div className="w-[93%] mx-auto">
      <div className="">
        <p className="text-2xl font-bold text-white mb-10">
          Trailers and Extras
        </p>
      </div>
      <Swiper
        modules={[FreeMode, Mousewheel, Keyboard]}
        slidesPerView={3}
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
        {videos.results?.map((el) => {
          if (el.site === "YouTube") {
            return (
              <SwiperSlide key={el.id} style={{"width": "30%"}}>
                <iframe
                  className="mr-4 rounded-md"
                  width="400"
                  height="200"
                  src={`https://www.youtube.com/embed/${el.key}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}

export default Extras;
