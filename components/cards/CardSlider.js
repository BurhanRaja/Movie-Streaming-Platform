import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../SwiperSlider";
import Card from "./Card";

// Main Function
function CardSlider({ data, genres, type }) {
  return (
    <section className="my-4 relative group/slider w-[93%] mx-auto">
      <p className="card-slider-title text-2xl text-white mb-5 font-bold">
        {type}
      </p>
      <SwiperSlider countCard={8}>
        {data?.map((el) => {
          if (el.poster_path !== null) {
            return (
              <SwiperSlide key={el.id}>
                <Card
                  cardDetail={el}
                  poster={el.poster_path}
                  id={el.id}
                  cardGenres={el.genre_ids?.map((el) => {
                    let sameGenre = genres?.find((elem) => elem.id === el);
                    return sameGenre.name;
                  })}
                />
              </SwiperSlide>
            );
          }
        })}
      </SwiperSlider>
      <div className="absolute opacity-0 group-hover/slider:opacity-100 top-0 right-0 h-[85%] w-20 card-gradient z-30"></div>
    </section>
  );
}

export default CardSlider;
