import { Router } from 'express';
import Post from '../models/post';

const routes = Router();

routes.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default routes;