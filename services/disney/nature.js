import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

const getDisneyNature = async () => {

  let resMovies = await fetch(
    movieURL("release_date.desc", "", "4436", "en", "", "IN")
  );
  let resShows = await fetch(tvURL("first_air_date.desc", "", "7521", "en", "", ""));

  resMovies = await resMovies.json();
  resShows = await resShows.json();

  let natureM = resMovies.results;
  let natureS = resShows.results;

  let allDisneyNature = [];

  for (let i = 0; i < 8; i++) {
    if (natureM[i] !== undefined && natureM[i].backdrop_path !== null) {
      allDisneyNature.push(natureM[i]);
    }
    if (natureS[i] !== undefined && natureS[i].backdrop_path !== null) {
      allDisneyNature.push(natureS[i]);
    }
  }

  return allDisneyNature;
};

export default getDisneyNature;
