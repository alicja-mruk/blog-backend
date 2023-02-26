import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';


export const checkObjectId = (req: Request, res: Response, next: NextFunction) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ error: 'Invalid id or object with given id does not exist' });
  }
  next();
};
