import Image from "next/image";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import CardLoading from "./CardLoading";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AlertContext from "../../context/alertContext";

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
    <div className="card group/card md:w-[9.5rem] min-[360px]:w-[6rem] md:h-[100%] min-[360px]:h-[60%] rounded-lg mr-4 relative transition-all duration-500 z-10 hover:z-20 hover:cursor-pointer">
      <Link href={cardDetail.release_date ? `/movies/${id}` : `/shows/${id}`}>
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
      </Link>
      <CardDetail
        key={cardDetail.id}
        title={cardDetail.title || cardDetail.name}
        description={cardDetail.overview}
        genres={cardGenres || cardDetail.genres}
        date={new Date(cardDetail.release_date || cardDetail.first_air_date)}
        detail={cardDetail}
      />
    </div>
  );
}

function CardDetail({ title, description, genres, date, detail }) {
  const [added, setAdded] = useState(false);

  const [message, setMessage, showAlert, setShowAlert] =
    useContext(AlertContext);

  // Removing from WatchList
  const handleRemove = async () => {
    let item = await JSON.parse(localStorage.getItem("data"));
    let itemId = await JSON.parse(localStorage.getItem("idData"));

    item = item?.filter((el) => el.id !== detail.id);
    itemId = itemId?.filter((el) => el !== detail.id);

    let token = localStorage.getItem("token");

    localStorage.removeItem("data");
    localStorage.removeItem("idData");
    localStorage.setItem("data", item && JSON.stringify([...item]));
    localStorage.setItem("idData", itemId && JSON.stringify([...itemId]));

    if (token) {
      setAdded(false);
      AlertDisplay("Added to Watchlist");
    } else {
      AlertDisplay("Please Login");
    }
  };

  // Alert
  const AlertDisplay = (message) => {
    setShowAlert(true);
    setMessage(message);
  };

  // Add Item to Watchlist
  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("data"));
    let itemId = JSON.parse(localStorage.getItem("idData"));
    let token = localStorage.getItem("token");

    if (
      added &&
      !item?.includes(detail) &&
      !itemId?.includes(detail.id) &&
      token
    ) {
      localStorage.removeItem("data");
      localStorage.removeItem("idData");
      localStorage.setItem(
        "data",
        item ? JSON.stringify([...item, detail]) : JSON.stringify([detail])
      );
      localStorage.setItem(
        "idData",
        itemId
          ? JSON.stringify([...itemId, detail.id])
          : JSON.stringify([detail.id])
      );
    }
  }, [added, detail]);

  // setAdded to true when reload
  useEffect(() => {
    let itemId = JSON.parse(localStorage.getItem("idData"));
    const handleWatchListAdded = (arr) => {
      arr.forEach((el) => {
        if (Number(el) === Number(detail.id)) {
          setAdded(true);
        }
      });
    };
    if (itemId) {
      handleWatchListAdded(itemId);
    }
  }, [detail]);

  // Adding to WatchList
  const handleAdded = () => {
    let token = localStorage.getItem("token");

    if (token) {
      setAdded(true);
      AlertDisplay("Added to Watchlist");
    } else {
      AlertDisplay("Please Login");
    }
  };

  return (
    <div className="card-detail absolute bottom-[0%] rounded-lg w-[100%] text-xs card-background-gradient text-white opacity-0 group-hover/card:opacity-100 transition-all duration-500 lg:block min-[370px]:hidden">
      <div className="title">
        <p className="font-bold mb-1">{title}</p>
        <p className="leading-3 mt-1 text-[0.6rem] font-semibold mb-2">
          {genres
            ? genres?.map((el) => {
                return <span key={el}>{el.name || el} . </span>;
              })
            : "No Genres"}
          <span>{date ? date.getFullYear() : "No Date"}</span>
        </p>
      </div>
      <div
        className="description mt-1 mb-1 text-slate-500 font-bold"
        style={{ fontSize: "0.6rem" }}
      >
        <p className="leading-3">
          {description ? description.substring(0, 55) : "No Description"}...
        </p>
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
        {added ? (
          <div>
            <button
              className="flex items-center justify-start w-[100%] py-[2px] px-1 hover:bg-slate-700 rounded-sm mb-1"
              onClick={handleRemove}
              style={{ fontSize: "0.65rem" }}
            >
              <AiOutlineCheck className="mr-2 text-green-500" />
              Remove from WatchList
            </button>
          </div>
        ) : (
          <div>
            <button
              className="flex items-center justify-start w-[100%] py-[2px] px-1 hover:bg-slate-700 rounded-sm mb-1"
              onClick={handleAdded}
              style={{ fontSize: "0.65rem" }}
            >
              <AiOutlinePlus className="mr-2" />
              Add to Watchlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
