import { Request, Response, NextFunction } from 'express';
import * as moviesService from '../services/movies.service';

export const getMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let page: number = Number(req.query.page) || 1;
    res.json(await moviesService.getMovies(page));
  } catch (error) {
    next(error);
  }
};

export const getMovie = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.json(await moviesService.getMovie(parseInt(req.params.movieId)));
  } catch (error) {
    next(error);
  }
};
