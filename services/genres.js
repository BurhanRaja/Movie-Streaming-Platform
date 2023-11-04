export const getGenreMovie = async () => {
  const movieGenreUrl = `${process.env.NEXT_PUBLIC_URL}genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const response = await fetch(movieGenreUrl);
  // Promise Json
  let genreMovie = await response.json();
  console.log(genreMovie);

  return genreMovie;
};

export const getGenreShow = async () => {
  const tvGenreUrl = `${process.env.NEXT_PUBLIC_URL}genre/tv/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const response = await fetch(tvGenreUrl);
  // Promise Json
  let genreShow = await response.json();

  return genreShow;
};
