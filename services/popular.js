import movieURL from "../utils/movieURL";
import tvURL from "../utils/tvURL";

export const getPopularMovies = async () => {
    const responseHi = await fetch(movieURL("popularity.desc", "", "", "hi", "122"));
    const responseEn = await fetch(movieURL("popularity.desc", "", "", "en", "122"));

    let popularMoviesHi = await responseHi.json();
    let popularMoviesEn = await responseEn.json();

    popularMoviesHi = popularMoviesHi.results;
    popularMoviesEn = popularMoviesEn.results;

    let popularMovies = [];
    let popularMoviesIds = [];
    
    for (let i = 0; i < 8; i++) {
        if (popularMoviesHi[i] !== undefined) {
            popularMovies.push(popularMoviesHi[i]);
            popularMoviesIds.push((popularMoviesHi[i]).id);
        }
        if (popularMoviesEn[i] !== undefined) {
            popularMovies.push(popularMoviesEn[i]);
            popularMoviesIds.push((popularMoviesEn[i]).id);
        }
    }

    return {
        popularMovies,
        popularMoviesIds
    };
}

export const getPopularShows = async () => {
    const responseHi = await fetch(tvURL("popularity.desc", "", "", "hi", "122"));
    const responseEn = await fetch(tvURL("popularity.desc", "", "", "en", "122"));

    let popularShowsHi = await responseHi.json();
    let popularShowsEn = await responseEn.json();

    popularShowsHi = popularShowsHi.results;
    popularShowsEn = popularShowsEn.results;

    let popularShows = [];
    let popularShowsIds = [];

    for (let i = 0; i < 6; i++) {
        if (popularShowsHi[i] !== undefined) {
            popularShows.push(popularShowsHi[i]);
            popularShowsIds.push((popularShowsHi[i]).id);
        }
        if (popularShowsEn[i] !== undefined) {
            popularShows.push(popularShowsEn[i]);
            popularShowsIds.push((popularShowsEn[i]).id);
        }
    }

    return {
        popularShows,
        popularShowsIds
    };
}