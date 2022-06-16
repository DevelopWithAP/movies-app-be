import { Request, Response } from 'express';
import * as data from '../movies.json';
import { TmdbMovie } from 'types/domain';


const getMovies = (_req: Request, res: Response): TmdbMovie[] | any =>  {
    try {
        res.json(data.movies);
    } catch (error) {
        throw new Error(`${error}`);
    }
    
};

export { getMovies };