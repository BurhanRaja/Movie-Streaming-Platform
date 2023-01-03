import Layout from "../components/Layout";
import CardSlider from "../components/cards/CardSlider";
import { getComedyMovies, getComedyShows } from "../services/hotstar/comedy";
import { getCrimeMovies, getCrimeShows } from "../services/hotstar/crime";
import {
  getDocumentaryMovies,
  getDocumentaryShows,
} from "../services/hotstar/documentary";
import { getDramaMovies, getDramaShows } from "../services/hotstar/drama";
import { getGenreMovie, getGenreShow } from "../services/hotstar/genres";
import { getLatestMovies, getLatestShows } from "../services/hotstar/latest";
import { getMysteryMovies, getMysteryShows } from "../services/hotstar/mystery";
import { getPopularMovies, getPopularShows } from "../services/hotstar/popular";
import getRomanticMovies from "../services/hotstar/romance";
import { getScifiMovies, getScifiShows } from "../services/hotstar/sci-fi";
import Hero from "../components/Hero";

export default function Home({
  allLatest,
  genres,
  popularMovies,
  popularShows,
  allMystery,
  allScifi,
  allDrama,
  romanceMovies,
  allComedy,
  allCrime,
  allDocumentary,
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
        <CardSlider data={allCrime} genres={genres} type="Crime" />
        <CardSlider data={allDocumentary} genres={genres} type="Documentary" />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  let [
    genreMovie,
    genreTV,
    latestM,
    latestS,
    popularM,
    popularS,
    allMysteryM,
    allMysteryS,
    allScifiM,
    allScifiS,
    allDramaM,
    allDramaS,
    allRomanticM,
    comedyM,
    comedyS,
    crimeM,
    crimeS,
    documentaryM,
    documentaryS,
  ] = await Promise.all([
    getGenreMovie(),
    getGenreShow(),
    getLatestMovies(),
    getLatestShows(),
    getPopularMovies(),
    getPopularShows(),
    getMysteryMovies(),
    getMysteryShows(),
    getScifiMovies(),
    getScifiShows(),
    getDramaMovies(),
    getDramaShows(),
    getRomanticMovies(),
    getComedyMovies(),
    getComedyShows(),
    getCrimeMovies(),
    getCrimeShows(),
    getDocumentaryMovies(),
    getDocumentaryShows(),
  ]);

  // ? Genres
  let genres = [...genreMovie.genres];
  for (let i = 0; i < genreTV.genres.length; i++) {
    let same = genres.find((el) => el.id === genreTV.genres[i].id);
    if (!same) {
      genres.push(genreTV.genres[i]);
    }
  }

  // ? Latest
  latestM = latestM.filter(
    (el) => new Date(el.release_date) < new Date("2023-01-01")
  );
  let allLatest = [];
  for (let i = 0; i < 8; i++) {
    allLatest.push(latestM[i]);
    allLatest.push(latestS[i]);
  }

  // ? Drama
  let allDrama = [];
  for (let i = 0; i < 8; i++) {
    allDrama.push(allDramaM[i]);
    allDrama.push(allDramaS[i]);
  }

  // ? Scifi
  let allMystery = [];
  for (let i = 0; i < 8; i++) {
    allMystery.push(allMysteryM[i]);
    allMystery.push(allMysteryS[i]);
  }

  // ? Scifi
  let allSciFi = [];
  for (let i = 0; i < 8; i++) {
    allSciFi.push(allScifiM[i]);
    allSciFi.push(allScifiS[i]);
  }

  // ? Comedy
  let allComedy = [];
  for (let i = 0; i < 8; i++) {
    allComedy.push(comedyM[i]);
    allComedy.push(comedyS[i]);
  }

  // ? Crime
  let allCrime = [];
  for (let i = 0; i < 8; i++) {
    allCrime.push(crimeM[i]);
    allCrime.push(crimeS[i]);
  }

  // ? Documentary
  let allDocumentary = [];
  for (let i = 0; i < 8; i++) {
    allDocumentary.push(documentaryM[i]);
    allDocumentary.push(documentaryS[i]);
  }

  return {
    props: {
      allLatest,
      genres,
      // Popular
      popularMovies: popularM,
      popularShows: popularS,
      // Mystery
      allMystery,
      // SCI-FI
      allScifi: allSciFi,
      // Drama
      allDrama: allDrama,
      // Romance
      romanceMovies: allRomanticM,
      // Comedy
      allComedy,
      // Crime
      allCrime,
      // Documentary
      allDocumentary,
    },
  };
}
