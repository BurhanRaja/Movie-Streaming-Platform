import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill, BsFillShareFill } from "react-icons/bs";

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

function MovieWatchCard() {
  return (
    <div className="bg-slate-900 to-transparent w-[93%] h-[100%] rounded-lg mx-auto relative hover:cursor-pointer">
      <div className="content flex justify-start">
        <div className="text w-[40%] py-16 pl-16 relative z-50">
          <p className="text-white text-3xl font-extrabold mb-2">Chhichhore</p>
          <p className="text-slate-400 font-semibold mb-2 text-lg">
            Hindi . Drama . 2019
          </p>
          <p className="text-slate-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mt-10 w-[100%]  flex justify-center items-center absolute bottom-16">
            <WatchNowBtn />
            <MoreBtns />
          </div>
        </div>
        <div className="image w-40% z-10 relative">
          <Image
            src="/images/moviename.webp"
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
};

export default MovieWatchCard;