export const getAllStarwarsMovies = async () => {
  let response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/collection/10?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  response = await response.json();
  response = response.parts;

  return response;
};

export const getAllStarwarsShows = async () => {
  const [resOne, resTwo, resThree, resFour, resFive, resSix, resSeven] =
    await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_URL}tv/83867?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_URL}tv/105971?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_URL}tv/82856?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_URL}tv/115036?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_URL}tv/4194?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_URL}tv/203085?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_URL}tv/92830?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ),
    ]);
  let [sOne, sTwo, sThree, sFour, sFive, sSix, sSeven] = await Promise.all([
    resOne.json(),
    resTwo.json(),
    resThree.json(),
    resFour.json(),
    resFive.json(),
    resSix.json(),
    resSeven.json(),
  ]);

  let allShows = [sOne, sTwo, sThree, sFour, sFive, sSix, sSeven];

  return allShows;
};

export const getAllStarwarsLego = async () => {
  let response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/collection/302331?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  response = await response.json();
  response = response.parts;

  return response;
};
