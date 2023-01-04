const movieURL = (
    sort_by,
    genre,
    with_companies,
    with_original_lang,
    with_watch_providers,
    watch_region
  ) =>
    `${process.env.NEXT_PUBLIC_URL}discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_companies=${with_companies}&watch_region=${watch_region}&with_original_language=${with_original_lang}&with_watch_providers=${with_watch_providers}&watch_region=IN&with_watch_monetization_types=flatrate`;
  
  export default movieURL;
  