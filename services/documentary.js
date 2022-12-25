import movieURL from "../utils/movieURL";
import tvURL from "../utils/tvURL";

export const getDocumentaryMovies = async () => {
    const responseHi = await fetch(movieURL("release_date.desc", "99", "", "hi", "122"));
    const responseEn = await fetch(movieURL("release_date.desc", "99", "", "en", "122"));

    let documentaryMoviesHi = await responseHi.json();
    let documentaryMoviesEn = await responseEn.json();

    documentaryMoviesHi = documentaryMoviesHi.results;
    documentaryMoviesEn = documentaryMoviesEn.results;

    let allDocumentaryMovies = [];

    for (let i = 0; i < 8; i++) {
        if (documentaryMoviesHi[i] !== undefined) {
            allDocumentaryMovies.push(documentaryMoviesHi[i]);
        }
        if (documentaryMoviesEn[i] !== undefined) {
            allDocumentaryMovies.push(documentaryMoviesEn[i]);
        }
    }

    return {
        allDocumentaryMovies
    }
}

export const getdocumentaryShows = async () => {
    const responseHi = await fetch(tvURL("release_date.desc", "99", "", "hi", "122"));
    const responseEn = await fetch(tvURL("release_date.desc", "99", "", "en", "122"));

    let documentaryShowsHi = await responseHi.json();
    let documentaryShowsEn = await responseEn.json();

    documentaryShowsHi = documentaryShowsHi.results;
    documentaryShowsEn = documentaryShowsEn.results;

    let allDocumentaryShows = [];

    for (let i = 0; i < 8; i++) {
        if (documentaryShowsHi[i] !== undefined) {
            allDocumentaryShows.push(documentaryShowsHi[i]);
        }
        if (documentaryShowsEn[i] !== undefined) {
            allDocumentaryShows.push(documentaryShowsEn[i]);
        }
    }

    return {
        allDocumentaryShows
    }
}