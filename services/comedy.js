import movieURL from "../utils/movieURL";
import tvURL from "../utils/tvURL";

export const getComedyMovies = async () => {
    const responseHi = await fetch(movieURL("release_date.desc", "35", "", "hi", "122"));
    const responseEn = await fetch(movieURL("release_date.desc", "35", "", "en", "122"));

    let comedyMoviesHi = await responseHi.json();
    let comedyMoviesEn = await responseEn.json();

    comedyMoviesHi = comedyMoviesHi.results;
    comedyMoviesEn = comedyMoviesEn.results;

    let allComedyMovies = [];

    for (let i = 0; i < 8; i++) {
        if (comedyMoviesHi[i] !== undefined) {
            allComedyMovies.push(comedyMoviesHi[i]);
        }
        if (comedyMoviesEn[i] !== undefined) {
            allComedyMovies.push(comedyMoviesEn[i]);
        }
    }

    return {
        allComedyMovies
    }
}

export const getComedyShows = async () => {
    const responseHi = await fetch(tvURL("release_date.desc", "35", "", "hi", "122"));
    const responseEn = await fetch(tvURL("release_date.desc", "35", "", "en", "122"));

    let comedyShowsHi = await responseHi.json();
    let comedyShowsEn = await responseEn.json();

    comedyShowsHi = comedyShowsHi.results;
    comedyShowsEn = comedyShowsEn.results;

    let allComedyShows = [];

    for (let i = 0; i < 8; i++) {
        if (comedyShowsHi[i] !== undefined) {
            allComedyShows.push(comedyShowsHi[i]);
        }
        if (comedyShowsEn[i] !== undefined) {
            allComedyShows.push(comedyShowsEn[i]);
        }
    }

    return {
        allComedyShows
    }
}