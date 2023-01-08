import movieURL from "../../utils/disney/movieURL";

export const getPixarAll = async () => {

    "https://api.themoviedb.org/3/discover/movie?api_key=2f9e10868a6746a6142393abb6da3841&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=3&watch_region=IN&with_watch_monetization_types=flatrate"

    let response = await fetch(movieURL("popularity.desc", "", "3", "", "", "IN"));

    response = await response.json();
    response = response.results;

    return response;

}

export const getPixarToyStory = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_URL}/collection/10194?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);

    response = await response.json();
    response = response.parts;

    return response;
}


export const getPixarCars = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_URL}/collection/87118?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);

    response = await response.json();
    response = response.parts;

    return response;
}