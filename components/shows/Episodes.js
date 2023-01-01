import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../SwiperSlider";
import useSWR from "swr";
import { useRouter } from "next/router";

import "swiper/css";
import "swiper/css/free-mode";

const CardDetail = ({ description, episodeNo, seasonNo, date }) => {
  return (
    <div className="card-detail absolute bottom-[0%] rounded-lg w-[100%] text-xs card-background-gradient text-white opacity-0 group-hover/card:opacity-100 transition-all duration-500">
      <div className="title">
        <p className="leading-3 mt-1 text-[0.6rem] font-semibold mb-2">
          <span>
            S{seasonNo} E{episodeNo} . {new Date(date).toDateString()}
          </span>
        </p>
      </div>
      <div
        className="description mt-1 mb-1 text-slate-500 font-bold"
        style={{ fontSize: "0.6rem" }}
      >
        <p className="leading-3">{description.substring(0, 80)}...</p>
      </div>
      <div className="btn mt-1">
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

const Card = ({ description, episodeNo, seasonNo, date, image }) => {

  return (
    <Link href="/">
      <div className="card group/card w-[18rem] h-[10.2rem] rounded-lg  relative transition-all duration-500 z-10 hover:z-20 hover:cursor-pointer">
        <Image
          src={image ? `https://image.tmdb.org/t/p/original${image}` : "/images/coming-soon.jpg"}
          alt="card"
          width={400}
          height={300}
          className="rounded-lg"
        />
        <div className="absolute h-10 rounded-md flex items-center episode-card-gradient w-[100%] bottom-0 left-0 text-white">
          <p className="flex items-center ml-3 text-sm font-bold">
            <BsFillPlayFill className="mr-2 text-xl" /> S{seasonNo} E{episodeNo}{" "}
            . {new Date(date).toDateString()}
          </p>
        </div>
        <CardDetail
          description={description}
          date={date}
          seasonNo={seasonNo}
          episodeNo={episodeNo}
        />
      </div>
    </Link>
  );
};

function Episodes({ id }) {

  const getSeason = (url) => fetch(url).then((res) => res.json());

  const {data, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_URL}tv/${id}/season/1?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, getSeason);

  return !isLoading && (
    <Fragment>
      <div className="w-[93%] mx-auto">
        <div className="">
          <p className="text-2xl font-bold text-white mb-10 mt-10">Episodes - Season 1</p>
        </div>
        <SwiperSlider countCard={4}>
          {data.episodes.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <Card
                  description={el.overview}
                  episodeNo={el.episode_number}
                  seasonNo={el.season_number}
                  date={el.air_date}
                  image={el.still_path}
                />
              </SwiperSlide>
            );
          })}
        </SwiperSlider>
      </div>
    </Fragment>
  );
}

export default Episodes;