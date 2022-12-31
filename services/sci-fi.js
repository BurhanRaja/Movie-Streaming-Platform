import movieURL from "../utils/movieURL";
import tvURL from "../utils/tvURL";

export const getScifiMovies = async () => {
  const responseMovies = await fetch(
    movieURL("release_date.desc", "878", "", "en", "122")
  );

  let scifiMovies = await responseMovies.json();

  scifiMovies = scifiMovies.results;

  let allSciFiMovies = [];
  let allSciFiMoviesIds = [];

  for (let i = 0; i < 8; i++) {
    if (scifiMovies[i] !== undefined) {
      allSciFiMovies.push(scifiMovies[i]);
      allSciFiMoviesIds.push(scifiMovies[i].id);
    }
  }

  return {
    allSciFiMovies,
    allSciFiMoviesIds,
  };
};

export const getScifiShows = async () => {
  const responseShows = await fetch(
    tvURL("release_date.desc", "10765", "", "en", "122")
  );

  let scifiShows = await responseShows.json();

  scifiShows = scifiShows.results;

  let allSciFiShows = [];
  let allSciFiShowsIds = [];

  for (let i = 0; i < 8; i++) {
    if (scifiShows !== undefined) {
      allSciFiShows.push(scifiShows[i]);
      allSciFiShowsIds.push(scifiShows[i].id);
    }
  }

  return {
    allSciFiShows,
    allSciFiShowsIds,
  };
};
