import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

const getDisneyNature = async () => {

    "https://api.themoviedb.org/3/discover/movie?api_key=2f9e10868a6746a6142393abb6da3841&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_companies=7521&with_genres=99&with_original_language=en&watch_region=IN&with_watch_monetization_types=flatrate"

  let resMovies = await fetch(
    movieURL("release_date.desc", "", "4436", "en", "", "IN")
  );
  let resShows = await fetch(tvURL("release_date.desc", "", "7521", "en", "", ""));

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
