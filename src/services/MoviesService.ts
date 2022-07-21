import axios from "axios";
import { movieConverter } from '../converters/movieConverter';

const API_KEY: string = process.env["API_KEY"] as string;
const API_ENDPOINT: string = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&vote_count.gte=1000&api_key=${API_KEY}`;

export const getMovies = async (): Promise<Movies> => {
    const { data } = await axios.get<TmdbMovies>(API_ENDPOINT);

    const movies: Movie[] = data.results.map(movieConverter);
        
    return {
        page: 1,
        totalPages: data.total_pages,
        movies: movies
    };
};