import movieURL from "../../utils/hotstarDisney/movieURL";
import tvURL from "../../utils/hotstarDisney/tvURL";

export const getCrimeMovies = async () => {
  const responseHi = await fetch(
    movieURL("release_date.desc", "80", "", "hi", "122")
  );
  const responseEn = await fetch(
    movieURL("release_date.desc", "80", "", "en", "122")
  );

  let crimeMoviesHi = await responseHi.json();
  let crimeMoviesEn = await responseEn.json();

  crimeMoviesHi = crimeMoviesHi.results;
  crimeMoviesEn = crimeMoviesEn.results;

  let allCrimeMovies = [];

  for (let i = 0; i < 8; i++) {
    if (crimeMoviesHi[i] !== undefined) {
      allCrimeMovies.push(crimeMoviesHi[i]);
    }
    if (crimeMoviesEn[i] !== undefined) {
      allCrimeMovies.push(crimeMoviesEn[i]);
    }
  }

  return allCrimeMovies;
};

export const getCrimeShows = async () => {
  const responseHi = await fetch(
    tvURL("release_date.desc", "80", "", "hi", "122")
  );
  const responseEn = await fetch(
    tvURL("release_date.desc", "80", "", "en", "122")
  );

  let crimeShowsHi = await responseHi.json();
  let crimeShowsEn = await responseEn.json();

  crimeShowsHi = crimeShowsHi.results;
  crimeShowsEn = crimeShowsEn.results;

  let allCrimeShows = [];

  for (let i = 0; i < 8; i++) {
    if (crimeShowsHi[i] !== undefined) {
      allCrimeShows.push(crimeShowsHi[i]);
    }
    if (crimeShowsEn[i] !== undefined) {
      allCrimeShows.push(crimeShowsEn[i]);
    }
  }

  return allCrimeShows;
};
