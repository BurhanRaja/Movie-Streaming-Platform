import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

const getDisneyPopular = async () => {
  let resMovies = await fetch(
    movieURL("popularity.desc", "", "", "en", "122", "IN")
  );
  let resShows = await fetch(
    tvURL("popularity.desc", "", "", "en", "122", "IN")
  );

  resMovies = await resMovies.json();
  resShows = await resShows.json();

  let popularM = resMovies.results;
  let popularS = resShows.results;

  let allDisneyPopular = [];

  for (let i = 0; i < 8; i++) {
    if (popularM[i] !== undefined && popularM[i].backdrop_path !== null) {
      allDisneyPopular.push(popularM[i]);
    }
    if (popularS[i] !== undefined && popularS[i].backdrop_path !== null) {
      allDisneyPopular.push(popularS[i]);
    }
  }

  return allDisneyPopular;
};

export default getDisneyPopular;
