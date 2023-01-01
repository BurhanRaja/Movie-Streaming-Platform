const getShow = async (id) => {
  const [resShowDetail, resShowVideo, resShowSimilar] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_URL}tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_URL}tv/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_URL}tv/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    ),
  ]);

  let [show, videos, similar] = await Promise.all([
    resShowDetail.json(),
    resShowVideo.json(),
    resShowSimilar.json(),
  ]);

  return {
    show,
    videos,
    similar,
  };
};

export const getSeasons = async (id, seasonNo) => {
  let response;
  let allSeasons = [];
  for (let i = 1; i <= seasonNo; i++) {
    response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}tv/${id}/season/1?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );

    response = await response.json();

    allSeasons.push(response);
  }

  return allSeasons;
};

export const getEpisode = async (showId, seasonId, episodeId) => {
  let response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}tv/${showId}/season/${seasonId}/episode/${episodeId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  response = await response.json();

  return response;
};

export default getShow;
