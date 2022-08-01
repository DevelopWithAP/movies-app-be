import { Request, Response, NextFunction } from 'express';
import * as moviesService from '../services/movies.service';

export const getMovies = async (_req: Request, res: Response, next: NextFunction): Promise<void> =>  {
    try {
        res.json(await moviesService.getMovies());
    } catch (error) {
        next(error);
    } 
};
