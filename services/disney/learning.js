import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

const getDisneyLearning = async () => {

  let resMovies = await fetch(
    movieURL("popularity.desc", "99", "7521", "en", "", "IN")
  );
  let resShows = await fetch(tvURL("first_air_date.desc", "10764", "7521", "en", "", ""));

  resMovies = await resMovies.json();
  resShows = await resShows.json();

  let learningM = resMovies.results;
  let learningS = resShows.results;

  let allDisneyLearning = [];

  for (let i = 0; i < 8; i++) {
    if (learningM[i] !== undefined && learningM[i].backdrop_path !== null) {
      allDisneyLearning.push(learningM[i]);
    }
    if (learningS[i] !== undefined && learningS[i].backdrop_path !== null) {
      allDisneyLearning.push(learningS[i]);
    }
  }

  return allDisneyLearning;
};

export default getDisneyLearning;
