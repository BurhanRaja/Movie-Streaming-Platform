import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Card from "./cards/Card";

function WatchList({ genres }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("data"));
    let token = localStorage.getItem("token");
    if (token) {
      setData(item);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Your Watchlist</title>
        <link rel="icon" type="image/x-icon" href="/images/logo.jpg"></link>
      </Head>
      <div className="mt-5 text-3xl w-[87%] mx-auto my-5">
        <p className="capitalize text-white font-bold">Your Watchlist</p>
      </div>
      <div className="flex items-center justify-start w-[89%] mx-auto flex-wrap">
        {!data ? (
          <div className="">
            <h2 className=" text-red-500 ">Watchlist Empty</h2>
          </div>
        ) : (
          data.map((el) => {
            return (
              <div className="mt-4 mb-4 mx-4" key={el.id}>
                <Card
                  cardDetail={el}
                  cardGenres={genres}
                  id={el.id}
                  poster={el.poster_path}
                />
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
}

export default WatchList;
