import express from 'express';

import { getSortOptions } from '../controllers/sort-options.controller';

const router: express.Router = express.Router();

router.route('/').get(getSortOptions);

export default router;