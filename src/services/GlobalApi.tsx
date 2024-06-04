import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "6877f35d00a50a4506df674b670130a1";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;
//https://api.themoviedb.org/3/trending/all/day?language=en-US

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

const getTrendingVideos = () =>
  axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

export { getMovieByGenreId, getTrendingVideos };
