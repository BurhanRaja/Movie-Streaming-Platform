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

  let resMovies = await fetch(
    movieURL("popularity.desc", "", "6125", "", "", "")
  );
  resMovies = await resMovies.json();
  resMovies = resMovies.results;

  return resMovies;
};

export const getDisneyPopular = async () => {
  let resShows = await fetch(tvURL("popularity.desc", "", "3475", "", "", ""));
  resShows = await resShows.json();
  resShows = resShows.results;

  return resShows;
};

export const getDisneyClassics = async () => {
  let resMovies = await fetch(
    movieURL("popularity.desc", "", "3475", "", "", "")
  );
  resMovies = await resMovies.json();
  resMovies = resMovies.results;

  return resMovies;
};

export const getDisneyNature = async () => {
  let resMovies = await fetch(
    movieURL("release_date.desc", "", "4436", "en", "", "IN")
  );

  resMovies = await resMovies.json();

  resMovies = resMovies.results;

  return resMovies;

}

export const getDisneyMickey = async () => {
  let [resMOne, resMTwo, resMThree, resSOne, resSTwo] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_URL}/movie/963660?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_URL}/movie/939336?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_URL}/movie/934323?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ), 
    fetch(
      `${process.env.NEXT_PUBLIC_URL}/tv/46879?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_URL}/tv/109930?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ),
  ]);

  let [mOne, mTwo, mThree, sOne, sTwo] = await Promise.all([
    resMOne.json(),
    resMTwo.json(),
    resMThree.json(),
    resSOne.json(),
    resSTwo.json(),
  ]);

  let all = [mOne, mTwo, mThree, sOne, sTwo];

  return all;
};
