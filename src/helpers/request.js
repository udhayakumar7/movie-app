const API_KEY = '8f1f147ace26bcf87ce6f133e897214d';

export default{

    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComdeyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchDiscover:`/discover/movie?api_key=${API_KEY}&with_origin_country=IN`,
    fetchMore:`/discover/movie?api_key=${API_KEY}&with_origin_country=IN&language=ta`,
}