import createError from 'http-errors';
import httpStatus from 'http-status-codes';
import mongoose from 'mongoose';
import { Entity } from 'src/types';
import { IAuthor } from 'src/types/author';
import { IPost, IPostService } from 'src/types/post';
import { Inject, Service } from 'typedi';

/* Post service */
@Service()
export class PostService implements IPostService {
  constructor(
    @Inject('postModel')
    private postModel: mongoose.Model<Entity<IPost> & mongoose.Document>,
  ) {}

  /* Get post by id */
  public async getPost(id: string): Promise<IPost> {
    try {
      const post = await this.postModel.findById(id);
      return post;
    } catch (error) {
      throw createError(
        httpStatus.NOT_FOUND,
        `Post with id ${id} doesn't exist`,
      );
    }
  }

  /* Add post */
  public async addPost(
    author: IAuthor,
    title: string,
    body: string,
  ): Promise<IPost> {
    console.log('addPost');
    try {
      const newPost: IPost = {
        author,
        title,
        body,
      };
      const post = await this.postModel.create(newPost);
      return post;
    } catch (error) {
      throw createError(httpStatus.BAD_REQUEST, error);
    }
  }

  /* Delete post */
  public async deletePost(id: string): Promise<IPost> {
    try {
      const post = await this.postModel.findByIdAndDelete(id);
      return post;
    } catch (error) {
      throw createError(
        httpStatus.NOT_FOUND,
        `Post with id ${id} doesn't exist`,
      );
    }
  }
}
