import movieURL from "../utils/movieURL";
import tvURL from "../utils/tvURL";

export const getLatestMovies = async () => {

    const responseHi = await fetch(movieURL("release_date.desc", "", "", "hi", "122"));
    const responseEn = await fetch(movieURL("release_date.desc", "", "", "en", "122"));

    let latestMoviesHi = await responseHi.json();
    let latestMoviesEn = await responseEn.json();

    latestMoviesHi = latestMoviesHi.results;
    latestMoviesEn = latestMoviesEn.results;
    
    let latestMovies = [];
    let latestMovieIds = [];
    
    for (let i = 0; i < 6; i++) {
        if (latestMoviesHi[i] !== undefined) {
            latestMovies.push(latestMoviesHi[i]);
            latestMovieIds.push((latestMoviesHi[i]).id);
        }
        if (latestMoviesEn[i] !== undefined) {
            latestMovies.push(latestMoviesEn[i]);
            latestMovieIds.push((latestMoviesEn[i]).id);
        }
    }

    return {
        latestMovies,
        latestMovieIds
    };
}

export const getLatestShows = async () => {
    const responseHi = await fetch(tvURL("release_date.desc", "", "", "hi", "122"));
    const responseEn = await fetch(tvURL("release_date.desc", "", "", "en", "122"));

    let latestShowsHi = await responseHi.json();
    let latestShowsEn = await responseEn.json();

    latestShowsHi = latestShowsHi.results;
    latestShowsEn = latestShowsEn.results;

    let latestShows = [];
    let latestShowIds = [];
    
    for (let i = 0; i < 6; i++) {
        if (latestShowsHi[i] !== undefined) {
            latestShows.push(latestShowsHi[i]);
            latestShowIds.push((latestShowsHi[i]).id);
        }
        if (latestShowsEn[i] !== undefined) {
            latestShows.push(latestShowsEn[i]);
            latestShowIds.push((latestShowsEn[i]).id);
        }
    }
    
    return {
        latestShows,
        latestShowIds
    };
}