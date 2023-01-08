import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

export const getNatGeoMovies = async () => {
    let response = await fetch(movieURL("popularity.desc", "", "7521", "", "", "IN"));
    response = await response.json();
    response = response.results;
  
    return response;
}

export const getNatGeoShows = async () => {
    let response = await fetch(tvURL("popularity.desc", "", "7521", "", "", "IN"));
    response = await response.json();
    response = response.results;
  
    return response;
}

export const getNatGeoBrain = async () => {
    const [resOne, resTwo, resThree] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_URL}tv/115640?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}tv/54315?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}tv/125985?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
    ]);

    let [sOne, sTwo, sThree] = await Promise.all([
        resOne.json(),
        resTwo.json(),
        resThree.json()
    ]);

    return [sOne, sTwo, sThree];
}

export const getNatGeoNature = async () => {

    const [resOne, resTwo] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_URL}discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_companies=7521&with_keywords=221355&with_watch_monetization_types=flatrate`),
        fetch(`${process.env.NEXT_PUBLIC_URL}discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_companies=7521&with_keywords=18330&with_watch_monetization_types=flatrate`),
    ]);

    let [sOne, sTwo] = await Promise.all([
        resOne.json(),
        resTwo.json()
    ]);

    return [...sOne.results, ...sTwo.results];
}