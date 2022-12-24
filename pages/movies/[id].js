import MovieWatchCard from "../../components/MovieWatchCard";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";


function MovieDetail() {
  const {asPath} = useRouter();
  

  return (
    <Layout>
      <MovieWatchCard />
    </Layout>
  );
}

const getStaticPaths = () => {
  
}

export default MovieDetail;

