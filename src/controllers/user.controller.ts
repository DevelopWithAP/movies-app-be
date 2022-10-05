import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

export const signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.json(await userService.signUp(req.body));
    } catch (error) {
        next(error);
    }
};