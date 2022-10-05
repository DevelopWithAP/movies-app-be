import express, { Router } from 'express';
import { signUp } from '../controllers/user.controller';
import { userRules } from '../validators/user.validator';
import { validate } from '../commons';

const router: Router = express.Router();

router.route('/sign-up').post(validate(userRules), signUp);

export default router;