import { Request, Response, NextFunction } from 'express';
import * as MoviesService from '../services/movies.service';

export const getMovies = async (_req: Request, res: Response, next: NextFunction): Promise<void> =>  {
    try {
        res.json(await MoviesService.getMovies());
    } catch (error) {
        next(error);
    } 
};
