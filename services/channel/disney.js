import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

export const getDisneyOriginalMovies = async () => {

  let resOriginals = await fetch(
    movieURL("popularity.desc", "", "2", "", "", "")
  );

  let resOriginalShows = await fetch(
    tvURL("first_air_date.desc", "", "", "en", "122", "IN")
  );
  
  resOriginals = await resOriginals.json();
  resOriginals = resOriginals.results;

  resOriginalShows = await resOriginalShows.json();
  resOriginalShows = resOriginalShows.results;

  resOriginals = resOriginals.filter(
    (el) =>
      new Date("2005-12-07").getTime() < new Date(el.release_date).getTime()
  );

  let allOriginals = [];

  let definedArray = [0, 1, 4, 7];

  for (let i = 0; i < 18; i++) {
    if (resOriginals[i] !== undefined) {
        allOriginals.push(resOriginals[i]);
    }
    if (definedArray[i] !== undefined || i <= 3) {
        allOriginals.push(resOriginalShows[definedArray[i]]);
    }
  }

  return allOriginals;
};


export const getDisneyAnimation = async () => {

}