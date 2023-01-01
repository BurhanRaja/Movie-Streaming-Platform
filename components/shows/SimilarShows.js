import React from "react";
import useSWR from "swr";
import CardSlider from "../cards/CardSlider";

function SimilarShows({ id, genreShow }) {
  const getSimilar = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=2f9e10868a6746a6142393abb6da3841&language=en-US&page=1`,
    getSimilar
  );

  if (error) console.log(error);

  if (data) {
    return (
      <div className="mt-12">
        {data.total_pages === 0 || !data ? (
          <div className="w-[93%] mx-auto">
            <p className="card-slider-title text-2xl text-white mb-5 font-bold">
              More Like this
            </p>
            <h2 className=" text-red-500 ">No Recommendations</h2>
          </div>
        ) : (
          <CardSlider
            data={data.results}
            genres={genreShow.genres}
            type="More like this"
          />
        )}
      </div>
    );
  }
}

export default SimilarShows;
