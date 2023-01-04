import tvURL from "../../utils/hotstarDisney/tvURL";

const getAllshows = async () => {
  const [responseshowsHi, responseshowsEn, responseshowsKo, responseshowsJa] =
    await Promise.all([
      fetch(tvURL("popularity.desc", "", "", "", "122")),
      fetch(tvURL("popularity.desc", "", "", "", "122")),
      fetch(tvURL("popularity.desc", "", "", "", "122")),
      fetch(tvURL("popularity.desc", "", "", "", "122")),
    ]);

  let [showsHi, showsEn, showsKo, showsJa] = await Promise.all([
    responseshowsHi.json(),
    responseshowsEn.json(),
    responseshowsKo.json(),
    responseshowsJa.json(),
  ]);

  return {
    showsHi,
    showsEn,
    showsKo,
    showsJa,
  };
};

export default getAllshows;
