import { useEffect, useState } from "react";
import ShowDetails from "../../components/shows/ShowDetails";
import { useRouter } from "next/router";
import { getGenreShow } from "../../services/genres";

function ShowDetail({id, genreShow}) {

  return (
    <ShowDetails id={id} genreShow={genreShow} />
  )
}

ShowDetail.getInitialProps = async ({query}) => { 
  const genreShow = await getGenreShow();

  return {
    genreShow,
    id: String(query.id)
  };
}

export default ShowDetail;
