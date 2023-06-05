import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieIdURL = "https://api.themoviedb.org/3/discover/movie?api_key=";
// const api_key = import.meta.env.VITE_API_KEY;
const API_KEY = import.meta.env.VITE_API_KEY;

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/movie/day?api_key=" + API_KEY);

export const getMoviesByGenreId = (id) => axios.get(movieIdURL + API_KEY + `&with_genres=${id}`);

export default getTrendingVideos;

console.log(import.meta.env.VITE_API_KEY);
