import { useRouter } from "next/router";
import CardSlider from "../../components/cards/CardSlider";
import Extras from "../../components/Extras";
import Layout from "../../components/Layout";
import MovieWatchCard from "../../components/movie/MovieWatchCard";


function MovieDetails({ id, movie, similar, genreMovie }) {

  return (
    <Layout>
      <MovieWatchCard details={movie} />
      <Extras id={id} type="movie" />
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


export default MovieDetails;