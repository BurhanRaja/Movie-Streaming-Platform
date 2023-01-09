import useSWRInfinite from "swr/infinite";
import Layout from "../components/Layout";
import Card from "../components/cards/Card";
import { getGenreMovie, getGenreShow } from "../services/genres";
import { useState } from "react";

function SearchedKeysDisplay({ searchQuery, genreMovie, genreShow }) {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
    console.log(isShow);
  };

  return (
    <Layout>
      <div className="w-[93%] mx-auto mt-20">
        <button
          className={`${
            !isShow ? "text-blue-400 border-blue-400" : "text-white"
          } text-lg border-b-2 w-[48%] mr-2`}
          onClick={handleClick}
        >
          Movies
        </button>
        <button
          className={`${
            isShow ? "text-blue-400 border-blue-400" : "text-white"
          } text-lg border-b-2 w-[48%] ml-2`}
          onClick={handleClick}
        >
          Shows
        </button>
      </div>
      <div className="mt-10">
        {!isShow ? (
          <SearchMovies query={searchQuery} genres={genreMovie.genres} />
        ) : (
          <SearchShows query={searchQuery} genres={genreShow.genres} />
        )}
      </div>
    </Layout>
  );
}

SearchedKeysDisplay.getInitialProps = async ({ query }) => {
  const genreMovie = await getGenreMovie();
  const genreShow = await getGenreShow();

  return {
    searchQuery: query.searchquery,
    genreMovie: genreMovie,
    genreShow,
  };
};

const SearchMovies = ({ query, genres }) => {
  const getMovies = (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((res) => res.results);

  const {
    data: movies,
    error,
    size,
    setSize,
  } = useSWRInfinite(
    (index) =>
      `${process.env.NEXT_PUBLIC_URL}search/movie?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&language=en-US&query=${query}&page=${index + 1}&include_adult=false`,
    getMovies
  );

  if (error) console.log(error);

  if (movies) {
    const moviesData = movies ? movies?.flat() : [];
    return (
      <div className="flex items-center justify-start w-[93%] mx-auto flex-wrap">
        {moviesData.map((el) => {
          return (
            <div className="mt-4 mb-4 mx-4" key={el.id}>
              <Card
                cardDetail={el}
                cardGenres={el.genre_ids?.map((el) => {
                  let sameGenre = genres?.find((elem) => elem.id === el);
                  return sameGenre.name;
                })}
                id={el.id}
                poster={el.poster_path}
              />
            </div>
          );
        })}
        <div className="w-[93%]">
          <button
            className="p-2 mt-4 mb-4 rounded-md w-[100%] bg-slate-900 text-slate-300 border-2 border-slate-300"
            onClick={() => setSize(size + 1)}
          >
            Load More
          </button>
        </div>
      </div>
    );
  }
};

const SearchShows = ({ query, genres }) => {
  const getShows = (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((res) => res.results);

  const {
    data: shows,
    error,
    size,
    setSize,
  } = useSWRInfinite(
    (index) =>
      `${process.env.NEXT_PUBLIC_URL}search/tv?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&language=en-US&query=${query}&page=${index + 1}&include_adult=false`,
    getShows
  );

  if (error) console.log(error);

  if (shows) {
    const showsData = shows ? shows?.flat() : [];

    return (
      <div className="flex items-center justify-start w-[93%] mx-auto flex-wrap">
        {showsData.map((el) => {
          return (
            <div className="mt-4 mb-4 mx-4" key={el.id}>
              <Card
                cardDetail={el}
                cardGenres={el.genre_ids && el.genre_ids?.map((el) => {
                  let sameGenre = genres?.find((elem) => elem.id === el);
                  return sameGenre.name;
                })}
                id={el.id}
                poster={el.poster_path}
              />
            </div>
          );
        })}
        <div className="w-[93%]">
          <button
            className="p-2 mt-4 mb-4 rounded-md w-[100%] bg-slate-900 text-slate-300 border-2 border-slate-300"
            onClick={() => setSize(size + 1)}
          >
            Load More
          </button>
        </div>
      </div>
    );
  }
};

export default SearchedKeysDisplay;
