import axios from "axios";
import { movieConverter } from '../converters/movie.converter';


const API_KEY: string = process.env.API_KEY as string;
const GET_MOVIES_API: string = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&vote_count.gte=1000&api_key=${API_KEY}`;

export const getMovies = async (): Promise<Movies> => {
    let cachedMovies: Movie[] | undefined;
    let totalPagesCached: number| undefined;

    if(!cachedMovies) {
        const { data } = await axios.get<TmdbMovies>(GET_MOVIES_API);
        cachedMovies = data.results.map(movieConverter);
        totalPagesCached = data.total_pages;
    }

    return {
        movies: cachedMovies || [],
        totalPages: totalPagesCached || 1,
        page: 1
    };
};
