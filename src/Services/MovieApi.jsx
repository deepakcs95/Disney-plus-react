import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
// const api_key = import.meta.env.VITE_API_KEY;
const API_KEY = "60b2668f2e6b88eed19d57c4dbfed9f6";

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/movie/day?api_key=" + API_KEY);

export default getTrendingVideos;
