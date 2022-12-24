import dynamic from "next/dynamic";
import CardSlider from "../components/CardSlider";
import Layout from "../components/Layout";
import { getDramaMovies, getDramaShows } from "../services/drama";
import { getGenreMovie, getGenreTV } from "../services/genres";
import { getLatestMovies, getLatestShows } from "../services/latest";
import getAllMysteries from "../services/mystery";
import { getPopularMovies, getPopularShows } from "../services/popular";
import getRomanticMovies from "../services/romance";
import getAllSciFi from "../services/sci-fi";
import { getComedyMovies, getComedyShows } from "../services/comedy";

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
  allComedy
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
        <CardSlider data={allComedy} genres={genres} type="Comedy" />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  // ? Genres
  let genreMovie = await getGenreMovie();
  let genreTV = await getGenreTV();
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

  // ? Mystery - Movies and Shows
  let { allMystery } = await getAllMysteries();

  // ? Sci-Fi - Movies and Shows
  let { allSciFi } = await getAllSciFi();

  // TODO: Best for kids 10762 Only TV

  // ? Drama - Movies and Shows
  let { allDramaMovies } = await getDramaMovies();
  let { allDramaShows } = await getDramaShows();
  let allDrama = [];
  for (let i = 0; i < 8; i++) {
    allDrama.push(allDramaMovies[i]);
    allDrama.push(allDramaShows[i]);
  }

  // ? Romance - Movies
  let { allRomanticMovies } = await getRomanticMovies();

  // TODO: Comedy 35 Both
  let {allComedyMovies} = await getComedyMovies();
  let {allComedyShows} = await getComedyShows();

  let allComedy = [];
  for (let i = 0; i < 8; i++) {
    allComedy.push(allComedyMovies[i]);
    allComedy.push(allComedyShows[i]);
  }

  // TODO: Crime 80 Both

  // TODO: Documentary 99 Both

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
      romanceMovies: allRomanticMovies,
      // Comedy
      allComedy
    },
  };
}
