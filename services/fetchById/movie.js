const getMovie = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);

    const [resMovieDetail, resMovieVideo, resMovieImage, resMovieSimilar] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_URL}movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`),
        fetch(`${process.env.NEXT_PUBLIC_URL}movie/${id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`),
        fetch(`${process.env.NEXT_PUBLIC_URL}movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
    ]);

    let [movie, videos, images, similar] = await Promise.all([
        resMovieDetail.json(),
        resMovieVideo.json(),
        resMovieImage.json(),
        resMovieSimilar.json()
    ]);
    return {
        movie,
        videos,
        images,
        similar
    };
}

export default getMovie;