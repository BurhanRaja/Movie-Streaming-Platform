import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Extras from "../../components/Extras";
import Layout from "../../components/Layout";
import Episodes from "../../components/shows/Episodes";
import TVWatchCard from "../../components/shows/TvWatchCard";
import SimilarShows from "./SimilarShows";
import Seasons from "./Seasons";

function ShowDetails({ id, genreShow }) {
  const getShow = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    getShow
  );

  if(error) console.log(error);
  if(data) {
  return (
    <Layout>
      <TVWatchCard details={data} />
      <Episodes id={id} seasonNo={1} sliderEnable={true} />
      <div className="w-[93%] mx-auto">
          <p className="text-2xl font-bold text-white mb-6 mt-6">Seasons</p>
        </div>
      <div className="flex items-center justify-start w-[93%] mx-auto flex-wrap">
        {[...Array(data.number_of_seasons).keys()].map((el) => {
            return <Seasons key={el} seasonNo={el} id={id} />
        })}
      </div>
      <Extras id={id} />
      <SimilarShows id={id} genreShow={genreShow} />
    </Layout>
  );
};
}

export default ShowDetails;
