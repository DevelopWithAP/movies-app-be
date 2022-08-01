import axios from 'axios';
import { movieConverter, convertToMovieDetails } from '../converters/movie.converter';

const API_KEY: string = process.env.API_KEY as string;
const GET_MOVIES_API_ENDPOINT: string = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&vote_count.gte=1000&api_key=${API_KEY}`;

type MovieDetailsCache = {
  [movieId: number]: MovieDetails;
};

const movieDetailsCache: MovieDetailsCache = {};

export const getMovies = async (): Promise<Movies> => {
  let cachedMovies: Movie[] | undefined;
  let totalPagesCached: number | undefined;

  if (!cachedMovies) {
    const { data } = await axios.get<TmdbMovies>(GET_MOVIES_API_ENDPOINT);
    cachedMovies = data.results.map(movieConverter);
    totalPagesCached = data.total_pages;
  }

  return {
    movies: cachedMovies || [],
    totalPages: totalPagesCached || 1,
    page: 1,
  };
};

export const getMovie = async (movieId: number): Promise<MovieDetails> => {

  const GET_MOVIE_API_ENDPOINT: string = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  if (movieDetailsCache[movieId]) {
    return movieDetailsCache[movieId];
  }

  const { data } = await axios.get<TmdbMovieDetails>(GET_MOVIE_API_ENDPOINT);
  
  movieDetailsCache[movieId] = convertToMovieDetails(data);
  return movieDetailsCache[movieId];
};
