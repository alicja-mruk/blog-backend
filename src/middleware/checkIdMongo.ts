import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export const checkObjectId =
  (id: string) =>
    (req: Request, res: Response, next: NextFunction): void => {
      if (!mongoose.Types.ObjectId.isValid(req.params[id])) {
        res.status(400).json({ msg: 'Invalid id' });
      }
      next();
    };
