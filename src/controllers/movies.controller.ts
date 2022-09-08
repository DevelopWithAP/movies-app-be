import { Request, Response, NextFunction } from 'express';
import * as moviesService from '../services/movies.service';
import { validate } from '../validators/title.validator';
import { validateGenres } from '../validators/genre.validator';
import { validateSortOptions } from '../validators/sort-option.valiator';

export const getMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const page: number = Number(req.query.page) || 1;
    const title: string = req.query.title as string;
    const genres: string = req.query.genres as string;
    const sort: string = req.query.sort as string;

    let genreParams: string;
    if(validateGenres(genres)) {
      genreParams = genres as string;
    }
    else {
      genreParams = '';
    }

    if (title && validate(title)) {
      res.json(await moviesService.searchMoviesByTitle(title, page));
    }
    else {
      res.json(await moviesService.getMovies(page, { sorting: sort, genres: genreParams }));
      console.log(`Genres requested: ${genreParams}`);
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


