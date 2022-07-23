import { Request, Response, NextFunction } from 'express';
import { moviesService } from '../services/MoviesService';

export const getMovies = async (_req: Request, res: Response, next: NextFunction): Promise<void> =>  {
    try {
        res.json(await moviesService());
    } catch (error) {
        next(error);
    } 
};
