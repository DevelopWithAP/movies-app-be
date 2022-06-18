import { Request, Response } from 'express';
import * as data from '../movies.json';
import * as movie from '../movie.json';


const getMovies = (_req: Request, res: Response): TmdbMovies | any =>  {
    try {
        res.json(data);
    } catch (error) {
        throw new Error(`${error}`);
    }
    
};

const getMovie = (_req: Request, res: Response): void => {
    try {
        res.json(movie);
    } catch (error) {
        throw new Error(`${error}`);
    }
}

export { getMovies, getMovie };
