import ShowDetails from "../../components/shows/ShowDetails";
import { getGenreShow, getGenreMovie } from "../../services/genres";

function ShowDetail({ id, genreShow }) {
  return <ShowDetails id={id} genreShow={genreShow} />;
}

ShowDetail.getInitialProps = async ({ query }) => {
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
    genreShow: genres,
    id: String(query.id),
  };
};

export default ShowDetail;
