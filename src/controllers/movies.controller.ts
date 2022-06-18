import { Request, Response } from 'express';
import * as movies from '../movies.json';
import * as movie from '../movie.json';


const getMovies = async (_req: Request, res: Response): Promise<TmdbMovies | any> =>  {
    try {
        res.json(movies);
    } catch (error) {
        throw new Error(`${error}`);
    }
    
};

const getMovie = async (_req: Request, res: Response): Promise<void> => {
    try {
        res.json(movie);
    } catch (error) {
        throw new Error(`${error}`);
    }
}

export { getMovies, getMovie };
