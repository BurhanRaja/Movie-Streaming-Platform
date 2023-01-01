import { useRouter } from "next/router";
import CardSlider from "../../components/cards/CardSlider";
import Extras from "../../components/Extras";
import Layout from "../../components/Layout";
import MovieWatchCard from "../../components/movie/MovieWatchCard";


function MovieDetails({ movie, videos, similar, genreMovie }) {

  const {asPath} = useRouter();
  // console.log(asPath.substring(8));

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


export default MovieDetails;