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
    let allComedyMoviesIds = [];
    for (let i = 0; i < 8; i++) {
        if (comedyMoviesHi[i] !== undefined) {
            allComedyMovies.push(comedyMoviesHi[i]);
            allComedyMoviesIds.push((comedyMoviesHi[i]).id);
        }
        if (comedyMoviesEn[i] !== undefined) {
            allComedyMovies.push(comedyMoviesEn[i]);
            allComedyMoviesIds.push((comedyMoviesEn[i]).id);
        }
    }

    return {
        allComedyMovies,
        allComedyMoviesIds
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
    let allComedyShowsIds = [];
    for (let i = 0; i < 8; i++) {
        if (comedyShowsHi[i] !== undefined) {
            allComedyShows.push(comedyShowsHi[i]);
            allComedyShowsIds.push((comedyShowsHi[i]).id);
        }
        if (comedyShowsEn[i] !== undefined) {
            allComedyShows.push(comedyShowsEn[i]);
            allComedyShowsIds.push((comedyShowsEn[i]).id);
        }
    }

    return {
        allComedyShows,
        allComedyShowsIds
    }
}