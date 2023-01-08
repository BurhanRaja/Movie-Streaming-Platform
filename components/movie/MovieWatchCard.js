import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill, BsFillShareFill } from "react-icons/bs";
import HeroLoading from "../HeroLoading";

const WatchNowBtn = () => {
  return (
    <button className="flex items-center font-semibold justify-start w-[100%] py-[2px] text-slate-300 text-2xl rounded-sm mr-5">
      <BsFillPlayFill className="mr-1 text-4xl" />
      Watch Movie
    </button>
  );
};

const MoreBtns = () => {
  return (
    <div className="more-btn flex items-center justify-center text-white">
      <button
        className="mr-3 flex flex-col items-center justify-start w-[100%] py-[2px] px-1 rounded-sm mb-1"
        style={{ fontSize: "0.65rem" }}
      >
        <AiOutlinePlus className="mr-2 text-3xl mb-1 font-bold" />
        <span className="text-xs font-semibold uppercase">WatchList</span>
      </button>
      <button
        className="ml-2 flex flex-col items-center justify-start w-[100%] py-[2px] px-1 rounded-sm mb-1"
        style={{ fontSize: "0.65rem" }}
      >
        <BsFillShareFill className="mr-2 text-2xl mb-2 font-bold" />
        <span className="text-xs font-semibold uppercase">Share</span>
      </button>
    </div>
  );
};

function MovieWatchCard({ details }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (details) {
      setLoading(false);
    }
  }, [details]);

  return loading ? (
    <HeroLoading />
  ) : (
    <div className="movie-card-detail to-transparent w-[93%] h-[100%] rounded-lg mx-auto relative hover:cursor-pointer">
      <div className="content flex justify-start">
        <div className="text w-[40%] py-16 pl-16 relative z-40">
          <p className="text-white text-3xl font-extrabold mb-2">
            {details.title}
          </p>
          <p className="text-slate-400 font-semibold mb-2 text-lg">
            {details.genres?.map((el) => {
              return <span key={el}>{el.name} . </span>;
            })}
            <span>{new Date(details.release_date).getFullYear()}</span>
          </p>
          <p className="text-slate-200">{details.overview.substring(0, 200)}...</p>
          <div className="mt-10 w-[100%]  flex justify-center items-center absolute bottom-16">
            <WatchNowBtn />
            <MoreBtns />
          </div>
        </div>
        <div className="image w-40% z-10 relative">
          <Image
            src={details.backdrop_path ? `https://image.tmdb.org/t/p/original${details.backdrop_path}` : "/images/logo.webp"}
            className="rounded-lg"
            width={765}
            height={100}
            alt="img"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] overflow-hidden moviedetail-image-gradient"></div>
        </div>
      </div>
    </div>
  );
}

export default MovieWatchCard;
