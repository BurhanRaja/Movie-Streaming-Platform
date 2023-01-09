import Image from "next/image";
import Link from "next/link";


const Video = ({ video }) => {
  return (
    <div className="absolute top-0 left-0 w-[100%] h-[100%] opacity-0 group-hover/videocard:opacity-100 transition-all ease-in duration-300">
      <video
        playsInline={true}
        autoPlay={true}
        preload="auto"
        loop={true}
        className="rounded-lg"
      >
        <source type="video/mp4" src={video} />
      </video>
    </div>
  );
};

function VideoCard({ image, video, link }) {
  return (
    <Link href={link}>
      <div className="card group/card lg:w-[14.5rem] h-[100%] md:w-[12rem] sm:w-[10rem] min-[360px]:w-[8rem] mt-5 group/videocard rounded-lg mr-4 relative transition-all duration-500 z-10 hover:z-20 hover:cursor-pointer">
        <Image
          src={image}
          alt="card"
          width={240}
          height={340}
          className="rounded-lg opacity-100 group-hover/videocard:opacity-0 transition-all ease-in duration-300"
        />
        <Video video={video} />
      </div>
    </Link>
  );
}

export default VideoCard;
