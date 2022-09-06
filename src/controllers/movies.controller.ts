import { Request, Response, NextFunction } from 'express';
import * as moviesService from '../services/movies.service';
import { validate } from '../validators/title.validator';
import { validateGenres } from '../validators/genre.validator';

export const getMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const page: number = Number(req.query.page) || 1;
    const title: string = req.query.title as string;
    const genres: string = req.query.genres as string;
    const sort: string = req.query.sort as string;

    if (title && validate(title)) {
      res.json(await moviesService.searchMoviesByTitle(title, page));
    }
    else if (genres && validateGenres(genres)) {
      res.json(await moviesService.getMovies(page, genres));
    }
    else {
      res.json(await moviesService.getMovies(page, sort));
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


