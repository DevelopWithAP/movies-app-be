import express from 'express';
import { getMovies, getMovie } from '../controllers/movies.controller';

const router: express.Router = express.Router();

router.route('/').get(getMovies);
router.route('/:movieId').get(getMovie);

export default router;
