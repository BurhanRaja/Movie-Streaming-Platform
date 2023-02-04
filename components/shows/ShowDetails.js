import Head from "next/head";
import React from "react";
import Extras from "../../components/Extras";
import Layout from "../../components/Layout";
import Episodes from "../../components/shows/Episodes";
import TVWatchCard from "../../components/shows/TvWatchCard";
import Seasons from "./Seasons";
import SimilarShows from "./SimilarShows";

function ShowDetails({ id, genreShow, show, similar, videos }) {
  return (
    <Layout>
      <Head>
        <title>{show.name}</title>
      </Head>
      <TVWatchCard details={show} />
      <Episodes id={id} seasonNo={1} sliderEnable={true} />
      <div className="w-[95%] mx-auto">
        <p className="text-2xl font-bold text-white mb-6 mt-6">Seasons</p>
      </div>
      <div className="flex items-center justify-start w-[93%] mx-auto flex-wrap">
        {[...Array(show.number_of_seasons).keys()].map((el) => {
          return <Seasons key={el} seasonNo={el} id={id} />;
        })}
      </div>
      <Extras videos={videos} />
      <SimilarShows genreShow={genreShow} similar={similar} />
    </Layout>
  );
}

export default ShowDetails;
