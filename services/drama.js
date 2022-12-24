import movieURL from "../utils/movieURL"
import tvURL from "../utils/tvURL";

export const getDramaMovies = async () => {
    const responseHi = await fetch(movieURL("release_date.desc", "18", "", "hi", "122"));
    const responseEn = await fetch(movieURL("release_date.desc", "18", "", "en", "122"));

    let dramaMoviesHi = await responseHi.json();
    let dramaMoviesEn = await responseEn.json();

    dramaMoviesHi = dramaMoviesHi.results;
    dramaMoviesEn = dramaMoviesEn.results;

    let allDramaMovies = [];

    for (let i = 0; i < 8; i++) {
        if (dramaMoviesHi[i] !== undefined) {
            allDramaMovies.push(dramaMoviesHi[i]);
        }
        if (dramaMoviesEn[i] !== undefined) {
            allDramaMovies.push(dramaMoviesEn[i]);
        }
    }

    return {
        allDramaMovies
    }
}

export const getDramaShows = async () => {
    const responseHi = await fetch(tvURL("release_date.desc", "18", "", "hi", "122"));
    const responseEn = await fetch(tvURL("release_date.desc", "18", "", "en", "122"));

    let dramaShowsHi = await responseHi.json();
    let dramaShowsEn = await responseEn.json();

    dramaShowsHi = dramaShowsHi.results;
    dramaShowsEn = dramaShowsEn.results;

    let allDramaShows = [];

    for (let i = 0; i < 8; i++) {
        if (dramaShowsHi[i] !== undefined) {
            allDramaShows.push(dramaShowsHi[i]);
        }
        if (dramaShowsEn[i] !== undefined) {
            allDramaShows.push(dramaShowsEn[i]);
        }
    }

    return {
        allDramaShows
    }
}