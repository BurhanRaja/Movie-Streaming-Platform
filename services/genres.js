export const getGenreMovie = async () => {
  const movieGenreUrl = `${process.env.NEXT_PUBLIC_MOVIE_URL}genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const response = await fetch(movieGenreUrl);
  // Promise Json
  let genreMovie = await response.json();

  return genreMovie;
};

export const getGenreTV = async () => {
  const tvGenreUrl = `${process.env.NEXT_PUBLIC_TV_URL}genre/tv/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const response = await fetch(tvGenreUrl);
  // Promise Json
  let genreTV = await response.json();

  return genreTV;
};