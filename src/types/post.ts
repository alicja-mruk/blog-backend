import { Request } from 'express';
import { IAuthor } from './author';

export interface IPost {
  author: IAuthor;
  title: string;
  body: string;
}

export interface IPostInput {
  id: string;
  author: IAuthor
  title: string;
  body: string;
}

export interface RequestPost extends Request {
  post: IPostInput
}

export interface RequestCreatePost extends Request {
  body: {
    post: IPostInput;
  };
}

export interface IPostService {
  getPost: (id: string) => Promise<IPost>;
}
