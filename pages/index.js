import dynamic from "next/dynamic";
import CardSlider from "../components/CardSlider";
import Layout from "../components/Layout";
import { getGenreMovie, getGenreTV } from "../services/genres";
import { getLatestMovies, getLatestShows } from "../services/latest";
import getAllMysteries from "../services/mystery";
import { getPopularMovies, getPopularShows } from "../services/popular";
import getAllSciFi from "../services/sci-fi";
import { getDramaMovies, getDramaShows } from "../services/drama";
import CardLoading from "../components/CardLoading";

const Hero = dynamic(() => import("../components/Hero"), {
  ssr: false,
});

export default function Home({
  allLatest,
  genres,
  popularMovies,
  popularShows,
  allMystery,
  allScifi,
  allDrama,
  romanceMovies,
}) {

  return (
    <Layout>
      <main>
        <Hero data={allLatest} genres={genres} />
        <CardSlider data={allLatest} genres={genres} type="Latest & Trending" />
        <CardSlider
          data={popularMovies}
          genres={genres}
          type="Popular Movies"
        />
        <CardSlider data={popularShows} genres={genres} type="Popular Shows" />
        <CardSlider
          data={allMystery}
          genres={genres}
          type="Mystery and Mayham"
        />
        <CardSlider data={allScifi} genres={genres} type="Sci-Fi" />
        <CardSlider data={allDrama} genres={genres} type="Drama" />
        <CardSlider data={romanceMovies} genres={genres} type="Romance" />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Get Genres
  let genreMovie = await getGenreMovie();
  let genreTV = await getGenreTV();

  // All Genres
  let genres = [...genreMovie.genres];
  for (let i = 0; i < genreTV.genres.length; i++) {
    let same = genres.find((el) => el.id === genreTV.genres[i].id);
    if (!same) {
      genres.push(genreTV.genres[i]);
    }
  }

  // ? Latest - Movies and Shows
  let { latestMovies } = await getLatestMovies();
  let { latestShows } = await getLatestShows();

  latestMovies = latestMovies.filter(
    (el) => new Date(el.release_date) < new Date("2023-01-01")
  );
  // For getting all the latest movies and TV shows together
  let allLatest = [];
  for (let i = 0; i < 8; i++) {
    if (latestMovies[i] !== undefined) {
      allLatest.push(latestMovies[i]);
    }
    if (latestShows[i] !== undefined) {
      allLatest.push(latestShows[i]);
    }
  }

  //  ? Popular - Movies and Shows
  let { popularMovies } = await getPopularMovies();
  let { popularShows } = await getPopularShows();

  // ? Filter Genres
  const GenreMovieUrl = (
    sort_by,
    genre,
    with_original_lang,
    with_watch_providers
  ) =>
    `${process.env.NEXT_PUBLIC_MOVIE_URL}discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_original_language=${with_original_lang}&with_watch_providers=${with_watch_providers}&watch_region=IN&with_watch_monetization_types=flatrate`;

  const GenreTVUrl = (
    sort_by,
    genre,
    with_original_lang,
    with_watch_providers
  ) =>
    `${process.env.NEXT_PUBLIC_TV_URL}discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_original_language=${with_original_lang}&with_watch_providers=${with_watch_providers}&watch_region=IN&with_watch_monetization_types=flatrate`;

  // ? Mystery - Movies and Shows
  let { allMystery } = await getAllMysteries();
  


  // ? Sci-Fi - Movies and Shows
  let {allSciFi} = await getAllSciFi();


  // TODO: Best for kids 10762 Only TV

  // TODO: Drama 18 Both
  let {allDramaMovies} = await getDramaMovies();
  let {allDramaShows} = await getDramaShows();

  let allDrama = [];
  for (let i = 0; i < 8; i++) {
    allDrama.push(allDramaMovies[i]);
    allDrama.push(allDramaShows[i]);
  }

  // TODO: Romance 10749 Only Movies
  const [romanceMoviesRes] = await Promise.all([
    fetch(GenreMovieUrl("release_date.desc", "10749", "en", "122")),
  ]);
  let [romanceMovies] = await Promise.all([romanceMoviesRes.json()]);
  romanceMovies = romanceMovies.results;

  // TODO: Comedy 35 Both

  // TODO: Crime 80 Both

  // TODO: Documentary 99 Both

  // All Genres Both TV and Movies

  return {
    props: {
      allLatest,
      genres,
      // Latest
      latestMovies,
      latestShows,
      // Popular
      popularMovies,
      popularShows,
      // Mystery
      allMystery,
      // SCI-FI
      allScifi: allSciFi,
      // Drama
      allDrama: allDrama,
      // Romance
      romanceMovies: romanceMovies,
    },
  };
}
