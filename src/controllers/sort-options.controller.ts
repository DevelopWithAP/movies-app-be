import { Request, Response } from 'express';
import * as sortOptionService from '../services/sort-options.service';

export const getSortOptions = (_req: Request, res: Response) => {
    res.json(sortOptionService.getSortOptions());
};