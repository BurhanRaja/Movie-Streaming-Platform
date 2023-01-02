import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const Card = ({ name, image, dataId, seasonNo }) => {
  return (
    <Link href={`/shows/season/${dataId}/${seasonNo+1}`}>
      <div className="card group/card w-[9.5rem] h-[100%] rounded-lg mr-6 relative transition-all duration-500 z-10 hover:z-20 hover:cursor-pointer mb-4">
        <Image
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt="card"
          width={200}
          height={300}
          className="rounded-lg"
        />
        <div className="absolute h-10 rounded-md flex items-center episode-card-gradient w-[100%] bottom-0 left-0 text-white">
          <p className="flex items-center ml-3 text-sm font-bold">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

function Seasons({ seasonNo, id }) {
  const getSeason = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}tv/${id}/season/${seasonNo + 1}?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }&language=en-US`, getSeason
  );

  if(error) console.log(error);

  if (data) {
    return (
      <div>
        <Card name={data.name} dataId={id} seasonNo={seasonNo} image={data.poster_path} />
      </div>
    );
  }
}

export default Seasons;
