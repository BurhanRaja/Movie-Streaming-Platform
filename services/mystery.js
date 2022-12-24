import movieURL from "../utils/movieURL";
import tvURL from "../utils/tvURL";

const getAllMysteries = async () => {
    let [responseMovieHi, responseMovieEn, responseShowsHi, responseShowsEn] = await Promise.all([
        fetch(movieURL("popularity.desc", "9648", "", "hi", "122")),
        fetch(movieURL("popularity.desc", "9648", "", "en", "122")),
        fetch(tvURL("popularity.desc", "9648", "", "hi", "122")),
        fetch(tvURL("popularity.desc", "9648", "", "en", "122"))
    ]);

    let [mysteryMovieHi, mysteryMovieEn, mysteryShowsHi, mysteryShowsEn] = await Promise.all([
        responseMovieHi.json(),
        responseMovieEn.json(),
        responseShowsHi.json(),
        responseShowsEn.json()
    ]);

    mysteryMovieHi = mysteryMovieHi.results;
    mysteryMovieEn = mysteryMovieEn.results;
    mysteryShowsHi = mysteryShowsHi.results;
    mysteryShowsEn = mysteryShowsEn.results;

    let allMystery = [];

    for (let i = 0; i < 8; i++) {
        if (mysteryMovieHi[i] !== undefined) {
            allMystery.push(mysteryMovieHi[i]);
        }
        if (mysteryMovieEn[i] !== undefined) {
            allMystery.push(mysteryMovieEn[i]);
        }
        if (mysteryShowsHi[i] !== undefined) {
            allMystery.push(mysteryShowsHi[i]);
        }
        if (mysteryShowsEn[i] !== undefined) {
            allMystery.push(mysteryShowsEn[i]);
        }
    }

    return {
        allMystery
    }

}

export default getAllMysteries;