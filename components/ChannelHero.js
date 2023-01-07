function ChannelHero({ id }) {
  return (
    <div>
      <video
        playsInline={true}
        autoPlay={true}
        preload="auto"
        className="rounded-lg"
      >
        <source
          type="video/mp4"
          src={
            id === "disney"
              ? "/videos/disney-hero.mp4"
              : id === "pixar"
              ? "/videos/pixar-hero.mp4"
              : id === "marvel"
              ? "/videos/marvel-hero.mp4"
              : id === "starwars"
              ? "/videos/starwars-hero.mp4"
              : id === "nationalgeographic"
              ? "/videos/natgeo-hero.mp4"
              : ""
          }
        />
      </video>
    </div>
  );
}

export default ChannelHero;
