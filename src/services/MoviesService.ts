import axios from "axios";
import { movieConverter } from '../converters/movieConverter';
import { CacheService } from '../services/CacheService';

const API_KEY: string = process.env.API_KEY as string;
const GET_MOVIES_API: string = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&vote_count.gte=1000&api_key=${API_KEY}`;

export const getMovies = async (): Promise<Movies> => {

    let CachedMovies: Movie[] | undefined = [];
    let totalPagesCached: number | undefined;
    
    if(CacheService.isEmpty(CachedMovies)) {   
        const { data } = await axios.get<TmdbMovies>(GET_MOVIES_API);
        CachedMovies = CacheService.setCache(data.results.map(movieConverter));
        totalPagesCached = data.total_pages;   
    }

    return {
        page: 1,
        movies: CachedMovies,
        totalPages: totalPagesCached || 1,
    };
};
