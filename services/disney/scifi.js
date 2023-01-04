import tvURL from "../../utils/disney/tvURL";

const getDisneySciFi = async () => {
  let resMovies = await fetch(
    tvURL("popularity.desc", "", "", "en", "", "IN", "2739")
  );

  resMovies = await resMovies.json();

  let scifiM = resMovies.results;

  return scifiM;
};

export default getDisneySciFi;
