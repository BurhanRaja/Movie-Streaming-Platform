import React from "react";
import Layout from "../../components/Layout";
import TVWatchCard from "../../components/shows/TvWatchCard";
import { getComedyShows } from "../../services/comedy";
import { getCrimeShows } from "../../services/crime";
import { getDocumentaryShows } from "../../services/documentary";
import { getDramaShows } from "../../services/drama";
import { getLatestShows } from "../../services/latest";
import { getMysteryShows } from "../../services/mystery";
import { getPopularShows } from "../../services/popular";
import { getScifiShows } from "../../services/sci-fi";
import getShow from "../../services/fetchById/show";
import { getGenreShow } from "../../services/genres";
import Episodes from "../../components/shows/Episodes";
import Extras from "../../components/Extras";
import CardSlider from "../../components/CardSlider";

function ShowDetail({show, seasons, videos, similar, genreShow}) {
  return (
    <Layout>
      <TVWatchCard details={show} />
      <Episodes episodes={seasons.episodes} />
      <Extras videos={videos} />

      <div className="mt-12">
        {similar.total_pages === 0 || !similar ? (
          <div className="w-[93%] mx-auto">
            <p className="card-slider-title text-2xl text-white mb-5 font-bold">
              More Like this
            </p>
            <h2 className=" text-red-500 ">No Recommendations</h2>
          </div>
        ) : (
          <CardSlider
            data={similar.results}
            genres={genreShow.genres}
            type="More like this"
          />
        )}
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const [
    latestSIds,
    popularSIds,
    comedySIds,
    crimeSIds,
    documentarySIds,
    dramaSIds,
    mysterySIds,
    scifiSIds,
  ] = await Promise.all([
    getLatestShows(),
    getPopularShows(),
    getComedyShows(),
    getCrimeShows(),
    getDocumentaryShows(),
    getDramaShows(),
    getMysteryShows(),
    getScifiShows(),
  ]);

  let paths = [];

  let pathLatest = latestSIds.latestShowIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathPopular = popularSIds.popularShowsIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathComedy = comedySIds.allComedyShowsIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathCrime = crimeSIds.allCrimeShowsIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathDocumentary = documentarySIds.allDocumentarySIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathDrama = dramaSIds.allDramaShowsIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathMystery = mysterySIds.allMysteryShowsIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));


  let pathSciFi = scifiSIds.allSciFiShowsIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  paths = [
    ...pathLatest,
    ...pathPopular,
    ...pathComedy,
    ...pathCrime,
    ...pathDocumentary,
    ...pathDrama,
    ...pathMystery,
    ...pathSciFi,
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
    const { params } = ctx;
    let { show, seasons, videos, similar } = await getShow(params.id);
    let genreShow = await getGenreShow();


    // console.log(show)
  
    return {
      props: {
        show,
        seasons,
        videos,
        similar,
        genreShow
      },
    };
  };

export default ShowDetail;
