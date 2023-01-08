import movieURL from "../../utils/disney/movieURL";
import tvURL from "../../utils/disney/tvURL";

export const getMarvelMovies = async () => {
  let response = await fetch(
    movieURL("popularity.desc", "", "420", "", "", "IN")
  );
  response = await response.json();
  response = response.results;
  response = response.filter((el) => el.original_title !== "Sing 2");

  return response;
};

export const getMarvelShows = async () => {
  let response = await fetch(tvURL("popularity.desc", "", "420", "", "", "IN"));
  response = await response.json();
  response = response.results;
  response = response.filter((el) => el.original_title !== "Sing 2");

  return response;
};

export const getMarvelSpiderMan = async () => {
    const [resOne, resTwo, resThree] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_URL}/collection/556?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}/collection/125574?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}/collection/531241?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
    ]);

    let [smOne, smTwo, smThree] = await Promise.all([
        resOne.json(),
        resTwo.json(),
        resThree.json()
    ]);

    smOne = smOne.parts;
    smTwo = smTwo.parts;
    smThree = smThree.parts;

    return [...smOne, ...smTwo, ...smThree];
}

export const getMarvelIronMan = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_URL}/collection/131292?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);

    response = await response.json();
    response = response.parts;

    return response;
};

export const getMarvelDefenders = async () => {
    let [resDareDevil, resJessica, resLuke, resIronFist, resPunisher, resDefender]= await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_URL}tv/61889?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}tv/38472?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}tv/62126?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}tv/62127?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}tv/67178?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
        fetch(`${process.env.NEXT_PUBLIC_URL}tv/62285?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
    ]);

    let [sOne, sTwo, sThree, sFour, sFive, sSix] = await Promise.all([
        resDareDevil.json(),
        resJessica.json(),
        resLuke.json(),
        resIronFist.json(),
        resPunisher.json(),
        resDefender.json()
    ]);

    let allDefender = [sOne, sTwo, sThree, sFour, sFive, sSix];

    return allDefender;
}