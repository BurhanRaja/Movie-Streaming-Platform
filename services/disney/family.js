import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

const getDisneyFamily = async () => {

  "https://api.themoviedb.org/3/discover/movie?api_key=2f9e10868a6746a6142393abb6da3841&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=3&with_genres=16&with_keywords=toy&with_original_language=en&with_watch_monetization_types=flatrate"

  let resMovies = await fetch(
    movieURL("release_date.desc", "10751", "2", "en", "", "IN")
  );

  let resShows = await fetch(tvURL("first_air_date.desc", "10751", "", "en", "122", "IN"));

  let resPixar = await fetch(movieURL("popularity.desc", "10751", "3", "en", "122", "IN"));

  resMovies = await resMovies.json();
  resShows = await resShows.json();
  resPixar = await resPixar.json();

  let familyM = resMovies.results;
  let familyS = resShows.results;
  let familyPixar = resPixar.results;

  let allDisneyFamily = [];

  for (let i = 0; i < 8; i++) {
    if (familyM[i] !== undefined && familyM[i].backdrop_path !== null) {
      allDisneyFamily.push(familyM[i]);
    }
    if (familyS[i] !== undefined && familyS[i].backdrop_path !== null) {
      allDisneyFamily.push(familyS[i]);
    }
    if (familyPixar[i+4] !== undefined && familyPixar[i+4].backdrop_path !== null) {
      allDisneyFamily.push(familyPixar[i+4]);
    }
    
  }

  return allDisneyFamily;
};

export default getDisneyFamily;
