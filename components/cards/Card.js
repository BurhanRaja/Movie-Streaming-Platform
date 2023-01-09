import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import CardLoading from "./CardLoading";

import Link from "next/link";
import { useEffect, useState } from "react";

function Card({ cardDetail, poster, id, cardGenres }) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (cardDetail) {
      setLoading(false);
    }
  }, [cardDetail]);

  return loading ? (
    <CardLoading />
  ) : (
    <Link href={cardDetail.release_date ? `/movies/${id}` : `/shows/${id}`}>
      <div className="card group/card w-[9.5rem] h-[100%] rounded-lg mr-4 relative transition-all duration-500 z-10 hover:z-20 hover:cursor-pointer">
        <Image
          src={
            poster
              ? `https://image.tmdb.org/t/p/original${poster}`
              : "/images/disneyhotstar.jpg"
          }
          alt="card"
          width={200}
          height={300}
          className="rounded-lg"
        />
        <CardDetail
          key={cardDetail.id}
          title={cardDetail.title || cardDetail.name}
          description={cardDetail.overview}
          genres={cardGenres || cardDetail.genres}
          date={new Date(cardDetail.release_date || cardDetail.first_air_date)}
          detail={cardDetail}
        />
      </div>
    </Link>
  );
}

function CardDetail({ title, description, genres, date, detail }) {
  return (
    <div className="card-detail absolute bottom-[0%] rounded-lg w-[100%] text-xs card-background-gradient text-white opacity-0 group-hover/card:opacity-100 transition-all duration-500">
      <div className="title">
        <p className="font-bold mb-1">{title}</p>
        <p className="leading-3 mt-1 text-[0.6rem] font-semibold mb-2">
          {genres ? genres?.map((el) => {
            return <span key={el}>{el.name || el} . </span>;
          }) : "No Genres"}
          <span>{date ? date.getFullYear() : "No Date"}</span>
        </p>
      </div>
      <div
        className="description mt-1 mb-1 text-slate-500 font-bold"
        style={{ fontSize: "0.6rem" }}
      >
        <p className="leading-3">{description ? description.substring(0, 55) : "No Description"}...</p>
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
}

export default Card;
