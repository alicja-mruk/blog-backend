import { NextFunction, Response } from 'express';
import { RequestCreatePost } from 'src/types/post';

export const checkPostRequiredFields = (req: RequestCreatePost, res: Response, next: NextFunction) => {
  if (!req.body.post.author || !req.body.post.title || !req.body.post.body) {
    res
      .status(400)
      .json({ error: 'Request does not contain all required fields' });
  }
  next();
};
