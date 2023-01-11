import React from "react";
import Layout from "../../components/Layout";
import CardContainer from "../../components/videoCard/CardContainer";
import Hero from "../../components/Hero";
import getDisneyLatest from "../../services/disney/latest";
import { getGenreMovie, getGenreShow } from "../../services/genres";
import CardSlider from "../../components/cards/CardSlider";
import getDisneyOriginals from "../../services/disney/originlas";
import getDisneyPopular from "../../services/disney/popular";
import getDisneyAdventure from "../../services/disney/adventure";
import getDisneyLearning from "../../services/disney/learning";
import getDisneyNature from "../../services/disney/nature";
import getDisneyFamily from "../../services/disney/family";
import getDisneyMusic from "../../services/disney/music";
import getDisneySciFi from "../../services/disney/scifi";
import Head from "next/head";

function DisneyPlus({ genres, latest, originals, popular, adventure, learning, nature, family, music, scifi }) {
  return (
    <Layout>
      <Head>
        <title>Disney+</title>
      </Head>
      <Hero data={latest} genres={genres} />
      <CardContainer />
      <div className="mt-12">
      <CardSlider data={originals} genres={genres} type="Disney+ Originals" />
      </div>
      <CardSlider data={popular} genres={genres} type="Populars" />
      <CardSlider data={adventure} genres={genres} type="Adventure" />
      <CardSlider data={learning} genres={genres} type="Fun to Learn" />
      <CardSlider data={nature} genres={genres} type="Close to Nature" />
      <CardSlider data={family} genres={genres} type="Family" />
      <CardSlider data={music} genres={genres} type="For Music Lovers" />
      <CardSlider data={scifi} genres={genres} type="SciFi" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  let [latest, genreMovie, genreShow, originals, popular, adventure, learning, nature, family, music, scifi] = await Promise.all([
    getDisneyLatest(),
    getGenreMovie(),
    getGenreShow(),
    getDisneyOriginals(),
    getDisneyPopular(),
    getDisneyAdventure(),
    getDisneyLearning(),
    getDisneyNature(),
    getDisneyFamily(),
    getDisneyMusic(),
    getDisneySciFi()
  ]);

  // ? Genres
  let genres = [...genreMovie.genres];
  for (let i = 0; i < genreShow.genres.length; i++) {
    let same = genres.find((el) => el.id === genreShow.genres[i].id);
    if (!same) {
      genres.push(genreShow.genres[i]);
    }
  }

  return {
    props: {
      latest,
      genres,
      originals,
      popular,
      adventure,
      learning,
      nature,
      family,
      music,
      scifi
    },
  };
};

export default DisneyPlus;

// Genres

// Recents
// Popular
// 12- Adventure
// 16 - Animation
// 35 - comedy
// 99 - Documentary
// 10751 - Family
// 36 - History
// 14 - Fantasy
// 10402 - Music

// Star Wars movies from collection id - 10
// Lego star wars id - 302331

// National Geographic id - 7521

// Pixar id - 3

// Walt Disney Studios id - 2

// Marvel id - 420
