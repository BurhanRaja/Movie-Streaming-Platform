import useSWRInfinite from "swr/infinite";
import Layout from "../../../components/Layout";
import Card from "../../../components/cards/Card";
import { getGenreShow } from "../../../services/genres";

// type === "action" ? 10759 : type === "drama" ? 18 : type === "comedy" ? 35 : type === "family" ? 10751 : type === "mystery" ? 9648 : type === "documentary" ? 99 : type="scifi" ? 10765 : 37

function TypeShows({ type, genres }) {
  const getMovies = (url) =>
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
      `${process.env.NEXT_PUBLIC_URL}discover/tv?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&language=en-US&sort_by=popularity.desc&page=${
        index + 1
      }&with_genres=${type}&include_null_first_air_dates=false&with_watch_providers=122&watch_region=IN&with_watch_monetization_types=flatrate`,
    getMovies
  );

  if (error) console.log(error);

  if (shows) {
    const showsData = shows ? shows?.flat() : [];

    return (
      <Layout>
        <div className="mt-5 text-3xl">
          <p className="capitalize">{type}</p>
        </div>
        <div className="flex items-center justify-start w-[89%] mx-auto flex-wrap">
          {showsData.map((el) => {
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
      </Layout>
    );
  }
}

TypeShows.getInitialProps = async ({ query }) => {
  const genreShow = await getGenreShow();

  return {
    genres: genreShow.genres,
    type: query.type,
  };
};

export default TypeShows;
