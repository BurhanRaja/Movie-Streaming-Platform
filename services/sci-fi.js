import movieURL from "../utils/movieURL"
import tvURL from "../utils/tvURL";

const getAllSciFi = async () => {
    const responseMovies = await fetch(movieURL("release_date.desc", "878", "", "en", "122"));
    const responseShows = await fetch(tvURL("release_date.desc", "10765", "", "en", "122"));

    let scifiMovies = await responseMovies.json();
    let scifiShows = await responseShows.json();

    scifiMovies = scifiMovies.results;
    scifiShows = scifiShows.results;

    let allSciFi= [];

    for (let i = 0; i < 8; i++) {
        if (scifiMovies[i] !== undefined) {
            allSciFi.push(scifiMovies[i]);
        }
        if (scifiShows !== undefined) {
            allSciFi.push(scifiShows[i]);
        }
    }

    return {
        allSciFi
    }
}

export default getAllSciFi;