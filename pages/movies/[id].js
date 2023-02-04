import Head from "next/head";
import MovieDetails from "../../components/movie/MovieDetails";
import { getGenreMovie } from "../../services/genres";
import getMovie from "../../services/fetchById/movie";

function MovieDetail({ id, genreMovie, movie, similar, videos }) {
    return (
      <>
        <MovieDetails
          movie={movie}
          similar={similar}
          genreMovie={genreMovie}
          videos={videos}
          id={id}
        />
      </>
    );
  }

MovieDetail.getInitialProps = async ({ query }) => {
  const genreMovie = await getGenreMovie();
  const {movie, similar, videos} = await getMovie(query.id);

  return {
    genreMovie,
    id: String(query.id),
    movie,
    similar,
    videos
  };
};

export default MovieDetail;
