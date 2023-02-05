import React, { useContext, useEffect, useState } from "react";
import WatchList from "../components/WatchList";
import { getGenreMovie, getGenreShow } from "../services/genres";
import UnAuthorized from "../components/UnAuthorized";

function Watchlist({ genres }) {
  const [token, setToken] = useState(false);

  useEffect(() => {
    let tokenLocal = localStorage.getItem("token");
    if (!tokenLocal) {
      setToken(false);
    } else {
      setToken(true);
    }
  }, []);

  return (
    <>
      {token ? (
        <WatchList genres={genres} />
      ) : (
        <UnAuthorized />
      )}
    </>
  );
}

Watchlist.getInitialProps = async () => {
  const genreMovie = await getGenreMovie();
  const genreShow = await getGenreShow();

  let genres = [...genreMovie.genres];
  for (let i = 0; i < genreShow.genres.length; i++) {
    let same = genres.find((el) => el.id === genreShow.genres[i].id);
    if (!same) {
      genres.push(genreShow.genres[i]);
    }
  }

  return {
    props: {
      genres: genres,
    },
  };
};

export default Watchlist;
