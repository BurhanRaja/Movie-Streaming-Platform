import Image from "next/image";
// Import Swiper React components
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import styles bundle
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

function HeroCard({ id, title, description, image, genres, date }) {
  return (
    <Link href={`/movies/${id}`}>
      <div className="hero-card to-transparent w-[93%] h-[100%] rounded-lg mx-auto ">
        <div className="content flex justify-start">
          <div className="text w-[46%] py-16 pl-16">
            <p className="text-white text-3xl font-extrabold mb-2">{title}</p>
            <p className="text-slate-400 font-semibold mb-2 text-lg">
              {genres?.map((el) => {
                  return (
                    <span key={el}>{el} . </span>
                  )
              })}
                <span>{date.getFullYear()}</span>
            </p>
            <p className="text-slate-200">{description.substr(0, 210)}...</p>
          </div>
          <div className="image w-40% z-10 relative">
            <Image
              src={`https://image.tmdb.org/t/p/original${image}`}
              className="rounded-lg"
              width={765}
              height={100}
              alt="img"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] overflow-hidden image-gradient"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Hero({ data, genres }) {

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
        style={{ perspective: "17px", width: "100%", height: "25rem" }}
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
