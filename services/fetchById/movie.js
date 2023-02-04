const getMovie = async (id) => {
  const [resMovieDetail, resMovieVideo, resMovieSimilar] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_URL}movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_URL}movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_URL}movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    ),
  ]);

  let [movie, videos, similar] = await Promise.all([
    resMovieDetail.json(),
    resMovieVideo.json(),
    resMovieSimilar.json(),
  ]);
  return {
    movie,
    videos,
    similar,
  };
};

export default getMovie;
