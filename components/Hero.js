import Image from "next/image";
// Import Swiper React components
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import styles bundle
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import HeroLoading from "./HeroLoading";

function HeroCard({ id, title, description, image, genres, date, link }) {

  return (
    <Link href={link}>
      <div className="hero-card to-transparent w-[93%] rounded-lg mx-auto relative hover:cursor-pointer md:w-[93%] min-[360px]:w-[100%]">
        <div className="content flex lg:static sm:relative min-[360px]:relative">
          <div className="text w-[50%] py-16 pl-16 relative z-40 lg:relative sm:absolute min-[360px]:absolute sm:left-0 sm:py-8 md:w-[50%] min-[360px]:py-4 min-[360px]:w-[70%]">
            <p className="text-white xl:text-3xl font-extrabold mb-2 lg:text-xl md:text-xl sm:text-lg min-[360px]:text-sm">{title}</p>
            <p className="text-slate-400 font-semibold mb-2 xl:text-lg lg:text-base sm:text-xs min-[360px]:text-xs">
              {genres?.map((el) => {
                  return (
                    <span key={el}>{el} . </span>
                  )
              })}
                <span>{date.getFullYear()}</span>
            </p>
            <p className="text-slate-200 xl:text-lg lg:text-base lg:block md:text-xs min-[360px]:text-xs">{description.substr(0, 200)}...</p>
          </div>
          <div className="image z-10 relative 2xl:w-[50%] lg:w-[80%] md:w-[100%]">
            <Image
              src={image ? `https://image.tmdb.org/t/p/original${image}` : "/images/logo.webp"}
              className="rounded-lg w-[100%]"
              width={765}
              height={100}
              alt="img"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] overflow-hidden moviedetail-image-gradient md:block sm:hidden"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Hero({ data, genres }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data])

  return loading ? <HeroLoading /> : (
    <section className="mb-16">
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
        style={{ perspective: "17px", width: "100%" }}
        className="lg:h-[25rem] "
      >
        {data?.map((el, index) => {
          if (index <= 9) {
            return (
              <SwiperSlide key={el} className="transition-all duration-1000">
                <HeroCard
                  key={el.id}
                  id={el.id}
                  title={el.title || el.name}
                  description={el.overview}
                  image={el.backdrop_path}
                  genres={
                    el.genre_ids?.map((el) => {
                        let sameGenre = genres?.find((elem) => elem.id === el);
                        return sameGenre.name;
                    })
                  }
                  link={el.release_date ? `/movies/${el.id}` : `/shows/${el.id}`}
                  date={new Date(el.release_date || el.first_air_date)}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </section>
  );
}

export default Hero;
