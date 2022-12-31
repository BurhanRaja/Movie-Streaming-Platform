import movieURL from "../utils/movieURL";
import tvURL from "../utils/tvURL";


export const getMysteryMovies = async () => {
    let [responseMovieHi, responseMovieEn] = await Promise.all([
        fetch(movieURL("popularity.desc", "9648", "", "hi", "122")),
        fetch(movieURL("popularity.desc", "9648", "", "en", "122")),
    ]);

    let [mysteryMovieHi, mysteryMovieEn] = await Promise.all([
        responseMovieHi.json(),
        responseMovieEn.json(),
    ]);

    mysteryMovieHi = mysteryMovieHi.results;
    mysteryMovieEn = mysteryMovieEn.results;

    let allMysteryMovies = [];
    let allMysteryMoviesIds = [];

    for (let i = 0; i < 8; i++) {
        if (mysteryMovieHi[i] !== undefined) {
            allMysteryMovies.push(mysteryMovieHi[i]);
            allMysteryMoviesIds.push((mysteryMovieHi[i]).id)
        }
        if (mysteryMovieEn[i] !== undefined) {
            allMysteryMovies.push(mysteryMovieEn[i]);
            allMysteryMoviesIds.push((mysteryMovieEn[i]).id)
        }
    }

    return {
        allMysteryMovies,
        allMysteryMoviesIds
    }
}

export const getMysteryShows = async () => {
    let [responseShowsHi, responseShowsEn] = await Promise.all([
        fetch(tvURL("popularity.desc", "9648", "", "hi", "122")),
        fetch(tvURL("popularity.desc", "9648", "", "en", "122"))
    ]);

    let [mysteryShowsHi, mysteryShowsEn] = await Promise.all([
        responseShowsHi.json(),
        responseShowsEn.json()
    ]);

    mysteryShowsHi = mysteryShowsHi.results;
    mysteryShowsEn = mysteryShowsEn.results;

    let allMysteryShows = [];
    let allMysteryShowsIds = [];

    for (let i = 0; i < 8; i++) {
        if (mysteryShowsHi[i] !== undefined) {
            allMysteryShows.push(mysteryShowsHi[i]);
            allMysteryShowsIds.push((mysteryShowsHi[i]).id);
        }
        if (mysteryShowsEn[i] !== undefined) {
            allMysteryShows.push(mysteryShowsEn[i]);
            allMysteryShowsIds.push((mysteryShowsEn[i]).id);
        }
    }

    return {
        allMysteryShows,
        allMysteryShowsIds
    }

}