import CardSlider from "../../components/cards/CardSlider";

function SimilarMovies({similar, genreMovie}) {
  return (
    <>
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
    </>
  )
}

export default SimilarMovies
