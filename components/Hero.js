import Image from "next/image";
// Import Swiper React components
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import styles bundle
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

function HeroCard() {
  return (
    <div className="bg-slate-900 to-transparent w-[93%] h-[100%] rounded-lg mx-auto ">
      <div className="content flex justify-start">
        <div className="text w-[46%] py-16 pl-16">
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
            alt="img"
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
    <section className="mb-20">
      <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        effect="coverflow"
        spaceBetween={200}
        slidesPerView={1}
        centeredSlides={true}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 5,
          modifier: 1,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ perspective: "17px", width: "100%", height: "25rem" }}
      >
        {data?.map((el) => {
          return (
            <SwiperSlide key={el} className="transition-all duration-1000">
              <HeroCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Hero;
