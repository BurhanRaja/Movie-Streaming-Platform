import { FreeMode, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import useSWR from "swr";
import { useEffect, useState } from "react";
import SwiperSlider from "./SwiperSlider";

function Extras({ id }) {

  const getExtras = (url) => fetch(url).then((res) => res.json());

  const {data, error} = useSWR(
    `${process.env.NEXT_PUBLIC_URL}tv/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    getExtras
  );

  if(error) console.log(error);

  if (data) {
    return (
      <div className="w-[93%] mx-auto">
      <div className="">
        <p className="text-2xl font-bold text-white mb-10 mt-10">
          Trailers and Extras
        </p>
      </div>
      <SwiperSlider countCard={3}>
        {data.results?.map((el) => {
          if (el.site === "YouTube") {
            return (
              <SwiperSlide key={el.id} style={{ width: "30%" }}>
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
      </SwiperSlider>
    </div>
  );
}
}

export default Extras;
