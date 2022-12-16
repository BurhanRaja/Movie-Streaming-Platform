import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import styles bundle
import "swiper/css";
import "swiper/css/navigation";

function HeroCard() {
  return (
    <div className="bg-slate-900 to-transparent w-[100%] h-[100%] rounded-lg mx-4">
      <div className="content flex justify-start">
        <div className="text w-[45%] py-16 pl-16">
          <p className="text-white text-3xl font-extrabold mb-2">Chhichhore</p>
          <p className="text-slate-400 font-semibold mb-2 text-lg">
            Hindi . Drama . 2019
          </p>
          
        </div>
        <div className="image w-40% z-10 relative">
          <Image
            src="/images/moviename.webp"
            className="rounded-lg"
            width={765}
            height={100}
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] overflow-hidden image-gradient"></div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  let data = [1, 2, 3, 4, 5, 6];

  return (
    <section>
      {/* <Swiper
      modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.map((el) => {
          return (<SwiperSlide key={el}><HeroCard /></SwiperSlide>)
        })}
      </Swiper> */}

      <div className="whitespace-nowrap flex overflow-x-scroll py-2 scroll-smooth">
        {data?.map((el) => {
          return <HeroCard key={el} />;
        })}
      </div>
    </section>
  );
}

export default Hero;
