import { Request, Response, NextFunction } from 'express';
import * as moviesService from '../services/movies.service';
import { validate } from '../validators/title.validator';

export const getMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let page: number = Number(req.query.page) || 1;
    let title: string = req.query.title as string;

    if (title && validate(title) && page) {
      res.json(moviesService.searchMoviesByTitle(title, page));
    }
    else if (page) {
      res.json(moviesService.getMovies(page));
    }
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

