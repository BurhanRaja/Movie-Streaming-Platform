import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

const getDisneyLatest = async () => {
  let resMovies = await fetch(
    movieURL("release_date.desc", "", "", "en", "122", "IN")
  );
  let resShows = await fetch(tvURL("popularity.desc", "", "", "en", "390", ""));

  resMovies = await resMovies.json();
  resShows = await resShows.json();

  let latestM = resMovies.results;
  let latestS = resShows.results;

  let allDisneyLatest = [];

  for (let i = 0; i < 6; i++) {
    if (latestM[i] !== undefined && latestM[i].backdrop_path !== null) {
      allDisneyLatest.push(latestM[i]);
    }
    if (latestS[i] !== undefined && latestS[i].backdrop_path !== null) {
      allDisneyLatest.push(latestS[i]);
    }
  }

  return allDisneyLatest;
};

export default getDisneyLatest;
