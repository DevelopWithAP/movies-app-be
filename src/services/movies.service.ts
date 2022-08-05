import axios from "axios";
import { movieConverter, convertToMovieDetails } from '../converters/movie.converter';

const API_KEY: string = process.env.API_KEY as string;

type MovieDetailsCache = {
  [movieId: number]: MovieDetails;
};

type MoviesCache = {
  [page: number]: Movie[];
  totalPages?: number;
};

const movieDetailsCache: MovieDetailsCache = {};
const moviesCache: MoviesCache = {};

export const getMovies = async (page: number): Promise<Movies> => {
  const GET_MOVIES_API_ENDPOINT: string = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&vote_count.gte=1000&api_key=${API_KEY}`;

  if (!moviesCache[page]) {
    const { data } = await axios.get<TmdbMovies>(GET_MOVIES_API_ENDPOINT);

    moviesCache[page] = [];
    moviesCache.totalPages = data.total_pages;
 
    let moviesArray: Movie[] = data?.results.map(movieConverter);
    for (let movie of moviesArray) {
      moviesCache[page].push(movie);
    }

  }
  return {
    page,
    totalPages: moviesCache.totalPages || 0,
    movies: moviesCache[page]
  };

};

export const getMovie = async (movieId: number): Promise<MovieDetails> => {
  const GET_MOVIE_API_ENDPOINT: string = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  if(movieDetailsCache[movieId]) {
    return movieDetailsCache[movieId];
  } 
  const { data } = await axios.get<TmdbMovieDetails>(GET_MOVIE_API_ENDPOINT);

  movieDetailsCache[movieId] = convertToMovieDetails(data);
  return movieDetailsCache[movieId];
};
