import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

const getDisneyOriginals = async () => {

  let resMovies = await fetch(
    movieURL("release_date.desc", "", "2", "en", "", "IN")
  );
  let resShows = await fetch(
    tvURL("release_date.desc", "", "", "en", "122", "IN")
  );

  resMovies = await resMovies.json();
  resShows = await resShows.json();

  let originalM = resMovies.results;
  let originalS = resShows.results;

  let allDisneyOriginal = [];

  for (let i = 0; i < 8; i++) {
    if (originalM[i] !== undefined && originalM[i].backdrop_path !== null) {
      allDisneyOriginal.push(originalM[i]);
    }
    if (originalS[i] !== undefined && originalS[i].backdrop_path !== null) {
      allDisneyOriginal.push(originalS[i]);
    }
  }

  return allDisneyOriginal;
};

export default getDisneyOriginals;
