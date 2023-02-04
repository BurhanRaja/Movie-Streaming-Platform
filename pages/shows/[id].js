import ShowDetails from "../../components/shows/ShowDetails";
import getShow from "../../services/fetchById/show";
import { getGenreShow, getGenreMovie } from "../../services/genres";

function ShowDetail({ id, genreShow, show, similar, videos }) {
  return <ShowDetails id={id} genreShow={genreShow} show={show} similar={similar} videos={videos} />;
}

ShowDetail.getInitialProps = async ({ query }) => {
  const genreShow = await getGenreShow();
  const {show, similar, videos} = await getShow(query.id)

  return {
    genreShow: genreShow,
    id: String(query.id),
    show,
    similar,
    videos
  };
};

export default ShowDetail;
