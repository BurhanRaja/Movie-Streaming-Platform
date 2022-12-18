import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { FreeMode, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

const Card = () => {
  return (
    <div className="card group/card w-[9.5rem] h-[12rem] rounded-lg mr-4 relative transition-all duration-500 z-10 hover:z-20 hover:cursor-pointer">
      <Image
        src="/images/freddy.webp"
        alt="card"
        width={200}
        height={300}
        className="rounded-lg"
      />

      <div className="absolute top-[45%] px-2 rounded-lg w-[100%] text-xs card-background-gradient text-white opacity-0 group-hover/card:opacity-100 transition-all duration-500">
        <div className="title">
          <p className="font-bold">Freddy</p>
          <p className="leading-3 mt-1 text-[0.55rem] font-semibold">
            2hr 31min 2sec, Hindi, Drama, Psycho, blaah, blaah, blaah, blaah, blaah, blaah
          </p>
        </div>
        <div
          className="description mt-1 text-slate-500 font-bold"
          style={{ fontSize: "0.6rem" }}
        >
          <p className="leading-3">This is a story of blaah blaah More Description is less or it could be less......</p>
        </div>
        <div className="btn mt-1">
          <div>
            <button
              className="flex items-center justify-start w-[100%] py-[2px] px-1 hover:bg-slate-700 rounded-sm"
              style={{ fontSize: "0.65rem" }}
            >
              <BsFillPlayFill className="mr-2" />
              Watch Now
            </button>
          </div>
          <div>
            <button
              className="flex items-center justify-start w-[100%] py-[2px] px-1 hover:bg-slate-700 rounded-sm mb-1"
              style={{ fontSize: "0.65rem" }}
            >
              <AiOutlinePlus className="mr-2" />
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function CardSlider() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <section className="my-4 relative group/slider">
      <p className="card-slider-title w-[93%] mx-auto text-2xl text-white mb-5 font-bold">
        Latest Trending
      </p>
      <Swiper
        modules={[FreeMode, Mousewheel, Keyboard]}
        slidesPerView={8}
        spaceBetween={30}
        scrollbar={true}
        mousewheel={true}
        keyboard={true}
        freeMode={true}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          perspective: "17px",
          width: "93%",
          height: "15rem",
          overflow: "visible",
          zIndex: "10",
        }}
      >
        {data?.map((el) => {
          return (
            <SwiperSlide key={el}>
              <Card />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute opacity-0 group-hover/slider:opacity-100 top-0 right-0 h-[85%] w-20 card-gradient z-30"></div>
    </section>
  );
}

export default CardSlider;
