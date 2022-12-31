import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill, BsFillShareFill } from "react-icons/bs";
import HeroLoading from "../HeroLoading";
import Link from "next/link";

const WatchNowBtn = ({date}) => {
  return (
    <button className="flex items-center font-semibold justify-start w-[100%] py-[2px] rounded-sm mr-5">
      <BsFillPlayFill className="mr-1  text-slate-300 text-4xl" />
      <p className="flex flex-col justify-center items-start">
        <span className=" text-slate-300 text-xl">Watch First Episode</span>
        <span className="text-slate-500">S1 E1 . {new Date(date).toDateString().substring(4)}</span>
    </p>
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

function TVWatchCard({ details }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (details) {
      setLoading(false);
    }
  }, [details]);

  return loading ? (
    <HeroLoading />
  ) : (
    <Link href="">
      <div className="show-card-detail to-transparent w-[93%] h-[100%] rounded-lg mx-auto relative hover:cursor-pointer">
        <div className="content flex justify-start">
          <div className="text w-[40%] py-16 pl-16 relative z-50">
            <p className="text-white text-3xl font-extrabold mb-2">
              {details.name}
            </p>
            <p className="text-slate-400 font-semibold mb-2 text-lg">
              {details.genres?.map((el) => {
                return <span key={el}>{el.name} . </span>;
              })}
              <span>{new Date(details.first_air_date).getFullYear()}</span>
            </p>
            <p className="text-slate-200">{details.overview.substring(0, 200)}..</p>
            <div className="mt-10 w-[100%]  flex justify-center items-center absolute bottom-16">
              <WatchNowBtn date={details.first_air_date} />
              <MoreBtns />
            </div>
          </div>
          <div className="image w-40% z-10 relative">
            <Image
              src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
              className="rounded-lg"
              width={765}
              height={100}
              alt="img"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] overflow-hidden showdetail-image-gradient"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TVWatchCard;
