import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill, BsFillShareFill } from "react-icons/bs";
import HeroLoading from "../HeroLoading";
import Link from "next/link";

const WatchNowBtn = ({ date }) => {
  return (
    <button className="flex items-center font-semibold justify-start w-[100%] py-[2px] text-slate-300 lg:text-2xl rounded-sm mr-5 md:text-lg sm:text-xs min-[360px]:text-sm">
      <BsFillPlayFill className="mr-1 lg:text-4xl md:text-xl sm:text-sm min-[360px]:text-sm" />
      <p className="flex flex-col justify-center items-start">
        <span className=" text-slate-300 lg:text-xl md:text-lg sm:text-sm min-[360px]:text-xs">Watch First Episode</span>
        <span className="text-slate-500 md:text-lg sm:text-sm min-[360px]:text-xs">
          S1 E1 . {new Date(date).toDateString().substring(4)}
        </span>
      </p>
    </button>
  );
};

const MoreBtns = () => {
  return (
    <div className="more-btn flex items-center justify-center text-white  md:flex sm:hidden min-[360px]:hidden">
      <button
        className="mr-3 flex flex-col items-center justify-start w-[100%] py-[2px] px-1 rounded-sm mb-1"
        style={{ fontSize: "0.65rem" }}
      >
        <AiOutlinePlus className="mr-2 lg:text-3xl md:text-lg mb-1 font-bold" />
        <span className="text-xs font-semibold uppercase">WatchList</span>
      </button>
      <button
        className="ml-2 flex flex-col items-center justify-start w-[100%] py-[2px] px-1 rounded-sm mb-1"
        style={{ fontSize: "0.65rem" }}
      >
        <BsFillShareFill className="mr-2 lg:text-2xl md:text-lg mb-2 font-bold" />
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
      <div className="show-card-detail to-transparent w-[93%] h-[100%] rounded-lg mx-auto relative hover:cursor-pointer md:w-[93%] min-[360px]:w-[100%]">
        <div className="content flex justify-between lg:static sm:relative min-[360px]:relative">
          <div className="text w-[50%] py-16 pl-16 relative z-40 lg:relative sm:absolute min-[360px]:absolute sm:left-0 sm:py-8 md:w-[50%] min-[360px]:py-4 min-[360px]:w-[85%]">
            <p className="text-white text-3xl font-extrabold mb-2 lg:text-xl md:text-xl sm:text-lg min-[360px]:text-sm">
              {details.name}
            </p>
            <p className="text-slate-400 font-semibold mb-2 xl:text-lg lg:text-base sm:text-xs min-[360px]:text-xs">
              {details.genres?.map((el) => {
                return <span key={el}>{el.name} . </span>;
              })}
              <span>{new Date(details.first_air_date).getFullYear()}</span>
            </p>
            <p className="text-slate-200 xl:text-lg lg:text-base lg:block md:text-xs min-[360px]:text-xs">
              {details.overview.substring(0, 200)}..
            </p>
            <div className="mt-10 w-[100%]  flex justify-center items-center absolute xl:bottom-16 lg:bottom-7 lg:absolute md:bottom-10 sm:static min-[360px]:bottom-[-2rem]">
              <WatchNowBtn date={details.first_air_date} />
              <MoreBtns />
            </div>
          </div>
          <div className="image z-10 relative lg:w-[80%] md:w-[100%]">
            <Image
              src={
                details &&
                `https://image.tmdb.org/t/p/original${details.backdrop_path}`
              }
              className="rounded-lg md:w-[100%]"
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
