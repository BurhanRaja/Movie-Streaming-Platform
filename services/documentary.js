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
    let allDocumentaryMIds = [];

    for (let i = 0; i < 8; i++) {
        if (documentaryMoviesHi[i] !== undefined) {
            allDocumentaryMovies.push(documentaryMoviesHi[i]);
            allDocumentaryMIds.push((documentaryMoviesHi[i]).id)
        }
        if (documentaryMoviesEn[i] !== undefined) {
            allDocumentaryMovies.push(documentaryMoviesEn[i]);
            allDocumentaryMIds.push((documentaryMoviesEn[i]).id)
        }
    }

    return {
        allDocumentaryMovies,
        allDocumentaryMIds
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
    let allDocumentarySIds = [];

    for (let i = 0; i < 8; i++) {
        if (documentaryShowsHi[i] !== undefined) {
            allDocumentaryShows.push(documentaryShowsHi[i]);
            allDocumentarySIds.push((documentaryShowsHi[i]).id)
        }
        if (documentaryShowsEn[i] !== undefined) {
            allDocumentaryShows.push(documentaryShowsEn[i]);
            allDocumentarySIds.push((documentaryShowsEn[i]).id)
        }
    }

    return {
        allDocumentaryShows,
        allDocumentarySIds
    }
}