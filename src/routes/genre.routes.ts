import express, { Router } from 'express';
import { getGenres } from '../controllers/genre.controller';

const router: Router = express.Router();

router.route('/').get(getGenres);

export default router;