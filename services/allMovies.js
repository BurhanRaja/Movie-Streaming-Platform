import movieURL from "../../utils/movieURL"

const getAllMovies = async () => {
    const [responseMovieHi, responseMovieEn, responseMovieKo, responseMovieJa] = await Promise.all([
        fetch(movieURL("popularity.desc", "", "", "hi", "122")),
        fetch(movieURL("popularity.desc", "", "", "en", "122")),
        fetch(movieURL("popularity.desc", "", "", "ko", "122")),
        fetch(movieURL("popularity.desc", "", "", "ja", "122")),
    ]);

    let [moviesHi, moviesEn, moviesKo, moviesJa] = await Promise.all([
        responseMovieHi.json(),
        responseMovieEn.json(),
        responseMovieKo.json(),
        responseMovieJa.json()
    ]);

    return {
        moviesHi,
        moviesEn,
        moviesKo,
        moviesJa
    };
}

export default getAllMovies;