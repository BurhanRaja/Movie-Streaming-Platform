import Head from "next/head";
import useSWRInfinite from "swr/infinite";
import Card from "../../../components/cards/Card";
import Layout from "../../../components/Layout";
import { getGenreMovie } from "../../../services/genres";

function LangMovies({ lang, genres }) {
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
      `${process.env.NEXT_PUBLIC_URL}discover/movie?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${
        index + 1
      }&with_original_language=${lang}&with_watch_providers=${
        lang === "ko" || lang === "ja" ? "" : "122"
      }&watch_region=IN&with_watch_monetization_types=flatrate`,
    getMovies
  );

  if (error) console.log(error);

  if (movies) {
    const moviesData = movies ? movies?.flat() : [];

    return (
      <Layout>
        <Head>
          <title>
            {lang === "hi"
              ? "Hindi"
              : lang === "ko"
              ? "Korean"
              : lang === "ja"
              ? "Japanese"
              : "English"}{" "}
            Movies
          </title>
          <link rel="icon" type="image/x-icon" href="/images/logo.jpg"></link>
        </Head>
        <div className="mt-5 text-3xl w-[87%] mx-auto my-5">
          <p className="capitalize text-white font-bold">
            {lang === "hi"
              ? "hindi"
              : lang === "ko"
              ? "korean"
              : lang === "ja"
              ? "japanese"
              : "english"}{" "}
            - Movies
          </p>
        </div>
        <div className="flex items-center justify-start w-[89%] mx-auto flex-wrap">
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
      </Layout>
    );
  }
}

LangMovies.getInitialProps = async ({ query }) => {
  const genreMovie = await getGenreMovie();

  return {
    genres: genreMovie.genres,
    lang: query.lang,
  };
};

export default LangMovies;
