import axios from "axios";
import { movieConverter, convertToMovieDetails } from '../converters/movie.converter';

const API_KEY: string = process.env.API_KEY as string;

const BASE_URL: string = 'https://api.themoviedb.org/3/discover/movie?';

type MovieDetailsCache = {
  [movieId: number]: MovieDetails;
};

type MoviesCache = {
  [key: string]: Movie[];
  totalPages?: number | any; 
};

const movieDetailsCache: MovieDetailsCache = {};
const moviesCache: MoviesCache = {}

export const getMovies = async (page: number, withGenres?: string): Promise<Movies> => {
  const genres = withGenres || '';

  const GET_MOVIES_API_ENDPOINT: string = `${BASE_URL}sort_by=popularity.desc&with_genres=${genres}&page=${page}&vote_count.gte=1000&api_key=${API_KEY}`;

  const { data } = await axios.get<TmdbMovies>(GET_MOVIES_API_ENDPOINT);

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
    totalPages: data?.total_pages || 0,
    movies: moviesCache[page],
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

export const searchMoviesByTitle = async (title: string, page: number): Promise<Movies> => {
  const SEARCH_MOVIES_API_ENDPOINT: string = `https://api.themoviedb.org/3/search/movie?query=${title}&page=${page}&api_key=${API_KEY}`;

  const { data } = await axios.get<TmdbMovies>(SEARCH_MOVIES_API_ENDPOINT);

  return {
    page: page,
    totalPages: data?.total_pages,
    movies: data.results.map(movieConverter),
  };
};

export const filterMoviesByGenre = async (page: number, withGenres?: string): Promise<Movies> => {
  const genresEndpoint = `${BASE_URL}with_genres=${withGenres || ''}&page=${page}&vote_count.gte=1000&api_key=${API_KEY}`;

  const { data } = await axios.get<TmdbMovies>(genresEndpoint);

  return {
    page,
    totalPages: data.total_pages,
    movies: data?.results.map(movieConverter)
  };
}
