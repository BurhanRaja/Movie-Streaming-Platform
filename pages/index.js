import dynamic from "next/dynamic";
import CardSlider from "../components/CardSlider";
import Layout from "../components/Layout";

const Hero = dynamic(() => import("../components/Hero"), {
  ssr: false,
});

export default function Home({ allLatest, genres }) {
  return (
    <Layout>
      <main>
        <Hero data={allLatest} genres={genres} />
        <CardSlider data={allLatest} genres={genres} />
        <CardSlider />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  // ! Get Genres
  const movieGenreUrl = `${process.env.NEXT_PUBLIC_MOVIE_URL}genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const tvGenreUrl = `${process.env.NEXT_PUBLIC_MOVIE_URL}genre/tv/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  // Promise Request
  const [genreMovieRes, genreTVRes] = await Promise.all([
    fetch(movieGenreUrl),
    fetch(tvGenreUrl),
  ]);
  // Promise Json
  let [genreMovie, genreTV] = await Promise.all([
    genreMovieRes.json(),
    genreTVRes.json(),
  ]);
  // All Genres
  let genres = [...genreMovie.genres];
  for (let i = 0; i < genreTV.genres.length; i++) {
    let same = genres.find((el) => el.id === genreTV.genres[i].id);
    if (!same) {
      genres.push(genreTV.genres[i]);
    }
  }

  // ! Getting Movies and TV Shows

  let sort_by = "release_date.desc";
  let with_original_lang = "hi";
  let with_watch_providers = "122";

  const MovieUrl = (sort_by, with_original_lang, with_watch_providers) =>
    `${process.env.NEXT_PUBLIC_MOVIE_URL}discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=1&with_original_language=${with_original_lang}&with_watch_providers=${with_watch_providers}&watch_region=IN&with_watch_monetization_types=flatrate`;

  const TVUrl = (sort_by, with_original_lang, with_watch_providers) =>
    `${process.env.NEXT_PUBLIC_TV_URL}discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=1&with_original_language=${with_original_lang}&with_watch_providers=${with_watch_providers}&watch_region=IN&with_watch_monetization_types=flatrate`;

  // ? Latest - Movies and TVs
  const [latestMoviesRes, latestTVRes] = await Promise.all([
    fetch(MovieUrl(sort_by, with_original_lang, with_watch_providers)),
    fetch(TVUrl(sort_by, with_original_lang, with_watch_providers)),
  ]);
  let [latestMovies, latestTV] = await Promise.all([
    latestMoviesRes.json(),
    latestTVRes.json(),
  ]);
  latestMovies = latestMovies.results.filter(
    (el) => new Date(el.release_date) < new Date("2023-01-01")
  );
  latestTV = latestTV.results;
  // For getting all the latest movies and TV shows together
  let allLatest = [];
  for (let i = 0; i < 16; i++) {
    allLatest.push(latestMovies[i]);
    allLatest.push(latestTV[i]);
  }

  // TODO: Popular Shows
  // TODO: Popular Movies
  // TODO: Mystery
  // TODO: Superheroes
  // TODO: Best for kids
  // TODO: Drama
  // TODO: Romance
  // TODO: Crime
  // TODO: Comedy
  // TODO: Documentary

  return {
    props: {
      latestMovies: latestMovies,
      latestTV: latestTV,
      allLatest: allLatest,
      genres: genres
    },
  };
}
