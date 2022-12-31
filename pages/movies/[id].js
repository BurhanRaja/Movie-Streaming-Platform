import CardSlider from "../../components/CardSlider";
import Extras from "../../components/Extras";
import Layout from "../../components/Layout";
import MovieWatchCard from "../../components/movie/MovieWatchCard";
import { getComedyMovies } from "../../services/comedy";
import { getCrimeMovies } from "../../services/crime";
import { getDocumentaryMovies } from "../../services/documentary";
import { getDramaMovies } from "../../services/drama";
import getMovie from "../../services/fetchById/movie";
import { getGenreMovie } from "../../services/genres";
import { getLatestMovies } from "../../services/latest";
import { getMysteryMovies } from "../../services/mystery";
import { getPopularMovies } from "../../services/popular";
import getRomanticMovies from "../../services/romance";
import { getScifiMovies } from "../../services/sci-fi";

function MovieDetail({ movie, videos, similar, genreMovie }) {
  return (
    <Layout>
      <MovieWatchCard details={movie} />
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
            genres={genreMovie.genres}
            type="More like this"
          />
        )}
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const [
    latestMIds,
    popularMIds,
    comedyMIds,
    crimeMIds,
    documentaryMIds,
    dramaMIds,
    mysteryMIds,
    romanceMIds,
    scifiMIds,
  ] = await Promise.all([
    getLatestMovies(),
    getPopularMovies(),
    getComedyMovies(),
    getCrimeMovies(),
    getDocumentaryMovies(),
    getDramaMovies(),
    getMysteryMovies(),
    getRomanticMovies(),
    getScifiMovies(),
  ]);

  let paths = [];

  let pathLatest = latestMIds.latestMovieIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathPopular = popularMIds.popularMoviesIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathComedy = comedyMIds.allComedyMoviesIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathCrime = crimeMIds.allCrimeMoviesIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathDocumentary = documentaryMIds.allDocumentaryMIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathDrama = dramaMIds.allDramaMoviesIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathMystery = mysteryMIds.allMysteryMoviesIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathRomance = romanceMIds.allRomanticMIds.map((el) => ({
    params: {
      id: String(el),
    },
  }));

  let pathSciFi = scifiMIds.allSciFiMoviesIds.map((el) => ({
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
    ...pathRomance,
    ...pathSciFi,
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  let { movie, videos, similar } = await getMovie(params.id);
  let genreMovie = await getGenreMovie();

  return {
    props: {
      movie,
      videos,
      similar,
      genreMovie,
    },
  };
};

export default MovieDetail;
