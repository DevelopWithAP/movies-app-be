import { Request, Response, NextFunction } from 'express';
import * as genreService  from '../services/genre.service';

const getGenres = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.json(await genreService.fetchGenres());
    } catch (error) {
        next(error);
    }
};

export { getGenres };