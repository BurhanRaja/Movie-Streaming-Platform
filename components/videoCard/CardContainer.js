import VideoCard from "./VideoCard";

function CardContainer() {

    let cardData = [
        {
            id: 1,
            image: "/images/disney.webp",
            video: "/videos/disney.mp4"
        },
        {
            id: 2,
            image: "/images/pixar.webp",
            video: "/videos/pixar.mp4"
        },
        {
            id: 3,
            image: "/images/marvel.webp",
            video: "/videos/marvel.mp4"
        },
        {
            id: 4,
            image: "/images/starwars.webp",
            video: "/videos/starwars.mp4"
        },
        {
            id: 5,
            image: "/images/nationalgeographic.webp",
            video: "/videos/nationalgeographic.mp4"
        },
    ]

  return (
    <div className="flex justify-center items-center mt-8">
        {cardData.map((el) => {
            return <VideoCard image={el.image} video={el.video} />
        })
    }
    </div>
  )
}

export default CardContainer