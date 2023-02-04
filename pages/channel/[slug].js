import React from "react";
import ChannelHero from "../../components/ChannelHero";
import Layout from "../../components/Layout";
import Card from "../../components/cards/Card";
import CardSlider from "../../components/cards/CardSlider";
import {
  getDisneyAnimation,
  getDisneyClassics,
  getDisneyMickey,
  getDisneyNature,
  getDisneyOriginalMovies,
  getDisneyPopular,
} from "../../services/channel/disney";
import {
  getMarvelDefenders,
  getMarvelIronMan,
  getMarvelMovies,
  getMarvelShows,
  getMarvelSpiderMan,
} from "../../services/channel/marvel";
import {
  getNatGeoBrain,
  getNatGeoMovies,
  getNatGeoNature,
  getNatGeoShows,
} from "../../services/channel/natgeo";
import {
  getPixarAll,
  getPixarCars,
  getPixarToyStory,
} from "../../services/channel/pixar";
import {
  getAllStarwarsLego,
  getAllStarwarsMovies,
  getAllStarwarsShows,
} from "../../services/channel/starwars";
import { getGenreMovie, getGenreShow } from "../../services/genres";
import Head from "next/head";

function Channel({
  slug,
  disneyOriginals,
  disneyAnimation,
  disneyPopular,
  disneyClassics,
  mickey,
  nature,
  pixarOriginals,
  pixarCars,
  pixarToyStory,
  marvelMovies,
  marvelShows,
  marvelIronMan,
  marvelSpiderMan,
  marvelDefender,
  starWarsMovies,
  starWarsShows,
  starWarsLego,
  ngMovies,
  ngShows,
  ngNature,
  ngBrain,
  genreMovie,
  genreShow,
  allGenres,
}) {
  return (
    <Layout head={slug.substring(0, 1).toUpperCase() + slug.substring(1)}>
      <ChannelHero id={slug} />

      {/* Disney *********************************************************************** */}
      {slug === "disney" && (
        <div className="mt-16">
          <CardSlider
            data={disneyOriginals}
            genres={allGenres}
            type="Disney Originals"
          />
          <CardSlider
            data={disneyAnimation}
            genres={genreMovie}
            type="Walt Disney Animation Studios"
          />
          <CardSlider
            data={disneyPopular}
            genres={genreShow}
            type="Disney's Popular"
          />
          <div className=" w-[93%] mx-auto">
            <p className="text-2xl text-white mb-5 font-bold">
              Mickey Mouse Through The Years
            </p>
            <div className="flex">
              {mickey.map((el) => {
                return (
                  <Card
                    key={el.id}
                    cardDetail={el}
                    id={el.id}
                    poster={el.poster_path}
                  />
                );
              })}
            </div>
          </div>
          <CardSlider
            data={disneyClassics}
            genres={genreMovie}
            type="Disney's Classics"
          />

          <CardSlider data={nature} genres={genreMovie} type="Disney Nature" />
        </div>
      )}

      {/* Pixar *********************************************************************************** */}
      {slug === "pixar" && (
        <div className="mt-16">
          <CardSlider
            data={pixarOriginals}
            genres={genreMovie}
            type="Pixar Originals"
          />

          <CardSlider
            data={pixarToyStory}
            genres={genreMovie}
            type="Toy Story"
          />

          <CardSlider data={pixarCars} genres={genreMovie} type="Cars" />
        </div>
      )}

      {/* Marvel ********************************************************************************** */}
      {slug === "marvel" && (
        <div className="mt-16">
          <CardSlider
            data={marvelMovies}
            genres={genreMovie}
            type="Marvel Movies"
          />
          <CardSlider
            data={marvelShows}
            genres={genreShow}
            type="Marvel Shows"
          />
          <CardSlider
            data={marvelIronMan}
            genres={genreMovie}
            type="Iron Man Specials"
          />
          <CardSlider
            data={marvelSpiderMan}
            genres={genreMovie}
            type="Spider Man Specials"
          />
          <div className=" w-[93%] mx-auto">
            <p className="text-2xl text-white mb-5 font-bold">
              Defender Speials
            </p>
            <div className="flex">
              {marvelDefender.map((el) => {
                return (
                  <Card
                    key={el.id}
                    cardDetail={el}
                    id={el.id}
                    poster={el.poster_path}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Star Wars ************************************************************************* */}
      {slug === "starwars" && (
        <div className="mt-16">
          <CardSlider
            data={starWarsMovies}
            genres={genreMovie}
            type="Star Wars Movies"
          />
          <div className=" w-[93%] mx-auto">
            <p className="text-2xl text-white mb-5 font-bold">
              Star Wars Series
            </p>
            <div className="flex">
              {starWarsShows.map((el) => {
                return (
                  <Card
                    key={el.id}
                    cardDetail={el}
                    id={el.id}
                    poster={el.poster_path}
                  />
                );
              })}
            </div>
          </div>
          <CardSlider
            data={starWarsLego}
            genres={genreMovie}
            type="Lego Star Wars"
          />
        </div>
      )}

      {/* Nat Geo ************************************************************************* */}
      {slug === "nationalgeographic" && (
        <div className="mt-16">
          <CardSlider
            data={ngMovies}
            genres={genreMovie}
            type="Nat Geo Movies"
          />

          <CardSlider data={ngShows} genres={genreShow} type="Nat Geo Shows" />

          <CardSlider data={ngNature} genres={genreShow} type="Close to Nature" />

          <div className=" w-[93%] mx-auto">
            <p className="text-2xl text-white mb-5 font-bold">Fun to Learn</p>
            <div className="flex">
              {ngBrain.map((el) => {
                return (
                  <Card
                    key={el.id}
                    cardDetail={el}
                    id={el.id}
                    poster={el.poster_path}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

Channel.getInitialProps = async ({ query }) => {
  const genreMovie = await getGenreMovie();
  const genreShow = await getGenreShow();

  // Disney
  if (query.slug === "disney") {
    const disneyOriginals = await getDisneyOriginalMovies();

    let genres = [...genreMovie.genres];
    for (let i = 0; i < genreShow.genres.length; i++) {
      let same = genres.find((el) => el.id === genreShow.genres[i].id);
      if (!same) {
        genres.push(genreShow.genres[i]);
      }
    }

    const disneyAnimation = await getDisneyAnimation();
    const disneyPopular = await getDisneyPopular();
    const disneyClassics = await getDisneyClassics();
    const mickey = await getDisneyMickey();
    const nature = await getDisneyNature();
    return {
      disneyOriginals,
      disneyAnimation,
      disneyPopular,
      mickey,
      nature,
      disneyClassics,
      slug: query.slug,
      genreMovie: genreMovie.genres,
      genreShow: genreShow.genres,
      allGenres: genres,
    };
  }

  // Pixar
  if (query.slug === "pixar") {
    const pixarOriginals = await getPixarAll();
    const pixarCars = await getPixarCars();
    const pixarToyStory = await getPixarToyStory();

    return {
      pixarOriginals,
      pixarCars,
      pixarToyStory,
      slug: query.slug,
      genreMovie: genreMovie.genres,
      genreShow: genreShow.genres,
    };
  }

  // Marvel
  if (query.slug === "marvel") {
    const marvelMovies = await getMarvelMovies();
    const marvelShows = await getMarvelShows();
    const marvelIronMan = await getMarvelIronMan();
    const marvelSpiderMan = await getMarvelSpiderMan();
    const marvelDefender = await getMarvelDefenders();

    return {
      marvelMovies,
      marvelShows,
      marvelIronMan,
      marvelSpiderMan,
      marvelDefender,
      slug: query.slug,
      genreMovie: genreMovie.genres,
      genreShow: genreShow.genres,
    };
  }

  if (query.slug === "starwars") {
    const starWarsMovies = await getAllStarwarsMovies();
    const starWarsShows = await getAllStarwarsShows();
    const starWarsLego = await getAllStarwarsLego();

    return {
      starWarsMovies,
      starWarsShows,
      starWarsLego,
      slug: query.slug,
      genreMovie: genreMovie.genres,
      genreShow: genreShow.genres,
    };
  }

  if (query.slug === "nationalgeographic") {
    const ngMovies = await getNatGeoMovies();
    const ngShows = await getNatGeoShows();
    const ngNature = await getNatGeoNature();
    const ngBrain = await getNatGeoBrain();

    return {
      ngMovies,
      ngShows,
      ngNature,
      ngBrain,
      slug: query.slug,
      genreMovie: genreMovie.genres,
      genreShow: genreShow.genres,
    };
  }
};

export default Channel;
