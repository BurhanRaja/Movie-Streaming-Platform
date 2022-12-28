import CardSlider from "../../components/CardSlider";
import Extras from "../../components/Extras";
import Layout from "../../components/Layout";
import MovieWatchCard from "../../components/MovieWatchCard";
import getMovie from "../../services/fetchById/movie";
import { getGenreMovie } from "../../services/genres";
import { getLatestMovies, getLatestShows } from "../../services/latest";

function MovieDetail({ movie, videos, images, similar, genreMovie }) {
  return (
    <Layout>
      <MovieWatchCard details={movie} />
      <Extras videos={videos} images={images} />
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
  const { latestMovieIds } = await getLatestMovies();
  const { latestShowIds } = await getLatestShows();

  let paths = [];

  // LatestMovies
  for (let i = 0; i < latestMovieIds.length; i++) {
    paths.push({
      params: {
        id: String(latestMovieIds[i]),
      },
    });
  }

  // LatestShows
  for (let i = 0; i < latestShowIds.length; i++) {
    paths.push({
      params: {
        id: String(latestShowIds[i]),
      },
    });
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  let { movie, videos, images, similar } = await getMovie(params.id);
  let genreMovie = await getGenreMovie();

  return {
    props: {
      movie,
      videos,
      images,
      similar,
      genreMovie,
    },
  };
};

export default MovieDetail;
