import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const KEY = '6d7719b287a3b4f9def878f317f76757';

export const getTrendingMovies = async (controller) => {
  
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`, {
    signal: controller.signal,
  });

  return await response.data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
  }));
}

export const getMoviesById = async (id, controller) => {
  const response = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`, {
    signal: controller.signal,
  })

  return await response.data;
}

export const getActors = async (id, controller) => {
  const response = await axios.get(`movie/${id}/credits?api_key=${KEY}&language=en-US`, {
    signal: controller.signal,
  });

  return await response.data.cast.map((actor) => ({
    id: actor.id,
    name: actor.name,
    character: actor.character,
    profile_path: actor.profile_path,
  }));
}

export const getReview = async (id, controller) => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${KEY}&language=en-US`, {
    signal: controller.signal,
  });

  return await response.data.results.map((review) => ({
    id: review.id,
    author: review.author,
    content: review.content,
  }));
}

export const getMovieByName = async (search, controller) => {
  const response = await axios.get(`search/movie?api_key=${KEY}&language=en-US&query=${search}`, {
    signal: controller.signal,
  });

  return await response.data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
  }));
}