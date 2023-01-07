import React from "react";
import ChannelHero from "../../components/ChannelHero";
import Layout from "../../components/Layout";
import CardSlider from "../../components/cards/CardSlider";
import { getDisneyOriginalMovies, getDisneyOriginalShows } from "../../services/channel/disney";
import { getGenreMovie, getGenreShow } from "../../services/genres";

function Channel({ slug, disneyOriginals, genreMovie, genreShow, allGenres }) {
  return (
    <Layout>
      <ChannelHero id={slug} />
      <div className="mt-16">
        <CardSlider
          data={disneyOriginals}
          genres={allGenres}
          type="Disney Originals"
        />
      </div>
    </Layout>
  );
}

Channel.getInitialProps = async ({ query }) => {
  const genreMovie = await getGenreMovie();
  const genreShow = await getGenreShow();

  if (query.slug === "disney") {
    const disneyOriginals = await getDisneyOriginalMovies();

    let genres = [...genreMovie.genres];
    for (let i = 0; i < genreShow.genres.length; i++) {
      let same = genres.find((el) => el.id === genreShow.genres[i].id);
      if (!same) {
        genres.push(genreShow.genres[i]);
      }
    }

    console.log(disneyOriginals);

    return {
      disneyOriginals,
      slug: query.slug,
      genreMovie: genreMovie.genres,
      genreShow: genreShow.genres,
      allGenres: genres
    };
  }

  return {
    slug: query.slug,
    genreMovie: genreMovie.genres,
    genreShow: genreShow.genres,
  };
};

export default Channel;
