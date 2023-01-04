import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

const getDisneyFamily = async () => {

  let resMovies = await fetch(
    movieURL("release_date.desc", "10751", "2", "en", "", "IN")
  );

  let resShows = await fetch(tvURL("first_air_date.desc", "10751", "", "en", "122", "IN"));

  resMovies = await resMovies.json();
  resShows = await resShows.json();

  let familyM = resMovies.results;
  let familyS = resShows.results;

  let allDisneyFamily = [];

  for (let i = 0; i < 8; i++) {
    if (familyM[i] !== undefined && familyM[i].backdrop_path !== null) {
      allDisneyFamily.push(familyM[i]);
    }
    if (familyS[i] !== undefined && familyS[i].backdrop_path !== null) {
      allDisneyFamily.push(familyS[i]);
    }
  }

  return allDisneyFamily;
};

export default getDisneyFamily;
