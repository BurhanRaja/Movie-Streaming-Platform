import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

const getDisneyAdventure = async () => {
  let resMovies = await fetch(
    movieURL("release_date.desc", "12", "", "en", "122", "IN")
  );
  let resShows = await fetch(
    tvURL("popularity.desc", "10759", "", "en", "390", "")
  );

  resMovies = await resMovies.json();
  resShows = await resShows.json();

  let adventureM = resMovies.results;
  let adventureS = resShows.results;

  let allDisneyAdventure = [];

  for (let i = 0; i < 8; i++) {
    if (adventureM[i] !== undefined && adventureM[i].backdrop_path !== null) {
      allDisneyAdventure.push(adventureM[i]);
    }
    if (adventureS[i] !== undefined && adventureS[i].backdrop_path !== null) {
      allDisneyAdventure.push(adventureS[i]);
    }
  }

  return allDisneyAdventure;
};

export default getDisneyAdventure;
