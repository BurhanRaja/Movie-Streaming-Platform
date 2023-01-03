import movieURL from "../../utils/movieURL";

const getRomanticMovies = async () => {
  const responseHi = await fetch(
    movieURL("release_date.desc", "10749", "", "hi", "122")
  );
  const responseEn = await fetch(
    movieURL("release_date.desc", "10749", "", "en", "122")
  );

  let romanticMoviesHi = await responseHi.json();
  let romanticMoviesEn = await responseEn.json();

  romanticMoviesHi = romanticMoviesHi.results;
  romanticMoviesEn = romanticMoviesEn.results;

  let allRomanticMovies = [];

  for (let i = 0; i < 8; i++) {
    if (romanticMoviesHi[i] !== undefined) {
      allRomanticMovies.push(romanticMoviesHi[i]);
    }
    if (romanticMoviesEn[i] !== undefined) {
      allRomanticMovies.push(romanticMoviesEn[i]);
    }
  }

  return allRomanticMovies;
};

export default getRomanticMovies;
