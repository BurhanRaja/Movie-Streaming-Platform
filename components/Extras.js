import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import SwiperSlider from "./SwiperSlider";

function Extras({ videos }) {
  return (
    <div className="w-[93%] mx-auto">
      <div className="">
        <p className="text-2xl font-bold text-white mb-10 mt-10">
          Trailers and Extras
        </p>
      </div>
      {videos.results.length === 0 ? (
        <div className="">
          <h2 className=" text-red-500 ">No Recommendations</h2>
        </div>
      ) : (
        <SwiperSlider countCard={2}>
          {videos.results?.map((el) => {
            if (el.site === "YouTube") {
              return (
                <SwiperSlide key={el.id} style={{ width: "35%" }}>
                  <iframe
                    className="mr-4 rounded-md lg:w-[28rem] lg:h-[15rem] md:w-[20rem] md:h-[10rem] sm:w-[15rem]"
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
        </SwiperSlider>
      )}
    </div>
  );
}

export default Extras;
