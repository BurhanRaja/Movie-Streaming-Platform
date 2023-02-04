import Extras from "../../components/Extras";
import Layout from "../../components/Layout";
import CardSlider from "../../components/cards/CardSlider";
import MovieWatchCard from "../../components/movie/MovieWatchCard";
import SimilarMovies from "../../components/movie/SimilarMovies";

function MovieDetails({ id, movie, similar, genreMovie, videos }) {
  return (
    <Layout>
      <MovieWatchCard details={movie} />
      <Extras id={id} type="movie" videos={videos} />
      <div className="mt-12">
        <SimilarMovies similar={similar} genreMovie={genreMovie} />
      </div>
    </Layout>
  );
}

export default MovieDetails;
