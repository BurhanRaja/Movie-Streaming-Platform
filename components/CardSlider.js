import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { FreeMode, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";

const CardDetail = ({ title, description, genres, date, detail }) => {
  return (
    <div className="card-detail absolute bottom-[0%] rounded-lg w-[100%] text-xs card-background-gradient text-white opacity-0 group-hover/card:opacity-100 transition-all duration-500">
      <div className="title">
        <p className="font-bold mb-1">{title}</p>
        <p className="leading-3 mt-1 text-[0.6rem] font-semibold mb-2">
          {genres?.map((el) => {
            return <span key={el}>{el} . </span>;
          })}
          <span>{date.getFullYear()}</span>
        </p>
      </div>
      <div
        className="description mt-1 mb-1 text-slate-500 font-bold"
        style={{ fontSize: "0.6rem" }}
      >
        <p className="leading-3">{description.substr(0, 55)}...</p>
      </div>
      <div className="btn mt-1">
        {detail.title ? (
          <div>
            <button
              className="flex items-center justify-start w-[100%] py-[2px] px-1 hover:bg-slate-700 rounded-sm"
              style={{ fontSize: "0.65rem" }}
            >
              <BsFillPlayFill className="mr-2" />
              Watch Now
            </button>
          </div>
        ) : (
          ""
        )}
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
  );
};

const Card = ({ cardDetail, poster, id, cardGenres }) => {
  return (
    <Link href={cardDetail.release_date ? `/movies/${id}` : `/tv/${id}`}>
      <div className="card group/card w-[9.5rem] h-[100%] rounded-lg mr-4 relative transition-all duration-500 z-10 hover:z-20 hover:cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt="card"
          width={200}
          height={300}
          className="rounded-lg"
        />
        <CardDetail
          key={cardDetail.id}
          title={cardDetail.title || cardDetail.name}
          description={cardDetail.overview}
          genres={cardGenres}
          date={new Date(cardDetail.release_date || cardDetail.first_air_date)}
          detail={cardDetail}
        />
      </div>
    </Link>
  );
};

// Main Function
function CardSlider({ data, genres, type }) {
  console.log(data)
  return (
    <section className="my-4 relative group/slider w-[93%] mx-auto">
      <p className="card-slider-title text-2xl text-white mb-5 font-bold">
        {type}
      </p>
        <Swiper
        modules={[FreeMode, Mousewheel, Keyboard]}
        slidesPerView={8}
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
      </Swiper>
      <div className="absolute opacity-0 group-hover/slider:opacity-100 top-0 right-0 h-[85%] w-20 card-gradient z-30"></div>
    </section>
  );
}

export default CardSlider;
