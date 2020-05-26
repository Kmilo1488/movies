import http from "../axios";

// Get movies DB pg
const getMovies = (url) => {
  return http.get(`/movies${url}`);
};

// Create movie DB pg
const createMovie = data => {
  return http.post("/movies", data);
};

// Search movie 
const searchMovieApi = url => {
  return http.get(`/movies/search${url}`);
};

export default {
  getMovies,
  createMovie,
  searchMovieApi
}