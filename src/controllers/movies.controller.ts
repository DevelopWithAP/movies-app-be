import { Request, Response, NextFunction } from 'express';
import * as MoviesService from '../services/movies.service';

const getMovies = async (_req: Request, res: Response, next: NextFunction): Promise<TmdbMovies | any> =>  {
    try {
        let movies = await MoviesService.getMovies();
        res.json(movies);
    } catch (error) {
        next(error);
    } 
};

export { getMovies };
