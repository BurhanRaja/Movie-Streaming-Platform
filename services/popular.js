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
    
    for (let i = 0; i < 8; i++) {
        popularMovies.push(popularMoviesHi[i]);
        popularMovies.push(popularMoviesEn[i]);
    }

    return {
        popularMovies
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
    
    for (let i = 0; i < 6; i++) {
        popularShows.push(popularShowsHi[i]);
        popularShows.push(popularShowsEn[i]);
    }

    return {
        popularShows
    };
}