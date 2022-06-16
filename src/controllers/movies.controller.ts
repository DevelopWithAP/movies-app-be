import { Request, Response } from 'express';
import * as data from '../movies.json';
import { TmdbMovies } from 'types/domain';


const getMovies = (_req: Request, res: Response): TmdbMovies | any =>  {
    try {
        res.json(data);
    } catch (error) {
        throw new Error(`${error}`);
    }
    
};

export { getMovies };