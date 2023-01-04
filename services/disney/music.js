import movieURL from "../../utils/disney/movieURL";

const getDisneyMusic = async () => {
  let resMovies = await fetch(
    movieURL("release_date.desc", "10402", "2", "en", "", "IN")
  );

  resMovies = await resMovies.json();

  let musicM = resMovies.results;

  return musicM;
};

export default getDisneyMusic;
