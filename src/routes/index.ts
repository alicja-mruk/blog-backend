import { Router } from 'express';
import postsRoutes from './posts';
const appRouter = Router();

appRouter.use('/posts', postsRoutes);

export { appRouter };
export default appRouter;
