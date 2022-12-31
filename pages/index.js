import dynamic from "next/dynamic";
import CardSlider from "../components/CardSlider";
import Layout from "../components/Layout";
import { getComedyMovies, getComedyShows } from "../services/comedy";
import { getCrimeMovies, getCrimeShows } from "../services/crime";
import {
  getDocumentaryMovies,
  getdocumentaryShows,
} from "../services/documentary";
import { getDramaMovies, getDramaShows } from "../services/drama";
import { getGenreMovie, getGenreTV } from "../services/genres";
import { getLatestMovies, getLatestShows } from "../services/latest";
import { getMysteryMovies, getMysteryShows } from "../services/mystery";
import { getPopularMovies, getPopularShows } from "../services/popular";
import getRomanticMovies from "../services/romance";
import { getScifiMovies, getScifiShows } from "../services/sci-fi";

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

export async function getServerSideProps() {
  const [
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
    getGenreTV(),
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
    getdocumentaryShows(),
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
  let latestMovies = latestM.latestMovies.filter(
    (el) => new Date(el.release_date) < new Date("2023-01-01")
  );
  let latestShows = latestS.latestShows;
  let allLatest = [];
  for (let i = 0; i < 8; i++) {
    if (latestMovies[i] !== undefined) {
      allLatest.push(latestMovies[i]);
    }
    if (latestShows[i] !== undefined) {
      allLatest.push(latestShows[i]);
    }
  }

  // ? Drama
  let allDrama = [];
  let dramaMovies = allDramaM.allDramaMovies;
  let dramaShows = allDramaS.allDramaShows;
  for (let i = 0; i < 8; i++) {
    allDrama.push(dramaMovies[i]);
    allDrama.push(dramaShows[i]);
  }

  // ? Scifi
  let allMystery = [];
  let allMysterMovies = allMysteryM.allMysteryMovies;
  let allMysteryShows = allMysteryS.allMysteryShows;
  for (let i = 0; i < 8; i++) {
    allMystery.push(allMysterMovies[i]);
    allMystery.push(allMysteryShows[i]);
  }

  // ? Scifi
  let allSciFi = [];
  let allScifiMovies = allScifiM.allSciFiMovies;
  let allScifiShows = allScifiS.allSciFiShows;
  for (let i = 0; i < 8; i++) {
    allSciFi.push(allScifiMovies[i]);
    allSciFi.push(allScifiShows[i]);
  }

  // ? Comedy
  let allComedy = [];
  let comedyMovies = comedyM.allComedyMovies;
  let comedyShows = comedyS.allComedyShows;
  for (let i = 0; i < 8; i++) {
    allComedy.push(comedyMovies[i]);
    allComedy.push(comedyShows[i]);
  }

  // ? Crime
  let allCrime = [];
  let crimeMovies = crimeM.allCrimeMovies;
  let crimeShows = crimeS.allCrimeShows;
  for (let i = 0; i < 8; i++) {
    allCrime.push(crimeMovies[i]);
    allCrime.push(crimeShows[i]);
  }

  // ? Documentary
  let allDocumentary = [];
  let documentaryMovies = documentaryM.allDocumentaryMovies;
  let documentaryShows = documentaryS.allDocumentaryShows;
  for (let i = 0; i < 8; i++) {
    allDocumentary.push(documentaryMovies[i]);
    allDocumentary.push(documentaryShows[i]);
  }

  return {
    props: {
      allLatest,
      genres,
      // Popular
      popularMovies: popularM.popularMovies,
      popularShows: popularS.popularShows,
      // Mystery
      allMystery,
      // SCI-FI
      allScifi: allSciFi,
      // Drama
      allDrama: allDrama,
      // Romance
      romanceMovies: allRomanticM.allRomanticMovies,
      // Comedy
      allComedy,
      // Crime
      allCrime,
      // Documentary
      allDocumentary,
    },
  };
}
