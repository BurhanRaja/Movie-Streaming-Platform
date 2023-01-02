import useSWR from "swr";
import MovieDetails from "../../components/movie/MovieDetails";
import { getGenreMovie } from "../../services/genres";

function MovieDetail({ id, genreMovie }) {
  const getMovie = (url) => fetch(url).then((res) => res.json());
  const getSimilar = (url) => fetch(url).then((res) => res.json());

  const movie = useSWR(
    `${process.env.NEXT_PUBLIC_URL}movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    getMovie
  );

  const similar = useSWR(
    `${process.env.NEXT_PUBLIC_URL}movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    getSimilar
  );

  if(movie.error || similar.error) console.log("Some Error Occured");

  if (movie.data && similar.data) {
    return <MovieDetails movie={movie.data} similar={similar.data} genreMovie={genreMovie} id={id} />;
  }
}

MovieDetail.getInitialProps = async ({ query }) => {
  const genreMovie = await getGenreMovie();

  return {
    genreMovie,
    id: String(query.id),
  };
};

export default MovieDetail;
