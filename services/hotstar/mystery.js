import movieURL from "../../utils/hotstarDisney/movieURL";
import tvURL from "../../utils/hotstarDisney/tvURL";

export const getMysteryMovies = async () => {
  let [responseMovieHi, responseMovieEn] = await Promise.all([
    fetch(movieURL("popularity.desc", "9648", "", "hi", "122")),
    fetch(movieURL("popularity.desc", "9648", "", "en", "122")),
  ]);

  let [mysteryMovieHi, mysteryMovieEn] = await Promise.all([
    responseMovieHi.json(),
    responseMovieEn.json(),
  ]);

  mysteryMovieHi = mysteryMovieHi.results;
  mysteryMovieEn = mysteryMovieEn.results;

  let allMysteryMovies = [];

  for (let i = 0; i < 8; i++) {
    if (mysteryMovieHi[i] !== undefined) {
      allMysteryMovies.push(mysteryMovieHi[i]);
    }
    if (mysteryMovieEn[i] !== undefined) {
      allMysteryMovies.push(mysteryMovieEn[i]);
    }
  }

  return allMysteryMovies;
};

export const getMysteryShows = async () => {
  let [responseShowsHi, responseShowsEn] = await Promise.all([
    fetch(tvURL("popularity.desc", "9648", "", "hi", "122")),
    fetch(tvURL("popularity.desc", "9648", "", "en", "122")),
  ]);

  let [mysteryShowsHi, mysteryShowsEn] = await Promise.all([
    responseShowsHi.json(),
    responseShowsEn.json(),
  ]);

  mysteryShowsHi = mysteryShowsHi.results;
  mysteryShowsEn = mysteryShowsEn.results;

  let allMysteryShows = [];

  for (let i = 0; i < 8; i++) {
    if (mysteryShowsHi[i] !== undefined) {
      allMysteryShows.push(mysteryShowsHi[i]);
    }
    if (mysteryShowsEn[i] !== undefined) {
      allMysteryShows.push(mysteryShowsEn[i]);
    }
  }

  return allMysteryShows;
};
