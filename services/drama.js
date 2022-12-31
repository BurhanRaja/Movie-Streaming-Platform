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
    let allDramaMoviesIds = [];
    for (let i = 0; i < 8; i++) {
        if (dramaMoviesHi[i] !== undefined) {
            allDramaMovies.push(dramaMoviesHi[i]);
            allDramaMoviesIds.push((dramaMoviesHi[i]).id);
        }
        if (dramaMoviesEn[i] !== undefined) {
            allDramaMovies.push(dramaMoviesEn[i]);
            allDramaMoviesIds.push((dramaMoviesEn[i]).id);
        }
    }

    return {
        allDramaMovies,
        allDramaMoviesIds
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
    let allDramaShowsIds = [];
    for (let i = 0; i < 8; i++) {
        if (dramaShowsHi[i] !== undefined) {
            allDramaShows.push(dramaShowsHi[i]);
            allDramaShowsIds.push((dramaShowsHi[i]).id);
        }
        if (dramaShowsEn[i] !== undefined) {
            allDramaShows.push(dramaShowsEn[i]);
            allDramaShowsIds.push((dramaShowsEn[i]).id);
        }
    }

    return {
        allDramaShows,
        allDramaShowsIds
    }
}