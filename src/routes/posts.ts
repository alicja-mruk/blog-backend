import { Response, Router } from 'express';
import handler from 'express-async-handler';
import { middleware } from 'src/middleware';
import { PostService } from 'src/services/postService';
import { RequestCreatePost, RequestPost } from 'src/types/post';
import Container from 'typedi';
import Post from '../models/post';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get(
  '/:id',
  middleware.checkObjectId,
  handler(async (req: RequestPost, res: Response) => {
    const postService = Container.get(PostService);
    const post = await postService.getPost(req.params.id);
    res.json(post);
  }),
);

router.post(
  '/',
  middleware.checkPostRequiredFields,
  handler(async (req: RequestCreatePost, res: Response) => {
    const { author, title, body } = req.body.post;
    const postService = Container.get(PostService);
    const post = await postService.addPost(author, title, body);
    res.json(post);
  }),
);

router.delete(
  '/:id',
  middleware.checkObjectId,
  handler(async (req: RequestPost, res: Response) => {
    // post.req always get from middleware
    const postService = Container.get(PostService);
    const post = await postService.deletePost(req.params.id);
    res.json(post);
  }),
);

export default router;
